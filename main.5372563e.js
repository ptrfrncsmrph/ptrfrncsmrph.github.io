parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"epB2":[function(require,module,exports) {
function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e){return o(e)||r(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function o(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}window.onload=function(){var n=t(document.querySelectorAll("nav > span")),r=t(document.querySelectorAll(".expand-parent")),o=Object.keys(n).reduce(function(t,n){return Object.assign(t,e({},n,new Set([])))},{});n.forEach(function(e,t){e.addEventListener("mouseenter",function(){r[t].classList.add("active");var e=Date.now().toString().slice(5);o[t].add(e),setTimeout(function(){o[t].delete(e)},500)}),e.addEventListener("mouseleave",function(){return setTimeout(function(){0==o[t].size&&r[t].classList.remove("active")},500)})})};
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.5372563e.map