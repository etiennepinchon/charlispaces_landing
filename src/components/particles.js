const texture = new THREE.TextureLoader().load('/assets/textures/ghostParticle.png');
let mainSceneObject = null;

var ww = window.innerWidth;
var wh = window.innerHeight;

var isMobile = ww < 500;

class Particle {

  constructor(scene, burst, time) {
    var radius = this.radius = Math.random()*0.1 + 0.09;

    this.color = new THREE.Color("hsl("+(Math.random()*50+180)+",100%,75%)");

    var mat = new THREE.MeshBasicMaterial({
      color: this.color,
      transparent: true,
      map: texture,
      side: THREE.DoubleSide,
      flatShading: true,
      transparent: true,
      depthTest: false
    });
    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
    this.mesh.scale.set(radius*8, radius, radius);
    this.percent = Math.random();
    this.speed = Math.random()*0.003 + 0.01;
    this.setRotation();
    scene.add(this.mesh);
  }

  setRotation() {
    // Get random angle
    let angle = Math.random()*360;

    // Align particle to circle
    let displacement = new THREE.Vector2(Math.sin(angle), Math.cos(angle));
    this.mesh.position.set(Math.sin(angle), Math.cos(angle),-1.5-Math.random()*0.1);
    this.mesh.rotation.z = 80-angle;
  }

  update() {
    this.percent += this.speed;
    if (this.percent > 1) {
      this.percent = 0;
      this.setRotation();
    }

    this.mesh.scale.y = this.radius+(this.radius*this.percent);
    if (this.percent < 0.5) {
      this.mesh.material.opacity = (this.percent*2)*.28;
    }
    else {
      this.mesh.material.opacity = (1-(this.percent-0.5)*2)*.28;
    }
  }
}


AFRAME.registerComponent('ghostparticles', {
  schema: {},

  init() {
    this.particles = [];
    this.el.sceneEl.addEventListener('loaded', ()=>{
      this.sceneEl = this.el.sceneEl;
      this.scene = this.el.sceneEl.object3D;
      setTimeout(()=>this.setUp(), 0);
    });
  },

  tick(t) {
    if (!this.el.parentNode.object3D.visible) return;
    for (var i = 0; i < this.particles.length; i++){
       this.particles[i].update(this);
    }
  },

  setUp() {
    this.particles = [];
    for(var i = 0; i < 70; i++){
      this.particles.push(new Particle( this.el.object3D ));
    }
  }

});
