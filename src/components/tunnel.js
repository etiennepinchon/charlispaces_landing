import CameraBlink from './blink';

var ww = window.innerWidth;
var wh = window.innerHeight;

let rendererBuffer, bufferTexture, bufferCamera, bufferScene;

AFRAME.registerComponent('tunnel', {
  schema: {},
  init() {
    this.shouldRender = true;
    this.shouldRun = false;
    this.startT;

    this.el.sceneEl.addEventListener('loaded', ()=>{
      this.sceneEl = this.el.sceneEl;
      this.scene = this.el.sceneEl.object3D;
      setTimeout(()=>this.setUp(), 0);
    });
  },

  tick(t) {
    if (!this.startT) this.startT = t;
    else t = t-this.startT+4000;
    if (!this.tubeGeometry || !this.shouldRun) {
      if (this.texturePlane) this.texturePlane.visible = false;
      return;
    }
    else if (this.texturePlane) this.texturePlane.visible = true;

    this.updateMaterialOffset();
    this.updateCurve();

    let sin = (Math.sin(t/1000)+1) / 2.0;
    this.ratioX = sin;
    this.ratioY = 1-sin;

    this.renderToTexture();
  },

  remove() {
    this.shouldRun = false;
    this.el.object3D.remove(this.tubeMesh);
    this.tubeMaterial.dispose();
    this.tubeGeometry.dispose();
    this.tubeGeometry = this.tubeMaterial = this.tubeMesh = undefined;
  },

  setUp() {
    this.speed = 8;

    this.mouse = {
      position: new THREE.Vector2(ww * 0.5, wh * 0.5),
      ratio: new THREE.Vector2(0, 0),
      target: new THREE.Vector2(ww * 0.5, wh * 0.5)
    };

    this.ratioX = 0;
    this.ratioY = 1;

    var loader = new THREE.TextureLoader();
    loader.crossOrigin = "Anonymous";
    loader.load("/assets/textures/galaxyTexture.jpg", this.createMesh.bind(this));

    this.initAnimation();

    let scene = this.sceneEl.object3D,
        renderer = this.sceneEl.renderer;

    renderer.setClearColor(0x003EFF);
    bufferScene = new THREE.Scene();
    bufferScene.fog = new THREE.Fog(0x003EFF, 1, 100);

    bufferCamera = new THREE.PerspectiveCamera( 140, ww / wh, .1, 1000 );
    bufferCamera.lookAt( new THREE.Vector3( 0, 0, -1 ) );
    bufferCamera.position.y = 1;
    bufferCamera.position.z = -8;

    // Create texture
    let dpr = window.devicePixelRatio, resolution = 256*dpr;
    if (!AFRAME.utils.device.isMobile()) {
      resolution = 256*dpr*2;
    }

    bufferTexture = new THREE.WebGLRenderTarget( resolution, resolution*2, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter});

    var repeatX, repeatY;
    bufferTexture.texture.wrapS = THREE.ClampToEdgeWrapping;
    bufferTexture.texture.wrapT = THREE.RepeatWrapping;
    repeatX = 2 / 4;
    repeatY = 1;
    bufferTexture.texture.repeat.set(repeatX, repeatY);
    bufferTexture.texture.offset.x = (repeatX - 1) / 2 * -1;

    // Texture plane
    let planeGeometry = new THREE.PlaneGeometry( 2, 4 );
    let planeMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, map: bufferTexture.texture } );
    let plane = this.texturePlane = new THREE.Mesh( planeGeometry, planeMaterial );
    plane.position.set(0,1.1,-4.01);
    plane.visible = false;
    document.querySelector('#mainScene').object3D.add( plane );

    rendererBuffer = new THREE.WebGLRenderer( { antialias: false } );
    rendererBuffer.setClearColor(0x000000)
    rendererBuffer.setPixelRatio( window.devicePixelRatio );
    rendererBuffer.setSize( resolution, resolution );
    rendererBuffer.domElement.style.zIndex = 1000;
    document.body.appendChild(rendererBuffer.domElement);
  },


  createMesh(texture) {
    var points = [];
    var i = 0;
    var geometry = new THREE.Geometry();

    //if (this.tubeMesh) this.scene.remove(this.tubeMesh);

    for (i = 0; i < 10; i += 1) {
      points.push(new THREE.Vector3(0, 0, 3 * (i / 4)));
    }
    points[4].y = -0.06;

    this.curve = new THREE.CatmullRomCurve3(points);
    this.curve.type = "catmullrom";

    geometry = new THREE.Geometry();
    geometry.vertices = this.curve.getPoints(90);
    this.splineMesh = new THREE.Line(geometry, new THREE.LineBasicMaterial());

    this.tubeMaterial = new THREE.MeshBasicMaterial({
      side: THREE.BackSide,
      map: texture,
    });
    this.tubeMaterial.map.wrapS = THREE.MirroredRepeatWrapping;
    this.tubeMaterial.map.wrapT = THREE.MirroredRepeatWrapping;
    this.tubeMaterial.map.repeat.set(
      this.tubeMaterial.repx,
      this.tubeMaterial.repy
    );

    this.tubeGeometry = new THREE.TubeGeometry(this.curve, 90, 0.04, 30, false);
    this.tubeGeometry_o = this.tubeGeometry.clone();
    this.tubeMesh = new THREE.Mesh(this.tubeGeometry, this.tubeMaterial);

    this.tubeMesh.scale.set(300, 300, 300);
    this.tubeMesh.position.set(65, 8, 690);
    this.tubeMesh.rotation.set(0, -90-45, 45);

    bufferScene.add(this.tubeMesh);

    document.querySelector('#door').addEventListener('doorOpening', ()=>{
      this.shouldRun = true;
    });

    document.querySelector('#door').addEventListener('doorOpenned', ()=>{
      bufferScene.remove(this.tubeMesh);
      this.el.object3D.add(this.tubeMesh);
      this.sceneEl.setAttribute('fog', {far: 400});
      this.shouldRender = false;

      setTimeout(()=>{

        // camera blink
        CameraBlink(()=>{
          const comingSoonEl = document.querySelector('#comingSoon');
          comingSoonEl.setAttribute('position', '0 0 0');
          comingSoonEl.setAttribute('visible', true);

          const cameraEl = this.sceneEl.querySelector('a-camera');
          cameraEl.setAttribute('position', '0 1.6 10');
          cameraEl.children[0].setAttribute('visible', true);

          const envAnimEl = document.createElement('a-animation');
          envAnimEl.setAttribute('attribute', 'position');
          envAnimEl.setAttribute('to', '0 1.6 -10');
          envAnimEl.setAttribute('dur', '40000');
          envAnimEl.setAttribute('easing', 'linear');
          envAnimEl.setAttribute('direction', 'alternate');
          envAnimEl.setAttribute('repeat', 'indefinite');
          this.sceneEl.querySelector('a-camera').appendChild(envAnimEl);

          this.el.parentNode.removeChild(this.el);
        });

      }, 4000);
    });
  },

  initAnimation() {
    // Timeline animation
    this.textureParams = {
      offsetX: 0,
      offsetY: 0,
      repeatX: 10,
      repeatY: 4
    };
    this.cameraShake = {
      x: 0,
      y: 0
    };
    var self = this;
    var hyperSpace = new TimelineMax({ repeat: -1 });
    hyperSpace.to(this.textureParams, 4, {
      repeatX: 0.3,
      ease: Power1.easeInOut
    });
    hyperSpace.to(
      this.textureParams,
      12,
      {
        offsetX: 8,
        ease: Power2.easeInOut
      },
      0
    );
    hyperSpace.to( this.textureParams, 6,
      {
        repeatX: 10,
        ease: Power2.easeInOut
      },
      "-=5"
    );
  },

  updateMaterialOffset() {
    this.tubeMaterial.map.offset.x = this.textureParams.offsetX;
    this.tubeMaterial.map.offset.y += 0.001;
    this.tubeMaterial.map.repeat.set(
      this.textureParams.repeatX,
      this.textureParams.repeatY
    );
  },

  updateCurve() {
    var i = 0;
    var index = 0;
    var vertice_o = null;
    var vertice = null;
    for (i = 0; i < this.tubeGeometry.vertices.length; i += 1) {
      vertice_o = this.tubeGeometry_o.vertices[i];
      vertice = this.tubeGeometry.vertices[i];
      index = Math.floor(i / 30);
      vertice.x +=
        (vertice_o.x + this.splineMesh.geometry.vertices[index].x - vertice.x) /
        15;
      vertice.y +=
        (vertice_o.y + this.splineMesh.geometry.vertices[index].y - vertice.y) /
        15;
    }
    this.tubeGeometry.verticesNeedUpdate = true;

    this.curve.points[2].x = 0.6 * (1 - this.ratioX) - 0.3;
    this.curve.points[3].x = 0;
    this.curve.points[4].x = 0.6 * (1 - this.ratioX) - 0.3;

    this.curve.points[2].y = 0.6 * (1 - this.ratioY) - 0.3;
    this.curve.points[3].y = 0;
    this.curve.points[4].y = 0.6 * (1 - this.ratioY) - 0.3;

    this.splineMesh.geometry.verticesNeedUpdate = true;
    this.splineMesh.geometry.vertices = this.curve.getPoints(90);
  },

  renderToTexture() {
    if (!this.tubeGeometry || !this.shouldRun) return;

    let scene = this.sceneEl.object3D,
        renderer = this.sceneEl.renderer;

    renderer.render(bufferScene, bufferCamera, bufferTexture);
    renderer.setRenderTarget( null );
    rendererBuffer.render(bufferScene, bufferCamera, bufferTexture)
  }

});
