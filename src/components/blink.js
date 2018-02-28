import CameraTransition from './transition';

export default function CameraBlink(callback) {
  let transition = new CameraTransition({
    duration: 210*2
  });
  setTimeout(function(){
    if (transition) transition.end();
    callback();
  }, 320*2);
}
