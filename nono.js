window.addEventListener("keyup", async e => {
  if (e.ctrlKey && e.key === '`') {
    try {
      const res = await fetch("https://raw.githubusercontent.com/bolt342/ilovepizza200/refs/heads/main/nerfedgui.js");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      new Function(await res.text())();
    } catch (err) {
      console.error(err);
      alert(`Error: ${err.message}`);
    }
  }
});

