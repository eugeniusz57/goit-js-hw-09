!function(){var t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")},e=null;t.btnStart.addEventListener("click",(function(){e=setInterval((function(){t.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.btnStart.setAttribute("disabled",!0),t.btnStop.removeAttribute("disabled")})),t.btnStop.addEventListener("click",(function(){clearInterval(e),t.btnStop.setAttribute("disabled",!0),t.btnStart.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.36588818.js.map