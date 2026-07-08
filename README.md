# Navaja Negra Barbería — Landing Page

Landing page estática (HTML/CSS/JS puro, sin frameworks ni build) para una barbería.
Lista para subir a GitHub y desplegar en una instancia EC2 con Nginx.

## Estructura
```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/          ← coloca aquí las fotos reales (logo, equipo, galería)
```

## Cómo personalizar para un cliente
Busca en `index.html` los comentarios `<!-- EDITAR: ... -->` y reemplaza:
- Nombre del negocio (`brand-name`, `<title>`, footer)
- Titular y bajada del hero
- Servicios y precios (`menu-list`)
- Nombres/fotos del equipo (`team-grid`)
- Fotos de galería (`img/galeria-*.jpg`)
- Testimonios (`opiniones`)
- Dirección, teléfono, WhatsApp, correo, horario y redes (`contacto`)

Los colores y tipografías se controlan desde las variables al inicio de `css/style.css` (`:root`).

## Cómo subirlo a tu propio repositorio de GitHub
```bash
cd barberia-landing
git init
git add .
git commit -m "Landing page barbería - versión inicial"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

## Cómo desplegarlo en EC2 (Ubuntu + Nginx)
```bash
# 1. Conéctate a tu instancia
ssh -i "tu-llave.pem" ubuntu@<IP_PUBLICA_EC2>

# 2. Instala Nginx y git
sudo apt update && sudo apt install -y nginx git

# 3. Crea la carpeta del proyecto final y clona tu repo
mkdir apellidos_nombre_proyecto_final
cd apellidos_nombre_proyecto_final
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git .

# 4. Publica los archivos en Nginx
sudo rm -rf /var/www/html/*
sudo cp -r ./* /var/www/html/
sudo systemctl restart nginx
sudo systemctl enable nginx
```

Luego abre `http://<IP_PUBLICA_EC2>` en el navegador para verificar que cargue.

## Notas
- El formulario de contacto actualmente solo simula el envío en el navegador
  (ver `js/script.js`). Para recibir mensajes reales, conéctalo a WhatsApp,
  un `mailto:`, o un servicio como Formspree/EmailJS.
- Reemplaza todas las imágenes de `img/` por fotos reales del negocio antes
  de entregar el proyecto.
