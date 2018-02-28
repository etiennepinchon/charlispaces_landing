export default class CameraTransition {

  constructor(options={ duration: 420 }){
    this.animationEnded = false;
    this.duration = options.duration;
    this.onFadeInEndBind = this.onFadeInEnd.bind(this);
    this.onFadeOutEndBind = this.onFadeOutEnd.bind(this);
    this.setUpUI();
  }

  setUpUI() {
    let cameraEl = document.querySelector('a-camera');
    let appEl = document.querySelector('.app');
    appEl.classList.add('blink');

    if (!cameraEl) {
      throw new Error('No camera were found.');
    }

    //document.querySelector('#scene-camera-fade')
    // Create a new sky that will wrap around the camera
    this.el = document.createElement('a-sky');
    this.el.setAttribute('id', 'scene-camera-fade');
    this.el.setAttribute('color', '#000');
    this.el.setAttribute('radius', 0.1);
    this.el.setAttribute('opacity', 0);
    this.el.setAttribute('fadein', `duration: ${ this.duration }`);
    this.el.addEventListener('animationend', this.onFadeInEndBind);
    cameraEl.appendChild(this.el);
  }

  /*
    End the transition
  */
  end() {
    // If animation has not finish yet, we wait..
    if (!this.animationEnded) {
      return setTimeout(this.end.bind(this), 50);
    }

    // Then we remove the event and add the fadeout attribute.
    this.el.removeEventListener('animationend', this.onFadeInEndBind);
    this.el.setAttribute('fadeout', {duration: this.duration/1.5, forceFade: true});
    this.el.addEventListener('animationend', this.onFadeOutEndBind);


    let appEl = document.querySelector('.app');
    appEl.classList.remove('blink');
  }

  //----------------------------------------------------------------------------
  // HANDLERS

  onFadeInEnd() {
    this.animationEnded = true;
  }

  onFadeOutEnd() {
    this.el.removeEventListener('animationend', this.onFadeOutEndBind);
    this.el.parentNode.removeChild(this.el);
    this.el = null;
  }

}
