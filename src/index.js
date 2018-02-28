import './lib/rounded';
import './loaders/animation-mixer';
import './loaders/fbx-model';
import './components/tunnel';
import './components/stars';
import './components/door';
import './components/fade';
import './components/environment';
import './components/particles';
import Confetti from './core/confetti';
import isEmail from 'validator/lib/isEmail';

import './styles/index.css';
import './styles/button.css';
import './styles/shake.css';
import './styles/vignette.css';
import './styles/modal.css';
import './styles/socials.css';

window.store = [];

const shakeEl = function(el) {
  el.classList.add('shake');
  setTimeout(function() {
    el.classList.remove('shake');
  }, 300);
}

// Remove right click
document.addEventListener('contextmenu', event => event.preventDefault());

// Ready
let sceneEl;
document.addEventListener('DOMContentLoaded', function(){
  sceneEl = document.querySelector('a-scene');
  sceneEl.addEventListener('loaded', ()=>{
    sceneEl.components.inspector.remove();
    document.querySelector('.coming-soon-2d').classList.remove('hide');
    new App();
  });
}, false);

class App {
  constructor() {
    if (!AFRAME.utils.device.isMobile()) {
      sceneEl.setAttribute('cursor', { rayOrigin: 'mouse' });
    }

    this.setUpUI();
  }

  setUpUI() {
    this.modal = document.querySelector('.modal-container');
    this.modal.querySelector('.close-button').addEventListener('click', this.closeModal.bind(this));
    document.querySelector('.notify-me').addEventListener('click', (e)=>{
      e.preventDefault();
      this.openModal();
    });
    document.querySelector('.let-me-know').addEventListener('click', (e)=>{
      e.preventDefault();
      this.validateEmail();
    });
  }

  openModal() {
    window.store.modalOpen = true;
    this.modal.classList.remove('hide');
    this.modal.querySelector('.email').focus();
    setTimeout(()=> { this.modal.classList.remove('fadeIn'); }, 10);
  }

  closeModal() {
    window.store.modalOpen = false;
    this.modal.classList.add('closing');
    this.modal.classList.add('fadeIn');
    setTimeout(()=> {
      this.modal.classList.remove('closing');
      this.modal.classList.add('hide');
    }, 600);
  }

  closeModalWithSuccess() {
    window.store.modalOpen = false;
    this.modal.classList.add('closing');
    this.modal.classList.add('fadeOut');
    setTimeout(()=> {
      this.modal.classList.remove('closing');
      this.modal.classList.add('hide');
      this.modal.classList.remove('fadeOut');
      this.modal.classList.add('fadeIn');
      this.modal.querySelector('.email').value = '';
      this.modal.querySelector('.wrapper').classList.remove('hide-opacity');
      this.modal.querySelector('.done').classList.remove('show-opacity');
      this.modal.querySelector('.done').classList.add('hide');
      this.modal.querySelector('.pattern').classList.remove('show-opacity');
      if (window.store.doorOpenned) {
          setTimeout(()=>{
            window.location.href = 'https://twitter.com/CharliSpaces';
          }, 120);
      }
    }, 600);
  }

  isEmailValid(value) {
    return (!value || !isEmail(value) || value.length > 120) ? false : true;
  }

  validateEmail() {
    const inputValue = this.modal.querySelector('.email').value;
    if (!this.isEmailValid(inputValue)) return this.invalidEmail();
    this.sendEmailRequest(inputValue);
  }

  invalidEmail() {
    shakeEl(this.modal.querySelector('.email'));
  }

  sendEmailRequest() {
    const wrapperEl = this.modal.querySelector('.wrapper');
    const doneEl = this.modal.querySelector('.done');
    const patternEl = this.modal.querySelector('.pattern');
    wrapperEl.classList.add('busy');

    // Request...

    wrapperEl.classList.remove('busy');
    wrapperEl.classList.add('hide-opacity');
    setTimeout(()=>{ doneEl.classList.remove('hide'); }, 300);
    setTimeout(()=>{ doneEl.classList.add('show-opacity');
                     patternEl.classList.add('show-opacity'); }, 310);
    setTimeout(()=>{ this.closeModalWithSuccess(); }, 2200);

    const confetti = new Confetti(document.body);
    setTimeout(()=>{ confetti.stop(); }, 2000);
  }

}
