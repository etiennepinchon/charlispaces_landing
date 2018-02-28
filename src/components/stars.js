const texture = new THREE.TextureLoader().load('/assets/textures/star.png');

var ww = window.innerWidth;
var wh = window.innerHeight;

var isMobile = ww < 500;

AFRAME.registerComponent('stars', {
  schema: {},

  init() {
    this.particles = [];
    this.el.sceneEl.addEventListener('loaded', ()=>{
      this.el.setAttribute("position", '-2.5 -1 0');
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
    for(var i = 0; i < (isMobile?70:100); i++){
      this.particles.push(new Particle( this.el.object3D ));
    }
  }

});

class Particle {

  constructor(scene, burst, time) {
    var radius = this.radius = Math.random()*0.1 + 0.08;

    this.color = new THREE.Color("hsl("+(Math.random()*50+180)+",100%,90%)");

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
    this.mesh.scale.set(radius, radius, radius);
    this.percent = Math.random();
    this.speed = Math.random()*0.003 + 0.006;
    this.setPosition();
    scene.add(this.mesh);
  }

  setPosition() {
    this.posZ = -10+Math.random()*10;
    this.mesh.position.set(Math.random()*5, Math.random()*5, this.posZ);
  }

  update() {
    this.percent += this.speed;
    if (this.percent > 1) {
      this.percent = 0;
      this.setPosition();
    }

    if (this.percent < 0.5) {
      this.mesh.material.opacity = (this.percent*2);
    }
    else {
      this.mesh.material.opacity = (1-(this.percent-0.5)*2);
    }

    this.mesh.position.z = this.posZ+(6*this.percent);
  }
}
