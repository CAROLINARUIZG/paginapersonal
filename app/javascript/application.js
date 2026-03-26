// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("turbo:load", () => {
  const elBoton = document.getElementById('boton');
  const elInput = document.getElementById('palabras');
  const elParrafo = document.getElementById('resumen-texto');

  if (elBoton) {
    elBoton.addEventListener('click', () => {
      const nuevoTexto = elInput.value;

      if (nuevoTexto.trim() !== "") {
        elParrafo.innerText = nuevoTexto;
        elInput.value = ""; 
      } else {
        alert("Escribe algo:)");
      }
    });
  }
});