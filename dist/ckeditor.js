/*!
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):"object"==typeof exports?exports.CKEditor=e(require("vue")):t.CKEditor=e(t.Vue)}(window,(function(t){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n(2))},function(e,n){e.exports=t},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);n(1);var i=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},o=n(0),r="object"==typeof self&&self&&self.Object===Object&&self,a=o.a||r||Function("return this")(),u=function(){return a.Date.now()},c=a.Symbol,l=Object.prototype,s=l.hasOwnProperty,f=l.toString,d=c?c.toStringTag:void 0;var p=function(t){var e=s.call(t,d),n=t[d];try{t[d]=void 0;var i=!0}catch(t){}var o=f.call(t);return i&&(e?t[d]=n:delete t[d]),o},m=Object.prototype.toString;var v=function(t){return m.call(t)},y=c?c.toStringTag:void 0;var b=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":y&&y in Object(t)?p(t):v(t)};var h=function(t){return null!=t&&"object"==typeof t};var g=function(t){return"symbol"==typeof t||h(t)&&"[object Symbol]"==b(t)},j=/^\s+|\s+$/g,$=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,O=/^0o[0-7]+$/i,x=parseInt;var w=function(t){if("number"==typeof t)return t;if(g(t))return NaN;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(j,"");var n=_.test(t);return n||O.test(t)?x(t.slice(2),n?2:8):$.test(t)?NaN:+t},S=Math.max,E=Math.min;var T=function(t,e,n){var o,r,a,c,l,s,f=0,d=!1,p=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(e){var n=o,i=r;return o=r=void 0,f=e,c=t.apply(i,n)}function y(t){return f=t,l=setTimeout(h,e),d?v(t):c}function b(t){var n=t-s;return void 0===s||n>=e||n<0||p&&t-f>=a}function h(){var t=u();if(b(t))return g(t);l=setTimeout(h,function(t){var n=e-(t-s);return p?E(n,a-(t-f)):n}(t))}function g(t){return l=void 0,m&&o?v(t):(o=r=void 0,c)}function j(){var t=u(),n=b(t);if(o=arguments,r=this,s=t,n){if(void 0===l)return y(s);if(p)return clearTimeout(l),l=setTimeout(h,e),v(s)}return void 0===l&&(l=setTimeout(h,e)),c}return e=w(e)||0,i(n)&&(d=!!n.leading,a=(p="maxWait"in n)?S(w(n.maxWait)||0,e):a,m="trailing"in n?!!n.trailing:m),j.cancel=function(){void 0!==l&&clearTimeout(l),f=0,o=s=r=l=void 0},j.flush=function(){return void 0===l?c:g(u())},j};var N={name:"ckeditor",render(t){return t(this.tagName)},model:{prop:"modelValue",event:"update:modelValue"},props:{className:{type:Array,default:[]},editor:{type:Function,default:null},modelValue:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({$_instance:null,$_lastEditorData:{type:String,default:""}}),mounted(){const t=Object.assign({},this.config);this.modelValue&&(t.initialData=this.modelValue),this.editor.create(this.$el,t).then(t=>{this.$_instance=t,t.isReadOnly=this.disabled,this.$_setUpEditorEvents(),this.className.forEach(t=>{this.$el.nextElementSibling.getElementsByClassName("ck ck-editor__main")[0].classList.add(t)}),this.$emit("ready",t)}).catch(t=>{console.error(t)})},beforeUnmount(){this.$_instance&&(this.$_instance.destroy(),this.$_instance=null),this.$emit("destroy",this.$_instance)},watch:{modelValue(t,e){t!==e&&t!==this.$_lastEditorData&&this.$_instance.setData(t)},disabled(t){this.$_instance.isReadOnly=t}},methods:{$_setUpEditorEvents(){const t=this.$_instance,e=T(e=>{const n=this.$_lastEditorData=t.getData();this.$emit("update:modelValue",n,e,t),this.$emit("input",n,e,t)},300,{leading:!0});t.model.document.on("change:data",e),t.editing.view.document.on("focus",e=>{this.$emit("focus",e,t)}),t.editing.view.document.on("blur",e=>{this.$emit("blur",e,t)})}}};const V={install(t){t.component("ckeditor",N)},component:N};e.default=V}]).default}));
//# sourceMappingURL=ckeditor.js.map