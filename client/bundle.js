!function(t){var i={};function e(s){if(i[s])return i[s].exports;var o=i[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var o in t)e.d(s,o,function(i){return t[i]}.bind(null,o));return s},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=0)}([function(t,i,e){"use strict";e.r(i);var s=function t(){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.geometry=new THREE.BoxGeometry(.9,.9,.9),this.material=new THREE.MeshLambertMaterial({color:11184810}),this.mesh=new THREE.Mesh(this.geometry,this.material)};function o(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var n=function(){function t(){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t)}var i,e,n;return i=t,(e=[{key:"init",value:function(t){this.cubes=[];for(var i=0;i<4;++i){for(var e=[],o=0;o<50;++o){for(var n=0,r=[],a=0;a<50;++a)r.push(new s),r[n].mesh.position.x=o,r[n].mesh.position.y=10*i,r[n].mesh.position.z=a,t.add(r[n].mesh),++n;e.push(r)}this.cubes.push(e)}this.stairs=[];for(var h=30;h<32;++h)for(var c=30;c<32;++c)this.stairs.push(new s),this.stairs[this.stairs.length-1].mesh.position.x=1.2*h,this.stairs[this.stairs.length-1].mesh.position.y=2.5,this.stairs[this.stairs.length-1].mesh.position.z=1.2*c,t.add(this.stairs[this.stairs.length-1].mesh);for(var l=28;l<30;++l)for(var p=28;p<30;++p)this.stairs.push(new s),this.stairs[this.stairs.length-1].mesh.position.x=1.2*l,this.stairs[this.stairs.length-1].mesh.position.y=5,this.stairs[this.stairs.length-1].mesh.position.z=1.2*p,t.add(this.stairs[this.stairs.length-1].mesh);for(var m=26;m<28;++m)for(var u=26;u<28;++u)this.stairs.push(new s),this.stairs[this.stairs.length-1].mesh.position.x=1.2*m,this.stairs[this.stairs.length-1].mesh.position.y=7.5,this.stairs[this.stairs.length-1].mesh.position.z=1.2*u,t.add(this.stairs[this.stairs.length-1].mesh);for(var y=30;y<32;++y)for(var d=30;d<32;++d)this.stairs.push(new s),this.stairs[this.stairs.length-1].mesh.position.x=1.2*y,this.stairs[this.stairs.length-1].mesh.position.y=12.5,this.stairs[this.stairs.length-1].mesh.position.z=1.2*d,t.add(this.stairs[this.stairs.length-1].mesh);for(var f=28;f<30;++f)for(var v=28;v<30;++v)this.stairs.push(new s),this.stairs[this.stairs.length-1].mesh.position.x=1.2*f,this.stairs[this.stairs.length-1].mesh.position.y=15,this.stairs[this.stairs.length-1].mesh.position.z=1.2*v,t.add(this.stairs[this.stairs.length-1].mesh);for(var g=26;g<28;++g)for(var b=26;b<28;++b)this.stairs.push(new s),this.stairs[this.stairs.length-1].mesh.position.x=1.2*g,this.stairs[this.stairs.length-1].mesh.position.y=17.5,this.stairs[this.stairs.length-1].mesh.position.z=1.2*b,t.add(this.stairs[this.stairs.length-1].mesh);for(var x=30;x<32;++x)for(var w=30;w<32;++w)this.stairs.push(new s),this.stairs[this.stairs.length-1].mesh.position.x=1.2*x,this.stairs[this.stairs.length-1].mesh.position.y=22.5,this.stairs[this.stairs.length-1].mesh.position.z=1.2*w,t.add(this.stairs[this.stairs.length-1].mesh);for(var z=28;z<30;++z)for(var k=28;k<30;++k)this.stairs.push(new s),this.stairs[this.stairs.length-1].mesh.position.x=1.2*z,this.stairs[this.stairs.length-1].mesh.position.y=25,this.stairs[this.stairs.length-1].mesh.position.z=1.2*k,t.add(this.stairs[this.stairs.length-1].mesh);for(var E=26;E<28;++E)for(var M=26;M<28;++M)this.stairs.push(new s),this.stairs[this.stairs.length-1].mesh.position.x=1.2*E,this.stairs[this.stairs.length-1].mesh.position.y=27.5,this.stairs[this.stairs.length-1].mesh.position.z=1.2*M,t.add(this.stairs[this.stairs.length-1].mesh);this.blocks=[];for(var P=0;P<2;++P)for(var S=0;S<2;++S)for(var T=0;T<3;++T)for(var C=0;C<3;++C)for(var K=0;K<3;++K)this.blocks.push(new s),this.blocks[this.blocks.length-1].mesh.position.x=12+1.2*T+25*P*1.2,this.blocks[this.blocks.length-1].mesh.position.y=1.2+1.2*C,this.blocks[this.blocks.length-1].mesh.position.z=12+1.2*K+25*S*1.2,t.add(this.blocks[this.blocks.length-1].mesh)}}])&&o(i.prototype,e),n&&o(i,n),t}();function r(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var a=function(){function t(i){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),this.angle=180,this.target=new THREE.Vector3(0,0,1),this.controller=i,this.controller.handleKeyInput(),this.controller.handleMouseMove(this),this.yVelocity=0,this.gravity=-.0015}var i,e,s;return i=t,(e=[{key:"update",value:function(t){(this.controller.moveKeys.get(37)||this.controller.moveKeys.get(65))&&this.camera.translateX(-.1),(this.controller.moveKeys.get(39)||this.controller.moveKeys.get(68))&&this.camera.translateX(.1),(this.controller.moveKeys.get(38)||this.controller.moveKeys.get(87))&&this.camera.translateZ(-.1),(this.controller.moveKeys.get(40)||this.controller.moveKeys.get(83))&&this.camera.translateZ(.1),this.yVelocity+=this.gravity,this.camera.position.y+=this.yVelocity;var i=Math.round(this.camera.position.x),e=Math.round((this.camera.position.y-2)/10),s=Math.round(this.camera.position.z);0<i&&i<t.cubes[0].length&&0<s&&s<t.cubes[0][0].length&&(this.camera.position.x<t.cubes[e][i][s].mesh.position.x+1&&this.camera.position.x>t.cubes[e][i][s].mesh.position.x-1&&this.camera.position.z<t.cubes[e][i][s].mesh.position.z+1&&this.camera.position.z>t.cubes[e][i][s].mesh.position.z-1&&this.camera.position.y>t.cubes[e][i][s].mesh.position.y+1&&this.camera.position.y<t.cubes[e][i][s].mesh.position.y+9&&(this.gravity=-.0015,this.yVelocity+=this.gravity,this.camera.position.y+=this.yVelocity,this.jumping=!1),this.camera.position.x<t.cubes[e][i][s].mesh.position.x+1&&this.camera.position.x>t.cubes[e][i][s].mesh.position.x-1&&this.camera.position.y<=t.cubes[e][i][s].mesh.position.y+1&&this.camera.position.y>t.cubes[e][i][s].mesh.position.y&&this.camera.position.z<t.cubes[e][i][s].mesh.position.z+1&&this.camera.position.z>t.cubes[e][i][s].mesh.position.z-1&&(this.yVelocity=0,this.camera.position.y=t.cubes[e][i][s].mesh.position.y+1,this.jumping=!0,this.controller.moveKeys.get(32)&&this.jumping&&(this.gravity=.0015,this.yVelocity=.1,this.camera.position.y+=this.yVelocity)));var o=!0,n=!1,r=void 0;try{for(var a,h=t.stairs[Symbol.iterator]();!(o=(a=h.next()).done);o=!0){var c=a.value;this.camera.position.x<c.mesh.position.x+1&&this.camera.position.x>c.mesh.position.x-1&&this.camera.position.y<=c.mesh.position.y+1&&this.camera.position.y>c.mesh.position.y&&this.camera.position.z<c.mesh.position.z+1&&this.camera.position.z>c.mesh.position.z-1&&(this.yVelocity=0,this.camera.position.y=c.mesh.position.y+1,this.jumping=!0,this.controller.moveKeys.get(32)&&this.jumping&&(this.gravity=.0015,this.yVelocity=.1,this.camera.position.y+=this.yVelocity))}}catch(t){n=!0,r=t}finally{try{o||null==h.return||h.return()}finally{if(n)throw r}}var l=!0,p=!1,m=void 0;try{for(var u,y=t.blocks[Symbol.iterator]();!(l=(u=y.next()).done);l=!0){var d=u.value;this.camera.position.x<d.mesh.position.x+1.2&&this.camera.position.x>d.mesh.position.x&&this.camera.position.y<d.mesh.position.y+1&&this.camera.position.y>d.mesh.position.y-1&&this.camera.position.z<d.mesh.position.z+1&&this.camera.position.z>d.mesh.position.z-1&&(this.camera.position.x=d.mesh.position.x+1.2),this.camera.position.x<d.mesh.position.x&&this.camera.position.x>d.mesh.position.x-1.2&&this.camera.position.y<d.mesh.position.y+1&&this.camera.position.y>d.mesh.position.y-1&&this.camera.position.z<d.mesh.position.z+1&&this.camera.position.z>d.mesh.position.z-1&&(this.camera.position.x=d.mesh.position.x-1.2),this.camera.position.x<d.mesh.position.x+1&&this.camera.position.x>d.mesh.position.x-1&&this.camera.position.y<d.mesh.position.y+1&&this.camera.position.y>d.mesh.position.y-1&&this.camera.position.z<d.mesh.position.z+1.2&&this.camera.position.z>d.mesh.position.z&&(this.camera.position.z=d.mesh.position.z+1.2),this.camera.position.x<d.mesh.position.x+1&&this.camera.position.x>d.mesh.position.x-1&&this.camera.position.y<d.mesh.position.y+1&&this.camera.position.y>d.mesh.position.y-1&&this.camera.position.z<d.mesh.position.z&&this.camera.position.z>d.mesh.position.z-1.2&&(this.camera.position.z=d.mesh.position.z-1.2)}}catch(t){p=!0,m=t}finally{try{l||null==y.return||y.return()}finally{if(p)throw m}}}}])&&r(i.prototype,e),s&&r(i,s),t}();function h(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var c=Math.PI/2,l=function(){function t(){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.moveKeys=new Map([[37,!1],[38,!1],[39,!1],[40,!1],[87,!1],[65,!1],[83,!1],[68,!1],[32,!1]])}var i,e,s;return i=t,(e=[{key:"handleKeyInput",value:function(){var t=this;document.addEventListener("keydown",function(i){i.preventDefault(),t.moveKeys.has(i.keyCode)&&!t.moveKeys.get(i.keyCode)&&t.moveKeys.set(i.keyCode,!0)}),document.addEventListener("keyup",function(i){i.preventDefault(),t.moveKeys.has(i.keyCode)&&t.moveKeys.get(i.keyCode)&&t.moveKeys.set(i.keyCode,!1)})}},{key:"handleMouseMove",value:function(t){var i=new THREE.Euler(0,0,0,"YXZ");document.addEventListener("mousemove",function(e){i.setFromQuaternion(t.camera.quaternion),i.y-=.004*e.movementX,i.x-=.004*e.movementY,i.x=Math.max(-c,Math.min(c,i.x)),t.camera.quaternion.setFromEuler(i)})}}])&&h(i.prototype,e),s&&h(i,s),t}(),p=function t(){var i=0,e=document.createElement("div");function s(t){return e.appendChild(t.dom),t}function o(t){for(var s=0;s<e.children.length;s++)e.children[s].style.display=s===t?"block":"none";i=t}e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(t){t.preventDefault(),o(++i%e.children.length)},!1);var n=(performance||Date).now(),r=n,a=0,h=s(new t.Panel("FPS","#0ff","#002")),c=s(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=s(new t.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:e,addPanel:s,showPanel:o,begin:function(){n=(performance||Date).now()},end:function(){a++;var t=(performance||Date).now();if(c.update(t-n,200),t>=r+1e3&&(h.update(1e3*a/(t-r),100),r=t,a=0,l)){var i=performance.memory;l.update(i.usedJSHeapSize/1048576,i.jsHeapSizeLimit/1048576)}return t},update:function(){n=this.end()},domElement:e,setMode:o}};p.Panel=function(t,i,e){var s=1/0,o=0,n=Math.round,r=n(window.devicePixelRatio||1),a=80*r,h=48*r,c=3*r,l=2*r,p=3*r,m=15*r,u=74*r,y=30*r,d=document.createElement("canvas");d.width=a,d.height=h,d.style.cssText="width:80px;height:48px";var f=d.getContext("2d");return f.font="bold "+9*r+"px Helvetica,Arial,sans-serif",f.textBaseline="top",f.fillStyle=e,f.fillRect(0,0,a,h),f.fillStyle=i,f.fillText(t,c,l),f.fillRect(p,m,u,y),f.fillStyle=e,f.globalAlpha=.9,f.fillRect(p,m,u,y),{dom:d,update:function(h,v){s=Math.min(s,h),o=Math.max(o,h),f.fillStyle=e,f.globalAlpha=1,f.fillRect(0,0,a,m),f.fillStyle=i,f.fillText(n(h)+" "+t+" ("+n(s)+"-"+n(o)+")",c,l),f.drawImage(d,p+r,m,u-r,y,p,m,u-r,y),f.fillRect(p+u-r,m,r,y),f.fillStyle=e,f.globalAlpha=.9,f.fillRect(p+u-r,m,r,n((1-h/v)*y))}}};var m=p;function u(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var y=function(){function t(i){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.scene=new THREE.Scene,this.stage=new n,this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.socket=io("/",{path:"/ws/socket.io"}),this.connected=!1,this.player=i,this.players=new Map,this.id=Math.floor(1e4*Math.random())}var i,e,o;return i=t,(e=[{key:"init",value:function(){var t=this;this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(8947712,1),document.body.appendChild(this.renderer.domElement),this.renderer.domElement.addEventListener("click",function(){t.renderer.domElement.requestPointerLock()}),this.stage.init(this.scene);var i=new THREE.DirectionalLight(16777215);i.position.set(25,1e3,25),this.scene.add(i);var e=new THREE.SpotLight(16777215,2,40,Math.PI/2,1,.5);e.position.set(25,35,25),this.scene.add(e),this.player.camera.position.set(25,4,25),this.stats=new m,document.body.appendChild(this.stats.dom)}},{key:"connect",value:function(){var t=this;this.socket.emit("connected",{clientID:this.id,position:this.player.camera.position}),this.socket.on("disconnect",function(){}),this.socket.on("connected",function(i){i.newUser.clientID!==t.id?t.addUser(i.newUser):(i.currentUsers.filter(function(i){return!t.players.has(i.clientID)}).forEach(function(i){t.addUser(i)}),t.connected=!0)}),this.socket.on("disconnected",function(i){var e=t.players.get(i);t.scene.remove(e.mesh),e.geometry.dispose(),e.material.dispose(),t.players.delete(i)}),this.socket.on("updatePosition",function(i){i.clientID!==t.id&&t.connected&&t.updatePosition(i)})}},{key:"addUser",value:function(t){var i=new s;i.mesh.position.x=t.position.x,i.mesh.position.y=t.position.y,i.mesh.position.z=t.position.z,this.scene.add(i.mesh),this.players.set(t.clientID,i)}},{key:"updatePosition",value:function(t){var i=this.players.get(t.clientID);i.mesh.position.x=t.position.x,i.mesh.position.y=t.position.y,i.mesh.position.z=t.position.z}},{key:"render",value:function(){this.renderer.render(this.scene,this.player.camera)}}])&&u(i.prototype,e),o&&u(i,o),t}();document.addEventListener("DOMContentLoaded",function(){var t=new y(new a(new l));t.init(),t.scene.add(t.player.camera),t.connect(),function i(){t.stats.update(),t.player.prevPos=Object.assign({},t.player.camera.position),t.player.update(t.stage),JSON.stringify(t.player.camera.position)!=JSON.stringify(t.player.prevPos)&&t.socket.emit("updatePosition",{clientID:t.id,position:t.player.camera.position}),t.render(),requestAnimationFrame(i)}()})}]);
//# sourceMappingURL=bundle.js.map