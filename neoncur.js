import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';

neonCursor({
    el: document.getElementById('app'),
    shaderPoints: 15,
    curvePoints: 80,
    curveLerpe: 0.5,
    radius1: 5,
    radius2: 30,
    velocityThreshold: 10,
    sleepRadiusX: 100,
    sleepRadiusY: 100,
    sleepTimeCoefX: 0.0025,
    sleepTimeCoefY: 0.0025,

});