# 🍩 Directorio de Springfield

## 📝 Descripción
Aplicación web que consume la API pública de [The Simpsons API](https://thesimpsonsapi.com/) para mostrar un directorio interactivo de personajes de Los Simpson. Incluye búsqueda en tiempo real por nombre.

Este proyecto fue desarrollado como Trabajo Práctico N°1 de **Ingeniería de Software**, con el objetivo de practicar el uso de **Git**, **GitHub** y **Docker**.

## 🛠️ Tecnologías Utilizadas
- **HTML5** — Estructura de la página.
- **CSS3** — Estilos y diseño responsivo.
- **JavaScript (ES6+)** — Lógica de la app y consumo de API con `fetch`.
- **Nginx (Alpine)** — Servidor web para servir los archivos estáticos dentro del contenedor.
- **Docker** — Contenedorización de la aplicación.
- **Docker Compose** — Orquestación del contenedor.
- **Git & GitHub** — Control de versiones y repositorio remoto.

## 📋 Requisitos Previos
Antes de ejecutar este proyecto necesitás tener instalado:
- [Git](https://git-scm.com/) (versión 2.x o superior)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (activo y ejecutándose)

## 📥 Pasos de Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/juan-maria-elsener/tp-simpsonsApp-docker.git
cd tp-simpsonsApp-docker
```

### 2. Verificar los archivos
Deberías ver los siguientes archivos:
```
├── index.html
├── styles.css
├── app.js
├── Dockerfile
├── docker-compose.yml
├── .gitignore
└── README.md
```

## 🐳 Construcción de la Imagen Docker

### Opción A: Con Docker directamente
```bash
docker build -t simpsons-app .
```
Esto construye una imagen llamada `simpsons-app` usando el `Dockerfile` del proyecto.

### Opción B: Con Docker Compose
```bash
docker-compose build
```

## 🚀 Ejecución del Contenedor

### Opción A: Con Docker directamente
```bash
docker run -d -p 8080:80 --name simpsons-directorio simpsons-app
```

### Opción B: Con Docker Compose (recomendado)
```bash
docker-compose up -d
```

### Verificar que funciona
Abrí tu navegador y entrá a:
```
http://localhost:8080
```
Deberías ver el directorio de personajes de Los Simpson cargándose automáticamente.

### Detener el contenedor
```bash
# Con Docker directamente
docker stop simpsons-directorio
docker rm simpsons-directorio

# Con Docker Compose
docker-compose down
```

## 🌟 Bonus Implementados
- ✅ **Variables de entorno** en `docker-compose.yml`
- ✅ **Docker Compose** para orquestación
- ✅ **Archivo `.gitignore`** configurado

## 👤 Autor
**Elsener Juan María** — Ingeniería de Software — 2026