import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// === REEMPLAZA CON TUS DATOS DE FIREBASE ===
const firebaseConfig = {
    apiKey: "PEGA_AQUI_TU_CLAVE_API_WEB",
    databaseURL: "https://arduino-ide-8813c-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Elementos de la interfaz
const btnOn = document.getElementById("btnOn");
const btnOff = document.getElementById("btnOff");
const statusText = document.getElementById("statusText");
const statusDot = document.getElementById("statusDot");
const ledRing = document.getElementById("ledRing");
const ledCore = document.getElementById("ledCore");

// Función para actualizar la interfaz visual 100x mejorada
function updateUI(state) {
    if (state === 'ON') {
        // Textos
        statusText.textContent = "TRANSMISIÓN: ON";
        statusText.style.color = "#00ff88";
        statusDot.style.background = "#00ff88";
        statusDot.style.boxShadow = "0 0 10px #00ff88";
        
        // Brillo del LED Virtual
        ledRing.className = "led-ring on";
        ledCore.className = "led-core on";
    } else {
        // Textos
        statusText.textContent = "TRANSMISIÓN: OFF";
        statusText.style.color = "#ff3366";
        statusDot.style.background = "#ff3366";
        statusDot.style.boxShadow = "0 0 10px #ff3366";
        
        // Brillo del LED Virtual
        ledRing.className = "led-ring off";
        ledCore.className = "led-core off";
    }
}

// Evento: Encender
btnOn.addEventListener("click", () => {
    statusText.textContent = "Enviando señal...";
    statusDot.style.background = "#fff";
    
    set(ref(db, 'Control/LED'), true)
        .then(() => updateUI('ON'))
        .catch((error) => console.error("Error de conexión:", error));
});

// Evento: Apagar
btnOff.addEventListener("click", () => {
    statusText.textContent = "Cortando energía...";
    statusDot.style.background = "#fff";
    
    set(ref(db, 'Control/LED'), false)
        .then(() => updateUI('OFF'))
        .catch((error) => console.error("Error de conexión:", error));
});