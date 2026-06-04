// URL base de la API de The Simpsons
const API_BASE = 'https://thesimpsonsapi.com/api';
const CDN_BASE = 'https://cdn.thesimpsonsapi.com/500';

// Estado global
let todosLosPersonajes = [];

// ===== Función principal: cargar personajes =====
async function cargarPersonajes() {
    const contenedor = document.getElementById('personajes');
    const loading = document.getElementById('loading');

    try {
        // Traemos las primeras 2 páginas (40 personajes)
        const [pagina1, pagina2] = await Promise.all([
            fetch(`${API_BASE}/characters?page=1`).then(r => r.json()),
            fetch(`${API_BASE}/characters?page=2`).then(r => r.json())
        ]);

        // La API devuelve { count, next, prev, pages, results: [...] }
        // Extraemos el array de personajes desde .results
        todosLosPersonajes = [...pagina1.results, ...pagina2.results];

        console.log('Personajes cargados:', todosLosPersonajes.length);

        // Ocultamos el loading y mostramos los personajes
        loading.style.display = 'none';
        renderizarPersonajes(todosLosPersonajes);

    } catch (error) {
        console.error('Error al cargar la API:', error);
        loading.style.display = 'none';
        contenedor.innerHTML = `
            <div class="sin-resultados">
                <p>⚠️ Error al conectar con la API: ${error.message}</p>
                <p style="margin-top: 10px; font-size: 0.9rem;">Verificá tu conexión a internet e intentá nuevamente.</p>
            </div>
        `;
    }
}

// ===== Renderizar personajes en el DOM =====
function renderizarPersonajes(personajes) {
    const contenedor = document.getElementById('personajes');
    const sinResultados = document.getElementById('sin-resultados');

    if (personajes.length === 0) {
        contenedor.innerHTML = '';
        sinResultados.style.display = 'block';
        return;
    }

    sinResultados.style.display = 'none';

    contenedor.innerHTML = personajes.map(p => {
        // Imagen del personaje desde el CDN
        const imagenUrl = `${CDN_BASE}${p.portrait_path}`;

        // Primera frase del personaje (si existe)
        const frase = (p.phrases && p.phrases.length > 0)
            ? p.phrases[0]
            : '';

        // Badge de estado
        let badgeEstado = '';
        if (p.status === 'Alive') {
            badgeEstado = '<span class="badge badge-alive">Vivo</span>';
        } else if (p.status === 'Dead') {
            badgeEstado = '<span class="badge badge-dead">Muerto</span>';
        } else {
            badgeEstado = '<span class="badge badge-unknown">Desconocido</span>';
        }

        // Badge de edad
        const badgeEdad = p.age
            ? `<span class="badge badge-age">Edad: ${p.age}</span>`
            : '';

        return `
            <div class="card">
                <div class="card-img-wrapper">
                    <img src="${imagenUrl}" alt="${p.name}" loading="lazy">
                </div>
                <div class="card-body">
                    <h3>${p.name}</h3>
                    <p class="ocupacion">${p.occupation || 'Ocupación desconocida'}</p>
                    <div class="badge-row">
                        ${badgeEstado}
                        ${badgeEdad}
                    </div>
                    ${frase ? `<p class="frase">"${frase}"</p>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// ===== Buscador en tiempo real =====
function inicializarBuscador() {
    const buscador = document.getElementById('buscador');
    buscador.addEventListener('input', function () {
        const termino = this.value.toLowerCase().trim();
        if (termino === '') {
            renderizarPersonajes(todosLosPersonajes);
        } else {
            const filtrados = todosLosPersonajes.filter(p =>
                p.name.toLowerCase().includes(termino)
            );
            renderizarPersonajes(filtrados);
        }
    });
}

// ===== Iniciar la app =====
document.addEventListener('DOMContentLoaded', function () {
    cargarPersonajes();
    inicializarBuscador();
});