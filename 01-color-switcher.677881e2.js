const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};let n=null;console.log(t.stopBtn),t.startBtn.addEventListener("click",(function(){n=setInterval((()=>{const n=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.body.style.backgroundColor=n}),1e3),t.startBtn.disabled=!0})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),t.startBtn.disabled=!1}));
//# sourceMappingURL=01-color-switcher.677881e2.js.map
