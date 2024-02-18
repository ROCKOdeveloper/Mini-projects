// Obtener referencias a los elementos del DOM
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

// Inicializar el estado de la progresión
let currentActive = 1;

// Agregar un evento de clic al botón "Siguiente"
next.addEventListener("click", () => {
  // Incrementar el estado de la progresión
  currentActive++;

  // Verificar si se supera el número de círculos disponibles
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  // Actualizar la visualización
  update();
});

// Agregar un evento de clic al botón "Anterior"
prev.addEventListener("click", () => {
  // Decrementar el estado de la progresión
  currentActive--;

  // Verificar si se va más allá del primer círculo
  if (currentActive < 1) {
    currentActive = 1;
  }

  // Actualizar la visualización
  update();
});

// Función para actualizar la visualización del progreso
function update() {
  // Iterar sobre todos los círculos
  circles.forEach((circle, idx) => {
    // Marcar los círculos como activos o inactivos según su posición
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // Calcular el progreso de la barra
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  // Deshabilitar los botones "Anterior" y "Siguiente" según el estado actual
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

// Llamar a la función de actualización inicial para configurar la visualización inicial
update();
