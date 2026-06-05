# 🍩 Directorio de Springfield

## 📝 Descripción
Aplicación web que consume la API pública de [The Simpsons API](https://thesimpsonsapi.com/) para mostrar un directorio interactivo de personajes de Los Simpson. Incluye búsqueda en tiempo real por nombre.

Este proyecto fue desarrollado como Trabajo Práctico de **Ingeniería de Software**, con el objetivo de practicar el uso de **Git**, **GitHub** y **Docker**.

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
**`## 📸 Capturas de Pantalla`**
### 1. Repositorio publicado

<div align="center">
   <img width="591" height="282" alt="image" src="https://github.com/user-attachments/assets/a07dac63-db07-42df-ada7-266e6d2aa9cc" />
</div>

### 2. Construcción de la Imagen (Docker Desktop)

<div align="center">
   <img width="591" height="130" alt="image" src="https://github.com/user-attachments/assets/191dd21a-b912-44b5-91c9-84c91a8d8370" />
</div>

### 3. Ejecución del Contenedor (Docker Desktop)

<div align="center">
   <img width="591" height="155" alt="image" src="https://github.com/user-attachments/assets/727081bb-c1c7-47c1-8a0e-c46b88541c5f" />
</div>

### 4. Aplicación Funcionando

<div align="center">
   <img width="591" height="293" alt="image" src="https://github.com/user-attachments/assets/9b7b3cfd-a190-4d4b-8382-d27e004a570d" />
   <br><br>
   <img width="591" height="295" alt="image" src="https://github.com/user-attachments/assets/7ce853da-9799-4791-8ba2-9f0d0016b475" />
</div>

## 🌟 Bonus Implementados
- ✅ **Variables de entorno** en `docker-compose.yml`
- ✅ **Docker Compose** para orquestación
- ✅ **Archivo `.gitignore`** configurado
- ✅ **Publicación automática en Docker Hub mediante GitHub Actions**

### Evidencia de Integración Continua (CI/CD)
**1. Automatización Exitosa en GitHub Actions**

<div align="center">
    <img width="886" height="244" alt="image" src="https://github.com/user-attachments/assets/41a1c6b3-f765-4f51-95e9-3e5266e285ec" />
</div>

**2. Imagen publicada en la nube (Docker Hub)**
<div align="center">
     <img width="886" height="252" alt="image" src="https://github.com/user-attachments/assets/0337fbe8-d53d-4b73-bfd1-3d637b3b27c8" />
</div>

**3. Imagen disponible para uso local (Pull)**
<div align="center">
     <img width="886" height="399" alt="image" src="https://github.com/user-attachments/assets/992ce9cc-64da-4747-b760-810fc69fec16" />
</div>

## 👤 Autor
**Elsener Juan María** — Ingeniería de Software — 2026 - ISTEA
