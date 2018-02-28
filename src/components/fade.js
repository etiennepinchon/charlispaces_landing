const Event = require('../core/event');

var opacityUpdate = function(opacity) {
  this.el.object3D.traverse(function (o) {
    if (o.material) {
      o.material.transparent = true;
      o.material.opacity = opacity;
    }
  });
  for (let text of this.textEntities) {
    text.setAttribute('opacity', opacity);
  }
}

// -----------------------------------------------------------------------------
// FADEIN

AFRAME.registerComponent('fadein', {
  schema: {
    duration: { type: 'int', default: 200 },
  },
  init: function() {
    this.textEntities = this.el.querySelectorAll('a-text');
    this.opacityUpdate(0);
    this.start = null;
  },
  tick: function (t) {
    if (!this.start) { this.start = t; }
    var opacity = Math.min((t - this.start) / this.data.duration, 1);
    this.opacityUpdate(opacity);
    if (opacity === 1) {
      this.el.removeAttribute('fadein');
      Event.emit(this.el, 'animationend');
    }
  },
  opacityUpdate: opacityUpdate
});

// -----------------------------------------------------------------------------
// FADEOUT

AFRAME.registerComponent('fadeout', {
  schema: {
    duration: { type: 'int', default: 200 },
    forceFade: { type: 'bool', default: false }
  },
  init: function() {
    this.textEntities = this.el.querySelectorAll('a-text');
    this.opacity = (this.data.forceFade) ? 1 : (this.el.getAttribute('opacity') || 1);

    this.opacityUpdate(this.opacity);
    this.start = null;
  },
  tick: function (t) {
    if (!this.start) { this.start = t; }
    var opacity = this.opacity-Math.min((t - this.start) / this.data.duration, this.opacity);
    this.opacityUpdate(opacity);

    if (opacity === 0) {
      this.el.removeAttribute('fadeout');
      Event.emit(this.el, 'animationend');
    }
  },
  opacityUpdate: opacityUpdate
});

// -----------------------------------------------------------------------------
// SHOW

AFRAME.registerComponent('show', {
  init: function() {
    this.textEntities = this.el.querySelectorAll('a-text');
    this.opacityUpdate(1);
    this.el.removeAttribute('show');
  },
  opacityUpdate: opacityUpdate
});

// -----------------------------------------------------------------------------
// HIDE

AFRAME.registerComponent('hide', {
  init: function() {
    this.textEntities = this.el.querySelectorAll('a-text');
    this.opacityUpdate(0);
    this.el.removeAttribute('hide');
  },
  opacityUpdate: opacityUpdate
});
