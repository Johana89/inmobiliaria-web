// ===============================
// SCROLL SUAVE EN EL MENÚ
// ===============================
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute("href"));
        destino.scrollIntoView({ behavior: "smooth" });
    });
});


// ===============================
// BOTÓN WHATSAPP FLOTANTE
// ===============================
const whatsappBtn = document.createElement("a");
whatsappBtn.href = "https://wa.me/595XXXXXXXXX";
whatsappBtn.target = "_blank";
whatsappBtn.innerHTML = "💬";
whatsappBtn.style.position = "fixed";
whatsappBtn.style.bottom = "20px";
whatsappBtn.style.right = "20px";
whatsappBtn.style.background = "#25D366";
whatsappBtn.style.color = "white";
whatsappBtn.style.fontSize = "28px";
whatsappBtn.style.padding = "15px";
whatsappBtn.style.borderRadius = "50%";
whatsappBtn.style.textDecoration = "none";
whatsappBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
document.body.appendChild(whatsappBtn);


// ===============================
// FILTRO DE PROPIEDADES
// ===============================

function filtrarPropiedades() {
    const ciudad = document.getElementById("filtroCiudad").value;
    const tipo = document.getElementById("filtroTipo").value;

    document.querySelectorAll(".card").forEach(card => {
        const cardCiudad = card.dataset.ciudad;
        const cardTipo = card.dataset.tipo;

        if (
            (ciudad === "todos" || ciudad === cardCiudad) &&
            (tipo === "todos" || tipo === cardTipo)
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


// ===============================
// MENSAJE WHATSAPP PERSONALIZADO
// ===============================
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const titulo = card.querySelector("h3").innerText;
        const mensaje = `Hola, estoy interesado/a en la propiedad: ${titulo}`;
        whatsappBtn.href = `https://wa.me/595XXXXXXXXX?text=${encodeURIComponent(mensaje)}`;
    });
});
