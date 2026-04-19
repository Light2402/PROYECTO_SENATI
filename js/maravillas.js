/* ============================================================
   DATOS DE CADA MARAVILLA
   ============================================================ */
const wonders = {
    machu: {
        img:     'img/machu-picchu.jpg',
        img2:    'img/machu-picchu.jpg',
        country: '🇵🇪 Perú',
        title:   'Machu Picchu',
        history: 'Construida en el siglo XV por el inca Pachacútec como un centro político y religioso. Fue abandonada durante la conquista española y redescubierta en 1911 por el explorador Hiram Bingham.',
        culture: 'La cultura inca se basaba en el ayllu (comunidad familiar), la agricultura en terrazas y una fuerte conexión espiritual con la naturaleza y el dios sol Inti.',
        year:    'Declarada Patrimonio de la Humanidad por la UNESCO en 1983 y elegida Maravilla del Mundo Moderno en 2007.',
        facts:   ['Altura: 2,430 m', 'Civilización: Inca', 'UNESCO: 1983', 'Visitantes: ~1.5 M']
    },
    chichen: {
        img:     'img/chichen-itza.jpg',
        img2:    'img/chichen-itza.jpg',
        country: '🇲🇽 México',
        title:   'Chichén Itzá',
        history: 'Importante ciudad maya fundada alrededor del siglo VI. Fue un centro político y religioso clave en Mesoamérica durante siglos.',
        culture: 'Los mayas tenían avanzados conocimientos en astronomía y matemáticas. La pirámide de Kukulkán tiene 365 escalones y proyecta una serpiente de sombras en los equinoccios.',
        year:    'Declarada Patrimonio de la Humanidad por la UNESCO en 1988 y Maravilla del Mundo Moderno en 2007.',
        facts:   ['Pirámide: 30 m', 'Escalones: 365', 'Civilización: Maya', 'UNESCO: 1988']
    },
    cristo: {
        img:     'img/cristo-redentor.jpg',
        img2:    'img/cristo-redentor.jpg',
        country: '🇧🇷 Brasil',
        title:   'Cristo Redentor',
        history: 'Construido entre 1922 y 1931, el Cristo Redentor es la estatua Art Déco más grande del mundo. Se ubica en el Cerro Corcovado a 710 metros sobre Río de Janeiro.',
        culture: 'Representa la fe cristiana y la hospitalidad del pueblo brasileño. Es el símbolo más reconocible de Brasil en todo el mundo.',
        year:    'Inaugurado en 1931 y elegido Maravilla del Mundo Moderno en 2007.',
        facts:   ['Altura: 38 m', 'Brazos: 28 m', 'Peso: 635 t', 'Corcovado: 710 m']
    },
    coliseo: {
        img:     'img/coliseo.jpg',
        img2:    'img/coliseo.jpg',
        country: '🇮🇹 Italia',
        title:   'Coliseo Romano',
        history: 'Construido entre 70 y 80 d.C. bajo el mandato de los emperadores Vespasiano y Tito. Fue el mayor anfiteatro del Imperio Romano.',
        culture: 'Escenario de luchas de gladiadores, cacerías de animales y espectáculos públicos. Era el centro del entretenimiento y la política romana.',
        year:    'Declarado Patrimonio de la Humanidad por la UNESCO en 1980 y Maravilla del Mundo Moderno en 2007.',
        facts:   ['Capacidad: 50,000', 'Longitud: 188 m', 'Imperio Romano', 'UNESCO: 1980']
    },
    taj: {
        img:     'img/taj-mahal.jpg',
        img2:    'img/taj-mahal.jpg',
        country: '🇮🇳 India',
        title:   'Taj Mahal',
        history: 'Construido entre 1631 y 1648 por el emperador mogol Shah Jahan en honor a su esposa Mumtaz Mahal, fallecida durante el parto.',
        culture: 'Representa el amor eterno en la cultura india. El diseño combina estilos persa, islámico e indio con incrustaciones de más de 28 tipos de piedras preciosas.',
        year:    'Declarado Patrimonio de la Humanidad por la UNESCO en 1983 y Maravilla del Mundo Moderno en 2007.',
        facts:   ['Mármol blanco', '+20,000 trabajadores', 'UNESCO: 1983', '22 años de obra']
    },
    petra: {
        img:     'img/petra.jpg',
        img2:    'img/petra.jpg',
        country: '🇯🇴 Jordania',
        title:   'Petra',
        history: 'Ciudad nabatea tallada en roca hace más de 2,000 años. Fue redescubierta para el mundo occidental en 1812 por el explorador suizo Johann Burckhardt.',
        culture: 'Centro comercial clave en las rutas de caravanas entre Arabia, Egipto y el Mediterráneo. Los nabateos dominaban la ingeniería hídrica en el desierto.',
        year:    'Declarada Patrimonio de la Humanidad por la UNESCO en 1985 y Maravilla del Mundo Moderno en 2007.',
        facts:   ['Ciudad rosa', '+800 monumentos', 'Khazneh: 40 m', 'UNESCO: 1985']
    },
    muralla: {
        img:     'img/muralla.jpg',
        img2:    'img/muralla.jpg',
        country: '🇨🇳 China',
        title:   'Gran Muralla China',
        history: 'Construida durante varias dinastías para defender China de invasiones nómadas. La versión más conocida fue edificada durante la dinastía Ming (1368–1644).',
        culture: 'Símbolo del ingenio y la determinación de la civilización china. Incluía torres de señales, cuarteles y caminos de patrulla a lo largo de toda su extensión.',
        year:    'Declarada Patrimonio de la Humanidad por la UNESCO en 1987 y Maravilla del Mundo Moderno en 2007.',
        facts:   ['+21,000 km', 'Varias dinastías', 'UNESCO: 1987', '+25,000 torres']
    }
};

/* ============================================================
   FILTROS Y BÚSQUEDA
   ============================================================ */
const searchInput = document.getElementById('searchInput');
const cards       = document.querySelectorAll('.wonder-card');
const noResults   = document.getElementById('noResults');
const tagBtns     = document.querySelectorAll('.tag-btn');

function filterCards() {
    const query   = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const active  = document.querySelector('.tag-btn.active');
    const contSel = active ? active.dataset.continent : 'all';
    let visible   = 0;

    cards.forEach(card => {
        const matchSearch = (card.dataset.name || '').includes(query);
        const matchFilter = contSel === 'all' || card.dataset.continent === contSel;
        const show = matchSearch && matchFilter;
        card.style.display = show ? '' : 'none';
        if (show) visible++;
    });

    if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
}

if (searchInput) searchInput.addEventListener('input', filterCards);

tagBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tagBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterCards();
    });
});

/* ============================================================
   FAVORITOS
   ============================================================ */
let favCount = 0;
const favToast   = document.getElementById('favToast');
const favCountEl = document.getElementById('favCount');

document.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        btn.classList.toggle('active');
        btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
        favCount += btn.classList.contains('active') ? 1 : -1;
        if (favCountEl) favCountEl.textContent = favCount;
        if (favToast) {
            favToast.classList.add('show');
            clearTimeout(favToast._timer);
            favToast._timer = setTimeout(() => favToast.classList.remove('show'), 3000);
        }
    });
});

/* ============================================================
   HAMBURGER
   ============================================================ */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('open');
    });
}

/* ============================================================
   MODAL SIMPLE
   ============================================================ */
const overlay = document.getElementById('modalOverlay');

document.querySelectorAll('.detail-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const d = wonders[btn.dataset.wonder];
        if (!d) return;

        document.getElementById('modalImg').src    = d.img;
        document.getElementById('modalImg2').src   = d.img2;
        document.getElementById('modalCountry').textContent = d.country;
        document.getElementById('modalTitle').textContent   = d.title;
        document.getElementById('modalHistory').textContent = d.history;
        document.getElementById('modalCulture').textContent = d.culture;
        document.getElementById('modalYear').textContent    = d.year;

        document.getElementById('modalFacts').innerHTML =
            d.facts.map(f =>
                `<div class="fact-item"><span class="fact-dot">✦</span>${f}</div>`
            ).join('');

        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
});

/* Cerrar modal */
document.getElementById('modalClose').onclick = closeModal;
overlay.onclick = e => { if (e.target === overlay) closeModal(); };
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
}