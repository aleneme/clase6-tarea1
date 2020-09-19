const botonAgregarFamiliares = document.querySelector(".integrantes-familia");
const seccionResultados = document.querySelector(".resultados");
const botonReiniciar = document.querySelector(".reiniciar");
const seccionCalculo = document.querySelector(".calculo");

// Crea titulo del apartado "Realizar Cálculos".

const crearTituloCalculos = function (elementoPadre) {
  const subtituloCalculo = document.createElement("h2");
  subtituloCalculo.innerText = "Realizar cálculos.";
  subtituloCalculo.classList.add("subtitulo");
  elementoPadre.appendChild(subtituloCalculo);
};

// Crea titulo del apartado "Resultados".

const crearTituloResultados = function () {
  const subtituloResultado = document.createElement("h2");
  subtituloResultado.innerText = "Resultados.";
  subtituloResultado.classList.add("subtitulo");

  seccionResultados.appendChild(subtituloResultado);
};

// Crea labels e inputs de "Realizar Cálculos".

const crearLabelsInputs = function (cantidad, elementoPadre) {
  for (let i = 1; i <= cantidad; i++) {
    let label = document.createElement("label");
    let input = document.createElement("input");
    input.type = "number";
    input.classList.add("edad-integrante-familia");
    input.setAttribute("placeholder", "1");
    input.setAttribute("value", "1");
    label.innerText = `Edad integrante número ${i}: `;
    elementoPadre.appendChild(label);
    elementoPadre.appendChild(input);
  }
};

const parrafoEdadErronea = function (elementoParrafo) {
  elementoParrafo.innerText = `Por favor, ingrese una edad correcta.`;
};

// Crear párrafo para informar al usuario quién tiene menor edad
const crearParrafoMenorEdad = function (familiarDeMenorEdad) {
  let parrafoFamiliarMenorEdad = document.createElement("p");
  if (familiarDeMenorEdad <= 0) {
    parrafoEdadErronea(parrafoFamiliarMenorEdad);
  } else {
    parrafoFamiliarMenorEdad.innerText = `El más joven de la familia tiene ${familiarDeMenorEdad} años.`;
  }

  seccionResultados.appendChild(parrafoFamiliarMenorEdad);
};

// Crear párrafo para informar al usuario quién tiene mayor edad
const crearParrafoMayorEdad = function (familiarDeMayorEdad) {
  let parrafoFamiliarMayorEdad = document.createElement("p");
  if (familiarDeMayorEdad <= 0) {
    parrafoEdadErronea(parrafoFamiliarMayorEdad);
  } else {
    parrafoFamiliarMayorEdad.innerText = `El más viejito de la familia tiene ${familiarDeMayorEdad} años.`;
  }

  seccionResultados.appendChild(parrafoFamiliarMayorEdad);
};

const crearParrafoPromedioEdades = function (promedioEdadFamilia) {
  let parrafoPromedioEdadFamila = document.createElement("p");
  if (promedioEdadFamilia <= 0) {
    parrafoEdadErronea(parrafoPromedioEdadFamila);
  } else {
    parrafoPromedioEdadFamila.innerText = `El promedio de edad de la familia es ${promedioEdadFamilia} años.`;
  }

  seccionResultados.appendChild(parrafoPromedioEdadFamila);
};

// Crea botón "calcular edad" y añade onclick al botón.
const crearBotonCalcularEdad = function (elementoPadre) {
  const botonCalculoEdad = document.createElement("button");
  botonCalculoEdad.innerText = "Calcular";
  elementoPadre.appendChild(botonCalculoEdad);

  botonCalculoEdad.onclick = function () {
    let inputs = document.querySelectorAll(".edad-integrante-familia");

    let familiarDeMayorEdad = inputs[0].value;
    let familiarDeMenorEdad = inputs[0].value;
    let sumaEdadFamilia = 0;

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value > familiarDeMayorEdad) {
        familiarDeMayorEdad = inputs[i].value;
      }

      if (inputs[i].value < familiarDeMenorEdad) {
        familiarDeMenorEdad = inputs[i].value;
      }

      sumaEdadFamilia += Number(inputs[i].value);
    }

    if (seccionResultados.children.length > 0) {
      seccionResultados.innerText = "";
    }

    const promedioEdadFamilia = (sumaEdadFamilia / inputs.length).toFixed(0);

    crearTituloResultados();
    crearParrafoMayorEdad(familiarDeMayorEdad);

    crearParrafoMenorEdad(familiarDeMenorEdad);

    crearParrafoPromedioEdades(promedioEdadFamilia);
    seccionCalculo.innerText = "";

    return false;
  };
};

// Crea la sección "Realizar Cálculos".

const crearApartadoRealizarCalculos = function (cantidad, elementoPadre) {
  crearLabelsInputs(cantidad, elementoPadre);
  crearBotonCalcularEdad(elementoPadre);
};

const crearFormularios = function (elementoPadre) {
  let formulario = document.createElement("form");
  formulario.classList.add("calculo-edades");
  elementoPadre.appendChild(formulario);
};

// Crea dentro del section el h2, el formulario, los inputs y los botones

botonAgregarFamiliares.onclick = function () {
  const cantidadIntegrantesFamilia = Number(
    document.querySelector("#preguntar-integrantes-familia").value
  );

  if (
    seccionCalculo.children.length > 0 ||
    seccionResultados.children.length > 0
  ) {
    return false;
  }

  crearTituloCalculos(seccionCalculo);
  crearFormularios(seccionCalculo);

  const formulario = document.querySelector(".calculo-edades");

  crearApartadoRealizarCalculos(cantidadIntegrantesFamilia, formulario);

  return false;
};

botonReiniciar.onclick = function () {
  seccionCalculo.innerHTML = "";
  seccionResultados.innerHTML = "";
  return false;
};
