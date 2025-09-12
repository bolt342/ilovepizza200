window.addEventListener("keyup", e => {
  if (e.ctrlKey && e.which === 192) {
    let panel = document.getElementById("injector-panel");
    if (panel) {
      panel.style.display = "block";
      return;
    }

    const t = document.createElement("div");
    t.id = "injector-panel";
    Object.assign(t.style, {
      position: "fixed",
      top: "20px",
      left: "20px",
      width: "300px",
      background: "black",
      color: "red",
      padding: "10px",
      border: "3px solid red",
      fontFamily: "sans-serif",
      boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
      borderRadius: "0",
      zIndex: "9999",
      cursor: "move"
    });

    const l = document.createElement("div");
    l.textContent = " c00lgui v2";
    Object.assign(l.style, {
      fontSize: "16px",
      fontWeight: "bold",
      marginBottom: "10px",
      textAlign: "center",
      borderBottom: "3px solid red",
      paddingBottom: "5px",
      cursor: "move"
    });
    t.appendChild(l);

    const a = document.createElement("label");
    a.textContent = "Inject:";
    Object.assign(a.style, { display: "block", marginBottom: "5px" });
    t.appendChild(a);

    const o = document.createElement("textarea");
    Object.assign(o.style, {
      width: "100%",
      height: "100px",
      background: "black",
      color: "red",
      border: "3px solid red",
      padding: "5px",
      resize: "vertical",
      borderRadius: "0"
    });
    t.appendChild(o);

    const n = document.createElement("button");
    n.textContent = "Execute";
    Object.assign(n.style, {
      marginTop: "8px",
      width: "100%",
      padding: "8px",
      background: "black",
      color: "red",
      border: "3px solid red",
      cursor: "pointer",
      fontWeight: "bold",
      borderRadius: "0"
    });
    t.appendChild(n);

    const c = document.createElement("button");
    c.textContent = "Close";
    Object.assign(c.style, {
      marginTop: "5px",
      width: "100%",
      padding: "8px",
      background: "black",
      color: "red",
      border: "3px solid red",
      cursor: "pointer",
      fontWeight: "bold",
      borderRadius: "0"
    });
    t.appendChild(c);

    document.body.appendChild(t);

    n.addEventListener("click", () => {
      let code = o.value;
      if (code.startsWith("javascript:")) code = code.substring(11);
      try {
        eval(code);
      } catch (err) {
        console.error(err);
        alert("Error: " + err.message);
      }
    });

    c.addEventListener("click", () => {
      t.style.display = "none";
    });

    let offsetX, offsetY, isDragging = false;

    l.addEventListener("mousedown", e => {
      isDragging = true;
      offsetX = e.clientX - t.offsetLeft;
      offsetY = e.clientY - t.offsetTop;
      document.addEventListener("mousemove", drag);
      document.addEventListener("mouseup", stopDrag);
    });

    function drag(e) {
      if (!isDragging) return;
      t.style.left = e.clientX - offsetX + "px";
      t.style.top = e.clientY - offsetY + "px";
    }

    function stopDrag() {
      isDragging = false;
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("mouseup", stopDrag);
    }
  }
});
