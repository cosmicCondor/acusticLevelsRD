function cambiarEscenario() {
    const escenario = document.getElementById('escenario').value;
    const medicionExterior = document.getElementById('medicionExterior');
    const medicionInterior = document.getElementById('medicionInterior');
  
    if (escenario === 'Exterior') {
        medicionExterior.style.display = 'block';
        medicionInterior.style.display = 'none';
    } else {
        medicionExterior.style.display = 'none';
        medicionInterior.style.display = 'block';
    }
  }
  
  function calcular() {
    const escenario = document.getElementById('escenario').value;
    const tipoMedida = document.getElementById('tipoMedida').value;
    const nivelLimite = parseFloat(document.getElementById('nivelLimite').value);
  
    let nivelInmision, nivelFondo, nivelCorregido, nivelLimiteAjustado;
  
    if (escenario === 'Exterior') {
        nivelInmision = parseFloat(document.getElementById('nivelInmisionExterior').value);
        nivelFondo = parseFloat(document.getElementById('nivelFondoExterior').value);
        
        if (isNaN(nivelInmision) || isNaN(nivelFondo) || isNaN(nivelLimite)) {
            document.getElementById('resultado').innerText = "Por favor, ingrese todos los valores.";
            return;
        }
  
        nivelCorregido = calcularNivelCorregido(nivelInmision, nivelFondo);
    } else {
        const nivelInmisionA = parseFloat(document.getElementById('nivelInmisionInteriorA').value);
        const nivelInmisionC = parseFloat(document.getElementById('nivelInmisionInteriorC').value);
        const nivelFondoA = parseFloat(document.getElementById('nivelFondoInteriorA').value);
        const nivelFondoC = parseFloat(document.getElementById('nivelFondoInteriorC').value);
  
        if (isNaN(nivelInmisionA) || isNaN(nivelInmisionC) || isNaN(nivelFondoA) || isNaN(nivelFondoC) || isNaN(nivelLimite)) {
            document.getElementById('resultado').innerText = "Por favor, ingrese todos los valores.";
            return;
        }
  
        const nivelCorregidoA = calcularNivelCorregido(nivelInmisionA, nivelFondoA);
        const nivelCorregidoC = calcularNivelCorregido(nivelInmisionC, nivelFondoC);
        nivelCorregido = Math.max(nivelCorregidoA, nivelCorregidoC);
    }
  
    nivelLimiteAjustado = tipoMedida === 'puntual' ? nivelLimite + 5 : nivelLimite + 3;
  
    let conformidad = nivelCorregido <= nivelLimiteAjustado ? "Conforme" : "No conforme";
    
    document.getElementById('resultado').innerHTML = `
        <strong>Nivel corregido:</strong> ${nivelCorregido.toFixed(2)} dB<br>
        <strong>Nivel límite ajustado:</strong> ${nivelLimiteAjustado.toFixed(2)} dB<br>
        <strong>Resultado:</strong> ${conformidad}
    `;
  
    mostrarModal(conformidad);
  }
  
  function calcularNivelCorregido(nivelInmision, nivelFondo) {
    return 10 * Math.log10(Math.pow(10, nivelInmision / 10) - Math.pow(10, nivelFondo / 10));
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
  