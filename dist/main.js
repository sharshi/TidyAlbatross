!function(t){var e={};function n(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}n.r(e);var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.canvas=n,this.pos=300,this.draw=this.draw.bind(this),this.al=new Image,this.al.src="./src/images/al-web.png",this.speed=0,this.maxHeight=100,this.minHeight=440,this.handleDown=this.handleDown.bind(this)}var e,n,i;return e=t,(n=[{key:"handleDown",value:function(t){var e;38!==(e="touchstart"===t.type?this.getTouchPos(this.canvas,t):t.keyCode)&&40!==e||t.preventDefault(),this.move(e),this.draw()}},{key:"getTouchPos",value:function(t,e){var n=t.getBoundingClientRect();return e.targetTouches[0].clientX,n.left,e.targetTouches[0].clientY-n.top>this.pos?40:38}},{key:"init",value:function(){var t=this;document.addEventListener("keydown",this.handleDown),document.addEventListener("touchstart",this.handleDown,{passive:!1}),document.addEventListener("keyup",(function(){return t.speed=0})),document.addEventListener("touchend",(function(){return t.speed=0}))}},{key:"draw",value:function(){var t=this.pos===this.maxHeight&&-5===this.speed,e=this.pos===this.minHeight&&5===this.speed;t||e||(this.pos+=this.speed),this.ctx.drawImage(this.al,100,this.pos)}},{key:"move",value:function(t){switch(t){case 40:this.speed=5;break;case 38:this.speed=-5}}}])&&a(e.prototype,n),i&&a(e,i),t}();function r(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.posX=800,this.img=new Image,this.y=Math.floor(350*Math.random())+100,this.hit=!1}var e,n,a;return e=t,(n=[{key:"draw",value:function(t){t.drawImage(this.img,this.posX-=1,this.y)}},{key:"drawOne",value:function(t,e,n,a){var i=new Image;i.src="./src/images/".concat(a,".png"),i.addEventListener("load",(function(){t.drawImage(i,e,n)}))}}])&&r(e.prototype,n),a&&r(e,a),t}();function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=["seal","fire-pit","person"],f=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t=c(this,h(e).call(this));var n=Math.floor(Math.random()*l.length);return t.type=l[n],t.img.src="./src/images/".concat(t.type,".png"),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,t),e}(o);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=["bottle","bag","beach-ball"],w=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t=p(this,b(e).call(this));var n=Math.floor(Math.random()*v.length);return t.type=v[n],t.img.src="./src/images/".concat(t.type,".png"),console.log(t.type),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(e,t),e}(o);function g(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var m=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cnvs=e,this.ctx=n}var e,n,a;return e=t,(n=[{key:"draw",value:function(){var t=this,e=new f,n=new f,a=new f,i=new w,r=new w,o=new w;setTimeout((function(){t.ctx.fillStyle="#3400cd",t.ctx.font="30px Arial",t.ctx.textAlign="center",t.ctx.fillText("Click to start!",t.cnvs.width/2,170),t.ctx.fillStyle="#3400cd",t.ctx.font="20px Arial",t.ctx.fillText("Use the up and down arrow keys to help",t.cnvs.width/2,250),t.ctx.fillText("the albatross avoid obstacles and tidy up the beach.",t.cnvs.width/2,280),t.ctx.fillText("AVOID",225,340),e.drawOne(t.ctx,170,350,"seal"),n.drawOne(t.ctx,210,350,"fire-pit"),a.drawOne(t.ctx,250,350,"person"),t.ctx.fillText("COLLECT",575,340),i.drawOne(t.ctx,520,350,"bottle"),r.drawOne(t.ctx,560,350,"bag"),o.drawOne(t.ctx,600,350,"beach-ball")}),500)}}])&&g(e.prototype,n),a&&g(e,a),t}();function x(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var O=function(){function t(e,n,a,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.bgPos=0,this.speed=e,this.canvas=n,this.ctx=a,this.image=i,this.draw=this.draw.bind(this),this.startScreen=new m(this.canvas,this.ctx),this.started=!1}var e,n,a;return e=t,(n=[{key:"draw",value:function(){var t=this,e=new Image(480,480);e.src="./src/images/".concat(this.image,".png"),e.addEventListener("load",(function(){t.ctx.clearRect(0,0,t.canvas.width,t.canvas.height);var n=t.ctx.createPattern(e,"repeat");t.ctx.fillStyle=n,t.ctx.translate(-t.bgPos,0),t.ctx.fillRect(t.bgPos,0,t.canvas.width,t.canvas.height),t.ctx.translate(t.bgPos,0),t.bgPos+=t.speed,"sand"!==t.image||t.started||(t.started=!0,t.startScreen.draw())}),!1)}}])&&x(e.prototype,n),a&&x(e,a),t}();function S(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var T=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.speed=1,this.width=800,this.height=480,this.canvasSand=document.getElementById("canvas-sand"),this.canvasWater=document.getElementById("canvas-water"),this.canvasSand.width=800,this.canvasSand.height=480,this.canvasWater.width=800,this.canvasWater.height=480,this.ctxSand=this.canvasSand.getContext("2d"),this.ctxWater=this.canvasWater.getContext("2d"),this.backgroundWater=new O(this.speed+.2,this.canvasWater,this.ctxWater,"water"),this.backgroundSand=new O(this.speed,this.canvasSand,this.ctxSand,"sand"),this.draw=this.draw.bind(this)}var e,n,a;return e=t,(n=[{key:"init",value:function(){this.backgroundWater.started=!1,this.backgroundSand.started=!1,this.draw()}},{key:"draw",value:function(){this.backgroundWater.draw(),this.backgroundSand.draw()}}])&&S(e.prototype,n),a&&S(e,a),t}();function k(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var E=function(){function t(e,n,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=n,this.ctx=a,this.trash=[],this.obstacles=[],this.albatross=new i(this.ctx,this.canvas),this.draw=this.draw.bind(this),this.beach=new T,this.addObstacle=this.addObstacle.bind(this),this.addTrash=this.addTrash.bind(this),this.handleStart=this.handleStart.bind(this),this.ctx.font="30px Arial",this.score=0,this.trashTO,this.obstacleTO}var e,n,a;return e=t,(n=[{key:"init",value:function(){this.score=0,this.beach.init(),this.canvas.addEventListener("click",this.handleStart)}},{key:"handleStart",value:function(){this.albatross.init(),this.addObstacle(),this.addTrash(),this.draw(),this.canvas.removeEventListener("click",this.handleStart)}},{key:"addObstacle",value:function(){var t=this,e=Math.round(2500*Math.random())+2e3;this.obstacleTO=setTimeout((function(){t.obstacles=t.obstacles.concat(new f),t.addObstacle()}),e)}},{key:"addTrash",value:function(){var t=this,e=Math.round(2500*Math.random())+2e3;this.trashTO=setTimeout((function(){t.trash=t.trash.concat(new w),t.addTrash()}),e)}},{key:"draw",value:function(){var t=this;if(this.beach.draw(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.score<0)this.init(),clearTimeout(this.trashTO),clearTimeout(this.obstacleTO),this.trash=[],this.obstacles=[],this.ctx.fillStyle="white",this.ctx.fillText("game over :(",100,200);else{var e={x:100,y:this.albatross.pos};this.obstacles.forEach((function(n,a){n.posX<-30&&delete t.obstacles[a],n.draw(t.ctx),e.y-n.y<30&&e.y-n.y>-30&&n.posX-100<=60&&n.posX-100>=-60&&!n.hit&&(n.hit=!0,t.score=t.score-1)})),this.obstacles=this.obstacles.filter((function(t){return t})),this.trash.forEach((function(n,a){n.posX<-30&&delete t.trash[a],e.y-n.y<30&&e.y-n.y>-30&&n.posX-100<=60&&n.posX-100>=-5?(t.score=t.score+1,delete t.trash[a]):n.draw(t.ctx)})),this.trash=this.trash.filter((function(t){return t})),this.albatross.draw(),this.ctx.fillStyle="white",this.ctx.fillText("Score: ".concat(this.score),10,40),requestAnimationFrame(this.draw)}}}])&&k(e.prototype,n),a&&k(e,a),t}();n(0);document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("canvas-game");t.width=800,t.height=480;var e=t.getContext("2d");new E(1,t,e).init()}))}]);
//# sourceMappingURL=main.js.map