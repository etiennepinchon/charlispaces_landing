const Event = require('../core/event');

AFRAME.registerComponent('app-door', {
  schema: {},

  init() {
    const model = this.el.getObject3D('mesh');
    this.cameraEl = document.querySelector('a-camera');
    this.doorOpenned = false;
    this.cameraSpeed = 0;
    this.emitted = false;
    this.clicked = false;

    if (AFRAME.utils.device.isMobile()) {
      this.el.sceneEl.canvas.addEventListener('click', this.doorMouseClick.bind(this));
    }
    else {
      this.el.addEventListener('mouseenter', this.doorMouseEnter.bind(this));
      this.el.addEventListener('mouseleave', this.doorMouseLeave.bind(this));
      this.el.addEventListener('click', this.doorMouseClick.bind(this));
    }

    if (model) this.loadDoorAnimation(model);
    else {
      this.el.addEventListener('model-loaded', (e) => {
        this.loadDoorAnimation(e.detail.model);
      });
    }
  },

  tick(t, dt) {
    if (this.emitted) return;

    if (this.mixer && !isNaN(dt)) this.mixer.update(dt / 1000);

    // Camera dolly
    if (!this.doorOpenned) return;
    const currentPos = this.cameraEl.object3D.position;
    if (currentPos.z < -3.9) {
      this.emitted = true;
      const mainScene = document.querySelector('#mainScene');
      mainScene.parentNode.removeChild(mainScene);
      Event.emit(this.el, 'doorOpenned');
      return;
    }
    currentPos.z -= this.cameraSpeed;
    if (this.cameraSpeed > 0.08) return;
    this.cameraSpeed += 0.002;
  },

  loadDoorAnimation(model) {
    const layers = model.children[0];
    const doorLayer = layers.children[1];
    const doorMat = doorLayer.material[2];
    doorMat.transparent = true;
    doorMat.flatShading = true;

    doorLayer.material[2] = new THREE.MeshBasicMaterial({ map: doorMat.map, transparent: true, flatShading: true});

    console.log(doorMat)

    this.mixer = new THREE.AnimationMixer( model );
    const action = this.action = this.mixer.clipAction( model.animations[0] );
    action.setLoop(THREE.LoopOnce);
    action.clampWhenFinished = true;
  },

  // ---------------------------------------------------------------------------
  // EVENTS

  doorMouseEnter() {
    if (window.store.modalOpen) return;
    const appEl = document.querySelector('.app');
    appEl.classList.add('click');
  },

  doorMouseLeave() {
    const appEl = document.querySelector('.app');
    appEl.classList.remove('click');
  },

  doorMouseClick() {
    if (!this.action || this.clicked) return;
    this.clicked = true;

    if (AFRAME.utils.device.isMobile()) {
      setTimeout(()=>{this.action.play();}, 1200);
    }
    else {
      this.action.play();
    }

    const shadowEl = document.querySelector('#doorShadow');
    shadowEl.setAttribute('fadeout', { duration: 2300 });

    setTimeout(()=>{
      this.doorOpenned = window.store.doorOpenned = true;
    }, 500);

    Event.emit(this.el, 'doorOpening');
  },


});
