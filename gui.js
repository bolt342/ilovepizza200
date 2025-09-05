/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
    createInjectorUI();
  }
});

function createInjectorUI() {
  if (document.getElementById('injector-panel')) {
    document.getElementById('injector-panel').style.display = 'block';
    return;
  }

  const panel = document.createElement('div');
  panel.id = 'injector-panel';
  panel.style.position = 'fixed';
  panel.style.top = '20px';
  panel.style.left = '20px';
  panel.style.width = '300px';
  panel.style.background = 'black';
  panel.style.color = 'red'; // text color
  panel.style.padding = '10px';
  panel.style.border = '3px solid red'; // outline
  panel.style.fontFamily = 'sans-serif';
  panel.style.boxShadow = '0 4px 10px rgba(0,0,0,0.4)';
  panel.style.borderRadius = '0';
  panel.style.zIndex = '9999';

  // Title
  const title = document.createElement('div');
  title.textContent = ' c00lgui v2';
  title.style.fontSize = '16px';
  title.style.fontWeight = 'bold';
  title.style.marginBottom = '10px';
  title.style.textAlign = 'center';
  title.style.borderBottom = '3px solid red';
  title.style.paddingBottom = '5px';
  panel.appendChild(title);

  // Label
  const label = document.createElement('label');
  label.textContent = 'Inject:';
  label.style.display = 'block';
  label.style.marginBottom = '5px';
  panel.appendChild(label);

  // Textarea
  const textarea = document.createElement('textarea');
  textarea.style.width = '100%';
  textarea.style.height = '100px';
  textarea.style.background = 'black';
  textarea.style.color = 'red';
  textarea.style.border = '3px solid red';
  textarea.style.padding = '5px';
  textarea.style.resize = 'vertical';
  textarea.style.borderRadius = '0';
  panel.appendChild(textarea);

  // Run button
  const button = document.createElement('button');
  button.textContent = 'Execute';
  button.style.marginTop = '8px';
  button.style.width = '100%';
  button.style.padding = '8px';
  button.style.background = 'black';
  button.style.color = 'red';
  button.style.border = '3px solid red';
  button.style.cursor = 'pointer';
  button.style.fontWeight = 'bold';
  button.style.borderRadius = '0';
  panel.appendChild(button);
  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'Close';
  closeBtn.style.marginTop = '5px';
  closeBtn.style.width = '100%';
  closeBtn.style.padding = '8px';
  closeBtn.style.background = 'black';
  closeBtn.style.color = 'red';
  closeBtn.style.border = '3px solid red';
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.fontWeight = 'bold';
  closeBtn.style.borderRadius = '0';
  panel.appendChild(closeBtn);
  document.body.appendChild(panel);
  button.addEventListener('click', () => {
    let code = textarea.value;
    if (code.startsWith('javascript:')) {
      code = code.substring(11);
    }
    try {
      const fn = new Function(code);
      fn();
    } catch (err) {
      console.error(err);
      alert('Error: ' + err.message);
    }
  });

  // Close panel
  closeBtn.addEventListener('click', () => {
    panel.style.display = 'none';
  });
}
