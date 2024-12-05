function calcular() {
  const nivelInmision = parseFloat(document.getElementById('nivelInmision').value);
  const nivelFondo = parseFloat(document.getElementById('nivelFondo').value);
  const nivelLimite = parseFloat(document.getElementById('nivelLimite').value);

  if (isNaN(nivelInmision) || isNaN(nivelFondo) || isNaN(nivelLimite)) {
      document.getElementById('resultado').innerText = "Por favor, ingrese todos los valores.";
      return;
  }

  let nivelCorregido;

  try {
      nivelCorregido = 10 * Math.log10(Math.pow(10, nivelInmision / 10) - Math.pow(10, nivelFondo / 10));
      
      if (isNaN(nivelCorregido) || nivelCorregido === -Infinity) throw new Error();
      
      let conformidad = nivelCorregido <= nivelLimite ? "Conforme" : "No conforme";
      
      document.getElementById('resultado').innerHTML = `
          <strong>Nivel corregido:</strong> ${nivelCorregido.toFixed(2)} dB<br>
          <strong>Resultado:</strong> ${conformidad}
      `;

      mostrarModal(conformidad);
  } catch (e) {
      document.getElementById('resultado').innerText = "Error en el cálculo. Verifique los valores ingresados.";
  }
}

function mostrarModal(conformidad) {
  const modal = document.getElementById("modal");
  const modalText = document.getElementById("modalText");
  const span = document.getElementsByClassName("close")[0];

  modalText.innerHTML = conformidad === "Conforme" 
      ? "<strong>LEGAL:</strong> La medición cumple con los requisitos del Real Decreto 1367/2007."
      : "<strong>NO LEGAL:</strong> La medición no cumple con los requisitos del Real Decreto 1367/2007.";

  modal.style.display = "block";

  span.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
}
