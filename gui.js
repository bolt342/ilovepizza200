/// execute_script.js
(function() {
  window.addEventListener("keyup", event => {
    if (event.ctrlKey && event.which === 192) {
      createInjectorUI();
    }
  });

  function createInjectorUI() {
    const existing = document.getElementById('injector-panel');
    if (existing) {
      existing.style.display = 'block';
      return;
    }

    const panel = document.createElement('div');
    panel.id = 'injector-panel';
    Object.assign(panel.style, {
      position: 'fixed',
      top: '20px',
      left: '20px',
      width: '300px',
      background: 'black',
      color: 'red',
      padding: '10px',
      border: '3px solid red',
      fontFamily: 'sans-serif',
      boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
      borderRadius: '0',
      zIndex: '9999'
    });

    const title = document.createElement('div');
    title.textContent = ' c00lgui v2';
    Object.assign(title.style, {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '10px',
      textAlign: 'center',
      borderBottom: '3px solid red',
      paddingBottom: '5px'
    });
    panel.appendChild(title);

    const label = document.createElement('label');
    label.textContent = 'Inject:';
    label.style.display = 'block';
    label.style.marginBottom = '5px';
    panel.appendChild(label);

    const textarea = document.createElement('textarea');
    Object.assign(textarea.style, {
      width: '100%',
      height: '100px',
      background: 'black',
      color: 'red',
      border: '3px solid red',
      padding: '5px',
      resize: 'vertical',
      borderRadius: '0'
    });
    panel.appendChild(textarea);

    const button = document.createElement('button');
    button.textContent = 'Execute';
    Object.assign(button.style, {
      marginTop: '8px',
      width: '100%',
      padding: '8px',
      background: 'black',
      color: 'red',
      border: '3px solid red',
      cursor: 'pointer',
      fontWeight: 'bold',
      borderRadius: '0'
    });
    panel.appendChild(button);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    Object.assign(closeBtn.style, {
      marginTop: '5px',
      width: '100%',
      padding: '8px',
      background: 'black',
      color: 'red',
      border: '3px solid red',
      cursor: 'pointer',
      fontWeight: 'bold',
      borderRadius: '0'
    });
    panel.appendChild(closeBtn);

    document.body.appendChild(panel);

    button.addEventListener('click', () => {
      let code = textarea.value;
      if (code.startsWith('javascript:')) {
        code = code.substring(11);
      }
      try {
        Function(code)();
      } catch (err) {
        console.error(err);
        alert('Error: ' + err.message);
      }
    });

    closeBtn.addEventListener('click', () => {
      panel.style.display = 'none';
    });
  }
})();
