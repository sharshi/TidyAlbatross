!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=2)}([function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e);var s=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.canvas=n,this.pos=300,this.posX=100,this.draw=this.draw.bind(this),this.al=new Image,this.al.src="./src/images/large/al-web.png",this.alLife=new Image(30,30),this.alLife.src="./src/images/large/al-web.png",this.speed=0,this.speedX=0,this.maxHeight=100,this.minHeight=550,this.handleDown=this.handleDown.bind(this),this.keyUp=this.keyUp.bind(this),document.addEventListener("keydown",this.handleDown),document.addEventListener("touchstart",this.handleDown,{passive:!1}),document.addEventListener("keyup",this.keyUp),document.addEventListener("touchend",this.keyUp)}var e,n,s;return e=t,(n=[{key:"handleDown",value:function(t){var e;38!==(e="touchstart"===t.type?this.getTouchPos(this.canvas,t):t.keyCode)&&40!==e&&37!==e&&39!==e||(t.preventDefault(),this.move(e))}},{key:"keyUp",value:function(){this.al.src="./src/images/large/al-web.png",this.speed=0,this.speedX=0}},{key:"getTouchPos",value:function(t,e){var n=t.getBoundingClientRect();return e.targetTouches[0].clientX,n.left,e.targetTouches[0].clientY-n.top>this.pos?40:38}},{key:"draw",value:function(t,e){var n=this.pos===this.maxHeight&&-5===this.speed,i=this.pos===this.minHeight&&5===this.speed;n||i||(this.pos+=this.speed),this.ctx.drawImage(this.al,this.posX,this.pos),this.posX+=this.speedX;for(var s=0;s<e;s++)this.ctx.drawImage(this.alLife,25*(s+1)-15,50,20,12)}},{key:"move",value:function(t){switch(t){case 40:this.al.src="./src/images/large/al-down.png",this.speed=5;break;case 38:this.al.src="./src/images/large/al-up.png",this.speed=-5;break;case 37:this.al.src="./src/images/large/al-left.png",this.speedX=-5;break;case 39:this.al.src="./src/images/large/al-web.png",this.speedX=5}}}])&&i(e.prototype,n),s&&i(e,s),t}();function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var r=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cnvs=e,this.ctx=n}var e,n,i;return e=t,(n=[{key:"draw",value:function(){var t=this;setTimeout((function(){t.ctx.textAlign="center",t.ctx.fillStyle="#3400cd",t.ctx.font="bold 20px Arial";var e=localStorage.getItem("highScore");e&&t.ctx.fillText("High Score: ".concat(e),t.cnvs.width/2,500)}),500)}}])&&a(e.prototype,n),i&&a(e,i),t}();function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var c=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.bgPos=0,this.canvas=e,this.ctx=n,this.image=i,this.draw=this.draw.bind(this),this.startScreen=new r(this.canvas,this.ctx),this.started=!1}var e,n,i;return e=t,(n=[{key:"draw",value:function(t){var e=this,n=new Image(600,600);n.src="./src/images/".concat(this.image,".png"),n.addEventListener("load",(function(){e.ctx.clearRect(0,0,e.canvas.width,e.canvas.height);var i=e.ctx.createPattern(n,"repeat");e.ctx.fillStyle=i,e.ctx.translate(-e.bgPos,0),e.ctx.fillRect(e.bgPos,0,e.canvas.width,e.canvas.height),e.ctx.translate(e.bgPos,0),e.bgPos+=t,"water"===e.image&&e.started,"sand"!==e.image||e.started||(e.started=!0,e.startScreen.draw())}),!1)}},{key:"showTitle",value:function(){this.ctx.font="30px Arial",this.ctx.textAlign="center",this.ctx.fillStyle="#ffdc93",this.ctx.fillText("Tidy Albatross",this.canvas.width/2,30)}}])&&o(e.prototype,n),i&&o(e,i),t}();function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=1e3,this.height=600,this.canvasSand=document.getElementById("canvas-sand"),this.canvasWater=document.getElementById("canvas-water"),this.canvasSand.width=this.width,this.canvasSand.height=this.height,this.canvasWater.width=this.width,this.canvasWater.height=this.height,this.ctxSand=this.canvasSand.getContext("2d"),this.ctxWater=this.canvasWater.getContext("2d"),this.backgroundWater=new c(this.canvasWater,this.ctxWater,"water"),this.backgroundSand=new c(this.canvasSand,this.ctxSand,"sand"),this.draw=this.draw.bind(this)}var e,n,i;return e=t,(n=[{key:"init",value:function(t){this.backgroundWater.started=!1,this.backgroundSand.started=!1,this.draw(t)}},{key:"draw",value:function(t){this.backgroundWater.draw(t),this.backgroundSand.draw(t)}}])&&h(e.prototype,n),i&&h(e,i),t}();function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var d=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.posX=1e3,this.img=new Image,this.y=Math.floor(460*Math.random())+100,this.hit=!1}var e,n,i;return e=t,(n=[{key:"draw",value:function(t,e){t.drawImage(this.img,this.posX-=e,this.y,40,40)}},{key:"drawOne",value:function(t,e,n,i){var s=new Image(30,30);s.src="./src/images/large/".concat(i,".png"),s.addEventListener("load",(function(){t.drawImage(s,e,n,40,40)}))}}])&&u(e.prototype,n),i&&u(e,i),t}();function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var g=["seal","fire-pit","person"],m=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t=p(this,y(e).call(this));var n=Math.floor(Math.random()*g.length);return t.type=g[n],t.img.src="./src/images/large/".concat(t.type,".png"),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(e,t),e}(d);function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e){return!e||"object"!==b(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var S=["bottle","bag","beach-ball"],O=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t=w(this,x(e).call(this));var n=Math.floor(Math.random()*S.length);return t.type=S[n],t.img.src="./src/images/large/".concat(t.type,".png"),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(e,t),e}(d);function P(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var E=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.pos=n,this.db=firebase.firestore(),this.listen()}var e,n,i;return e=t,(n=[{key:"draw",value:function(){}},{key:"store",value:function(t,e){this.db.collection(t).add(e).then((function(t){console.log("Document written with ID: ",t.id)})).catch((function(t){console.error("Error adding document: ",t)}))}},{key:"listen",value:function(){this.db.collection("score").orderBy("score","desc").limit(10).onSnapshot((function(t){var e=document.getElementById("high-scores"),n=document.createElement("h3");n.innerHTML="High Scores",e.appendChild(n),t.docs.forEach((function(t){var n=t.data(),i=n.name,s=n.score,a=document.createElement("article"),r=document.createElement("p");r.innerHTML=i;var o=document.createElement("p");return o.innerHTML=s,a.appendChild(r),a.appendChild(o),e.appendChild(a),{name:i,score:s}}))}))}}])&&P(e.prototype,n),i&&P(e,i),t}();function T(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var I=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=document.getElementById("canvas-game"),this.canvas.width=1e3,this.canvas.height=600,this.animFrame=null,this.ctx=this.canvas.getContext("2d"),this.trash=[],this.obstacles=[],this.albatross=new s(this.ctx,this.canvas),this.draw=this.draw.bind(this),this.beach=new l,this.addObstacle=this.addObstacle.bind(this),this.addTrash=this.addTrash.bind(this),this.onVisibilityChange=this.onVisibilityChange.bind(this),this.ctx.font="30px Arial",this.score=0,this.totalPoints=0,this.gameIsActive=!1,this.lives=5,this.maxSpeed=9,this.timeout=120,this.counter=-1,this.speed=2,this.bird=new this.sound("./src/audio/bird.mp3"),this.gamePause=this.gamePause.bind(this),document.addEventListener("visibilitychange",this.onVisibilityChange),this.points=new E,window.start=function(){return e.start()}}var e,n,i;return e=t,(n=[{key:"init",value:function(){this.beach.init(this.speed)}},{key:"start",value:function(){document.getElementById("splash").classList.add("hide"),this.gameIsActive=!0,this.draw()}},{key:"getClickPos",value:function(t,e){var n=t.getBoundingClientRect();return{x:e.clientX-n.left,y:e.clientY-n.top}}},{key:"addObstacle",value:function(){this.obstacles=this.obstacles.concat(new m)}},{key:"addTrash",value:function(){this.trash=this.trash.concat(new O)}},{key:"onVisibilityChange",value:function(t){"hidden"===document.visibilityState?this.gamePause("hide"):this.gamePause("show")}},{key:"draw",value:function(){if(this.gameIsActive)if(0===this.lives)this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),cancelAnimationFrame(this.animFrame),this.gameOver();else{this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.beach.draw(this.speed);var t={x:this.albatross.posX,y:this.albatross.pos};this.counter===this.timeout&&(setTimeout(this.addObstacle,Math.floor(1500*Math.random())+500),setTimeout(this.addTrash,Math.floor(500*Math.random())),this.counter=-1),this.counter=this.counter+1,this.totalPoints=this.totalPoints+1,this.detectObstacles(t),this.detectTrash(t),this.albatross.draw(this.speed,this.lives),this.ctx.fillStyle="white",this.ctx.fillText("Score: ".concat(100*this.score+this.totalPoints),10,40),this.animFrame=requestAnimationFrame(this.draw)}}},{key:"detectTrash",value:function(t){var e=this;this.trash.forEach((function(n,i){n.posX<-30&&delete e.trash[i],t.y-n.y<30&&t.y-n.y>-30&&n.posX-t.x<=60&&n.posX-t.x>=-5?(e.score=e.score+1,e.score%5==0&&e.speed<=e.maxSpeed&&(e.speed=e.speed+e.speed/4,e.speed>e.maxSpeed&&(e.timeout=90)),delete e.trash[i]):n.draw(e.ctx,e.speed)})),this.trash=this.trash.filter((function(t){return t}))}},{key:"detectObstacles",value:function(t){var e=this;this.obstacles.forEach((function(n,i){n.posX<-30&&delete e.obstacles[i],n.draw(e.ctx,e.speed),t.y-n.y<30&&t.y-n.y>-30&&n.posX-t.x<=60&&n.posX-t.x>=-5&&!n.hit&&(n.hit=!0,e.lives=e.lives-1,setTimeout((function(){e.bird.play()}),0))})),this.obstacles=this.obstacles.filter((function(t){return t}))}},{key:"gameOver",value:function(){var t=100*this.score+this.totalPoints,e="game over :(";localStorage.getItem("highScore")<t&&(localStorage.setItem("highScore",t),e="High score! "+t),this.points.store("score",{name:"Ada",score:t}),this.resetGameInfo(),this.openSplash(e),this.init()}},{key:"resetGameInfo",value:function(){this.gameIsActive=!1,this.trash=[],this.obstacles=[],this.score=0,this.speed=1.5,this.totalPoints=0,this.lives=5}},{key:"openSplash",value:function(t){document.getElementById("start-button").innerHTML="Play Again!",document.getElementById("splash").classList.remove("hide");var e=document.getElementById("game-over-msg");e.classList.remove("hide"),e.innerHTML=t}},{key:"gamePause",value:function(t){this.gameIsActive="hide"!==t}},{key:"sound",value:function(t){var e=this;this.sound=document.createElement("audio"),this.sound.src=t,this.sound.setAttribute("preload","auto"),this.sound.setAttribute("controls","none"),this.sound.style.display="none",document.body.appendChild(this.sound),this.play=function(){return e.sound.play()},this.stop=function(){return e.sound.pause()}}}])&&T(e.prototype,n),i&&T(e,i),t}();n(0),n(1);document.addEventListener("DOMContentLoaded",(function(){(new I).init()}))}]);
//# sourceMappingURL=main.js.map