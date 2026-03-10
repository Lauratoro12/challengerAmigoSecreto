// -----------------------------
// Array que almacenará los nombres
// -----------------------------
let amigos = [];

// -----------------------------
// Referencias a los elementos del HTML
// -----------------------------
const inputNombre = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// -----------------------------
// Función para mostrar los amigos en la lista HTML
// -----------------------------
function mostrarAmigos() {
    // Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // Recorrer el array de amigos y crear un <li> para cada uno
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// -----------------------------
// Función para agregar un amigo
// -----------------------------
function agregarAmigo() {
    const nombre = inputNombre.value.trim(); // Quita espacios al inicio/final

    // Validar que el input no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    // Mostrar la lista actualizada
    mostrarAmigos();

    // Limpiar el input
    inputNombre.value = "";
    inputNombre.focus();
}

// -----------------------------
// Función para sortear un amigo aleatoriamente
// -----------------------------
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en HTML
    resultado.innerHTML = `<li>¡El amigo sorteado es: <strong>${amigoSorteado}</strong>!</li>`;
}

