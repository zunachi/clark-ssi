// Declaration of glitch effect in img and text
PowerGlitch.glitch(".glitch-hover", {
  playMode: "hover",
  createContainers: true,
  hideOverflow: false,
  timing: {
    duration: 250,
    iterations: 1
  },
  glitchTimeSpan: {
    start: 0,
    end: 1
  },
  shake: {
    velocity: 15,
    amplitudeX: 0.1,
    amplitudeY: 0.1
  },
  slice: {
    count: 10,
    velocity: 50,
    minHeight: 0.02,
    maxHeight: 0.15,
    hueRotate: true
  },
  pulse: false
});
