import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "PEGA_AQUI_TU_CLAVE_API_WEB",
    databaseURL: "https://arduino-ide-8813c-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const btnOn = document.getElementById("btnOn");
const btnOff = document.getElementById("btnOff");
const statusText = document.getElementById("statusText");

btnOn.addEventListener("click", () => {
    set(ref(db, 'Control/LED'), true)
        .then(() => {
            statusText.textContent = "Estado: 🟢 Encendido";
            statusText.style.color = "#2f855a";
        })
        .catch((error) => console.error("Error al encender:", error));
});

btnOff.addEventListener("click", () => {
    set(ref(db, 'Control/LED'), false)
        .then(() => {
            statusText.textContent = "Estado: 🔴 Apagado";
            statusText.style.color = "#c53030";
        })
        .catch((error) => console.error("Error al apagar:", error));
});