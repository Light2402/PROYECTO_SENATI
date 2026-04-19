const wonders = {
    machu: {
        img: 'img/machu-picchu.jpg',
        img2: 'img/machu2.jpg',
        country: '🇵🇪 Perú',
        title: 'Machu Picchu',
        history: 'Construida en el siglo XV por el inca Pachacútec como un centro político y religioso. Fue abandonada durante la conquista española y redescubierta en 1911.',
        culture: 'La cultura inca se basaba en la agricultura en terrazas, la organización comunitaria (ayllu) y una fuerte conexión espiritual con la naturaleza.',
        year: 'Declarada maravilla del mundo moderno en 2007.',
        facts: ['Altura: 2,430 m','Civilización: Inca','UNESCO: 1983','Visitantes: ~1.5M']
    },

    chichen: {
        img: 'img/chichen-itza.jpg',
        img2: 'img/chichen2.jpg',
        country: '🇲🇽 México',
        title: 'Chichén Itzá',
        history: 'Importante ciudad maya fundada alrededor del siglo VI. Fue un centro político y religioso clave en Mesoamérica.',
        culture: 'Los mayas tenían avanzados conocimientos en astronomía y matemáticas, reflejados en la pirámide de Kukulkán.',
        year: 'Maravilla del mundo desde 2007.',
        facts: ['Pirámide: 30 m','Escalones: 365','Civilización: Maya']
    },

    cristo: {
        img: 'img/cristo-redentor.jpg',
        img2: 'img/cristo2.jpg',
        country: '🇧🇷 Brasil',
        title: 'Cristo Redentor',
        history: 'Construido entre 1922 y 1931 como símbolo religioso y cultural de Brasil.',
        culture: 'Representa la fe cristiana y la hospitalidad del pueblo brasileño.',
        year: 'Maravilla del mundo desde 2007.',
        facts: ['Altura: 38 m','Envergadura: 28 m']
    },

    coliseo: {
        img: 'img/coliseo.jpg',
        img2: 'img/coliseo2.jpg',
        country: '🇮🇹 Italia',
        title: 'Coliseo Romano',
        history: 'Construido en el siglo I d.C., fue el mayor anfiteatro romano.',
        culture: 'Escenario de luchas de gladiadores y espectáculos públicos.',
        year: 'Maravilla del mundo desde 2007.',
        facts: ['Capacidad: 50,000','Imperio Romano']
    },

    taj: {
        img: 'img/taj-mahal.jpg',
        img2: 'img/taj2.jpg',
        country: '🇮🇳 India',
        title: 'Taj Mahal',
        history: 'Construido entre 1631 y 1648 por Shah Jahan.',
        culture: 'Representa el amor eterno en la cultura india.',
        year: 'Maravilla del mundo desde 2007.',
        facts: ['Mármol blanco','+20,000 trabajadores']
    },

    petra: {
        img: 'img/petra.jpg',
        img2: 'img/petra2.jpg',
        country: '🇯🇴 Jordania',
        title: 'Petra',
        history: 'Ciudad nabatea tallada en roca hace más de 2,000 años.',
        culture: 'Centro comercial clave en rutas antiguas.',
        year: 'Maravilla del mundo desde 2007.',
        facts: ['Ciudad rosa','Roca tallada']
    },

    muralla: {
        img: 'img/muralla.jpg',
        img2: 'img/muralla2.jpg',
        country: '🇨🇳 China',
        title: 'Gran Muralla China',
        history: 'Construida durante varias dinastías para defensa.',
        culture: 'Símbolo de la ingeniería china.',
        year: 'Maravilla del mundo desde 2007.',
        facts: ['+21,000 km','Varias dinastías']
    }
};

// MODAL
const overlay = document.getElementById('modalOverlay');

document.querySelectorAll('.detail-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const d = wonders[btn.dataset.wonder];

        document.getElementById('modalImg').src = d.img;
        document.getElementById('modalImg2').src = d.img2;

        document.getElementById('modalCountry').textContent = d.country;
        document.getElementById('modalTitle').textContent = d.title;

        document.getElementById('modalHistory').textContent = d.history;
        document.getElementById('modalCulture').textContent = d.culture;
        document.getElementById('modalYear').textContent = d.year;

        document.getElementById('modalFacts').innerHTML =
            d.facts.map(f => `<div class="fact-item"><span class="fact-dot">✦</span>${f}</div>`).join('');

        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
});

// Cerrar modal
document.getElementById('modalClose').onclick = closeModal;
overlay.onclick = e => { if(e.target === overlay) closeModal(); };
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
}