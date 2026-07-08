// Navaja Negra Barbería — interacciones básicas

document.addEventListener('DOMContentLoaded', () => {
  // Año dinámico en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menú móvil
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // Formulario de contacto
  // NOTA: esto es una simulación en el navegador. Para recibir los mensajes
  // de verdad, conecta este formulario a WhatsApp, a un correo (mailto),
  // o a un backend / servicio como Formspree, EmailJS, etc.
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      note.textContent = '¡Gracias! Te contactaremos en breve para confirmar tu cita.';
      form.reset();
    });
  }
});
