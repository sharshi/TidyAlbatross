!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=2)}([function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e);var s=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.canvas=n,this.pos=300,this.posX=100,this.draw=this.draw.bind(this),this.al=new Image,this.al.src="./src/images/al-web.png",this.alLife=new Image(30,30),this.alLife.src="./src/images/al-web.png",this.speed=0,this.speedX=0,this.maxHeight=100,this.minHeight=440,this.handleDown=this.handleDown.bind(this),this.keyUp=this.keyUp.bind(this),document.addEventListener("keydown",this.handleDown),document.addEventListener("touchstart",this.handleDown,{passive:!1}),document.addEventListener("keyup",this.keyUp),document.addEventListener("touchend",this.keyUp)}var e,n,s;return e=t,(n=[{key:"handleDown",value:function(t){var e;38!==(e="touchstart"===t.type?this.getTouchPos(this.canvas,t):t.keyCode)&&40!==e&&37!==e&&39!==e||(t.preventDefault(),this.move(e))}},{key:"keyUp",value:function(){this.al.src="./src/images/al-web.png",this.speed=0,this.speedX=0}},{key:"getTouchPos",value:function(t,e){var n=t.getBoundingClientRect();return e.targetTouches[0].clientX,n.left,e.targetTouches[0].clientY-n.top>this.pos?40:38}},{key:"draw",value:function(t,e){var n=this.pos===this.maxHeight&&-5===this.speed,i=this.pos===this.minHeight&&5===this.speed;n||i||(this.pos+=this.speed),this.ctx.drawImage(this.al,this.posX,this.pos),this.posX+=this.speedX;for(var s=0;s<e;s++)this.ctx.drawImage(this.alLife,25*(s+1)-15,50,20,12)}},{key:"move",value:function(t){switch(t){case 40:this.al.src="./src/images/al-down.png",this.speed=5;break;case 38:this.al.src="./src/images/al-up.png",this.speed=-5;break;case 37:this.al.src="./src/images/al-left.png",this.speedX=-5;break;case 39:this.al.src="./src/images/al-web.png",this.speedX=5}}}])&&i(e.prototype,n),s&&i(e,s),t}();function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.posX=800,this.img=new Image,this.y=Math.floor(350*Math.random())+100,this.hit=!1}var e,n,i;return e=t,(n=[{key:"draw",value:function(t,e){t.drawImage(this.img,this.posX-=e,this.y)}},{key:"drawOne",value:function(t,e,n,i){var s=new Image;s.src="./src/images/".concat(i,".png"),s.addEventListener("load",(function(){t.drawImage(s,e,n)}))}}])&&a(e.prototype,n),i&&a(e,i),t}();function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var u=["seal","fire-pit","person"],d=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t=c(this,h(e).call(this));var n=Math.floor(Math.random()*u.length);return t.type=u[n],t.img.src="./src/images/".concat(t.type,".png"),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,t),e}(r);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var b=["bottle","bag","beach-ball"],g=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t=p(this,v(e).call(this));var n=Math.floor(Math.random()*b.length);return t.type=b[n],t.img.src="./src/images/".concat(t.type,".png"),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(e,t),e}(r);function w(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var m=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cnvs=e,this.ctx=n}var e,n,i;return e=t,(n=[{key:"draw",value:function(t){var e=this,n=new d,i=new d,s=new d,a=new g,r=new g,o=new g;setTimeout((function(){e.ctx.textAlign="center",e.ctx.fillStyle="#3400cd",e.ctx.font="30px Arial",e.ctx.beginPath(),e.ctx.rect(e.cnvs.width/2-50,140,100,40),e.ctx.strokeRect(e.cnvs.width/2-50,140,100,40),e.ctx.fillRect(e.cnvs.width/2-50,140,100,40),e.ctx.stroke(),e.ctx.fillStyle="#ffdc93",e.ctx.fillText("Start!",e.cnvs.width/2,170),e.ctx.fillStyle="#3400cd",e.ctx.font="20px Arial",e.ctx.fillText("Use the up and down arrow keys to help",e.cnvs.width/2,250),e.ctx.fillText("the albatross avoid obstacles and tidy up the beach.",e.cnvs.width/2,280),e.ctx.fillText("AVOID",225,340),n.drawOne(e.ctx,170,350,"seal"),i.drawOne(e.ctx,210,350,"fire-pit"),s.drawOne(e.ctx,250,350,"person"),e.ctx.fillText("COLLECT",575,340),a.drawOne(e.ctx,520,350,"bottle"),r.drawOne(e.ctx,560,350,"bag"),o.drawOne(e.ctx,600,350,"beach-ball"),e.ctx.font="20px Arial",e.ctx.textAlign="center",e.ctx.fillText("By Shersheial Borisute",e.cnvs.width/2,450)}),500)}}])&&w(e.prototype,n),i&&w(e,i),t}();function x(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var k=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.bgPos=0,this.canvas=e,this.ctx=n,this.image=i,this.draw=this.draw.bind(this),this.startScreen=new m(this.canvas,this.ctx),this.started=!1}var e,n,i;return e=t,(n=[{key:"draw",value:function(t){var e=this,n=new Image(480,480);n.src="./src/images/".concat(this.image,".png"),n.addEventListener("load",(function(){e.ctx.clearRect(0,0,e.canvas.width,e.canvas.height);var i=e.ctx.createPattern(n,"repeat");e.ctx.fillStyle=i,e.ctx.translate(-e.bgPos,0),e.ctx.fillRect(e.bgPos,0,e.canvas.width,e.canvas.height),e.ctx.translate(e.bgPos,0),e.bgPos+=t,"water"===e.image&&e.started,"sand"!==e.image||e.started||(e.started=!0,e.startScreen.draw())}),!1)}},{key:"showTitle",value:function(){this.ctx.font="30px Arial",this.ctx.textAlign="center",this.ctx.fillStyle="#ffdc93",this.ctx.fillText("Tidy Albatross",this.canvas.width/2,30)}}])&&x(e.prototype,n),i&&x(e,i),t}();function O(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var S=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=800,this.height=480,this.canvasSand=document.getElementById("canvas-sand"),this.canvasWater=document.getElementById("canvas-water"),this.canvasSand.width=800,this.canvasSand.height=480,this.canvasWater.width=800,this.canvasWater.height=480,this.ctxSand=this.canvasSand.getContext("2d"),this.ctxWater=this.canvasWater.getContext("2d"),this.backgroundWater=new k(this.canvasWater,this.ctxWater,"water"),this.backgroundSand=new k(this.canvasSand,this.ctxSand,"sand"),this.draw=this.draw.bind(this)}var e,n,i;return e=t,(n=[{key:"init",value:function(t){this.backgroundWater.started=!1,this.backgroundSand.started=!1,this.draw(t)}},{key:"draw",value:function(t){this.backgroundWater.draw(t),this.backgroundSand.draw(t)}}])&&O(e.prototype,n),i&&O(e,i),t}();function P(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var T=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.pos=n,this.db=firebase.firestore()}var e,n,i;return e=t,(n=[{key:"draw",value:function(){}},{key:"store",value:function(t,e){this.db.collection(t).add(e).then((function(t){console.log("Document written with ID: ",t.id)})).catch((function(t){console.error("Error adding document: ",t)}))}}])&&P(e.prototype,n),i&&P(e,i),t}();function E(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var j=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=document.getElementById("canvas-game"),this.canvas.width=800,this.canvas.height=480,this.animFrame=null,this.ctx=this.canvas.getContext("2d"),this.trash=[],this.obstacles=[],this.albatross=new s(this.ctx,this.canvas),this.draw=this.draw.bind(this),this.beach=new S,this.addObstacle=this.addObstacle.bind(this),this.addTrash=this.addTrash.bind(this),this.handleStart=this.handleStart.bind(this),this.onVisibilityChange=this.onVisibilityChange.bind(this),this.ctx.font="30px Arial",this.score=0,this.totalPoints=0,this.gameIsActive=!1,this.lives=5,this.maxSpeed=9,this.timeout=120,this.counter=-1,this.speed=2,this.bird=new this.sound("./src/audio/bird.mp3"),this.gamePause=this.gamePause.bind(this),document.addEventListener("visibilitychange",this.onVisibilityChange),this.points=new T}var e,n,i;return e=t,(n=[{key:"init",value:function(){this.beach.init(this.speed),this.canvas.addEventListener("click",this.handleStart)}},{key:"handleStart",value:function(t){var e=this.getClickPos(this.canvas,t),n=e.x,i=e.y,s=this.canvas.width/2-50;n>=s&&n<=100+s&&i>=140&&i<=180&&(this.gameIsActive=!0,this.canvas.removeEventListener("click",this.handleStart),this.draw())}},{key:"getClickPos",value:function(t,e){var n=t.getBoundingClientRect();return{x:e.clientX-n.left,y:e.clientY-n.top}}},{key:"addObstacle",value:function(){this.obstacles=this.obstacles.concat(new d)}},{key:"addTrash",value:function(){this.trash=this.trash.concat(new g)}},{key:"onVisibilityChange",value:function(t){"hidden"===document.visibilityState?this.gamePause("hide"):this.gamePause("show")}},{key:"draw",value:function(){if(this.gameIsActive)if(0===this.lives)this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),cancelAnimationFrame(this.animFrame),this.gameOver();else{this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.beach.draw(this.speed);var t={x:this.albatross.posX,y:this.albatross.pos};this.counter===this.timeout&&(this.addObstacle(),this.addTrash(),this.counter=-1),this.counter=this.counter+1,this.detectObstacles(t),this.detectTrash(t),this.albatross.draw(this.speed,this.lives),this.ctx.fillStyle="white",this.ctx.fillText("Score: ".concat(this.score),10,40),this.animFrame=requestAnimationFrame(this.draw)}}},{key:"detectTrash",value:function(t){var e=this;this.trash.forEach((function(n,i){n.posX<-30&&delete e.trash[i],t.y-n.y<30&&t.y-n.y>-30&&n.posX-t.x<=60&&n.posX-t.x>=-5?(e.score=e.score+1,e.score%5==0&&e.speed<=e.maxSpeed&&(e.speed=e.speed+e.speed/4,e.speed>e.maxSpeed&&(e.timeout=45)),delete e.trash[i]):n.draw(e.ctx,e.speed)})),this.trash=this.trash.filter((function(t){return t}))}},{key:"detectObstacles",value:function(t){var e=this;this.obstacles.forEach((function(n,i){n.posX<-30&&delete e.obstacles[i],n.draw(e.ctx,e.speed),t.y-n.y<30&&t.y-n.y>-30&&n.posX-t.x<=60&&n.posX-t.x>=-5&&!n.hit&&(n.hit=!0,e.lives=e.lives-1,setTimeout((function(){e.bird.play()}),0))})),this.obstacles=this.obstacles.filter((function(t){return t}))}},{key:"gameOver",value:function(){this.gameIsActive=!1,this.points.store("score",{name:"Ada",score:this.score}),this.trash=[],this.obstacles=[],this.ctx.fillStyle="#3400cd",this.ctx.textAlign="center",this.ctx.fillText("game over :(",this.canvas.width/2,130),this.ctx.textAlign="left",this.score=0,this.speed=1.5,this.totalPoints=0,this.lives=5,this.init()}},{key:"gamePause",value:function(t){this.gameIsActive="hide"!==t}},{key:"sound",value:function(t){var e=this;this.sound=document.createElement("audio"),this.sound.src=t,this.sound.setAttribute("preload","auto"),this.sound.setAttribute("controls","none"),this.sound.style.display="none",document.body.appendChild(this.sound),this.play=function(){return e.sound.play()},this.stop=function(){return e.sound.pause()}}}])&&E(e.prototype,n),i&&E(e,i),t}();n(0),n(1);document.addEventListener("DOMContentLoaded",(function(){(new j).init()}))}]);
//# sourceMappingURL=main.js.map