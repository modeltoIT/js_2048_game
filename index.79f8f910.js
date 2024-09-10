!function(){function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=Array(e);r<e;r++)a[r]=t[r];return a}function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);if("Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r={};function a(t,e){var r=function(t,e,r){if(!e.has(t))throw TypeError("attempted to get private field on non-instance");return e.get(t)}(t,e,0);return r.get?r.get.call(t):r.value}function n(t,e,r){!function(t,e){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,r)}var i=new WeakMap,s=new WeakMap;r=function(){var t;function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a(this,s);!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,r),n(this,i,{writable:!0,value:2}),n(this,s,{writable:!0,value:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]}),this.initialState=t,this.state=[],this.score=0,this.prevState=[],this.isChanged=!1,this.status="idle";var o=!0,l=!1,u=void 0;try{for(var h,c=t[Symbol.iterator]();!(o=(h=c.next()).done);o=!0){var f=h.value;this.state.push(e(f))}}catch(t){l=!0,u=t}finally{try{o||null==c.return||c.return()}finally{if(l)throw u}}}return t=[{key:"getStatus",value:function(){return this.status}},{key:"setStatus",value:function(t){this.status=t}},{key:"gameEnd",value:function(){for(var t=0;t<this.state.length;t++)for(var e=1;e<this.state[0].length;e++)if(this.state[t][e-1]===this.state[t][e]||this.state[e-1][t]===this.state[e][t]||0===this.state[t][e-1]||0===this.state[t][e])return!1;return this.setStatus("lose"),!0}},{key:"changes",value:function(t){this.isChanged=!1;for(var e=0;e<t.length;e++)for(var r=0;r<t[0].length;r++)if(this.state[e][r]!==t[e][r])return this.isChanged=!0,this.addValue(),this.isChanged;return this.isChanged}},{key:"freeSpaceToLeft",value:function(t){var e=!0,r=!1,a=void 0;try{for(var n,i=t[Symbol.iterator]();!(e=(n=i.next()).done);e=!0)for(var s=n.value,o=0;o<s.length;o++){var l=s.findIndex(function(t,e,r){if(0===r[e-1]&&0!==t)return!0}),u=s.slice(0,l).indexOf(0);-1!==u&&-1!==l&&(s[u]=s[l],s[l]=0)}}catch(t){r=!0,a=t}finally{try{e||null==i.return||i.return()}finally{if(r)throw a}}return t}},{key:"updateState",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,e=this.copyState(t);return e=this.freeSpaceToLeft(e),e=this.addUp(e),e=this.freeSpaceToLeft(e)}},{key:"moveLeft",value:function(){"playing"===this.getStatus()&&(this.prevState=this.copyState(this.state),this.state=this.updateState(),this.changes(this.prevState),this.gameEnd())}},{key:"moveRight",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state;if("playing"===this.getStatus()){var r=!0;t===this.state&&(r=!1,this.prevState=this.copyState(this.state));var a=[],n=!0,i=!1,s=void 0;try{for(var o,l=t[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var u=o.value;a.push(e(u).toReversed())}}catch(t){i=!0,s=t}finally{try{n||null==l.return||l.return()}finally{if(i)throw s}}a=this.updateState(a),this.state=[];var h=!0,c=!1,f=void 0;try{for(var v,y=a[Symbol.iterator]();!(h=(v=y.next()).done);h=!0){var d=v.value;this.state.push(e(d).toReversed())}}catch(t){c=!0,f=t}finally{try{h||null==y.return||y.return()}finally{if(c)throw f}}return r||(this.changes(this.prevState),this.gameEnd()),this.state}}},{key:"transposeMatrix",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,e=this.copyState(t),r=0;r<t.length;r++)for(var a=0;a<t[0].length;a++)e[a][r]=t[r][a];return e}},{key:"moveUp",value:function(){this.upOrDown(this.updateState)}},{key:"moveDown",value:function(){this.upOrDown(this.moveRight)}},{key:"upOrDown",value:function(t){if("playing"===this.getStatus()){this.prevState=this.copyState(this.state);var e=this.transposeMatrix();e=t.call(this,e),this.state=this.transposeMatrix(e),this.changes(this.prevState),this.gameEnd()}}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.state}},{key:"start",value:function(){this.setStatus("playing"),this.validateInitialState();for(var t=0;t<a(this,i);t++)this.addValue()}},{key:"restart",value:function(){this.state=this.copyState(),this.setStatus("idle"),this.score=0}},{key:"copyState",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.initialState,r=[],a=!0,n=!1,i=void 0;try{for(var s,o=t[Symbol.iterator]();!(a=(s=o.next()).done);a=!0){var l=s.value;r.push(e(l))}}catch(t){n=!0,i=t}finally{try{a||null==o.return||o.return()}finally{if(n)throw i}}return r}},{key:"addValue",value:function(){for(var t=0,e=0;e<1;e++){var r=Math.floor(Math.random()*this.state.length),a=Math.floor(Math.random()*this.state[0].length),n=.9>Math.random()?2:4;if(t++>1e3)break;if(0!==this.state[a][r]){e--;continue}this.state[a][r]=n}}},{key:"addUp",value:function(t){var e=!0,r=!1,a=void 0;try{for(var n,i=t[Symbol.iterator]();!(e=(n=i.next()).done);e=!0)for(var s=n.value,o=1;o<s.length;o++)s[o-1]===s[o]&&(s[o-1]=s[o-1]+s[o],this.score+=s[o-1],s[o]=0,s[o-1]>=2048&&this.setStatus("win"))}catch(t){r=!0,a=t}finally{try{e||null==i.return||i.return()}finally{if(r)throw a}}return t}},{key:"validateInitialState",value:function(){var t=0,e=!0,r=!1,n=void 0;try{for(var i,o=this.state[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var l=i.value,u=!0,h=!1,c=void 0;try{for(var f,v=l[Symbol.iterator]();!(u=(f=v.next()).done);u=!0){var y=f.value;if(y%2!=0||y>2048||y<0)return this.state=this.copyState(a(this,s)),!1}}catch(t){h=!0,c=t}finally{try{u||null==v.return||v.return()}finally{if(h)throw c}}t+=l.reduce(function(t,e){return t+e})}}catch(t){r=!0,n=t}finally{try{e||null==o.return||o.return()}finally{if(r)throw n}}return 0!==t}}],function(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}(r.prototype,t),r}();var o=document.querySelector(".button"),l=document.querySelector(".message-start"),u=document.querySelector(".message-win"),h=document.querySelector(".message-lose"),c=document.querySelectorAll(".field-cell"),f=document.querySelector(".game-score");function v(){var t=[],r=!0,a=!1,n=void 0;try{for(var i,s=y.state[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var o=i.value;t.push.apply(t,e(o))}}catch(t){a=!0,n=t}finally{try{r||null==s.return||s.return()}finally{if(a)throw n}}for(var l=0;l<c.length;l++)c[l].classList.length>1&&c[l].classList.remove(c[l].classList[c[l].classList.length-1]),0!==t[l]?(c[l].textContent=t[l],c[l].classList.add("field-cell--".concat(t[l]))):c[l].textContent="";f.textContent=y.score,"win"===y.getStatus()&&u.classList.remove("hidden"),"lose"===y.getStatus()&&h.classList.remove("hidden")}var y=new r([[123,128,0,8],[16,8,16,32],[8,16,32,64],[16,32,0,128]]);o.addEventListener("click",function(){o.classList.contains("start")&&y.start(),o.classList.contains("restart")&&(h.classList.contains("hidden")||h.classList.add("hidden"),u.classList.contains("hidden")||u.classList.add("hidden"),y.restart(),y.start()),o.classList.remove("start"),o.textContent="Restart",o.classList.add("restart"),l.classList.add("hidden"),v()}),document.addEventListener("keydown",function(t){u.classList.contains("hidden")&&o.classList.contains("restart")&&("ArrowLeft"===t.key&&y.moveLeft(),"ArrowRight"===t.key&&y.moveRight(),"ArrowUp"===t.key&&y.moveUp(),"ArrowDown"===t.key&&y.moveDown(),("ArrowUp"===t.key||"ArrowDown"===t.key||"ArrowLeft"===t.key||"ArrowRight"===t.key)&&v())})}();
//# sourceMappingURL=index.79f8f910.js.map