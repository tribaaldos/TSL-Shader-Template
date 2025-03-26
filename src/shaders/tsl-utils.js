// src/shaders/tsl-utils.js

import {
    // Tipos base
    float, int, bool, vec2, vec3, vec4, mat3, mat4,
  
    // Funciones principales
    output, Fn,
  
    // Coordenadas / espacio
    uv,
    positionLocal, positionView, positionWorld,
    normalLocal, normalView, normalWorld,
    cameraPosition, cameraDirection,
  
    // Tiempo
    timerLocal, timerGlobal, timerDelta,
    oscSine, oscSawtooth, oscTriangle,
  
    // Matemáticas
    abs, acos, asin, atan,
    cbrt, ceil, clamp, cos,
    cross, dFdx, dFdy, degrees,
    distance, difference, dot,
    equals, exp, exp2, faceforward,
    floor, fract, fwidth, inverseSqrt,
    invert, length, lengthSq, log,
    log2, max, min, mix, mod,
    negate, normalize, oneMinus, pow,
    pow2, pow3, pow4, radians,
    reciprocal, reflect, refract, round,
    saturate, sign, sin, smoothstep,
    sqrt, step, tan, transformDirection,
    trunc,
  
    // Ruido y hash
    hash, hash4,
  
    // Booleans
    all, any
  } from 'three/tsl'
  
  export {
    float, int, bool, vec2, vec3, vec4, mat3, mat4,
    output, Fn,
    uv,
    positionLocal, positionView, positionWorld,
    normalLocal, normalView, normalWorld,
    cameraPosition, cameraDirection,
    timerLocal, timerGlobal, timerDelta,
    oscSine, oscSawtooth, oscTriangle,
    abs, acos, asin, atan,
    cbrt, ceil, clamp, cos,
    cross, dFdx, dFdy, degrees,
    distance, difference, dot,
    equals, exp, exp2, faceforward,
    floor, fract, fwidth, inverseSqrt,
    invert, length, lengthSq, log,
    log2, max, min, mix, mod,
    negate, normalize, oneMinus, pow,
    pow2, pow3, pow4, radians,
    reciprocal, reflect, refract, round,
    saturate, sign, sin, smoothstep,
    sqrt, step, tan, transformDirection,
    trunc,
    hash, hash4,
    all, any
  }
  