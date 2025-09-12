/// execute_script.js
window.addEventListener("keyup", e => {
  if (e.ctrlKey && e.which === 192) {
    fetch("https://raw.githubusercontent.com/bolt342/ilovepizza200/refs/heads/main/nerfedgui.js")
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then(code => {
        try {
          new Function(code)();
        } catch (err) {
          console.error(err);
          alert("Execution error: " + err.message);
        }
      })
      .catch(err => {
        console.error(err);
        alert("Failed to load GUI: " + err.message);
      });
  }
});
