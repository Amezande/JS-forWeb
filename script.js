    const buttons = document.querySelectorAll('.buttons-n');
    const screen = document.getElementById('screen'); /*Para reconocer los botones*/
    let normal = '';

    buttons.forEach(button => {
      button.addEventListener('click',() => { /*Esto referencia una clase inmediata*/
      const botonValor = button.innerText;
      normal += botonValor;
      screen.value = normal;
      });
    });
