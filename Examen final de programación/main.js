function mostrar1(radio) {
    const mensajeElement = document.getElementById('Mensaje1');
    if (mensajeElement) {
      mensajeElement.textContent = `Tipo de zapato seleccionado: ${radio.value}`;
    }
  }
  
  function mostrar2(select){
    const mensajeElement = document.getElementById('Mensaje2');
    if(mensajeElement){
      mensajeElement.textContent = `Talla seleccionada: ${select.value}`;
    }
  }
  
  function mostrar3(checkbox) {
    const mensajeElement = document.getElementById('Mensaje3');
    if (mensajeElement) {
      if (checkbox.checked) {
        mensajeElement.textContent = 'Usted seleccionó el kit de limpieza';
      } else {
        mensajeElement.textContent = 'No se seleccionó el kit de limpieza';
      }
    }
  }

