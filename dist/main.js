!function(t){var e={};function a(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/dist/",a(a.s=1)}([function(t,e,a){},function(t,e,a){"use strict";function n(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}a.r(e);var i=function(){function t(e,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.canvas=a,this.pos=300,this.draw=this.draw.bind(this),this.al=new Image,this.al.src="./src/images/al-web.png",this.speed=0,this.maxHeight=100,this.minHeight=440,this.handleDown=this.handleDown.bind(this)}var e,a,i;return e=t,(a=[{key:"handleDown",value:function(t){var e;38!==(e="touchstart"===t.type?this.getTouchPos(this.canvas,t):t.keyCode)&&40!==e||t.preventDefault(),this.move(e),this.draw()}},{key:"getTouchPos",value:function(t,e){var a=t.getBoundingClientRect();return e.targetTouches[0].clientX,a.left,e.targetTouches[0].clientY-a.top>this.pos?40:38}},{key:"init",value:function(){var t=this;document.addEventListener("keydown",this.handleDown),document.addEventListener("touchstart",this.handleDown,{passive:!1}),document.addEventListener("keyup",(function(){return t.speed=0})),document.addEventListener("touchend",(function(){return t.speed=0}))}},{key:"draw",value:function(){var t=this.pos===this.maxHeight&&-5===this.speed,e=this.pos===this.minHeight&&5===this.speed;t||e||(this.pos+=this.speed),this.ctx.drawImage(this.al,100,this.pos)}},{key:"move",value:function(t){switch(t){case 40:this.speed=5;break;case 38:this.speed=-5}}}])&&n(e.prototype,a),i&&n(e,i),t}();function s(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=["seal","fire-pit","person"],c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=Math.floor(Math.random()*r.length);this.type=r[e],this.posX=800,this.img=new Image,this.img.src="./src/images/".concat(this.type,".png"),this.y=Math.floor(350*Math.random())+100,this.hit=!1}var e,a,n;return e=t,n=[{key:"generate",value:function(){return new t}}],(a=[{key:"draw",value:function(t){t.drawImage(this.img,this.posX-=1,this.y)}},{key:"drawOne",value:function(t,e,a,n){var i=new Image;i.src="./src/images/".concat(n,".png"),i.addEventListener("load",(function(){t.drawImage(i,e,a)}))}}])&&s(e.prototype,a),n&&s(e,n),t}();function o(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h=["bottle","bag","beach-ball"],l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=Math.floor(Math.random()*h.length);this.type=h[e],this.posX=800,this.img=new Image,this.img.src="./src/images/".concat(this.type,".png"),this.y=Math.floor(380*Math.random())+100}var e,a,n;return e=t,n=[{key:"generate",value:function(){return new t}}],(a=[{key:"draw",value:function(t){t.drawImage(this.img,this.posX-=1,this.y)}},{key:"drawOne",value:function(t,e,a,n){var i=new Image;i.src="./src/images/".concat(n,".png"),i.addEventListener("load",(function(){t.drawImage(i,e,a)}))}}])&&o(e.prototype,a),n&&o(e,n),t}();function d(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var u=function(){function t(e,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cnvs=e,this.ctx=a}var e,a,n;return e=t,(a=[{key:"draw",value:function(){this.ctx.fillStyle="#3400cd",this.ctx.font="30px Arial",this.ctx.textAlign="center",this.ctx.fillText("Click to start!",this.cnvs.width/2,170),this.ctx.fillStyle="#3400cd",this.ctx.font="20px Arial",this.ctx.fillText("Use the up and down arrow keys to help",this.cnvs.width/2,250),this.ctx.fillText("the albatross avoid obstacles and tidy up the beach.",this.cnvs.width/2,280);var t=c.generate(),e=c.generate(),a=c.generate(),n=l.generate(),i=l.generate(),s=l.generate();this.ctx.fillText("AVOID",225,340),t.drawOne(this.ctx,170,350,"seal"),e.drawOne(this.ctx,210,350,"fire-pit"),a.drawOne(this.ctx,250,350,"person"),this.ctx.fillText("COLLECT",575,340),n.drawOne(this.ctx,520,350,"bottle"),i.drawOne(this.ctx,560,350,"bag"),s.drawOne(this.ctx,600,350,"beach-ball")}}])&&d(e.prototype,a),n&&d(e,n),t}();function f(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var v=function(){function t(e,a,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.bgPos=0,this.speed=e,this.canvas=a,this.ctx=n,this.image=i,this.draw=this.draw.bind(this),this.startScreen=new u(this.canvas,this.ctx),this.started=!1}var e,a,n;return e=t,(a=[{key:"draw",value:function(){var t=this,e=new Image(480,480);e.src="./src/images/".concat(this.image,".png"),e.addEventListener("load",(function(){t.ctx.clearRect(0,0,t.canvas.width,t.canvas.height);var a=t.ctx.createPattern(e,"repeat");t.ctx.fillStyle=a,t.ctx.translate(-t.bgPos,0),t.ctx.fillRect(t.bgPos,0,t.canvas.width,t.canvas.height),t.ctx.translate(t.bgPos,0),t.bgPos+=t.speed,"sand"!==t.image||t.started||(t.started=!0,t.startScreen.draw())}),!1)}}])&&f(e.prototype,a),n&&f(e,n),t}();function g(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var p=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.speed=1,this.width=800,this.height=480,this.canvasSand=document.getElementById("canvas-sand"),this.canvasWater=document.getElementById("canvas-water"),this.canvasSand.width=800,this.canvasSand.height=480,this.canvasWater.width=800,this.canvasWater.height=480,this.ctxSand=this.canvasSand.getContext("2d"),this.ctxWater=this.canvasWater.getContext("2d"),this.backgroundWater=new v(this.speed+.2,this.canvasWater,this.ctxWater,"water"),this.backgroundSand=new v(this.speed,this.canvasSand,this.ctxSand,"sand"),this.draw=this.draw.bind(this)}var e,a,n;return e=t,(a=[{key:"init",value:function(){this.draw()}},{key:"draw",value:function(){this.backgroundWater.draw(),this.backgroundSand.draw()}}])&&g(e.prototype,a),n&&g(e,n),t}();function w(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var b=function(){function t(e,a,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=a,this.ctx=n,this.trash=[],this.obstacles=[],this.albatross=new i(this.ctx,this.canvas),this.draw=this.draw.bind(this),this.beach=new p,this.addObstacle=this.addObstacle.bind(this),this.addTrash=this.addTrash.bind(this),this.handleStart=this.handleStart.bind(this),this.ctx.font="30px Arial",this.score=10}var e,a,n;return e=t,(a=[{key:"init",value:function(){this.beach.init(),this.canvas.addEventListener("click",this.handleStart)}},{key:"handleStart",value:function(){this.albatross.init(),this.addObstacle(),this.addTrash(),this.draw(),this.canvas.removeEventListener("click",this.handleStart)}},{key:"addObstacle",value:function(){var t=this,e=Math.round(2500*Math.random())+2e3;setTimeout((function(){t.obstacles=t.obstacles.concat(c.generate()),t.addObstacle()}),e)}},{key:"addTrash",value:function(){var t=this,e=Math.round(2500*Math.random())+2e3;setTimeout((function(){t.trash=t.trash.concat(l.generate()),t.addTrash()}),e)}},{key:"draw",value:function(){var t=this;if(this.beach.draw(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.score<0)this.ctx.fillStyle="white",this.ctx.fillText("game over",10,40);else{var e={x:100,y:this.albatross.pos};this.obstacles.forEach((function(a,n){a.posX<-30&&delete t.obstacles[n],a.draw(t.ctx),e.y-a.y<30&&e.y-a.y>-30&&a.posX-100<=60&&a.posX-100>=-60&&!a.hit&&(a.hit=!0,t.score=t.score-1)})),this.obstacles=this.obstacles.filter((function(t){return t})),this.trash.forEach((function(a,n){a.posX<-30&&delete t.trash[n],e.y-a.y<30&&e.y-a.y>-30&&a.posX-100<=60&&a.posX-100>=-5?(t.score=t.score+1,delete t.trash[n]):a.draw(t.ctx)})),this.trash=this.trash.filter((function(t){return t})),this.albatross.draw(),this.ctx.fillStyle="white",this.ctx.fillText("Score: ".concat(this.score),10,40),requestAnimationFrame(this.draw)}}}])&&w(e.prototype,a),n&&w(e,n),t}();a(0);document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("canvas-game");t.width=800,t.height=480;var e=t.getContext("2d");new b(1,t,e).init()}))}]);
//# sourceMappingURL=main.js.map