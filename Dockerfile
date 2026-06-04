# Imagen base: Nginx Alpine (servidor web liviano)
FROM nginx:alpine

# Copiamos los archivos de la app al directorio que Nginx usa para servir contenido
COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY app.js /usr/share/nginx/html/app.js

# Puerto que expone el contenedor
EXPOSE 80