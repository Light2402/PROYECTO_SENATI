/* ============================================================
   DATOS DE CADA MARAVILLA
   ============================================================ */
const wonders = {
    machu: {
        img:      'img/pichu1.jpg',
        img2:     'img/pichu2.jpg',
        cultImg1: 'img/pichu1.jpg',
        cultImg2: 'img/pichu3.jpg',
        cultImg3: 'img/pichu4.jpg',
        country:  '🇵🇪 Perú',
        title:    'Machu Picchu',
        heroSub:  'La ciudad perdida de los Incas, suspendida entre nubes y montañas en los Andes peruanos.',
        stats: [
            { num: '2,430 m', lbl: 'Altura sobre el mar' },
            { num: 'Siglo XV', lbl: 'Siglo de construcción' },
            { num: '~1.5 M', lbl: 'Visitantes al año' },
            { num: '1983', lbl: 'Declarado UNESCO' }
        ],
        histTitle: 'Una ciudad sagrada entre las nubes',
        histLead:  'Construida en el siglo XV por el Inca Pachacútec, Machu Picchu fue un centro político, religioso y espiritual del Imperio Inca. Su ubicación entre picos andinos le otorgó un carácter casi místico.',
        histBody1: 'La ciudad fue edificada alrededor de 1450 d.C. con una precisión arquitectónica asombrosa: sus muros de piedra encajan sin mortero con tal exactitud que ni siquiera una hoja de papel puede introducirse entre ellos. Este sistema, conocido como ashlar, refleja el dominio inca de la ingeniería y la sismología.',
        histBody2: 'Durante la conquista española en el siglo XVI, Machu Picchu fue abandonada y quedó oculta por casi cuatro siglos. No fue sino hasta 1911 cuando el explorador Hiram Bingham la redescubrió para el mundo occidental.',
        timeline: [
            { year: '~1450 d.C.', desc: 'Construcción por orden del Inca Pachacútec. Sirvió como palacio real y santuario religioso.' },
            { year: '~1572',      desc: 'La ciudad es abandonada durante la conquista española. Permanece oculta por siglos.' },
            { year: '1911',       desc: 'Hiram Bingham llega al sitio guiado por campesinos locales e introduce Machu Picchu al mundo moderno.' },
            { year: '1983',       desc: 'Declarada Patrimonio de la Humanidad por la UNESCO por su valor cultural y natural excepcional.' },
            { year: '2007',       desc: 'Elegida Nueva Maravilla del Mundo Moderno por más de 100 millones de votos en todo el planeta.' }
        ],
        histBadgeNum: '~500',
        histBadgeTxt: 'años de historia',
        cultTitle: 'El mundo inca en piedra y cielo',
        cultLead:  'Los incas construyeron Machu Picchu como un reflejo de su cosmovisión: armonía perfecta entre el ser humano, la naturaleza y el cosmos.',
        cultBody1: 'La organización social inca se basaba en el ayllu, comunidades de familias unidas por lazos de sangre y trabajo cooperativo. Este sistema permitió movilizar miles de trabajadores sin moneda, rueda ni herramientas de hierro.',
        cultBody2: 'La ciudad estaba dividida en sectores: el área agrícola con andenes, la zona urbana con templos y residencias, y espacios sagrados como el Intihuatana, un reloj solar de piedra usado para rituales.',
        pilares: [
            { icon: '🌞', h4: 'Culto al Sol',   p: 'Inti, el dios sol, era la deidad suprema. Los incas orientaron sus templos para capturar la luz solar en fechas astronómicas clave.' },
            { icon: '🌿', h4: 'Agricultura',     p: 'Los andenes permitían cultivar en pendientes. Más de 700 terrazas rodean la ciudadela aprovechando distintos microclimas.' },
            { icon: '🏛️', h4: 'Arquitectura',   p: 'Las piedras encajan con precisión submilimétrica sin mortero, resistiendo siglos de sismos y lluvias tropicales.' },
            { icon: '🗺️', h4: 'Qhapaq Ñan',    p: 'El Camino Inca conectaba Machu Picchu con el vasto imperio que abarcaba desde Colombia hasta Argentina.' }
        ],
        reconocTitle: 'Un legado eterno',
        reconocBody1: 'Machu Picchu ha sido reconocida por las instituciones más prestigiosas del mundo como uno de los sitios más valiosos del patrimonio de la humanidad.',
        reconocBody2: 'El gobierno peruano trabaja con la UNESCO para preservar el sitio, limitando el número de visitantes diarios para proteger su integridad.',
        awards: [
            { year: '1983', h4: 'Patrimonio de la Humanidad – UNESCO',  p: 'Reconocida por su valor cultural, histórico y natural excepcional.' },
            { year: '2007', h4: 'Nueva Maravilla del Mundo Moderno',     p: 'Elegida entre 21 finalistas por más de 100 millones de votantes.' },
            { year: '2024', h4: 'Plan de Gestión de Visitantes',         p: 'Límite de 4,044 visitantes diarios para proteger el ecosistema.' }
        ],
        datos: [
            { icon: '⛰️', num: '2,430 m', lbl: 'Altura sobre el mar' },
            { icon: '🏗️', num: '+200',    lbl: 'Estructuras arquitectónicas' },
            { icon: '🌿', num: '700+',    lbl: 'Terrazas agrícolas' },
            { icon: '👥', num: '~1,000', lbl: 'Habitantes en su apogeo' }
        ],
        prevKey: 'muralla', nextKey: 'chichen'
    },

    chichen: {
        img:      'img/chichen1.jpg',
        img2:     'img/chichen2.jpg',
        cultImg1: 'img/chichen1.jpg',
        cultImg2: 'img/chichen3.jpg',
        cultImg3: 'img/chichen4.jpg',
        country:  '🇲🇽 México',
        title:    'Chichén Itzá',
        heroSub:  'La gran metrópolis maya que sincronizó arquitectura y cosmos en la selva de Yucatán.',
        stats: [
            { num: '30 m',     lbl: 'Altura de la pirámide' },
            { num: 'Siglo VI', lbl: 'Fundación' },
            { num: '2.7 M',    lbl: 'Visitantes al año' },
            { num: '1988',     lbl: 'UNESCO' }
        ],
        histTitle: 'El templo que cuenta el tiempo',
        histLead:  'Fundada alrededor del siglo VI d.C., Chichén Itzá fue durante siglos el centro político, comercial y espiritual de la civilización maya en la península de Yucatán.',
        histBody1: 'La pirámide de Kukulkán es su monumento más icónico. Cada año en los equinoccios, la luz proyecta sobre sus escalones una serpiente de sombras que desciende, representando el regreso del dios Kukulkán a la Tierra.',
        histBody2: 'La ciudad albergó hasta 50,000 habitantes y contaba con un avanzado sistema hidráulico, mercados y el campo de juego de pelota más grande de Mesoamérica.',
        timeline: [
            { year: '~500 d.C.', desc: 'Fundación por los mayas itzáes. Comienzan las primeras construcciones en la zona norte.' },
            { year: '~900-1200', desc: 'Período de mayor esplendor. Se construye la pirámide de Kukulkán y el Templo de los Guerreros.' },
            { year: '1221',      desc: 'Declive del poder político. La ciudad pierde influencia ante Mayapán.' },
            { year: '1988',      desc: 'Declarada Patrimonio de la Humanidad por la UNESCO.' },
            { year: '2007',      desc: 'Elegida Nueva Maravilla del Mundo Moderno con más de 100 millones de votos.' }
        ],
        histBadgeNum: '~1,500', histBadgeTxt: 'años de historia',
        cultTitle: 'El saber maya: astronomía y poder',
        cultLead:  'Los mayas de Chichén Itzá llevaron las matemáticas y la astronomía a un nivel sin parangón en el mundo antiguo.',
        cultBody1: 'Su calendario solar de 365 días se combinaba con el ritual de 260 días en ciclos de 52 años. El Observatorio —El Caracol— rastreaba Venus, la Luna y el Sol para rituales, siembras y guerras.',
        cultBody2: 'La escritura jeroglífica maya registraba mitos y genealogías reales. Su sistema numérico incluía el concepto de cero siglos antes que Europa.',
        pilares: [
            { icon: '🌕', h4: 'Astronomía',     p: 'El Caracol permitía observar Venus y predecir eclipses con precisión asombrosa.' },
            { icon: '🔢', h4: 'Matemáticas',    p: 'Inventaron el cero. Su calendario era más preciso que el gregoriano.' },
            { icon: '🏟️', h4: 'Juego de pelota', p: 'El campo de Chichén es el mayor de Mesoamérica, con 168 m de largo.' },
            { icon: '💧', h4: 'Cenotes',         p: 'Pozos sagrados, portales al inframundo y fuentes de agua en la zona sin ríos superficiales.' }
        ],
        reconocTitle: 'Un legado eterno',
        reconocBody1: 'Chichén Itzá es el sitio arqueológico más visitado de México, con más de 2.7 millones de visitantes anuales.',
        reconocBody2: 'El INAH regula el acceso y mantiene la conservación de la zona arqueológica.',
        awards: [
            { year: '1988', h4: 'Patrimonio de la Humanidad – UNESCO', p: 'Reconocida por su extraordinario valor cultural e histórico.' },
            { year: '2007', h4: 'Nueva Maravilla del Mundo Moderno',   p: 'Elegida entre 21 finalistas por más de 100 millones de votantes.' },
            { year: 'Hoy',  h4: 'Zona Arqueológica Federal',           p: 'El INAH regula el acceso y conservación de la zona.' }
        ],
        datos: [
            { icon: '🔺', num: '30 m',    lbl: 'Altura de El Castillo' },
            { icon: '📐', num: '365',     lbl: 'Escalones (uno por día del año)' },
            { icon: '🏙️', num: '50,000', lbl: 'Habitantes en su apogeo' },
            { icon: '🌀', num: '2',       lbl: 'Equinoccios con el fenómeno' }
        ],
        prevKey: 'machu', nextKey: 'cristo'
    },

    cristo: {
        img:      'img/cristo1.jpg',
        img2:     'img/cristo2.jpg',
        cultImg1: 'img/cristo1.jpg',
        cultImg2: 'img/cristo3.jpg',
        cultImg3: 'img/cristo4.jpg',
        country:  '🇧🇷 Brasil',
        title:    'Cristo Redentor',
        heroSub:  'El guardián que extiende sus brazos sobre Río de Janeiro desde la cima del Corcovado.',
        stats: [
            { num: '38 m',   lbl: 'Altura total' },
            { num: '28 m',   lbl: 'Envergadura de brazos' },
            { num: '635 t',  lbl: 'Peso total' },
            { num: '1931',   lbl: 'Año de inauguración' }
        ],
        histTitle: 'El guardián de Río',
        histLead:  'El Cristo Redentor es la estatua Art Déco más grande del mundo y uno de los iconos más reconocibles del planeta. Desde el Cerro Corcovado, a 710 m de altura, domina el paisaje de Río de Janeiro.',
        histBody1: 'La idea surgió a fines del siglo XIX. En 1921 la Iglesia Católica lanzó una colecta popular. El diseño fue obra del ingeniero Heitor da Silva Costa y la ejecución escultórica del artista francés Paul Landowski.',
        histBody2: 'La construcción duró nueve años, de 1922 a 1931. Fue inaugurada el 12 de octubre de 1931. Marconi —inventor de la radio— encendió las luces de la estatua desde Italia mediante ondas de radio.',
        timeline: [
            { year: '1859', desc: 'El sacerdote Pedro Maria Boss sugiere por primera vez un monumento cristiano en el Corcovado.' },
            { year: '1921', desc: 'La Iglesia Católica inicia una colecta popular para financiar la construcción.' },
            { year: '1922', desc: 'Comienza la construcción bajo la dirección del ingeniero Heitor da Silva Costa.' },
            { year: '1931', desc: 'Inauguración oficial el 12 de octubre. Marconi activa las luces desde Europa vía radio.' },
            { year: '2007', desc: 'Declarada Nueva Maravilla del Mundo Moderno por voto popular internacional.' }
        ],
        histBadgeNum: '710 m', histBadgeTxt: 'sobre el nivel del mar',
        cultTitle: 'Símbolo de fe y hospitalidad',
        cultLead:  'El Cristo Redentor trasciende la religión para convertirse en símbolo universal de paz y de la identidad brasileña.',
        cultBody1: 'Brasil es el país con más católicos del mundo, y la figura con los brazos abiertos encarna el espíritu de acolhimento —hospitalidad— del pueblo brasileño. Aparece en los momentos más importantes de la nación.',
        cultBody2: 'Su estilo Art Déco refleja el espíritu de renovación de los años 20. Es fruto de la colaboración franco-brasileña: un diseño europeo ejecutado con el corazón de Brasil.',
        pilares: [
            { icon: '✝️', h4: 'Fe cristiana',     p: 'Símbolo de la presencia divina sobre toda la ciudad y sus habitantes.' },
            { icon: '🎨', h4: 'Arte Déco',         p: 'Uno de los mejores ejemplos mundiales del estilo Art Déco en escultura monumental.' },
            { icon: '🇧🇷', h4: 'Identidad nacional', p: 'Inmortalizado en películas y eventos, es el símbolo más reconocible de Brasil.' },
            { icon: '⚡', h4: 'Maravilla técnica', p: 'Transportar piezas hasta la cima del Corcovado fue un logro de ingeniería sin precedentes.' }
        ],
        reconocTitle: 'Un símbolo universal',
        reconocBody1: 'El Cristo Redentor recibe más de 2 millones de visitantes al año, siendo el atractivo turístico más visitado de Brasil.',
        reconocBody2: 'La estatua ha sido iluminada en colores especiales para conmemorar eventos globales como el Día Mundial de la Paz.',
        awards: [
            { year: '1931', h4: 'Inauguración oficial',              p: 'Construido con donaciones de ciudadanos brasileños de todas las clases sociales.' },
            { year: '2007', h4: 'Nueva Maravilla del Mundo Moderno', p: 'Elegida por voto popular internacional entre millones de participantes.' },
            { year: '2010', h4: 'Restauración mayor',                p: 'El gobierno realizó una restauración completa del revestimiento de piedra jabón.' }
        ],
        datos: [
            { icon: '📏', num: '38 m',  lbl: 'Altura de la estatua' },
            { icon: '🙌', num: '28 m',  lbl: 'Envergadura de los brazos' },
            { icon: '⚖️', num: '635 t', lbl: 'Peso total' },
            { icon: '🏔️', num: '710 m', lbl: 'Altitud del Corcovado' }
        ],
        prevKey: 'chichen', nextKey: 'coliseo'
    },

    coliseo: {
        img:      'img/coliseo1.jpg',
        img2:     'img/coliseo2.jpg',
        cultImg1: 'img/coliseo1.jpg',
        cultImg2: 'img/coliseo3.jpg',
        cultImg3: 'img/coliseo4.jpg',
        country:  '🇮🇹 Italia',
        title:    'Coliseo Romano',
        heroSub:  'El anfiteatro más grande del mundo antiguo, testigo del esplendor y la brutalidad del Imperio Romano.',
        stats: [
            { num: '50,000', lbl: 'Espectadores' },
            { num: '70 d.C.', lbl: 'Inicio construcción' },
            { num: '188 m',   lbl: 'Longitud' },
            { num: '2007',    lbl: 'Maravilla' }
        ],
        histTitle: 'El gran teatro del Imperio',
        histLead:  'El Coliseo, conocido como el Anfiteatro Flavio, es el más grande jamás construido en el Imperio Romano. Levantado entre 70 y 80 d.C., fue el escenario central de la vida pública romana.',
        histBody1: 'Su construcción fue ordenada por el emperador Vespasiano y concluida por su hijo Tito. Se estima que más de 100,000 prisioneros judíos participaron en su edificación. Podía albergar entre 50,000 y 80,000 espectadores.',
        histBody2: 'En la Edad Media fue convertido en fortaleza y cantera. Gran parte de su mármol fue reutilizado en el Vaticano y palacios romanos. Hoy es el monumento más visitado de Italia.',
        timeline: [
            { year: '70 d.C.',  desc: 'El emperador Vespasiano ordena la construcción sobre el lago drenado del palacio de Nerón.' },
            { year: '80 d.C.',  desc: 'Tito inaugura el Coliseo con 100 días de juegos. Murieron miles de gladiadores y animales.' },
            { year: '~523 d.C.',desc: 'Cesan los combates de gladiadores. El edificio pierde su función principal.' },
            { year: '1980',     desc: 'Declarado Patrimonio de la Humanidad por la UNESCO junto al centro histórico de Roma.' },
            { year: '2007',     desc: 'Elegido Nueva Maravilla del Mundo Moderno por votación internacional.' }
        ],
        histBadgeNum: '~400', histBadgeTxt: 'años en uso activo',
        cultTitle: 'Pan y circo: la vida pública romana',
        cultLead:  'El Coliseo no era solo un estadio: era el corazón de la política y la cultura del Imperio. "Panem et circenses" era la fórmula para mantener al pueblo satisfecho.',
        cultBody1: 'Los espectáculos incluían combates de gladiadores, cacerías de animales exóticos de África y Asia, y ejecuciones públicas. El entretenimiento era un instrumento de poder político.',
        cultBody2: 'La arquitectura fue revolucionaria: 80 arcos por planta, un sistema de vomitorias que vaciaba el estadio en minutos, y un velarium —toldo gigante— operado por marinos de la flota romana.',
        pilares: [
            { icon: '⚔️', h4: 'Gladiadores',  p: 'Esclavos, prisioneros o voluntarios. Los más exitosos alcanzaban la fama y la libertad.' },
            { icon: '🦁', h4: 'Venationes',   p: 'Cacerías de leones, tigres y elefantes importados de todo el mundo conocido.' },
            { icon: '🏛️', h4: 'Ingeniería',   p: '80 arcos concéntricos, sótanos subterráneos con jaulas y maquinaria escénica avanzada.' },
            { icon: '🌊', h4: 'Naumachia',    p: 'Ocasionalmente se inundaba para representar batallas navales. Una hazaña logística extraordinaria.' }
        ],
        reconocTitle: 'Roma eterna',
        reconocBody1: 'Con más de 7 millones de visitantes al año, el Coliseo es el monumento más visitado de Italia.',
        reconocBody2: 'Italia invierte más de 18 millones de euros en la restauración de su arena y subterráneos.',
        awards: [
            { year: '1980', h4: 'Patrimonio de la Humanidad – UNESCO', p: 'Junto al centro histórico de Roma, reconocido como legado de la civilización occidental.' },
            { year: '2007', h4: 'Nueva Maravilla del Mundo Moderno',   p: 'Símbolo del poder arquitectónico y cultural de Roma ante el mundo.' },
            { year: '2023', h4: 'Restauración en curso',               p: 'Italia invierte +18 millones de euros en arena y subterráneos.' }
        ],
        datos: [
            { icon: '📐', num: '188 m',    lbl: 'Longitud exterior' },
            { icon: '🏟️', num: '50,000',   lbl: 'Espectadores máximos' },
            { icon: '🪨', num: '100,000 m³', lbl: 'Travertino usado' },
            { icon: '⏱️', num: '10 años',  lbl: 'Duración construcción' }
        ],
        prevKey: 'cristo', nextKey: 'taj'
    },

    taj: {
        img:      'img/taj1.png',
        img2:     'img/taj2.jpg',
        cultImg1: 'img/taj1.png',
        cultImg2: 'img/taj3.png',
        cultImg3: 'img/taj4.jpg',
        country:  '🇮🇳 India',
        title:    'Taj Mahal',
        heroSub:  'El mausoleo de mármol blanco que un emperador enamorado erigió como monumento eterno al amor.',
        stats: [
            { num: '1648',    lbl: 'Año de finalización' },
            { num: '73 m',    lbl: 'Altura del minarete' },
            { num: '20,000',  lbl: 'Trabajadores' },
            { num: '1983',    lbl: 'UNESCO' }
        ],
        histTitle: 'Un amor inmortal en mármol blanco',
        histLead:  'El Taj Mahal fue construido por el emperador mogol Shah Jahan en memoria de su esposa Mumtaz Mahal, quien murió en 1631 dando a luz a su decimocuarto hijo.',
        histBody1: 'La construcción comenzó en 1632 y tardó 22 años. Más de 20,000 artesanos de toda India, Persia y Europa participaron. El mármol blanco vino de Makrana y las piedras preciosas de Asia Central, China y Sri Lanka.',
        histBody2: 'La tradición cuenta que Shah Jahan planeó un mausoleo gemelo de mármol negro para sí mismo. Sin embargo, fue depuesto por su hijo Aurangzeb en 1658 y pasó sus últimos años contemplando el Taj desde una ventana.',
        timeline: [
            { year: '1631', desc: 'Muere Mumtaz Mahal. Shah Jahan ordena la construcción de un mausoleo sin igual.' },
            { year: '1632', desc: 'Comienzan las obras bajo el arquitecto principal Ustad Ahmad Lahauri.' },
            { year: '1648', desc: 'Finaliza la construcción del mausoleo principal. Las obras secundarias continúan hasta 1653.' },
            { year: '1983', desc: 'Declarado Patrimonio de la Humanidad por la UNESCO.' },
            { year: '2007', desc: 'Elegido Nueva Maravilla del Mundo Moderno por votación popular mundial.' }
        ],
        histBadgeNum: '22', histBadgeTxt: 'años de construcción',
        cultTitle: 'El arte mogol: donde Persia y la India se funden',
        cultLead:  'El Taj Mahal representa la cumbre del arte mogol: una síntesis sublime de las tradiciones persa, islámica e india.',
        cultBody1: 'El diseño es perfectamente simétrico: cuatro minaretes, jardines divididos en cuadrantes por canales, y el mausoleo coronado por una cúpula de 35 m. El agua refleja la estructura completa, creando el efecto de infinitud.',
        cultBody2: 'Las paredes están decoradas con pietra dura, incrustación con piedras semipreciosas como lapislázuli, turquesa, jaspe y cornalina. Más de 28 tipos de gemas forman flores y motivos caligráficos.',
        pilares: [
            { icon: '💎', h4: 'Pietra Dura',      p: 'Más de 28 tipos de gemas incrustadas en el mármol. Un arte que requería años de aprendizaje.' },
            { icon: '📐', h4: 'Simetría perfecta', p: 'Cada elemento tiene su espejo exacto, símbolo de la perfección divina en el arte islámico.' },
            { icon: '🌊', h4: 'Jardines Charbagh', p: 'Los jardines de cuatro cuadrantes representan el paraíso islámico descrito en el Corán.' },
            { icon: '🌅', h4: 'Luz cambiante',     p: 'El mármol cambia de color: rosado al amanecer, blanco al mediodía, dorado al atardecer, plateado de noche.' }
        ],
        reconocTitle: 'Amor eterno en piedra',
        reconocBody1: 'El Taj Mahal recibe cerca de 8 millones de visitantes al año, siendo el monumento más visitado de India.',
        reconocBody2: 'La contaminación en Agra está tiñendo el mármol de amarillo, lo que ha impulsado estrictas medidas medioambientales.',
        awards: [
            { year: '1983', h4: 'Patrimonio de la Humanidad – UNESCO', p: '"La joya del arte musulmán en India, una obra maestra universalmente admirada."' },
            { year: '2007', h4: 'Nueva Maravilla del Mundo Moderno',   p: 'Considerada la expresión máxima del amor eterno en la arquitectura mundial.' },
            { year: 'Hoy',  h4: 'Plan de preservación',                p: 'El gobierno restringe el tráfico e industrias contaminantes en Agra.' }
        ],
        datos: [
            { icon: '🏛️', num: '73 m',   lbl: 'Altura de los minaretes' },
            { icon: '💠', num: '28',     lbl: 'Tipos de gemas incrustadas' },
            { icon: '👷', num: '20,000', lbl: 'Artesanos y trabajadores' },
            { icon: '🌿', num: '17 ha',  lbl: 'Extensión del complejo' }
        ],
        prevKey: 'coliseo', nextKey: 'petra'
    },

    petra: {
        img:      'img/petra1.jpg',
        img2:     'img/petra2.jpg',
        cultImg1: 'img/petra1.jpg',
        cultImg2: 'img/petra3.jpg',
        cultImg3: 'img/petra4.jpg',
        country:  '🇯🇴 Jordania',
        title:    'Petra',
        heroSub:  'La metrópolis nabatea tallada en acantilados de arenisca rojiza, oculta al mundo por siglos.',
        stats: [
            { num: 'Siglo IV a.C.', lbl: 'Fundación' },
            { num: '312 km²',       lbl: 'Área total' },
            { num: '~30,000',       lbl: 'Habitantes' },
            { num: '1985',          lbl: 'UNESCO' }
        ],
        histTitle: 'La ciudad oculta en la roca',
        histLead:  'Petra fue la magnífica capital del reino nabateo, tallada directamente en los acantilados de arenisca del desierto de Jordania. Su nombre griego significa "roca".',
        histBody1: 'Los nabateos crearon un imperio comercial que controlaba las rutas entre Arabia, Egipto y el Mediterráneo. La riqueza del comercio de especias e incienso les permitió construir una ciudad de enorme sofisticación.',
        histBody2: 'El acceso es a través del Siq, un cañón de 1.2 km cuyos muros se elevan hasta 80 m. Al final aparece súbitamente el Khazneh —El Tesoro— de 40 m de altura, la imagen más icónica de la ciudad.',
        timeline: [
            { year: 'Siglo IV a.C.', desc: 'Los nabateos se establecen. Petra se convierte en su capital y nodo de rutas comerciales.' },
            { year: '106 d.C.',      desc: 'El Imperio Romano anexiona el reino nabateo. Petra se convierte en capital de Arabia Petraea.' },
            { year: '363 d.C.',      desc: 'Un terremoto devastador destruye gran parte de la ciudad y marca el inicio de su declive.' },
            { year: '1812',          desc: 'El explorador suizo Johann Ludwig Burckhardt redescubre Petra para el mundo occidental.' },
            { year: '1985',          desc: 'Declarada Patrimonio de la Humanidad por la UNESCO.' },
            { year: '2007',          desc: 'Elegida Nueva Maravilla del Mundo Moderno.' }
        ],
        histBadgeNum: '2,000+', histBadgeTxt: 'años de historia',
        cultTitle: 'Los nabateos: maestros del agua y el comercio',
        cultLead:  'Los nabateos construyeron en el desierto un sistema hidráulico que les permitió sobrevivir y prosperar en uno de los ambientes más áridos del mundo.',
        cultBody1: 'Desarrollaron canales, cisternas y tuberías de terracota que recolectaban agua de lluvia y la distribuían por toda la ciudad. Esto sostuvo hasta 30,000 personas en pleno desierto.',
        cultBody2: 'Los nabateos controlaban las caravanas entre Arabia, India, China y el Mediterráneo. Su escritura es antecesora directa del alfabeto árabe moderno.',
        pilares: [
            { icon: '💧', h4: 'Ingeniería hídrica', p: 'Canales y cisternas almacenaban agua en pleno desierto. Un milagro de la ingeniería antigua.' },
            { icon: '🏺', h4: 'Arte rupestre',      p: 'Miles de tumbas talladas en roca muestran una habilidad artística excepcional.' },
            { icon: '🐪', h4: 'Ruta de especias',   p: 'Petra controlaba el comercio entre Arabia, India, China y el Mediterráneo.' },
            { icon: '🌐', h4: 'Cultura cosmopolita', p: 'Grecia, Roma, Egipto y Arabia se mezclaban en Petra. Una ciudad verdaderamente multicultural.' }
        ],
        reconocTitle: 'La ciudad rosa inmortal',
        reconocBody1: 'Petra recibe cerca de 1.5 millones de visitantes al año y es el principal atractivo turístico de Jordania.',
        reconocBody2: 'Las vibraciones del turismo y la humedad amenazan las estructuras talladas en roca, lo que impulsa planes de conservación.',
        awards: [
            { year: '1985', h4: 'Patrimonio de la Humanidad – UNESCO', p: 'Reconocida por su valor arqueológico y arquitectónico excepcional.' },
            { year: '2007', h4: 'Nueva Maravilla del Mundo Moderno',   p: 'Elegida entre millones de votos de todo el mundo.' },
            { year: 'Hoy',  h4: 'Zona arqueológica activa',            p: 'Arqueólogos siguen descubriendo nuevas estructuras bajo las arenas de Petra.' }
        ],
        datos: [
            { icon: '🪨', num: '800+',  lbl: 'Monumentos tallados en roca' },
            { icon: '💧', num: '200+',  lbl: 'Cisternas y canales descubiertos' },
            { icon: '📏', num: '40 m',  lbl: 'Altura del Khazneh' },
            { icon: '🏜️', num: '312 km²', lbl: 'Extensión del sitio' }
        ],
        prevKey: 'taj', nextKey: 'muralla'
    },

    muralla: {
        img:      'img/muralla1.jpg',
        img2:     'img/muralla2.jpg',
        cultImg1: 'img/muralla1.jpg',
        cultImg2: 'img/muralla3.jpg',
        cultImg3: 'img/muralla4.jpg',
        country:  '🇨🇳 China',
        title:    'Gran Muralla China',
        heroSub:  'La mayor obra de ingeniería militar de la historia: más de 21,000 km que recorren el alma de China.',
        stats: [
            { num: '+21,000 km', lbl: 'Longitud total' },
            { num: 'Siglo VII a.C.', lbl: 'Inicio construcción' },
            { num: '+1 M',       lbl: 'Trabajadores en apogeo' },
            { num: '1987',       lbl: 'UNESCO' }
        ],
        histTitle: 'Una muralla que desafía el tiempo',
        histLead:  'La Gran Muralla China es la estructura construida por el ser humano más larga de la historia. Se extiende por montañas, desiertos y llanuras a lo largo de más de 21,000 kilómetros.',
        histBody1: 'Las primeras murallas datan del siglo VII a.C. Cuando Qin Shi Huang unificó China en 221 a.C., ordenó la conexión y ampliación de estos muros para crear una barrera defensiva contra los pueblos nómadas del norte.',
        histBody2: 'La versión conocida hoy fue construida durante la dinastía Ming (1368-1644) con ladrillos cocidos en lugar de tierra compactada, lo que le otorgó mayor durabilidad. En su punto más alto supera los 8 metros.',
        timeline: [
            { year: 'Siglo VII a.C.', desc: 'Los estados feudales chinos comienzan a construir murallas defensivas independientes.' },
            { year: '221 a.C.',       desc: 'Qin Shi Huang unifica China y ordena conectar las murallas. Más de un millón de trabajadores.' },
            { year: '618-907 d.C.',   desc: 'La dinastía Tang prácticamente abandona la muralla al expandir sus fronteras hacia el norte.' },
            { year: '1368-1644',      desc: 'La dinastía Ming reconstruye y extiende la muralla con ladrillos cocidos.' },
            { year: '1987',           desc: 'Declarada Patrimonio de la Humanidad por la UNESCO.' },
            { year: '2007',           desc: 'Elegida Nueva Maravilla del Mundo Moderno.' }
        ],
        histBadgeNum: '2,000+', histBadgeTxt: 'años de construcción',
        cultTitle: 'El espíritu indomable de China',
        cultLead:  'La Gran Muralla no es solo una barrera defensiva: es el símbolo más poderoso de la civilización china, su determinación y su capacidad de superar cualquier obstáculo.',
        cultBody1: 'Entre 300,000 y 1,000,000 de trabajadores —soldados, campesinos y prisioneros— participaron en distintas épocas. Las condiciones eran brutales; miles murieron y, según la leyenda, fueron enterrados dentro de los muros.',
        cultBody2: 'La muralla incluía torres de vigilancia para señales de fuego y humo, cuarteles para soldados, almacenes y caminos de patrulla. Era un sistema defensivo completo y autosuficiente.',
        pilares: [
            { icon: '🔥', h4: 'Señales de fuego', p: 'Torres que transmitían alertas a cientos de kilómetros en horas mediante fuego y humo.' },
            { icon: '🧱', h4: 'Ingeniería adaptable', p: 'La muralla sube montañas, cruza ríos y atraviesa desiertos sin perder funcionalidad.' },
            { icon: '⚔️', h4: 'Defensa imperial', p: 'Protegió a China de los hunos, los mongoles y otros nómadas del norte durante siglos.' },
            { icon: '🌏', h4: 'Símbolo nacional', p: 'Hoy es el símbolo más reconocible de China y orgullo de toda su civilización.' }
        ],
        reconocTitle: 'Una obra monumental',
        reconocBody1: 'La Gran Muralla recibe más de 10 millones de visitantes al año. La sección de Badaling es la más visitada del mundo.',
        reconocBody2: 'Contrario al mito, la Gran Muralla NO es visible desde el espacio a simple vista, algo confirmado por el primer astronauta chino Yang Liwei en 2003.',
        awards: [
            { year: '1987', h4: 'Patrimonio de la Humanidad – UNESCO', p: 'Reconocida como la obra de ingeniería humana más extraordinaria de la historia.' },
            { year: '2007', h4: 'Nueva Maravilla del Mundo Moderno',   p: 'Elegida por cientos de millones de personas en todo el planeta.' },
            { year: 'Hoy',  h4: 'Plan de conservación',                p: 'Menos del 30% de la muralla Ming está bien conservada. China invierte en restauración.' }
        ],
        datos: [
            { icon: '📏', num: '+21,000 km', lbl: 'Longitud total' },
            { icon: '🧱', num: '3-8 m',      lbl: 'Ancho medio' },
            { icon: '🗼', num: '25,000+',    lbl: 'Torres de vigilancia' },
            { icon: '👷', num: '~1 M',       lbl: 'Trabajadores en apogeo' }
        ],
        prevKey: 'petra', nextKey: 'machu'
    }
};

/* ============================================================
   ORDEN DE MARAVILLAS (para la navegación)
   ============================================================ */
const wonderOrder = ['machu','chichen','cristo','coliseo','taj','petra','muralla'];
let currentWonderKey = null;

/* ============================================================
   GRID: FILTROS Y BÚSQUEDA
   ============================================================ */
const searchInput  = document.getElementById('searchInput');
const cards        = document.querySelectorAll('.wonder-card');
const noResults    = document.getElementById('noResults');
const tagBtns      = document.querySelectorAll('.tag-btn');

function filterCards() {
    const query   = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const active  = document.querySelector('.tag-btn.active');
    const contSel = active ? active.dataset.continent : 'all';
    let visible   = 0;

    cards.forEach(card => {
        const name = card.dataset.name || '';
        const cont = card.dataset.continent || '';
        const matchSearch = name.includes(query);
        const matchFilter = contSel === 'all' || cont === contSel;

        if (matchSearch && matchFilter) {
            card.style.display = '';
            visible++;
        } else {
            card.style.display = 'none';
        }
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
const favToast = document.getElementById('favToast');
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
   VISTA DETALLE — PÁGINA COMPLETA DESLIZANTE
   ============================================================ */
const detailView = document.getElementById('detail-view');

function openDetail(key) {
    const d = wonders[key];
    if (!d) return;
    currentWonderKey = key;

    /* --- Hero --- */
    const heroBg = detailView.querySelector('.dv-hero-bg');
    if (heroBg) heroBg.style.background = `linear-gradient(to bottom, rgba(10,30,20,0.1) 0%, rgba(10,30,20,0.78) 100%), url('${d.img}') center/cover no-repeat`;

    setText('.dv-title',    `${d.title.replace(' ', '<br><em>').split(' ').length > 1 ? buildTitle(d.title) : d.title}`);
    setText('.dv-subtitle', d.heroSub);

    /* stats */
    const statsGrid = detailView.querySelector('.dv-stats-grid');
    if (statsGrid) {
        statsGrid.innerHTML = d.stats.map(s =>
            `<div class="dv-stat-card"><span class="num">${s.num}</span><span class="lbl">${s.lbl}</span></div>`
        ).join('');
    }

    /* breadcrumb nombre */
    setText('#dv-bc-name', d.title);

    /* Historia */
    setText('.dv-hist-title', d.histTitle);
    setText('.dv-hist-lead',  d.histLead);
    setText('.dv-hist-body1', d.histBody1);
    setText('.dv-hist-body2', d.histBody2);

    const tlWrap = detailView.querySelector('.dv-timeline');
    if (tlWrap) {
        tlWrap.innerHTML = d.timeline.map(t =>
            `<div class="dv-tl-item">
                <span class="dv-tl-year">${t.year}</span>
                <p class="dv-tl-desc">${t.desc}</p>
            </div>`
        ).join('');
    }

    const histImg = detailView.querySelector('.dv-hist-img-main');
    if (histImg) { histImg.src = d.img2; histImg.alt = d.title; }

    const histBadge = detailView.querySelector('.dv-hist-badge .big');
    const histBadgeSm = detailView.querySelector('.dv-hist-badge .sm');
    if (histBadge)   histBadge.textContent   = d.histBadgeNum;
    if (histBadgeSm) histBadgeSm.textContent = d.histBadgeTxt;

    /* Cultura */
    const cultImgs = detailView.querySelectorAll('.dv-cultura-images img');
    if (cultImgs[0]) { cultImgs[0].src = d.cultImg1; cultImgs[0].alt = d.title + ' 1'; }
    if (cultImgs[1]) { cultImgs[1].src = d.cultImg2; cultImgs[1].alt = d.title + ' 2'; }
    if (cultImgs[2]) { cultImgs[2].src = d.cultImg3; cultImgs[2].alt = d.title + ' 3'; }

    setText('.dv-cult-title', d.cultTitle);
    setText('.dv-cult-lead',  d.cultLead);
    setText('.dv-cult-body1', d.cultBody1);
    setText('.dv-cult-body2', d.cultBody2);

    const pilaresWrap = detailView.querySelector('.dv-pilares-grid');
    if (pilaresWrap) {
        pilaresWrap.innerHTML = d.pilares.map(p =>
            `<div class="dv-pilar">
                <span class="icon">${p.icon}</span>
                <h4>${p.h4}</h4>
                <p>${p.p}</p>
            </div>`
        ).join('');
    }

    /* Reconocimiento */
    setText('.dv-reconoc-title', d.reconocTitle);
    setText('.dv-reconoc-body1', d.reconocBody1);
    setText('.dv-reconoc-body2', d.reconocBody2);

    const awardsWrap = detailView.querySelector('.dv-awards');
    if (awardsWrap) {
        awardsWrap.innerHTML = d.awards.map(a =>
            `<div class="dv-award">
                <span class="dv-award-year">${a.year}</span>
                <div><h4>${a.h4}</h4><p>${a.p}</p></div>
            </div>`
        ).join('');
    }

    /* Datos */
    const datosWrap = detailView.querySelector('.dv-datos-grid');
    if (datosWrap) {
        datosWrap.innerHTML = d.datos.map(dt =>
            `<div class="dv-dato">
                <span class="icon">${dt.icon}</span>
                <span class="num">${dt.num}</span>
                <span class="lbl">${dt.lbl}</span>
            </div>`
        ).join('');
    }

    /* Nav prev/next */
    updateNavBtns(key);

    /* Abrir */
    detailView.classList.add('open');
    detailView.scrollTop = 0;
    document.body.style.overflow = 'hidden';
}

function buildTitle(title) {
    const words = title.split(' ');
    if (words.length === 1) return title;
    if (words.length === 2) return `${words[0]}<br><em>${words[1]}</em>`;
    // 3+ palabras: primera mitad normal, resto en em
    const half = Math.ceil(words.length / 2);
    return `${words.slice(0, half).join(' ')}<br><em>${words.slice(half).join(' ')}</em>`;
}

function setText(selector, value) {
    const el = detailView.querySelector(selector);
    if (!el) return;
    if (value.includes('<') && value.includes('>')) {
        el.innerHTML = value;
    } else {
        el.textContent = value;
    }
}

function updateNavBtns(key) {
    const d = wonders[key];
    if (!d) return;

    const prevKey  = d.prevKey;
    const nextKey  = d.nextKey;
    const prevData = wonders[prevKey];
    const nextData = wonders[nextKey];

    const prevBtn  = detailView.querySelector('.dv-prev');
    const nextBtn  = detailView.querySelector('.dv-next');
    const prevThumb = detailView.querySelector('.dv-wn-left .dv-wn-thumb');
    const nextThumb = detailView.querySelector('.dv-wn-right .dv-wn-thumb');
    const prevName  = detailView.querySelector('.dv-wn-left .dv-wn-name');
    const nextName  = detailView.querySelector('.dv-wn-right .dv-wn-name');

    if (prevBtn) prevBtn.dataset.key = prevKey;
    if (nextBtn) nextBtn.dataset.key = nextKey;

    if (prevThumb && prevData) { prevThumb.src = prevData.img; prevThumb.alt = prevData.title; }
    if (nextThumb && nextData) { nextThumb.src = nextData.img; nextThumb.alt = nextData.title; }
    if (prevName && prevData)   prevName.textContent = prevData.title;
    if (nextName && nextData)   nextName.textContent = nextData.title;

    const wnLeft  = detailView.querySelector('.dv-wn-left');
    const wnRight = detailView.querySelector('.dv-wn-right');
    if (wnLeft)  wnLeft.dataset.key  = prevKey;
    if (wnRight) wnRight.dataset.key = nextKey;
}

function closeDetail() {
    detailView.classList.remove('open');
    document.body.style.overflow = '';
    currentWonderKey = null;
}

/* Botones "Ver más" de las cards */
document.querySelectorAll('.detail-btn').forEach(btn => {
    btn.addEventListener('click', () => openDetail(btn.dataset.wonder));
});

/* Botón volver */
const backBtn = detailView ? detailView.querySelector('.dv-back') : null;
if (backBtn) backBtn.addEventListener('click', closeDetail);

/* Botones prev/next del header del detalle */
detailView && detailView.querySelectorAll('.dv-prev, .dv-next').forEach(btn => {
    btn.addEventListener('click', () => {
        const key = btn.dataset.key;
        if (key) { detailView.scrollTop = 0; openDetail(key); }
    });
});

/* Navegación inferior (prev/next con thumb) */
detailView && detailView.querySelectorAll('.dv-wn-left, .dv-wn-right, .dv-wn-center').forEach(btn => {
    btn.addEventListener('click', () => {
        const key = btn.dataset.key;
        if (key) { detailView.scrollTop = 0; openDetail(key); }
        else closeDetail(); // center = volver al grid
    });
});

/* Tecla Escape */
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && detailView && detailView.classList.contains('open')) {
        closeDetail();
    }
});