document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const datos = new FormData(this);
  const url = "https://api.sheetbest.com/sheets/08c8db84-6224-4494-aec6-f23263057989";

  fetch(url, {
    method: "POST",
    body: datos,
  })
    .then((res) => res.text())
    .then((data) => {
      // Mostrar modal
      document.getElementById("modal-mensaje").textContent = "✅ ¡Formulario enviado correctamente!";
      document.getElementById("modal").style.display = "flex";
      this.reset();
    })
    .catch((error) => {
      document.getElementById("modal-mensaje").textContent = "❌ Error al enviar: " + error;
      document.getElementById("modal").style.display = "flex";
    });
});

// Botón para cerrar el modal
document.getElementById("cerrar-modal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});
