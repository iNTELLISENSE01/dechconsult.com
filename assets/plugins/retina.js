!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.retinajs=e()}(this,(function(){"use strict";function t(t){return Array.prototype.slice.call(t)}function e(t){var e=parseInt(t,10);return d<e?d:e}function n(t,e){var n=t.nodeName.toLowerCase(),i=document.createElement("img");i.addEventListener("load",(function(){"img"===n?function(t){return t.hasAttribute("data-no-resize")||(0===t.offsetWidth&&0===t.offsetHeight?(t.setAttribute("width",t.naturalWidth),t.setAttribute("height",t.naturalHeight)):(t.setAttribute("width",t.offsetWidth),t.setAttribute("height",t.offsetHeight))),t}(t).setAttribute("src",e):t.style.backgroundImage="url("+e+")"})),i.setAttribute("src",e),t.setAttribute(l,!0)}function i(t,i){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,o=e(r);if(i&&1<o){var u=i.replace(f,"@"+o+"x$1");n(t,u)}}function r(t,e,i){1<d&&n(t,i)}function o(e){return e?"function"==typeof e.forEach?e:t(e):"undefined"==typeof document?[]:t(document.querySelectorAll(c))}function u(t){o(t).forEach((function(t){if(!t.getAttribute(l)){var e="img"===t.nodeName.toLowerCase()?t.getAttribute("src"):function(t){return t.style.backgroundImage.replace(s,"$2")}(t),n=t.getAttribute("data-rjs"),o=!isNaN(parseInt(n,10));if(null===n)return;o?i(t,e,n):r(t,0,n)}}))}var a="undefined"!=typeof window,d=Math.round(a&&window.devicePixelRatio||1),f=/(\.[A-z]{3,4}\/?(\?.*)?)$/,s=/url\(('|")?([^)'"]+)('|")?\)/i,c="[data-rjs]",l="data-rjs-processed";return a&&(window.addEventListener("load",(function(){u()})),window.retinajs=u),u}));