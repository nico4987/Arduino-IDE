// Importación de módulos oficiales de Firebase (Versión 10)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Configuración utilizando la URL de tu Realtime Database
const firebaseConfig = {
    apiKey: "PEGA_AQUI_TU_CLAVE_API_WEB",
    databaseURL: "https://arduino-ide-8813c-default-rtdb.firebaseio.com"
};

// Inicializar Firebase y la base de datos
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Referencia a los botones del archivo HTML
const btnOn = document.getElementById("btnOn");
const btnOff = document.getElementById("btnOff");

// Evento para ENCENDER el LED (manda 'true' a /Control/LED)
btnOn.addEventListener("click", () => {
    set(ref(db, 'Control/LED'), true)
        .then(() => console.log("LED Encendido en Firebase"))
        .catch((error) => console.error("Error al encender:", error));
});

// Evento para APAGAR el LED (manda 'false' a /Control/LED)
btnOff.addEventListener("click", () => {
    set(ref(db, 'Control/LED'), false)
        .then(() => console.log("LED Apagado en Firebase"))
        .catch((error) => console.error("Error al apagar:", error));
});