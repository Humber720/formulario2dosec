document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const campos = ["celular_padre", "celular_madre", "celular_tutor", "celular_estudiante"];
  const respuesta = document.getElementById("respuesta");
  respuesta.className = "mensaje"; // Reiniciar clases

  for (const id of campos) {
    const valor = document.getElementById(id).value.trim();
    if (valor !== "" && !/^\d{8}$/.test(valor)) {
      respuesta.textContent = "❌ El número en '" + id.replace("celular_", "") + "' debe tener exactamente 8 dígitos.";
      respuesta.classList.add("error");
      return;
    }
  }

  const datos = new FormData(this);
  const url = "https://api.sheetbest.com/sheets/08c8db84-6224-4494-aec6-f23263057989";

  fetch(url, {
    method: "POST",
    body: datos,
  })
    .then((res) => res.text())
    .then((data) => {
      respuesta.textContent = "✅ ¡Formulario enviado correctamente!";
      respuesta.classList.add("exito");
      document.getElementById("formulario").reset();
    })
    .catch((error) => {
      respuesta.textContent = "❌ Error al enviar: " + error;
      respuesta.classList.add("error");
    });
});


