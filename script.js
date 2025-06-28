document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    nombre: document.getElementById("nombre").value,
    celular_padre: document.getElementById("celular_padre").value,
    celular_madre: document.getElementById("celular_madre").value,
    celular_tutor: document.getElementById("celular_tutor").value,
    celular_estudiante: document.getElementById("celular_estudiante").value,
  };

  fetch("https://api.sheetbest.com/sheets/08c8db84-6224-4494-aec6-f23263057989", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("respuesta").textContent = "¡Formulario enviado correctamente!";
      document.getElementById("formulario").reset();
    })
    .catch((error) => {
      document.getElementById("respuesta").textContent = "Error al enviar: " + error;
    });
});
