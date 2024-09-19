"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkimy220_pd1"] = self["webpackChunkimy220_pd1"] || []).push([["frontend_src_pages_animateBackground_js"],{

/***/ "./frontend/src/pages/animateBackground.js":
/*!*************************************************!*\
  !*** ./frontend/src/pages/animateBackground.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar animateBackground = function animateBackground(canvas) {\n  var ctx = canvas.getContext('2d');\n  var cw = canvas.width = window.innerWidth;\n  var ch = canvas.height = window.innerHeight;\n  var ticks = 150;\n  var ring1 = [];\n  var ring2 = [];\n  var dur = 12;\n  for (var i = 0; i < ticks; i++) {\n    var angle = i / ticks * Math.PI * 2;\n    var radius = 250;\n    ring1[i] = {\n      x1: 0,\n      x2: 0,\n      y1: 0,\n      y2: 0,\n      lineWidth: 6,\n      a: angle,\n      r: radius,\n      h: 180 + gsap.utils.wrapYoyo(0, 40, i / ticks * 160)\n    };\n    ring2[i] = {\n      x1: 0,\n      x2: 0,\n      y1: 0,\n      y2: 0,\n      lineWidth: 2,\n      a: angle,\n      r: radius / 2,\n      h: 180 + gsap.utils.wrapYoyo(0, 40, i / ticks * 160)\n    };\n  }\n  var tl = gsap.timeline({\n    onUpdate: update,\n    paused: true\n  }).fromTo([ring1, ring2], {\n    x1: function x1(i, t) {\n      return Math.cos(t.a) * t.r * .3;\n    },\n    y1: function y1(i, t) {\n      return Math.sin(t.a) * t.r * .3;\n    },\n    x2: function x2(i, t) {\n      return Math.cos(t.a) * t.r * .12;\n    },\n    y2: function y2(i, t) {\n      return Math.sin(t.a) * t.r * .12;\n    }\n  }, {\n    x1: function x1(i, t) {\n      return Math.cos(t.a) * t.r * -2;\n    },\n    y1: function y1(i, t) {\n      return Math.sin(t.a) * t.r * -2;\n    },\n    x2: function x2(i, t) {\n      return Math.cos(t.a) * t.r * 15;\n    },\n    y2: function y2(i, t) {\n      return Math.sin(t.a) * t.r * 8;\n    },\n    duration: dur / 2,\n    ease: 'back',\n    repeat: -1,\n    yoyo: true\n  }, 0).to(ring1, {\n    lineWidth: 1,\n    h: '+=120',\n    duration: dur * .25,\n    ease: 'expo.inOut',\n    stagger: {\n      amount: dur,\n      from: 0,\n      repeat: -1,\n      yoyo: true\n    }\n  }, 0);\n  gsap.to(tl, {\n    time: dur * 2,\n    duration: dur * 2,\n    repeat: -1,\n    ease: 'none'\n  });\n  function drawPath(t) {\n    ctx.strokeStyle = 'hsl(' + t.h + ',100%,50%)';\n    ctx.lineCap = \"round\";\n    ctx.lineWidth = t.lineWidth;\n    ctx.setLineDash([t.lineWidth * 2, 30]);\n    ctx.beginPath();\n    ctx.moveTo(t.x1 + cw / 2, t.y1 + ch / 2);\n    ctx.lineTo(t.x2 + cw / 2, t.y2 + ch / 2);\n    ctx.stroke();\n  }\n  function update() {\n    ctx.clearRect(0, 0, cw, ch);\n    ring1.forEach(drawPath);\n    ring2.forEach(drawPath);\n  }\n  window.addEventListener('resize', function () {\n    cw = canvas.width = window.innerWidth;\n    ch = canvas.height = window.innerHeight;\n    update();\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animateBackground);\n\n//# sourceURL=webpack://imy220_pd1/./frontend/src/pages/animateBackground.js?");

/***/ })

}]);