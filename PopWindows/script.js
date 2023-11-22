const boton = document.querySelector("#boton");
boton.addEventListener("click", function () {
  const ventana = window.open(
    "indexPop.html",
    "ventanaPop",
    "width=600, height=300"
  );
});
