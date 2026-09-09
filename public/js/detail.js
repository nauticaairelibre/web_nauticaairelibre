(() => {
  /* ══ DATABASE OF MODELS ════════════════════════════════ */
  const modelsDB = {
    // BERMUDA MODELS
    safari550: {
      name: "Bermuda Safari 550",
      brand: "Bermuda",
      brandLogo: "/images/logo-bermuda.png",
      category: "Embarcación de pesca",
      line1: "Safari",
      line2: "550",
      ruleText: "Centro de consola · Pesca & aventura",
      ghostText: "Safari 550",
      heroPhoto: "/img/safari-cover-lake.webp",
      description: [
        "Construida para el explorador que no conoce límites. La Safari 550 combina amplitud de cockpit, maniobrabilidad en aguas difíciles y una capacidad de carga que la convierte en la compañera ideal para cada expedición.",
        "La Safari 550 es una embarcación de centro de consola diseñada para pescar, explorar y disfrutar. Su perfil bajo y su casco en V le permiten navegar con comodidad en ríos, lagos y zonas costeras, adaptándose a las condiciones más exigentes.",
        "Compatible con motores fuera de borda de 40 a 90 HP, ofrece el equilibrio perfecto entre potencia, economía y maniobrabilidad. El cockpit despejado garantiza libertad de movimiento para toda la tripulación."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha Bermuda Safari 550.",
      isMotor: false,
      specs: [
        { label: "Eslora total", value: "5.50<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga máxima", value: "2.00<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "0.77<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Capacidad", value: "8<sup>pax</sup>", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Motorización", value: "40–90<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Consola", value: "Central", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" }
      ],
      gallery: [
        { src: '/img/safari550-gal-2.webp', tag: 'Navegación en Lago' },
        { src: '/img/safari550-gal-1.webp', tag: 'Motor Mercury FourStroke 75' },
        { src: '/img/safari550-gal-4.webp', tag: 'Consola Central e Instrumental' },
        { src: '/img/safari550-gal-5.png', tag: 'Pesca Deportiva en la Patagonia' },
        { src: '/img/safari550-gal-3.webp', tag: 'Safari 550 Camuflada' }
      ]
    },
    sport160: {
      name: "Bermuda Sport 160",
      brand: "Bermuda",
      brandLogo: "/images/logo-bermuda.png",
      category: "Lancha deportiva",
      line1: "Sport",
      line2: "160",
      ruleText: "Estilo deportivo · Diversión & velocidad",
      ghostText: "Sport 160",
      heroPhoto: "/img/sport-160.jpg",
      description: [
        "La Bermuda Sport 160 es la puerta de entrada perfecta al mundo de la náutica deportiva. Con un diseño ágil y compacto, es ideal para paseos rápidos y diversión familiar.",
        "Su casco liviano y eficiente garantiza un planeo rápido incluso con motorizaciones moderadas, lo que se traduce en un excelente consumo de combustible.",
        "Equipada con un parabrisas deportivo, cómodas butacas y un amplio espacio de guardado para equipos náuticos."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha Bermuda Sport 160.",
      isMotor: false,
      specs: [
        { label: "Eslora total", value: "4.85<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga máxima", value: "1.95<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "0.90<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Capacidad", value: "5<sup>pax</sup>", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Motorización", value: "40–75<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Diseño", value: "Deportivo", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" }
      ]
    },
    sport180: {
      name: "Bermuda Sport 180",
      brand: "Bermuda",
      brandLogo: "/images/logo-bermuda.png",
      category: "Lancha deportiva",
      line1: "Sport",
      line2: "180",
      ruleText: "Dinámica y versátil · Navegación superior",
      ghostText: "Sport 180",
      heroPhoto: "/img/sport-180.jpg",
      description: [
        "La Bermuda Sport 180 es una de las lanchas más vendidas del mercado gracias a su equilibrio perfecto entre tamaño, rendimiento y confort a bordo.",
        "Su casco en V profunda le otorga una navegación sumamente suave y segura en condiciones de río abierto, cortando las olas con facilidad.",
        "Ideal para la práctica de esquí acuático, wakeboard y paseos de media distancia con total comodidad para todos los tripulantes."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha Bermuda Sport 180.",
      isMotor: false,
      specs: [
        { label: "Eslora total", value: "5.30<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga máxima", value: "2.15<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "1.05<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Capacidad", value: "6<sup>pax</sup>", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Motorización", value: "75–115<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Diseño", value: "Deportivo", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" }
      ]
    },
    sport200: {
      name: "Bermuda Sport 200",
      brand: "Bermuda",
      brandLogo: "/images/logo-bermuda.png",
      category: "Lancha deportiva premium",
      line1: "Sport",
      line2: "200",
      ruleText: "Potencia y elegancia · Confort sin compromisos",
      ghostText: "Sport 200",
      heroPhoto: "/img/sport-200.jpg",
      description: [
        "Subí de categoría con la Bermuda Sport 200. Esta embarcación ofrece un espacio interior sobresaliente, terminaciones de alta calidad y un andar que redefine la comodidad en el agua.",
        "Su cockpit amplio permite una distribución de asientos muy cómoda, incluyendo reposeras en proa y un espacioso solárium en popa.",
        "Perfecta para travesías largas y deportes náuticos exigentes, soportando potencias de hasta 150 HP para una experiencia llena de adrenalina."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha Bermuda Sport 200.",
      isMotor: false,
      specs: [
        { label: "Eslora total", value: "5.95<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga máxima", value: "2.30<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "1.15<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Capacidad", value: "8<sup>pax</sup>", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Motorización", value: "115–150<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Diseño", value: "Bowrider", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" }
      ]
    },
    discovery190: {
      name: "Bermuda Discovery 190",
      brand: "Bermuda",
      brandLogo: "/images/logo-bermuda.png",
      category: "Cuddy Cabin / Crucero familiar",
      line1: "Discovery",
      line2: "190",
      ruleText: "Aventura y comodidad · Camarote privado",
      ghostText: "Discovery 190",
      heroPhoto: "/img/discovery-190.png",
      description: [
        "La Bermuda Discovery 190 combina la versatilidad de una lancha deportiva con la comodidad de un camarote cerrado (cuddy). Es ideal para quienes disfrutan pasar el día y también pernoctar a bordo.",
        "Su cabina optimizada ofrece resguardo completo del clima, baño compartimentado y una cama cómoda para descansar.",
        "Excelente performance de planeo con motores de 90 a 150 HP, asegurando viajes rápidos y seguros a tu destino favorito."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha Bermuda Discovery 190.",
      isMotor: false,
      specs: [
        { label: "Eslora total", value: "5.80<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga máxima", value: "2.25<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "1.10<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Capacidad", value: "8<sup>pax</sup>", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Motorización", value: "90–150<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Tipo", value: "Cuddy Cabin", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" }
      ]
    },
    discovery230: {
      name: "Bermuda Discovery 230",
      brand: "Bermuda",
      brandLogo: "/images/logo-bermuda.png",
      category: "Cuddy Cabin de alta gama",
      line1: "Discovery",
      line2: "230",
      ruleText: "Espacio de crucero · Confort máximo a bordo",
      ghostText: "Discovery 230",
      heroPhoto: "/img/discovery-230.jpg",
      description: [
        "El buque insignia de la línea cabinada de Bermuda. La Discovery 230 ofrece una amplitud interior y unas comodidades de crucero sobresalientes para viajes de larga distancia.",
        "Cuenta con una cabina espaciosa con altura cómoda, cocina integrada, baño privado y dinette convertible para pasar la noche.",
        "Su casco robusto proporciona un paso de ola extremadamente suave, haciendo que las travesías largas sean relajadas y placenteras."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha Bermuda Discovery 230.",
      isMotor: false,
      specs: [
        { label: "Eslora total", value: "6.90<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga máxima", value: "2.45<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "1.25<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Capacidad", value: "10<sup>pax</sup>", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Motorización", value: "150–250<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Tipo", value: "Cuddy Cabin", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" }
      ]
    },
    twenty: {
      name: "Bermuda Twenty",
      brand: "Bermuda",
      brandLogo: "/images/logo-bermuda.png",
      category: "Lancha premium",
      line1: "Bermuda",
      line2: "Twenty",
      ruleText: "Elegancia atemporal · Edición especial",
      ghostText: "Twenty",
      heroPhoto: "/img/twenty.jpg",
      description: [
        "La Bermuda Twenty representa la elegancia clásica fusionada con la tecnología moderna. Diseñada para navegantes sofisticados que valoran el estilo y el confort.",
        "Su andar es impecable, gracias a una distribución perfecta de pesos y un casco refinado que se adapta a las mareas más demandantes.",
        "Terminaciones artesanales en tapizados y paneles que aseguran una atmósfera premium y exclusiva en cada salida al río."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha Bermuda Twenty.",
      isMotor: false,
      specs: [
        { label: "Eslora total", value: "6.10<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga máxima", value: "2.35<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "1.20<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Capacidad", value: "8<sup>pax</sup>", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Motorización", value: "115–200<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Diseño", value: "Bowrider", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" }
      ]
    },
    safariopen: {
      name: "Bermuda Safari Open",
      brand: "Bermuda",
      brandLogo: "/images/logo-bermuda.png",
      category: "Embarcación multipropósito",
      line1: "Safari",
      line2: "Open",
      ruleText: "Espacio abierto · Pesca y paseo",
      ghostText: "Safari Open",
      heroPhoto: "/img/safariopen-gal-6.webp",
      description: [
        "La versión abierta del exitoso casco Safari. Con consola lateral, maximiza el espacio libre transitable a bordo, permitiendo pescar cómodamente en 360 grados.",
        "Perfecta para actividades de trabajo náutico, pesca profesional y salidas de aventura en islas o canales poco profundos.",
        "Su bajo calado y construcción súper reforzada garantizan durabilidad en los terrenos y condiciones más difíciles."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha Bermuda Safari Open.",
      isMotor: false,
      gallery: [
        { src: '/img/safariopen-gal-6.webp', tag: 'Perfil en Navegación y Planeo' },
        { src: '/img/safariopen-gal-1.webp', tag: 'Navegación / Potencia Mercury 115' },
        { src: '/img/safariopen-gal-2.webp', tag: 'Vista Frontal en Planeo' },
        { src: '/img/safariopen-gal-3.webp', tag: 'Puesto de Mando y Butaca' },
        { src: '/img/safariopen-gal-4.webp', tag: 'Cockpit y Asientos de Popa' },
        { src: '/img/safariopen-gal-5.webp', tag: 'Guantera Estanca y Conectores' }
      ],
      specs: [
        { label: "Eslora total", value: "5.50<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga máxima", value: "2.00<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "0.77<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Capacidad", value: "8<sup>pax</sup>", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Motorización", value: "40–90<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Consola", value: "Lateral", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" }
      ]
    },

    // ECLIPSE MODELS
    eclipse17ss: {
      name: "Eclipse 17SS",
      brand: "Eclipse",
      brandLogo: "/images/logo-eclipse.png",
      category: "Lancha deportiva de gama media",
      line1: "Eclipse",
      line2: "17SS",
      ruleText: "Maniobrabilidad y confort · Diseño moderno",
      ghostText: "17SS",
      heroPhoto: "/img/eclipse-17ss.jpg",
      description: [
        "La Eclipse 17SS destaca por su excelente navegación, maniobrabilidad y espacio optimizado. Ideal para salidas familiares y deportes acuáticos en el río Paraná.",
        "Su manga ancha y su casco estable aseguran un andar seguro y plano, ideal para esquí náutico y wakeboard con amigos.",
        "Equipada con parabrisas curvo templado, instrumental completo y tapizados náuticos premium de alta resistencia."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha Eclipse 17SS.",
      isMotor: false,
      specs: [
        { label: "Eslora total", value: "5.42<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga máxima", value: "2.31<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "1.14<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Capacidad", value: "8<sup>pax</sup>", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Motorización", value: "90–150<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Transmisión", value: "Fuera de Borda", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" }
      ]
    },
    eclipse19ss: {
      name: "Eclipse 19SS",
      brand: "Eclipse",
      brandLogo: "/images/logo-eclipse.png",
      category: "Lancha deportiva de gama media-alta",
      line1: "Eclipse",
      line2: "19SS",
      ruleText: "Estabilidad y amabilidad · Planeo inmediato",
      ghostText: "19SS",
      heroPhoto: "/img/eclipse-19ss.jpg",
      description: [
        "Una lancha moderna y versátil que ofrece un confort excepcional para hasta 10 pasajeros. Excelente respuesta al planeo y estabilidad insuperable.",
        "Su distribución inteligente optimiza cada rincón de cockpit, permitiendo albergar cómodamente una conservadora portátil y un solárium trasero.",
        "Apta para motorizaciones de hasta 180 HP, ideal para viajes rápidos a bancos de arena lejanos y travesías deportivas."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha Eclipse 19SS.",
      isMotor: false,
      specs: [
        { label: "Eslora total", value: "6.05<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga máxima", value: "2.45<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "1.22<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Capacidad", value: "10<sup>pax</sup>", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Motorización", value: "120–180<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Transmisión", value: "Fuera de Borda", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" }
      ]
    },
    eclipse21ss: {
      name: "Eclipse 21SS",
      brand: "Eclipse",
      brandLogo: "/images/logo-eclipse.png",
      category: "Lancha deportiva de alta gama",
      line1: "Eclipse",
      line2: "21SS",
      ruleText: "Confort de primera clase · Rendimiento supremo",
      ghostText: "21SS",
      heroPhoto: "/img/eclipse-21ss.jpg",
      description: [
        "Confort de primera clase y prestaciones deportivas de alto rendimiento. La Eclipse 21SS está diseñada para quienes exigen lo mejor en cada salida náutica.",
        "Su manga súper ancha proporciona una habitabilidad a bordo inigualable en su categoría, con butacas giratorias, mesa desmontable y equipo de audio marino.",
        "Ideal para surcar aguas picadas con total suavidad gracias a su casco robusto con deflactores de agua avanzados."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha Eclipse 21SS.",
      isMotor: false,
      specs: [
        { label: "Eslora total", value: "6.42<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga máxima", value: "2.50<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "1.30<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Capacidad", value: "12<sup>pax</sup>", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Motorización", value: "150–200<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Transmisión", value: "Fuera de Borda", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" }
      ]
    },
    eclipse24ss: {
      name: "Eclipse 24SS",
      brand: "Eclipse",
      brandLogo: "/images/logo-eclipse.png",
      category: "Lancha deportiva de alta gama",
      line1: "Eclipse",
      line2: "24SS",
      ruleText: "Lujo y potencia extrema · Capacidad 10 personas",
      ghostText: "24SS",
      heroPhoto: "/img/eclipse-24ss.jpg",
      description: [
        "La Eclipse 24SS es el buque insignia de la línea deportiva, diseñada para quienes buscan el máximo espacio, confort de primera clase y una potencia excepcional en el agua.",
        "Con 7,32 metros de eslora y capacidad para 10 personas, ofrece una distribución abierta con solárium de popa, módulo de bacha con grifería, planchada de popa extendida y acabados premium.",
        "LAS IMAGENES SON ILUSTRATIVAS, CONSULTA CON SU ASESOR DE VENTAS COLORES DISPONIBLES."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha Eclipse 24SS.",
      isMotor: false,
      gallery: [
        { src: '/img/eclipse-24ss.jpg', tag: 'Navegación / Vista Principal' },
        { src: '/img/eclipse24ss-gal-10.webp', tag: 'Navegación Frente al Río Paraná' },
        { src: '/img/eclipse24ss-gal-11.webp', tag: 'Planeo Deportivo con Motor 400HP' },
        { src: '/img/eclipse24ss-gal-12.webp', tag: 'Cockpit y Puesto de Mando' },
        { src: '/img/eclipse24ss-gal-13.webp', tag: 'Asientos de Proa y Solárium' },
        { src: '/img/eclipse24ss-gal-14.webp', tag: 'Planchada de Teka y Casco' },
        { src: '/img/eclipse24ss-gal-1.webp', tag: 'Vista Frontal en Showroom' },
        { src: '/img/eclipse24ss-gal-2.webp', tag: 'Perfil Lateral / Línea Negra' },
        { src: '/img/eclipse24ss-gal-3.webp', tag: 'Popa con Motor Mercury 400 HP' },
        { src: '/img/eclipse24ss-gal-4.webp', tag: 'Puesto de Mando y Butacas Deportivas' },
        { src: '/img/eclipse24ss-gal-5.webp', tag: 'Tablero Digital e Instrumental' },
        { src: '/img/eclipse24ss-gal-6.webp', tag: 'Cockpit y Asientos en U' },
        { src: '/img/eclipse24ss-gal-7.webp', tag: 'Solárium de Popa' },
        { src: '/img/eclipse24ss-gal-8.webp', tag: 'Módulo de Bacha y Grifería' },
        { src: '/img/eclipse24ss-gal-9.webp', tag: 'Planchada de Popa con Teka y Escalera' }
      ],
      specs: [
        { label: "Eslora total", value: "7.32<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga máxima", value: "2.59<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "1.44<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Capacidad", value: "10<sup>pax</sup>", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Motorización", value: "250–400<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Transmisión", value: "Fuera de Borda", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" }
      ]
    },

    // GEUNA MODELS
    geunaf165: {
      name: "GEUNA F165",
      brand: "Geuna",
      brandLogo: "/images/logo-geuna.png",
      category: "Lancha deportiva open bow",
      line1: "Geuna",
      line2: "F165",
      ruleText: "Agilidad y rendimiento · Capacidad 6 personas",
      ghostText: "F165",
      heroPhoto: "/img/geuna-f165.webp",
      description: [
        "La GEUNA F165 es una embarcación ágil, versátil y de navegación sobresaliente, diseñada para disfrutar de salidas deportivas, esquí acuático y paseos recreativos con total confort.",
        "Con una eslora de 5.30 metros y una manga de 2.12 metros, cuenta con un casco eficiente y liviano que planea con gran rapidez, admitiendo potencias de 50 a 115 HP (con recomendación óptima entre 60 y 90 HP) para un consumo muy contenido y excelente maniobrabilidad.",
        "LAS IMAGENES SON ILUSTRATIVAS, CONSULTA CON SU ASESOR DE VENTAS COLORES DISPONIBLES."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha Geuna F165.",
      isMotor: false,
      gallery: [
        { src: '/img/geuna-f165.webp', tag: 'Navegación Frente al Puente Internacional' },
        { src: '/img/geunaf165-gal-1.webp', tag: 'Atardecer en el Río / Motor Mercury 90 HP' },
        { src: '/img/geunaf165-gal-2.webp', tag: 'Popa y Solárium al Atardecer' },
        { src: '/img/geunaf165-gal-3.webp', tag: 'Edición Black & White en Navegación' },
        { src: '/img/geunaf165-gal-4.webp', tag: 'Planeo Deportivo y Estela de Agua' },
        { src: '/img/geunaf165-gal-5.webp', tag: 'Solárium de Proa con Colchonetas' },
        { src: '/img/geunaf165-gal-6.webp', tag: 'Cockpit y Butacas Deportivas Ergonómicas' },
        { src: '/img/geunaf165-gal-7.webp', tag: 'Asientos de Popa y Posavasos Inox' }
      ],
      specs: [
        { label: "Eslora total", value: "5.30<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga total", value: "2.12<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "1.00<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Calado", value: "0.40<sup>m</sup>", svgPath: "M12 3v18M12 21l-3-3m3 3l3-3M8 9h8m-8 6h8" },
        { label: "Capacidad", value: "6<sup>pax</sup>", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Motorización admitida", value: "50–115<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Motorización recomendada", value: "60–90<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Diseño", value: "Open Bow Deportivo", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" }
      ]
    },
    geuna170wake: {
      name: "GEUNA 170 Wake",
      brand: "Geuna",
      brandLogo: "/images/logo-geuna.png",
      category: "Lancha deportiva y wakeboard",
      line1: "Geuna 170",
      line2: "Wake",
      ruleText: "Uso deportivo y placer · Torre de wakeboard",
      ghostText: "170 Wake",
      heroPhoto: "/img/geuna-170-wake.webp",
      description: [
        "La GEUNA 170 Wake está concebida para los amantes de los deportes acuáticos y los momentos de placer al aire libre. Con un diseño deportivo audaz y torre de wakeboard integrada, combina agilidad, aceleración y estilo en cada salida.",
        "Con una eslora de 5.20 metros y una manga de 2.14 metros, ofrece un andar suave y estable con motorizaciones recomendadas de 75 a 130 HP, ideal para tirar tabla de wakeboard, esquí acuático o disfrutar de paseos con hasta 6 pasajeros.",
        "LAS IMAGENES SON ILUSTRATIVAS, CONSULTA CON SU ASESOR DE VENTAS COLORES DISPONIBLES."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha Geuna 170 Wake.",
      isMotor: false,
      gallery: [
        { src: '/img/geuna-170-wake.webp', tag: 'Navegación / Vista Principal' },
        { src: '/img/geuna170wake-gal-9.webp', tag: 'Vista Aérea Cenital (Drone)' },
        { src: '/img/geuna170wake-gal-6.webp', tag: 'Vista Panorámica en el Delta' },
        { src: '/img/geuna170wake-gal-4.webp', tag: 'Corte de Ola Frontal en Navegación' },
        { src: '/img/geuna170wake-gal-1.webp', tag: 'Planeo Deportivo con Torre Wakeboard' },
        { src: '/img/geuna170wake-gal-5.webp', tag: 'Popa y Planchadas de Teka en Velocidad' },
        { src: '/img/geuna170wake-gal-2.webp', tag: 'Perfil en Agua / Gráfica Deportiva' },
        { src: '/img/geuna170wake-gal-10.webp', tag: 'Cockpit Completo y Torre de Wakeboard' },
        { src: '/img/geuna170wake-gal-11.webp', tag: 'Butaca Deportiva con Costura Diamante' },
        { src: '/img/geuna170wake-gal-7.webp', tag: 'Rack con Tabla y Botas de Wakeboard' },
        { src: '/img/geuna170wake-gal-12.webp', tag: 'Tapicería de Popa con Detalle Teka' },
        { src: '/img/geuna170wake-gal-3.webp', tag: 'Interior Cockpit y Guantera Geuna' },
        { src: '/img/geuna170wake-gal-13.webp', tag: 'Guantera Estanca con Emblema' },
        { src: '/img/geuna170wake-gal-8.webp', tag: 'Comando Monopalanca e Interior' }
      ],
      specs: [
        { label: "Eslora total", value: "5.20<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga total", value: "2.14<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "1.10<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Calado", value: "0.45<sup>m</sup>", svgPath: "M12 3v18M12 21l-3-3m3 3l3-3M8 9h8m-8 6h8" },
        { label: "Capacidad", value: "6<sup>pax</sup>", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Motorización recomendada", value: "75–130<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Uso", value: "Deportivo y placer", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" }
      ]
    },
    geuna540: {
      name: "GEUNA 540",
      brand: "Geuna",
      brandLogo: "/images/logo-geuna.png",
      category: "Lancha deportiva open bow",
      line1: "Geuna",
      line2: "540",
      ruleText: "Eslora 5.40m · Capacidad 6 personas · Uso deportivo y familiar",
      ghostText: "540",
      heroPhoto: "/img/geuna-540.webp",
      description: [
        "La GEUNA 540 es una lancha deportiva de 5.40 metros de eslora diseñada para salidas recreativas, deportes náuticos y momentos en familia con un andar confortable, ágil y seguro.",
        "Construida íntegramente en P.R.F.V con pisos matrizados y doble fondo estanco, ofrece excelente espacio interior para 6 tripulantes, butacas giratorias, tapicería completa importada y un planeo óptimo con potencias de 60 a 90 HP.",
        "Equipamiento de serie: Íntegramente en P.R.F.V, pisos matrizados, doble fondo estanco, luces de navegación y fondeo, bomba de achique, herrajes e instalación eléctrica bajo normas, volante y dirección Fayva, botazo de goma, interruptores retráctiles cromados, butacas giratorias, parabrisas curvo en aluminio, tapicería importada, guantera y guarda ancla en proa.",
        "Opcionales disponibles: Estéreo con parlantes náuticos, VHF con antena, ecosonda con GPS, relojería completa, escalera, posacañas, barra de ski, luces de cortesía, lona cubre embarcación, parabrisas negro tonalizado, piso Teck Deck o Evolve, bimini y toldo de proa, back to back y mesa desmontable / retráctil.",
        "LAS IMAGENES SON ILUSTRATIVAS, CONSULTA CON SU ASESOR DE VENTAS COLORES DISPONIBLES."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha Geuna 540.",
      isMotor: false,
      gallery: [
        { src: '/img/geuna-540.webp', tag: 'Perfil Lateral en Navegación' },
        { src: '/img/geuna540-gal-1.webp', tag: 'Vista 3/4 Frontal y Casco en el Río' },
        { src: '/img/geuna540-gal-2.webp', tag: 'Paseo Familiar y Navegación' },
        { src: '/img/geuna540-gal-3.webp', tag: 'Planeo Deportivo en Aguas Abiertas' }
      ],
      specs: [
        { label: "Eslora total", value: "5.40<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga", value: "2.00<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "0.90<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Capacidad", value: "6<sup>pax</sup>", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Potencia máxima", value: "90<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Potencia recomendada", value: "60<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Construcción", value: "P.R.F.V Matrizado", svgPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "Diseño", value: "Open Bow Familiar", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" }
      ]
    },
    geuna212: {
      name: "GEUNA 212 Supreme",
      brand: "Geuna",
      brandLogo: "/images/logo-geuna.png",
      category: "Lancha deportiva y recreativa",
      line1: "Geuna 212",
      line2: "Supreme",
      ruleText: "Uso deportivo y recreativo · Máximo confort",
      ghostText: "212 Supreme",
      heroPhoto: "/img/geuna-212.webp",
      description: [
        "La GEUNA 212 Supreme es una embarcación moderna de líneas deportivas y gran habitabilidad, concebida para brindar experiencias náuticas inigualables tanto en paseos familiares como en deportes acuáticos.",
        "Su diseño incorpora amplias planchadas de popa para un disfrute pleno del agua, un cockpit espacioso con tapizados de alta calidad y un casco optimizado para una navegación suave y veloz con motores de 150 a 250 HP.",
        "LAS IMAGENES SON ILUSTRATIVAS, CONSULTA CON SU ASESOR DE VENTAS COLORES DISPONIBLES."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha Geuna 212 Supreme.",
      isMotor: false,
      gallery: [
        { src: '/img/geuna-212.webp', tag: 'Navegación / Vista Principal' },
        { src: '/img/geuna212-gal-1.webp', tag: 'Planeo Frontal en Aguas Abiertas' },
        { src: '/img/geuna212-gal-2.webp', tag: 'Perfil Lateral en Agua' },
        { src: '/img/geuna212-gal-3.webp', tag: 'Planchadas de Popa y Motorización' },
        { src: '/img/geuna212-gal-11.webp', tag: 'Vista Proa Exterior en Tráiler' },
        { src: '/img/geuna212-gal-9.webp', tag: 'Solárium de Proa con Colchonetas' },
        { src: '/img/geuna212-gal-10.webp', tag: 'Planta Interior y Distribución Cockpit' },
        { src: '/img/geuna212-gal-4.webp', tag: 'Cockpit y Puesto de Mando' },
        { src: '/img/geuna212-gal-6.webp', tag: 'Butacas Giratorias y Pasillo Central' },
        { src: '/img/geuna212-gal-5.webp', tag: 'Tapizados y Bordado F212 Supreme' },
        { src: '/img/geuna212-gal-8.webp', tag: 'Timón Deportivo e Instrumental' },
        { src: '/img/geuna212-gal-7.webp', tag: 'Mesa Náutica con Posavasos Inox' },
        { src: '/img/geuna212-gal-12.webp', tag: 'Perfil Casco y Showroom' }
      ],
      specs: [
        { label: "Eslora sin planchadas", value: "5.94<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Eslora total c/planchadas", value: "6.61<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga total", value: "2.40<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "1.23<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Calado", value: "0.65<sup>m</sup>", svgPath: "M12 3v18M12 21l-3-3m3 3l3-3M8 9h8m-8 6h8" },
        { label: "Capacidad", value: "9<sup>pax</sup>", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Motorización recomendada", value: "150–250<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Uso", value: "Deportivo y recreativo", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" }
      ]
    },
    
    // PAMPA MARIN MODELS
    pampasf470: {
      name: "Pampa Marin SF470",
      brand: "Pampa Marin",
      brandLogo: "/images/logo-pampamarin.png",
      category: "Lancha open deportiva",
      line1: "Pampa Marin",
      line2: "SF470",
      ruleText: "Calidad · Diseño · Confort & Navegación",
      ghostText: "SF470",
      heroPhoto: "/img/pampa-sf470-1.webp",
      description: [
        "La Pampa Marin SF470 es una lancha open deportiva moderna, versátil y ágil, concebida para ofrecer una experiencia de navegación superior tanto en paseos familiares como en jornadas de deportes acuáticos y pesca deportiva.",
        "Con una eslora de 4.86 metros y una manga de 1.85 metros, brinda un andar sumamente estable, suave y seguro sobre el agua, con amplia habitabilidad para transportar cómodamente hasta 5 tripulantes.",
        "Admite motorizaciones fuera de borda desde 40 HP hasta 75 HP, logrando una respuesta al planeo ágil y una excelente eficiencia en el consumo de combustible.",
        "LAS IMAGENES SON ILUSTRATIVAS, CONSULTA CON SU ASESOR DE VENTAS COLORES DISPONIBLES."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha Pampa Marin SF470.",
      isMotor: false,
      gallery: [
        { src: '/img/pampa-sf470-1.webp', tag: 'Perfil Lateral / Casco Azul & Blanco' },
        { src: '/img/pampa-sf470-2.webp', tag: 'Vista 3/4 Frontal / Proa Abierta Open' },
        { src: '/img/pampa-sf470-3.webp', tag: 'Distribución Interior y Cockpit Completo' },
        { src: '/img/pampa-sf470-4.webp', tag: 'Consola de Comando y Volante Deportivo' },
        { src: '/img/pampa-sf470-5.webp', tag: 'Butacas Deportivas con Bordado Pampa' }
      ],
      specs: [
        { label: "Eslora total", value: "4.86<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga", value: "1.85<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "0.94<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Capacidad", value: "5<sup>pax</sup>", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Potencia Mínima", value: "40<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Potencia Máxima", value: "75<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Diseño", value: "Open Bow Deportivo", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" }
      ]
    },
    
    pampa520: {
      name: "Pampa Marin 520",
      brand: "Pampa Marin",
      brandLogo: "/images/logo-pampamarin.png",
      category: "Tracker deportivo y familiar",
      line1: "Pampa Marin",
      line2: "520",
      ruleText: "Eslora 5.18m · Capacidad 6 personas · Tracker Open",
      ghostText: "Pampa 520",
      heroPhoto: "/img/pampa-520-1.webp",
      description: [
        "El Pampa Marin 520 es uno de los trackers más vendidos de la región en el segmento de embarcaciones que navegan con excelente rendimiento con motores desde 40 HP, destacándose por sus finas terminaciones y una extraordinaria relación precio/calidad.",
        "Cuenta con piso 100% matrizado que reduce el peso y aumenta la durabilidad, fabricado con los mismos estándares de calidad y materiales que la alta gama de Geuna sobre un fondo de navegación sumamente probado y confiable.",
        "Pensado para un equilibrio perfecto entre la pesca deportiva y el confort familiar, dispone del espacio necesario para transportar equipos de pesca, conservadora y gazebo para una jornada completa en el agua.",
        "Su sistema de doble fondo estanco garantiza máxima flotabilidad y seguridad. Su puntal con 1 metro en el frente de ataque corta el oleaje de manera impecable evitando el ingreso de agua de proa, convirtiéndolo en un tracker excepcionalmente seguro.",
        "Equipamiento de serie: Tapicería completa con cuerina náutica, butacas giratorias, volante y dirección, parabrisas curvo envolvente, herrajes bajo norma y luces de navegación reglamentarias.",
        "Opcionales disponibles: Capota, bimini, relojería completa, ecosonda, escalera, llave de corte, bomba de achique y luces LED de cortesía.",
        "LAS IMAGENES SON ILUSTRATIVAS, CONSULTA CON SU ASESOR DE VENTAS COLORES DISPONIBLES."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha Pampa Marin 520.",
      isMotor: false,
      gallery: [
        { src: '/img/pampa-520-1.webp', tag: 'Perfil Lateral en Navegación / Pampa 520' },
        { src: '/img/pampa-520-6.webp', tag: 'Vista en el Río con Motor Hidea 40' },
        { src: '/img/pampa-520-7.webp', tag: 'Paseo y Navegación Familiar en el Río' },
        { src: '/img/pampa-520-8.webp', tag: 'Vista Frontal al Atardecer / Casco Pampa 520' },
        { src: '/img/pampa-520-2.webp', tag: 'Navegación Familiar y Paseo / Capacidad 6 PAX' },
        { src: '/img/pampa-520-3.webp', tag: 'Vista Cenital / Eslora 5.18 Metros' },
        { src: '/img/pampa-520-4.webp', tag: 'Vista Frontal Aérea / Manga 1.99 Metros' },
        { src: '/img/pampa-520-5.webp', tag: 'Vista 3/4 de Proa / Puntal 0.80 Metros' }
      ],
      specs: [
        { label: "Eslora", value: "5.18<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga", value: "1.99<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "0.80<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Capacidad", value: "6<sup>pax</sup>", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Potencia Mínima", value: "40<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Potencia Recomendada", value: "40<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Potencia Máxima", value: "70<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Construcción", value: "Piso 100% Matrizado", svgPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "Tipo", value: "Tracker Open", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" }
      ]
    },
    
    pampasf190: {
      name: "Pampa Starfish 190",
      brand: "Pampa Marin",
      brandLogo: "/images/logo-pampamarin.png",
      category: "Lancha open deportiva",
      line1: "Pampa Marin",
      line2: "Starfish 190",
      ruleText: "Eslora 5.60m · Potencia 90 a 150 HP · Open Bow Deportivo",
      ghostText: "Starfish 190",
      heroPhoto: "/img/pampa-sf190-1.webp",
      description: [
        "La Pampa Starfish 190 es una lancha open deportiva moderna de alta gama, que combina aceleración, confort y un comportamiento dinámico insuperable en aguas abiertas.",
        "Con una eslora máxima de 5.60 metros y una generosa manga de 2.08 metros, ofrece una navegación de máxima estabilidad y suavidad, ideal para deportes náuticos de alto rendimiento y paseos familiares con capacidad para hasta 6 tripulantes.",
        "Admite motorizaciones fuera de borda desde 90 HP hasta 150 HP, garantizando un planeo inmediato y una velocidad crucero sumamente ágil y placentera.",
        "Equipada con amplio solárium de proa, mesa desmontable en cockpit, butacas deportivas giratorias, sistema de audio náutico integrado, tapicería premium y finas terminaciones en cada detalle.",
        "LAS IMAGENES SON ILUSTRATIVAS, CONSULTA CON SU ASESOR DE VENTAS COLORES DISPONIBLES."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha Pampa Starfish 190.",
      isMotor: false,
      gallery: [
        { src: '/img/pampa-sf190-1.webp', tag: 'Perfil Lateral / Casco Gris & Blanco con Bimini' },
        { src: '/img/pampa-sf190-7.webp', tag: 'Interior Completo con Toldo Bimini / Motor Hidea' },
        { src: '/img/pampa-sf190-6.webp', tag: 'Vista Cenital del Cockpit / Butacas Pampa y Mesa Central' },
        { src: '/img/pampa-sf190-8.webp', tag: 'Puesto de Mando y Butaca con Bordado Pampa' },
        { src: '/img/pampa-sf190-9.webp', tag: 'Puesto de Conducción y Butacas en Showroom' },
        { src: '/img/pampa-sf190-10.webp', tag: 'Solárium de Proa con Audio Náutico' },
        { src: '/img/pampa-sf190-2.webp', tag: 'Vista 3/4 Frontal / Gráfica Starfish SF190' },
        { src: '/img/pampa-sf190-3.webp', tag: 'Distribución Interior / Mesa Desmontable y Butacas Giratorias' },
        { src: '/img/pampa-sf190-4.webp', tag: 'Vista Cenital / Proa Abierta y Cockpit Completo' },
        { src: '/img/pampa-sf190-5.webp', tag: 'Cockpit de Proa / Audio Náutico y Tapicería Premium' }
      ],
      specs: [
        { label: "Eslora máxima", value: "5.60<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga máxima", value: "2.08<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "1.06<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Capacidad", value: "6<sup>pax</sup>", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Potencia Mínima", value: "90<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Potencia Máxima", value: "150<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Diseño", value: "Open Bow Deportivo", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" }
      ]
    },
    
    // DRAKKAR MODELS
    drakkar23: {
      name: "Drakkar 23",
      brand: "Drakkar",
      brandLogo: "/images/logo-drakkar.png",
      category: "Pontoon boat / Lounge flotante",
      line1: "Drakkar",
      line2: "23",
      ruleText: "Eslora 7.00m · Capacidad 11 personas · Lounge & Confort Premium",
      ghostText: "Drakkar 23",
      heroPhoto: "/img/drakkar-23-new-1.png",
      description: [
        "El Drakkar 23 es un pontoon boat premium que combina la máxima comodidad de un lounge flotante con una navegación sumamente placentera, estable y segura para disfrutar en familia y con amigos.",
        "Con una eslora de 7.00 metros, una manga de 2.50 metros y una superficie de lounge de 16.25 m², ofrece un generoso espacio social con capacidad para que hasta 11 pasajeros disfruten de jornadas inolvidables en el agua.",
        "Admite potencias fuera de borda de hasta 150 HP (potencia ideal recomendada de 115 HP), contando con tanque de combustible de 140 litros y depósito de agua potable de 55 litros.",
        "Equipado con amplios sillones perimetrales de cuero náutico, mesa central de madera desmontable, puesto de comando ergonómico e instrumental completo, módulo de bacha/cocina y toldo bimini de gran cobertura.",
        "LAS IMAGENES SON ILUSTRATIVAS, CONSULTA CON SU ASESOR DE VENTAS COLORES DISPONIBLES."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la embarcación Drakkar 23.",
      isMotor: false,
      gallery: [
        { src: '/img/drakkar-23-new-1.png', tag: 'Living y Lounge Interior con Mesa de Madera' },
        { src: '/img/drakkar-23-new-2.png', tag: 'Espejo de Popa, Motor y Doble Pontón de Aluminio' },
        { src: '/img/drakkar-23-new-3.png', tag: 'Módulo Parrilla / Cocina y Butaca Deportiva' },
        { src: '/img/drakkar-23-new-4.png', tag: 'Consola de Mando e Instrumental de Navegación' },
        { src: '/img/drakkar-23-new-5.png', tag: 'Bacha / Anafe y Butaca Ergonómica de Timonel' }
      ],
      specs: [
        { label: "Eslora", value: "7.00<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga", value: "2.50<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "0.73<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Superficie lounge", value: "16.25<sup>m²</sup>", svgPath: "M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" },
        { label: "Capacidad", value: "11<sup>pax</sup>", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Potencia Máxima", value: "150<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Potencia Ideal", value: "115<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Tanque combustible", value: "140<sup>L</sup>", svgPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
        { label: "Agua potable", value: "55<sup>L</sup>", svgPath: "M12 3v18M12 21l-3-3m3 3l3-3M8 9h8m-8 6h8" }
      ]
    },

    drakkar26: {
      name: "Drakkar 26",
      brand: "Drakkar",
      brandLogo: "/images/logo-drakkar.png",
      category: "Pontoon boat / Lounge flotante",
      line1: "Drakkar",
      line2: "26",
      ruleText: "Eslora 8.20m · Capacidad 13 personas · Lounge & Confort Premium",
      ghostText: "Drakkar 26",
      heroPhoto: "/img/drakkar-23-6.webp",
      description: [
        "El Drakkar 26 es un pontoon boat de máxima categoría diseñado para redefinir la experiencia de navegación grupal y familiar, ofreciendo un extraordinario espacio social, máxima estabilidad y los más altos estándares de confort y habitabilidad.",
        "Con una eslora de 8.20 metros, una generosa manga de 2.50 metros y una imponente superficie de lounge de 18.75 m², ofrece un auténtico living flotante pensado para que hasta 13 pasajeros disfruten con total comodidad.",
        "Admite motorizaciones fuera de borda de hasta 200 HP (potencia ideal recomendada de 135 HP), ofreciendo una navegación suave, potente y eficiente con tanque de combustible de 140 litros y reserva de agua potable de 55 litros.",
        "Equipado con sillones modulares envolventes de cuero náutico, mesa desmontable, puesto de comando elevado y ergonómico, toldo bimini de amplia sombra, módulo bar de popa y piso antideslizante de textura suave.",
        "LAS IMAGENES SON ILUSTRATIVAS, CONSULTA CON SU ASESOR DE VENTAS COLORES DISPONIBLES."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la embarcación Drakkar 26.",
      isMotor: false,
      gallery: [
        { src: '/img/drakkar-23-6.webp', tag: 'Perfil en el Agua / Drakkar 26 con Toldo Bimini' },
        { src: '/img/drakkar-23-2.webp', tag: 'Perfil en Navegación con Toldo Bimini / Doble Pontón' },
        { src: '/img/drakkar-23-3.webp', tag: 'Vista Cenital en Planeo / Estela en el Agua' },
        { src: '/img/drakkar-23-4.webp', tag: 'Paseo y Confort Familiar en Aguas Abiertas' },
        { src: '/img/drakkar-23-5.webp', tag: 'Living de Proa con Mesa y Vista al Horizonte' },
        { src: '/img/drakkar-23-7.webp', tag: 'Construcción y Montaje / Cubierta y Puesto de Mando' },
        { src: '/img/drakkar-23-8.webp', tag: 'Estructura de Pontones de Aluminio / Tanque Integrado' },
        { src: '/img/drakkar-23-9.webp', tag: 'Módulo Bar de Popa y Escalera de Embarque' }
      ],
      specs: [
        { label: "Eslora", value: "8.20<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga", value: "2.50<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "0.73<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Superficie lounge", value: "18.75<sup>m²</sup>", svgPath: "M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" },
        { label: "Capacidad", value: "13<sup>pax</sup>", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Potencia Máxima", value: "200<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Potencia Ideal", value: "135<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Tanque combustible", value: "140<sup>L</sup>", svgPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
        { label: "Agua potable", value: "55<sup>L</sup>", svgPath: "M12 3v18M12 21l-3-3m3 3l3-3M8 9h8m-8 6h8" }
      ]
    },

    drakkar26dobledeck: {
      name: "Drakkar 26 Doble Deck",
      brand: "Drakkar",
      brandLogo: "/images/logo-drakkar.png",
      category: "Pontoon boat / Doble Deck Solárium",
      line1: "Drakkar 26",
      line2: "Doble Deck",
      ruleText: "Eslora 8.20m · Doble Deck 25.25m² · Solárium & Espacio Gourmet",
      ghostText: "Doble Deck",
      heroPhoto: "/img/drakkar-26-dd-1.png",
      description: [
        "El Drakkar 26 Doble Deck es un claro ejemplo de personalización según las necesidades y gustos de cada navegante. Las embarcaciones no sólo son un medio que nos permiten trasladarnos: a muchos nos gusta pasar el día embarcados teniendo total autonomía y confort.",
        "Disfrutá de increíbles experiencias con una Drakkar 26 Doble Deck. Incluye un segundo deck para solárium de 6,5 m², logrando que la embarcación alcance un total de 25,25 m² de deck habitables para hasta 13 pasajeros.",
        "🔥 Espacio gourmet: con parrilla a gas con quemadores, bacha con agua potable y cesto de residuos.",
        "💡 Iluminación LED en Espacio gourmet.",
        "🔌 Heladera de 220 V empotrada en sector gourmet alimentada por inverter, banco de batería y panel solar (Todos opcionales).",
        "🚽 Baño rígido: con luz interior, bacha con agua potable e inodoro eléctrico (opcional).",
        "Tobogán en popa con sistema de Splash de agua integrado (opcional).",
        "Motorizada con un Evinrude 150 HP (potencia máxima admitida 200 HP, ideal 135 HP), con tanque de combustible de 140 litros y carga de agua potable de 55 litros.",
        "LAS IMAGENES SON ILUSTRATIVAS, CONSULTA CON SU ASESOR DE VENTAS COLORES DISPONIBLES."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la embarcación Drakkar 26 Doble Deck.",
      isMotor: false,
      gallery: [
        { src: '/img/drakkar-26-dd-1.png', tag: 'Drakkar 26 Doble Deck en el Agua / Solárium Superior y Tobogán' },
        { src: '/img/drakkar-26-dd-2.png', tag: 'Espacio Gourmet con Parrilla a Gas Inox y Bacha con Agua Potable' },
        { src: '/img/drakkar-26-dd-3.png', tag: 'Segundo Deck Superior Solárium de 6.5m² y Acceso a Tobogán' },
        { src: '/img/drakkar-26-dd-4.png', tag: 'Living Principal, Butaca de Timonel y Estructura Doble Deck' },
        { src: '/img/drakkar-26-dd-5.png', tag: 'Consola de Mando, Instrumental Náutico y Ecosonda' }
      ],
      specs: [
        { label: "Eslora", value: "8.20<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga", value: "2.50<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "0.73<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Altura total", value: "3.50<sup>m</sup>", svgPath: "M12 2v20M12 2l-3 3m3-3l3 3m-3 17l-3-3m3 3l3-3" },
        { label: "Superficie deck", value: "25.25<sup>m²</sup>", svgPath: "M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" },
        { label: "Capacidad", value: "13<sup>pax</sup>", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Potencia Máxima", value: "200<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Potencia Ideal", value: "135<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Tanque combustible", value: "140<sup>L</sup>", svgPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
        { label: "Agua potable", value: "55<sup>L</sup>", svgPath: "M12 3v18M12 21l-3-3m3 3l3-3M8 9h8m-8 6h8" }
      ]
    },

    // MERCURY MOTORS
    mercury40: {
      name: "Mercury 40 HP EFI",
      brand: "Mercury",
      brandLogo: "/images/logo-mercury.png?v=2",
      category: "Motor fuera de borda",
      line1: "Mercury",
      line2: "40 HP",
      ruleText: "Cuatrotiempos · ELPT 4S EFI",
      ghostText: "40 HP",
      heroPhoto: "/img/mercury-transom-cover.jpg",
      innerImage: "/img/mercury-40-cutout.webp",
      description: [
        "El motor fuera de borda Mercury 40 HP EFI Cuatrotiempos ofrece la combinación ideal de ligereza, eficiencia y durabilidad. Equipado con Inyección Electrónica de Combustible (EFI), asegura arranques rápidos y un ralentí extremadamente suave en cualquier condición.",
        "Su diseño de cilindros optimizados proporciona un torque excelente a bajas revoluciones, ideal para planeo inmediato en lanchas de menor porte y botes utilitarios o de pesca.",
        "Cuenta con alternador de alta capacidad, regulación de trim hidráulico y escape silencioso a través del centro de la hélice."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre el motor fuera de borda Mercury 40 HP ELPT 4S EFI.",
      isMotor: true,
      videoId: "oCw7E3AJcP8",
      videoPoster: "/img/mercury-transom-cover.jpg",
      specs: [
        { label: "Potencia", value: "40<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Motor", value: "3 en línea", svgPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
        { label: "Rango RPM", value: "5000-6000", svgPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "Cilindrada", value: "747 CC", svgPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
        { label: "Inyección", value: "EFI Electrónica", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Peso en Seco", value: "98<sup>kg</sup> (216 lbs)", svgPath: "M3 6l3 1M21 6l-3 1M12 3v18M3 19h18M6 7l6 4M18 7l-6 4" }
      ]
    },
    mercury50: {
      name: "Mercury 50 HP EFI",
      brand: "Mercury",
      brandLogo: "/images/logo-mercury.png?v=2",
      category: "Motor fuera de borda",
      line1: "Mercury",
      line2: "50 HP",
      ruleText: "Cuatrotiempos · ELPT 4S EFI",
      ghostText: "50 HP",
      heroPhoto: "/img/mercury-transom-cover.jpg",
      innerImage: "/img/mercury-50-cutout.webp",
      description: [
        "El motor fuera de borda Mercury 50 HP EFI Cuatrotiempos es sinónimo de confiabilidad, economía de combustible y suavidad de funcionamiento. Equipado con Inyección Electrónica de Combustible (EFI), ofrece arranques instantáneos en cualquier clima y una aceleración lineal y potente.",
        "Su diseño con árbol de levas a la cabeza (SOHC) y cilindrada óptima proporciona un gran torque en rango medio, ideal para planeos rápidos y remolque ligero.",
        "Este modelo cuenta con pata larga (20 pulgadas), arranque eléctrico SmartStart, regulación de trim hidráulico asistido por computadora y escape silencioso a través de la hélice."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre el motor fuera de borda Mercury 50 HP ELPT 4S EFI.",
      isMotor: true,
      videoId: "oCw7E3AJcP8",
      videoPoster: "/img/mercury-transom-cover.jpg",
      pdfUrl: "/pdf/mercury-50.pdf",
      specs: [
        { label: "Potencia", value: "50<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Motor", value: "4 en línea SOHC", svgPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
        { label: "Rango RPM", value: "5000-6000", svgPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "Cilindrada", value: "60.8 CID / 995 CC", svgPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
        { label: "Inyección", value: "EFI Electrónica", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Caja Engranajes", value: "1.83:1", svgPath: "M9 13v2a2 2 0 002 2h2m0-8h2a2 2 0 012 2v2" },
        { label: "Alternador", value: "18 A / 226 W", svgPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
        { label: "Peso en Seco", value: "112<sup>kg</sup> (247 lbs)", svgPath: "M3 6l3 1M21 6l-3 1M12 3v18M3 19h18M6 7l6 4M18 7l-6 4" },
        { label: "Largo Eje (Pata)", value: "20\" (508 mm)", svgPath: "M12 4v16m-4-4h8m-8-8h8" },
        { label: "Dirección", value: "Cable dual mecánico", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" },
        { label: "Accesorios", value: "2 Relojes, Hélice, Ctrl Remoto, Conect. Combustible", svgPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" }
      ]
    },
    mercury60: {
      name: "Mercury 60 HP EFI",
      brand: "Mercury",
      brandLogo: "/images/logo-mercury.png?v=2",
      category: "Motor fuera de borda",
      line1: "Mercury",
      line2: "60 HP",
      ruleText: "Cuatrotiempos · ELPT 4S EFI",
      ghostText: "60 HP",
      heroPhoto: "/img/mercury-transom-cover.jpg",
      innerImage: "/img/mercury-60-cutout.webp",
      description: [
        "El motor fuera de borda Mercury 60 HP EFI combina potencia deportiva y alta eficiencia en un bloque compacto y liviano. Es ideal para lanchas medianas de planeo rápido y embarcaciones utilitarias que requieran un empuje sostenido.",
        "Su sistema EFI asegura un control preciso del consumo, arranques instantáneos sin cebador y un funcionamiento extremadamente silencioso y ecológico (clasificación CARB 3 estrellas).",
        "Incluye de serie una caja de engranajes optimizada de 1.83:1, alternador potente para carga de baterías y accesorios, comando a distancia lateral y relojería oficial."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre el motor fuera de borda Mercury 60 HP ELPT 4S EFI.",
      isMotor: true,
      videoId: "oCw7E3AJcP8",
      videoPoster: "/img/mercury-transom-cover.jpg",
      pdfUrl: "/pdf/mercury-60.pdf",
      specs: [
        { label: "Potencia", value: "60<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Motor", value: "4 en línea SOHC", svgPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
        { label: "Rango RPM", value: "5500-6000", svgPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "Cilindrada", value: "60.8 CID / 995 CC", svgPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
        { label: "Inyección", value: "EFI Electrónica", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Caja Engranajes", value: "1.83:1", svgPath: "M9 13v2a2 2 0 002 2h2m0-8h2a2 2 0 012 2v2" },
        { label: "Alternador", value: "18 A / 226 W", svgPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
        { label: "Peso en Seco", value: "112<sup>kg</sup> (247 lbs)", svgPath: "M3 6l3 1M21 6l-3 1M12 3v18M3 19h18M6 7l6 4M18 7l-6 4" },
        { label: "Largo Eje (Pata)", value: "20\" (508 mm)", svgPath: "M12 4v16m-4-4h8m-8-8h8" },
        { label: "Dirección", value: "Cable dual mecánico", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" },
        { label: "Accesorios", value: "2 Relojes, Hélice, Ctrl Remoto, Conect. Combustible", svgPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" }
      ]
    },
    mercury75: {
      name: "Mercury 75 HP EFI",
      brand: "Mercury",
      brandLogo: "/images/logo-mercury.png?v=2",
      category: "Motor fuera de borda",
      line1: "Mercury",
      line2: "75 HP",
      ruleText: "Cuatrotiempos · ELPT 4S EFI",
      ghostText: "75 HP",
      heroPhoto: "/img/mercury-transom-cover.jpg",
      innerImage: "/img/mercury-75-cutout.webp",
      description: [
        "Con una generosa cilindrada de 2.1 Litros, el Mercury 75 HP EFI Cuatrotiempos ofrece un torque increíble a bajas revoluciones y un rendimiento ágil y dinámico. Su gran cilindrada permite un funcionamiento más relajado, extendiendo la vida útil del motor.",
        "Cuenta con un alternador refrigerado por agua de 35 amperios que mantiene las baterías a plena capacidad para alimentar ecosondas, GPS y radios sin problemas.",
        "Viene equipado de fábrica con control remoto, hélice de aluminio y un filtro separador de agua y combustible de alta eficiencia para proteger la inyección electrónica."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre el motor fuera de borda Mercury 75 HP ELPT 4S EFI.",
      isMotor: true,
      videoId: "oCw7E3AJcP8",
      videoPoster: "/img/mercury-transom-cover.jpg",
      pdfUrl: "/pdf/mercury-75.pdf",
      specs: [
        { label: "Potencia", value: "75<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Motor", value: "4 en Línea SOHC", svgPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
        { label: "Rango RPM", value: "4500-5500", svgPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "Cilindrada", value: "2.1 Litros", svgPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
        { label: "Inyección", value: "EFI Electrónica", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Caja Engranajes", value: "2.07:1", svgPath: "M9 13v2a2 2 0 002 2h2m0-8h2a2 2 0 012 2v2" },
        { label: "Alternador", value: "35 A / 441 W (refrigerado por agua)", svgPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
        { label: "Peso en Seco", value: "163<sup>kg</sup> (359 lbs)", svgPath: "M3 6l3 1M21 6l-3 1M12 3v18M3 19h18M6 7l6 4M18 7l-6 4" },
        { label: "Largo Eje (Pata)", value: "20\" (508 mm)", svgPath: "M12 4v16m-4-4h8m-8-8h8" },
        { label: "Dirección", value: "Cable dual mecánico", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" },
        { label: "Accesorios", value: "2 Relojes, Ctrl Remoto, Hélice, Filtro Sep. Combustible/Agua", svgPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" }
      ]
    },
    mercury90: {
      name: "Mercury 90 HP EFI",
      brand: "Mercury",
      brandLogo: "/images/logo-mercury.png?v=2",
      category: "Motor fuera de borda",
      line1: "Mercury",
      line2: "90 HP",
      ruleText: "Cuatrotiempos · ELPT 4S EFI",
      ghostText: "90 HP",
      heroPhoto: "/img/mercury-transom-cover.jpg",
      innerImage: "/img/mercury-90-cutout.webp",
      description: [
        "El motor fuera de borda Mercury 90 HP EFI Cuatrotiempos ofrece un balance perfecto entre potencia y peso, diseñado sobre un bloque de 2.1 Litros de cilindrada. Esto se traduce en una mayor aceleración, un planeo más rápido con carga completa y una excelente velocidad final.",
        "Su inyección EFI regula constantemente la mezcla aire-combustible para lograr una eficiencia óptima, logrando una reducción notoria en el consumo a velocidades de crucero.",
        "Provisto con control remoto, hélice de aluminio de paso óptimo, relojería analógica completa y un filtro de agua/combustible que previene impurezas en el sistema."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre el motor fuera de borda Mercury 90 HP ELPT 4S EFI.",
      isMotor: true,
      videoId: "oCw7E3AJcP8",
      videoPoster: "/img/mercury-transom-cover.jpg",
      pdfUrl: "/pdf/mercury-90.pdf",
      specs: [
        { label: "Potencia", value: "90<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Motor", value: "4 en Línea SOHC", svgPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
        { label: "Rango RPM", value: "5000-6000", svgPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "Cilindrada", value: "2.1 Litros", svgPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
        { label: "Inyección", value: "EFI Electrónica", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Caja Engranajes", value: "2.07:1", svgPath: "M9 13v2a2 2 0 002 2h2m0-8h2a2 2 0 012 2v2" },
        { label: "Alternador", value: "35 A / 441 W (refrigerado por agua)", svgPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
        { label: "Peso en Seco", value: "163<sup>kg</sup> (359 lbs)", svgPath: "M3 6l3 1M21 6l-3 1M12 3v18M3 19h18M6 7l6 4M18 7l-6 4" },
        { label: "Largo Eje (Pata)", value: "20\" (508 mm)", svgPath: "M12 4v16m-4-4h8m-8-8h8" },
        { label: "Dirección", value: "Cable dual mecánico", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" },
        { label: "Accesorios", value: "Relojes (Taco/Spdo), Ctrl Remoto, Hélice, Filtro Sep. Combustible/Agua", svgPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" }
      ]
    },
    mercury115: {
      name: "Mercury 115 HP EFI",
      brand: "Mercury",
      brandLogo: "/images/logo-mercury.png?v=2",
      category: "Motor fuera de borda de alto desempeño",
      line1: "Mercury",
      line2: "115 HP",
      ruleText: "Cuatrotiempos · ELPT 4S EFI",
      ghostText: "115 HP",
      heroPhoto: "/img/mercury-transom-cover.jpg",
      innerImage: "/img/mercury-115-cutout.webp",
      description: [
        "El motor fuera de borda Mercury 115 HP EFI Cuatrotiempos destaca por su gran cilindrada de 3.0 Litros, ofreciendo un desempeño bestial con una durabilidad incomparable. Su alto torque permite empujar pesadas embarcaciones de paseo y deportes extremos sin esfuerzo.",
        "Su robustez mecánica se complementa con un alternador de 35 amperios refrigerado por agua con regulador integrado, ideal para alimentar múltiples equipos electrónicos a bordo simultáneamente.",
        "Equipado de serie con un completo set de instrumentación analógica (7 relojes: Tacómetro, Velocímetro, Horas, Power Trim, Voltímetro, Presión de Agua y Combustible), mando lateral y hélice de aluminio premium."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre el motor fuera de borda Mercury 115 HP ELPT 4S EFI.",
      isMotor: true,
      videoId: "oCw7E3AJcP8",
      videoPoster: "/img/mercury-transom-cover.jpg",
      pdfUrl: "/pdf/mercury-115.pdf",
      gallery: [
        { src: '/img/mercury-115-engine-side.png', tag: 'Perfil lateral' },
        { src: '/img/mercury-115-engine-rear.png', tag: 'Vista posterior Command Thrust' },
        { src: '/img/mercury-115-boat-1.jpg', tag: 'Embarcación en navegación' },
        { src: '/img/mercury-115-action.jpg', tag: 'Triple motorización en acción' }
      ],
      specs: [
        { label: "Potencia", value: "115<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Motor", value: "4 en Línea SOHC", svgPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
        { label: "Rango RPM", value: "5000-6000", svgPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "Cilindrada", value: "3.0 Litros", svgPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
        { label: "Inyección", value: "EFI Electrónica", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Caja Engranajes", value: "2.38:1", svgPath: "M9 13v2a2 2 0 002 2h2m0-8h2a2 2 0 012 2v2" },
        { label: "Alternador", value: "35 A / 441 W (refrigerado por agua)", svgPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
        { label: "Peso en Seco", value: "165<sup>kg</sup>", svgPath: "M3 6l3 1M21 6l-3 1M12 3v18M3 19h18M6 7l6 4M18 7l-6 4" },
        { label: "Largo Eje (Pata)", value: "20\" (508 mm)", svgPath: "M12 4v16m-4-4h8m-8-8h8" },
        { label: "Dirección", value: "Cable dual mecánico", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" },
        { label: "Accesorios", value: "7 Relojes (Taco, Spdo, Hs, Trim, Volt, Presión, Combustible), Ctrl Remoto, Hélice, Filtro Sep. Combustible/Agua", svgPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" }
      ]
    },
    mercury150: {
      name: "Mercury 150 HP EFI",
      brand: "Mercury",
      brandLogo: "/images/logo-mercury.png?v=2",
      category: "Motor fuera de borda",
      line1: "Mercury",
      line2: "150 HP",
      ruleText: "Cuatrotiempos · ELPT 4S EFI",
      ghostText: "150 HP",
      heroPhoto: "/img/mercury-transom-cover.jpg",
      innerImage: "/img/mercury-150-cutout.webp",
      description: [
        "El motor fuera de borda Mercury 150 HP EFI Cuatrotiempos es una de las opciones más populares de su clase por su relación peso-potencia inigualable y su bloque de 3.0 Litros de cilindrada. Esto le da un torque excelente y aceleración rápida en cualquier condición de carga.",
        "Su inyección electrónica EFI y su diseño de tren de válvulas de bajo mantenimiento garantizan durabilidad a largo plazo, arranques sencillos y eficiencia en consumo de combustible.",
        "Cuenta de serie con hélice de aluminio, control de aceleración de gran precisión, alternador de alto rendimiento para equipos de a bordo y dirección hidráulica."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre el motor fuera de borda Mercury 150 HP ELPT 4S EFI.",
      isMotor: true,
      videoId: "oCw7E3AJcP8",
      videoPoster: "/img/mercury-transom-cover.jpg",
      specs: [
        { label: "Potencia", value: "150<sup>HP</sup>", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Motor", value: "4 en línea SOHC", svgPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
        { label: "Rango RPM", value: "5000-5800", svgPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "Cilindrada", value: "3.0 Litros", svgPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
        { label: "Inyección", value: "EFI Electrónica", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Caja Engranajes", value: "1.92:1", svgPath: "M9 13v2a2 2 0 002 2h2m0-8h2a2 2 0 012 2v2" },
        { label: "Alternador", value: "60 A / 756 W", svgPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
        { label: "Peso en Seco", value: "206<sup>kg</sup>", svgPath: "M3 6l3 1M21 6l-3 1M12 3v18M3 19h18M6 7l6 4M18 7l-6 4" },
        { label: "Largo Eje (Pata)", value: "20\" (508 mm)", svgPath: "M12 4v16m-4-4h8m-8-8h8" },
        { label: "Dirección", value: "Hidráulica compatible", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" },
        { label: "Accesorios", value: "Relojes oficiales, Ctrl Remoto, Hélice", svgPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" }
      ]
    },
    mercury200: {
      name: "Mercury V6 200 HP",
      brand: "Mercury",
      brandLogo: "/images/logo-mercury.png?v=2",
      category: "Motor fuera de borda de alta potencia",
      line1: "Mercury",
      line2: "V6 200 HP",
      ruleText: "V6 Cuatro Tiempos · Inyección Electrónica",
      ghostText: "200 HP",
      heroPhoto: "/img/mercury-transom-cover.jpg",
      innerImage: "/img/mercury-200-cutout.png",
      description: [
        "El motor fuera de borda Mercury V6 200 HP Cuatro Tiempos es el pináculo de la ingeniería marina para alta potencia. Equipado con un bloque V6 de 3.4 Litros y 209 CID, este motor ofrece una aceleración explosiva, un planeo inmediato y una velocidad punta sobresaliente para embarcaciones deportivas grandes y cruceros fluviales.",
        "Su avanzado sistema de inyección electrónica (EFI) y control inteligente de combustible aseguran una mezcla óptima en cualquier régimen, logrando un ahorro de combustible líder en su clase y un funcionamiento suave y refinado.",
        "De serie incluye tecnología VesselView Link para el monitoreo digital del motor en tiempo real, hélice Mirage Plus de acero inoxidable de alto rendimiento, sistema de dirección hidráulica y comando lateral premium."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre el motor fuera de borda Mercury V6 200 HP Cuatro Tiempos.",
      isMotor: true,
      videoId: "oCw7E3AJcP8",
      videoPoster: "/img/mercury-transom-cover.jpg",
      specs: [
        { label: "Potencia", value: "200<sup>HP</sup> / 149 kW", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Motor", value: "V6 (3.4L)", svgPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
        { label: "Rango RPM", value: "5000-5800", svgPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "Cilindrada", value: "209 CID", svgPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
        { label: "Inyección", value: "Inyección Electrónica (EFI)", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Ignición", value: "SmartCraft PCM 112 Digital Inductive", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Caja Engranajes", value: "1.85:1", svgPath: "M9 13v2a2 2 0 002 2h2m0-8h2a2 2 0 012 2v2" },
        { label: "Alternador", value: "85 A / 1071 W", svgPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
        { label: "Peso en Seco", value: "216<sup>kg</sup> (475 lbs)", svgPath: "M3 6l3 1M21 6l-3 1M12 3v18M3 19h18M6 7l6 4M18 7l-6 4" },
        { label: "Largo Eje (Pata)", value: "20\" (508 mm) o 25\" (635 mm)", svgPath: "M12 4v16m-4-4h8m-8-8h8" },
        { label: "Dirección", value: "Hidráulica incluida", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" },
        { label: "Accesorios incl.", value: "Pantalla VesselView 703, Hélice Mirage Plus, Dirección Hidráulica, Caja de Control de embutir", svgPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" }
      ]
    },
    // USED MODELS
    klasea: {
      name: "Klase A K210 (2023)",
      brand: "Klase A",
      brandLogo: "/images/logo-usados.png",
      category: "Embarcación deportiva usada",
      line1: "Klase A",
      line2: "K210",
      ruleText: "Año 2023 · USD 38.000 · Impecable",
      ghostText: "Klase A K210",
      heroPhoto: "/img/klasea-gal-3.webp",
      pdfUrl: "/img/usado-klasea.webp",
      videoId: "hP2lxkVC01I",
      videoPoster: "/img/klasea-gal-2.webp",
      price: "USD 38.000",
      description: [
        "Presentamos la Klase A K210 Año 2023, una embarcación deportiva de excelencia en estado impecable. Está motorizada con un motor fuera de borda Mercury de 150 HP de 4 tiempos con tan solo 74 horas de uso, conformando un equipo año 2023 listo para disfrutar de la navegación sin preocupaciones.",
        "Esta unidad viene equipada con un tráiler reglamentario de un eje reforzado, ideal para el traslado terrestre seguro. Su equipamiento de a bordo incluye relojería completa, ecosonda, sistema de estéreo con 4 parlantes, barra de esquí, mesa en cockpit, escalera de popa y luces de cortesía para paseos nocturnos.",
        "Pensada para el confort total de la tripulación, ofrece una tapicería premium completa con solarium en proa, bomba de achique, llave de corte de corriente y una capota estructurada de acero inoxidable con tela Sumbrella original."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha usada Klase A K210 Año 2023 con Mercury 150HP por USD 38.000.",
      isMotor: false,
      specs: [
        { label: "Precio", value: "USD 38.000", svgPath: "M12 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 14c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" },
        { label: "Año", value: "2023", svgPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
        { label: "Horas de Uso", value: "74 hs", svgPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "Motor", value: "Mercury 150 HP 4T", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Tráiler", value: "Un Eje Reforzado", svgPath: "M8 9h8m-8 4h8m-9 4h10a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" }
      ],
      gallery: [
        { src: '/img/klasea-gal-3.webp', tag: 'Perfil Proa' },
        { src: '/img/klasea-gal-2.webp', tag: 'Perfil Popa' },
        { src: '/img/klasea-gal-1.webp', tag: 'Motor Mercury 150HP' },
        { src: '/img/klasea-gal-4.webp', tag: 'Solarium Proa' },
        { src: '/img/klasea-gal-5.webp', tag: 'Cockpit & Interior' },
        { src: '/img/klasea-gal-6.webp', tag: 'Solarium & Proa Abierta' },
        { src: '/img/klasea-gal-7.webp', tag: 'Cockpit & Butaca' },
        { src: '/img/klasea-gal-8.webp', tag: 'Mesa de Cockpit' },
        { src: '/img/klasea-gal-9.webp', tag: 'Consola & Relojería' },
        { src: '/img/klasea-gal-10.webp', tag: 'Timón & Consola' },
        { src: '/img/klasea-gal-11.webp', tag: 'Distribución Cockpit' },
        { src: '/img/klasea-gal-12.webp', tag: 'Consola Acompañante' }
      ]
    },
    sportcraft1600: {
      name: "Sportcraft 1600 (2015)",
      brand: "Sportcraft",
      brandLogo: "/images/logo-usados.png",
      category: "Embarcación deportiva usada",
      line1: "Sportcraft",
      line2: "1600",
      ruleText: "Año 2015 · USD 4.800 · Solo Casco",
      ghostText: "Sportcraft 1600",
      heroPhoto: "/img/sportcraft-gal-4.webp",
      pdfUrl: "/img/usado-sportcraft1600.webp",
      price: "USD 4.800",
      description: [
        "Ofrecemos a la venta la embarcación deportiva Sportcraft 1600, año 2015, en condición de usada seleccionada. Esta unidad se vende únicamente como casco (sin motor y sin tráiler), conformando una base excelente y en muy buen estado de conservación para equipar a gusto.",
        "Presenta unas dimensiones de 4.86 metros de eslora, 2.16 metros de manga y 0.90 metros de puntal, permitiendo la instalación de motores fuera de borda de hasta 115 HP de potencia máxima.",
        "El equipamiento a bordo incluye equipo de sonido instalado y piso nuevo recién colocado en perfectas condiciones. Cuenta con un diseño clásico bicolor negro/blanco, proa abierta y cómodas butacas deportivas tapizadas."
      ],
      waMsg: "Hola! Quisiera obtener información y consultar sobre el casco usado Sportcraft 1600 Año 2015 por USD 4.800.",
      isMotor: false,
      specs: [
        { label: "Precio", value: "USD 4.800", svgPath: "M12 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 14c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" },
        { label: "Año", value: "2015", svgPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
        { label: "Eslora", value: "4.86<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga", value: "2.16<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "0.90<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Motorización máx", value: "Hasta 115 HP", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Equipo de sonido", value: "Incluido", svgPath: "M9 19V6l12-3v13M9 10h12M9 21a3 3 0 11-6-0 3 3 0 016-0zm12-3a3 3 0 11-6 0 3 3 0 016 0z" },
        { label: "Piso", value: "Nuevo", svgPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "Casco", value: "Solo Casco", svgPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
        { label: "Tráiler", value: "No incluye", svgPath: "M6 18L18 6M6 6l12 12" }
      ],
      gallery: [
        { src: '/img/usado-sportcraft1600.webp', tag: 'Folleto Oficial' },
        { src: '/img/sportcraft-gal-4.webp', tag: 'Perfil Lateral' },
        { src: '/img/sportcraft-gal-1.webp', tag: 'Vista Proa' },
        { src: '/img/sportcraft-gal-2.webp', tag: 'Cockpit & Butaca' },
        { src: '/img/sportcraft-gal-3.webp', tag: 'Layout Interior' }
      ]
    },
    cargo620: {
      name: "Cargo Open 620 (2015)",
      brand: "Cargo",
      brandLogo: "/images/logo-usados.png",
      category: "Embarcación deportiva usada",
      line1: "Cargo",
      line2: "Open 620",
      ruleText: "Año 2015 · USD 11.500 · Impecable",
      ghostText: "Cargo 620",
      heroPhoto: "/img/usado-cargo620.webp",
      pdfUrl: "/img/usado-cargo620.webp",
      videoId: "J09fYRTC9q0",
      videoPoster: "/img/usado-cargo620.webp",
      price: "USD 11.500",
      description: [
        "Presentamos la Cargo Open 620 Año 2015, una embarcación de excelente rendimiento y comodidad en estado impecable. Está motorizada con un motor fuera de borda Mariner de 75 HP de 4 tiempos (4T) año 2015, ofreciendo una navegación suave y económica.",
        "Cuenta con unas dimensiones muy cómodas para el río, destacando su manga de 1.95 metros y un puntal de 0.90 metros, con una capacidad habilitada para transportar de forma segura hasta 8 personas.",
        "Su equipamiento de a bordo incluye parabrisas curvo deportivo, herrajes de norma completos, escalera de popa de acero inoxidable para un acceso cómodo desde el agua y una hélice de 21 pulgadas de alto rendimiento."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha usada Cargo Open 620 Año 2015 con Mariner 75HP por USD 11.500.",
      isMotor: false,
      specs: [
        { label: "Precio", value: "USD 11.500", svgPath: "M12 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 14c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" },
        { label: "Año", value: "2015", svgPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
        { label: "Motor", value: "Mariner 75 HP 4T", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Eslora", value: "6.20<sup>m</sup>", svgPath: "M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M9 8v2M15 8v2" },
        { label: "Manga", value: "1.95<sup>m</sup>", svgPath: "M12 3v18M12 3l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M8 9h2M8 15h2" },
        { label: "Puntal", value: "0.90<sup>m</sup>", svgPath: "M6 3h12M12 3v18M12 21l-3-3m3 3l3-3M9 9h6M9 15h6" },
        { label: "Capacidad", value: "8 pax", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Hélice", value: "21\"", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" },
        { label: "Tráiler", value: "No incluye", svgPath: "M6 18L18 6M6 6l12 12" }
      ],
      gallery: [
        { src: '/img/usado-cargo620.webp', tag: 'Folleto Oficial' },
        { src: '/img/cargo-gal-5.webp', tag: 'Perfil Estribor (Showroom)' },
        { src: '/img/cargo-gal-1.webp', tag: 'Consola & Timón' },
        { src: '/img/cargo-gal-4.webp', tag: 'Vista Proa Abierta' },
        { src: '/img/cargo-gal-3.webp', tag: 'Motor Mariner 75HP' },
        { src: '/img/cargo-gal-2.webp', tag: 'Motor & Popa (Showroom)' }
      ]
    },
    sport160m: {
      name: "Moody Sport 160M (2024)",
      brand: "Moody",
      brandLogo: "/images/logo-usados.png",
      category: "Embarcación deportiva usada",
      line1: "Moody",
      line2: "Sport 160M",
      ruleText: "Casco y Tráiler 2024 · Motor Suzuki 40HP 2T (2010) · USD 8.100",
      ghostText: "Sport 160M",
      heroPhoto: "/img/sport160m-gal-1.webp",
      pdfUrl: "/img/usado-sport160m.webp",
      price: "USD 8.100",
      description: [
        "No dejes pasar esta excelente oportunidad, ¡es la última unidad disponible! Ofrecemos la lancha deportiva Moody Sport 160M con casco y tráiler impecable homologado del año 2024, motorizada con un Suzuki de 40 HP de 2 tiempos (2T) del año 2010.",
        "La embarcación se encuentra lista para navegar y cuenta con tapicería en excelente estado en tonos grises y blancos con costura romboidal y vivos rojos. Su piso es de tipo matrizado, facilitando el mantenimiento y brindando una terminación de alta gama.",
        "El equipamiento adicional incluye guardamancebos de acero inoxidable, mesa de cockpit incorporada desmontable, dos posacañas con tapa, reloj de RPM y cuenta horas integrado, ecosonda Garmin para medición de profundidad, llave de corte general de batería y un sistema de sonido de alta fidelidad con parlantes náuticos Alpine."
      ],
      waMsg: "Hola! Quisiera obtener información y consultar sobre la lancha usada Moody Sport 160M con Suzuki 40HP por USD 8.100.",
      isMotor: false,
      specs: [
        { label: "Precio", value: "USD 8.100", svgPath: "M12 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 14c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" },
        { label: "Casco / Tráiler", value: "Año 2024", svgPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
        { label: "Motor", value: "Suzuki 40 HP 2T (2010)", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Piso", value: "Matrizado", svgPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "Ecosonda", value: "Garmin", svgPath: "M9 19V6l12-3v13M9 10h12M9 21a3 3 0 11-6-0 3 3 0 016-0zm12-3a3 3 0 11-6 0 3 3 0 016 0z" },
        { label: "Sonido", value: "Alpine Náutico", svgPath: "M19.14 19.3A2 2 0 0 0 20 18V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 1.14-.7zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" },
        { label: "Tráiler", value: "Incluido (Impecable)", svgPath: "M5 13l4 4L19 7" },
        { label: "Estado", value: "Listo para navegar", svgPath: "M9 12l2 2 4-4" }
      ],
      gallery: [
        { src: '/img/usado-sport160m.webp', tag: 'Folleto Oficial' },
        { src: '/img/sport160m-gal-1.webp', tag: 'Perfil Estribor' },
        { src: '/img/sport160m-gal-2.webp', tag: 'Perfil Babor' },
        { src: '/img/sport160m-gal-8.webp', tag: 'Motor Suzuki 40HP' },
        { src: '/img/sport160m-gal-9.webp', tag: 'Vista Superior Transom' },
        { src: '/img/sport160m-gal-3.webp', tag: 'Consola & Timón' },
        { src: '/img/sport160m-gal-4.webp', tag: 'Cockpit & Butacas' },
        { src: '/img/sport160m-gal-6.webp', tag: 'Ubicación Proa Abierta' },
        { src: '/img/sport160m-gal-5.webp', tag: 'Parlante Náutico Alpine' },
        { src: '/img/sport160m-gal-7.webp', tag: 'Posacañas con Tapa' }
      ]
    },
    peugeot3008: {
      name: "Peugeot 3008 2.0 hdi GT line",
      brand: "Peugeot",
      brandLogo: "/images/logo-automoviles.png",
      category: "Automóvil usado seleccionado",
      line1: "Peugeot 3008",
      line2: "GT line",
      ruleText: "Año 2018 · 117.000 km · Impecable",
      ghostText: "Peugeot 3008",
      heroPhoto: "/img/peugeot3008-gal-1.webp",
      pdfUrl: "/img/usado-peugeot3008.jpg",
      description: [
        "Presentamos este espectacular Peugeot 3008 2.0 HDi GT Line Año 2018, en condición impecable y con 117.000 kilómetros reales de uso. Un SUV de gama alta que destaca por su diseño de vanguardia, altísimo nivel de equipamiento de seguridad y confort, y su eficiente motorización turbodiésel.",
        "Bajo el capot se encuentra el consagrado motor 2.0 HDi Turbodiésel, reconocido por su gran torque, respuesta ágil en ruta y un consumo de combustible sumamente económico tanto en ciclo urbano como en trayectos largos. Acoplado a una transmisión automática de gran suavidad.",
        "El habitáculo destaca por su concepto de diseño i-Cockpit de Peugeot, con instrumental digital configurable, pantalla táctil central, tapizados premium y terminaciones de primer nivel. Se encuentra listo para transferir y disfrutar inmediatamente."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre el Peugeot 3008 2.0 hdi GT line Año 2018 usado de 117mil km.",
      isMotor: false,
      specs: [
        { label: "Año", value: "2018", svgPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
        { label: "Motorización", value: "2.0 HDi Turbodiésel", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Kilometraje", value: "117.000 km", svgPath: "M12 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 14c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" },
        { label: "Versión", value: "GT Line (Gama Alta)", svgPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "Transmisión", value: "Automática", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" },
        { label: "Color / Estado", value: "Azul Magnético / Impecable", svgPath: "M5 13l4 4L19 7" }
      ],
      gallery: [
        { src: '/img/usado-peugeot3008.jpg', tag: 'Folleto Oficial' },
        { src: '/img/peugeot3008-gal-1.webp', tag: 'Perfil Delantero Babor' },
        { src: '/img/peugeot3008-gal-3.webp', tag: 'Frente' },
        { src: '/img/peugeot3008-gal-4.webp', tag: 'Perfil Lateral' },
        { src: '/img/peugeot3008-gal-2.webp', tag: 'Vista Trasera' },
        { src: '/img/peugeot3008-gal-5.webp', tag: 'Volante & i-Cockpit' },
        { src: '/img/peugeot3008-gal-6.webp', tag: 'Tablero Digital' },
        { src: '/img/peugeot3008-gal-7.webp', tag: 'Consola & Butacas' },
        { src: '/img/peugeot3008-gal-8.webp', tag: 'Asientos Traseros' },
        { src: '/img/peugeot3008-gal-9.webp', tag: 'Interior de Cabina' },
        { src: '/img/peugeot3008-gal-10.webp', tag: 'Perfil Trasero Estribor' },
        { src: '/img/peugeot3008-gal-11.webp', tag: 'Lateral Costanera' },
        { src: '/img/peugeot3008-gal-12.webp', tag: 'Frente Diagonal' },
        { src: '/img/peugeot3008-gal-13.webp', tag: 'Frente Imponente' }
      ]
    },
    fiatidea: {
      name: "Fiat Idea Attractive 1.4 (2014)",
      brand: "Fiat",
      brandLogo: "/images/logo-automoviles.png",
      category: "Automóvil usado seleccionado",
      line1: "Fiat Idea",
      line2: "Attractive 1.4",
      ruleText: "Año 2014 · 138.000 km · Única Dueña · Contado Efectivo Negociable",
      ghostText: "Fiat Idea",
      heroPhoto: "/img/fiatidea-gal-1.webp",
      pdfUrl: "/img/usado-fiatidea.webp",
      description: [
        "Presentamos este Fiat Idea Attractive 1.4 Año 2014, en excelente condición general y con 138.000 kilómetros. Un vehículo familiar que destaca por su gran habitabilidad, posición de manejo elevada y versatilidad para el uso diario y viajes.",
        "Se trata de una unidad de Única Dueña, cuidada minuciosamente y lista para transferir de inmediato con toda la documentación al día. Está equipada con el confiable motor 1.4 naftero, caracterizado por su bajo consumo de combustible y economía de mantenimiento.",
        "¡Atención coleccionistas de oportunidades! El precio de esta unidad bajo la modalidad de Contado Efectivo es Negociable. No dejes de consultarnos para coordinar una visita y probarlo."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre el Fiat Idea Attractive 1.4 Año 2014 usado (Única dueña, 138mil km) por Contado Efectivo Negociable.",
      isMotor: false,
      specs: [
        { label: "Año", value: "2014", svgPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
        { label: "Motorización", value: "1.4 Fire Nafta (8V)", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Kilometraje", value: "138.000 km", svgPath: "M12 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 14c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" },
        { label: "Historial", value: "Única Dueña", svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" },
        { label: "Condición", value: "Contado Efectivo Negociable", svgPath: "M12 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 14c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" },
        { label: "Transmisión", value: "Manual (5 Velocidades)", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" }
      ],
      gallery: [
        { src: '/img/usado-fiatidea.webp', tag: 'Folleto Oficial' },
        { src: '/img/fiatidea-gal-1.webp', tag: 'Perfil Delantero Babor' },
        { src: '/img/fiatidea-gal-2.webp', tag: 'Frente' },
        { src: '/img/fiatidea-gal-3.webp', tag: 'Perfil Trasero Babor' },
        { src: '/img/fiatidea-gal-4.webp', tag: 'Perfil Trasero Estribor' }
      ]
    },
    amarok: {
      name: "Volkswagen Amarok 4x4 (2010)",
      brand: "Volkswagen",
      brandLogo: "/images/logo-automoviles.png",
      category: "Automóvil usado seleccionado",
      line1: "Volkswagen Amarok",
      line2: "4x4",
      ruleText: "Año 2010 · 218.000 km · Tracción 4x4 · Excelente Estado",
      ghostText: "VW Amarok",
      heroPhoto: "/img/usado-amarok.webp",
      pdfUrl: "/img/usado-amarok.webp",
      cashPrice: "$18.000.000",
      usdPrice: "$21.600 USD",
      description: [
        "Presentamos esta camioneta Volkswagen Amarok Año 2010 con tracción 4x4 y 218.000 kilómetros. Un vehículo robusto, confiable y de gran rendimiento, ideal tanto para el trabajo exigente como para viajes familiares de larga distancia con total confort y seguridad.",
        "Equipada con un motor turbodiésel de excelente torque, caja de transferencia 4x4 de acople perfecto y un andar suave y estable característico del modelo. Se encuentra mantenida en muy buenas condiciones mecánicas y de carrocería, con todos los mantenimientos al día.",
        "Ofrecemos esta gran unidad en dos modalidades: un precio especial de Contado Efectivo de $18.000.000 de Pesos o un precio de lista de $21.600 USD. Documentación completa al día y lista para transferir."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la Volkswagen Amarok 4x4 Año 2010 usada de 218mil km.",
      isMotor: false,
      specs: [
        { label: "Año", value: "2010", svgPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
        { label: "Tracción", value: "4x4 Integrada", svgPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "Kilometraje", value: "218.000 km", svgPath: "M12 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 14c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" },
        { label: "Precio Contado", value: "$18.000.000", svgPath: "M12 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 14c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" },
        { label: "Precio Lista", value: "$21.600 USD", svgPath: "M12 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 14c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" },
        { label: "Transmisión", value: "Manual", svgPath: "M12 3v18M3 12h18m-5.64-5.64l11.28 11.28m-11.28 0L17.64 6.36" }
      ],
      gallery: [
        { src: '/img/usado-amarok.webp', tag: 'Folleto Oficial' },
        { src: '/img/amarok-gal-1.webp', tag: 'Panel de Instrumentos' },
        { src: '/img/amarok-gal-2.webp', tag: 'Asientos Traseros' },
        { src: '/img/amarok-gal-3.webp', tag: 'Cabina Delantera' },
        { src: '/img/amarok-gal-4.webp', tag: 'Habitáculo Interior' }
      ]
    },
    dorado550: {
      name: "Dorado 550",
      brand: "Dorado",
      brandLogo: "/images/logo-usados.png",
      category: "Embarcación deportiva usada",
      line1: "Dorado",
      line2: "550",
      ruleText: "Casco Nuevo · Motor Yamaha 50HP 4T (2004) · USD 6.000",
      ghostText: "Dorado 550",
      heroPhoto: "/img/dorado-gal-1.webp",
      pdfUrl: "/img/usado-dorado550.webp",
      price: "USD 6.000",
      description: [
        "¡No dejes pasar esta excelente oportunidad, es la última unidad disponible! Presentamos la Dorado 550 con casco nuevo 0km y motorización fuera de borda Yamaha de 50 HP de 4 tiempos (4T) año 2004.",
        "La combinación perfecta de una estructura a estrenar con la confiabilidad legendaria del motor Yamaha 50HP, ideal para paseos, navegación en río y salidas de pesca con un consumo de combustible sumamente bajo.",
        "Nota importante: El precio no incluye tráiler de transporte. La lancha se encuentra lista para navegar, ofreciendo un amplio cockpit abierto con distribución funcional y tapizados a estrenar."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha usada Dorado 550 con Casco Nuevo y Yamaha 50HP por USD 6.000.",
      isMotor: false,
      specs: [
        { label: "Precio", value: "USD 6.000", svgPath: "M12 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 14c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" },
        { label: "Casco", value: "Nuevo (0km)", svgPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "Motor", value: "Yamaha 50 HP 4T (2004)", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Tráiler", value: "No incluye", svgPath: "M6 18L18 6M6 6l12 12" },
        { label: "Equipamiento", value: "Deportiva Completa", svgPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
        { label: "Estado", value: "Listo para navegar", svgPath: "M5 13l4 4L19 7" }
      ],
      gallery: [
        { src: '/img/usado-dorado550.webp', tag: 'Folleto Oficial' },
        { src: '/img/dorado-gal-1.webp', tag: 'Perfil Lateral Babor' },
        { src: '/img/dorado-gal-2.webp', tag: 'Perfil Lateral Estribor' },
        { src: '/img/dorado-gal-3.webp', tag: 'Motor Yamaha 50HP' },
        { src: '/img/dorado-gal-4.webp', tag: 'Vista Proa Abierta' }
      ]
    },
    canestrari165: {
      name: "Canestrari 165",
      brand: "Canestrari",
      brandLogo: "/images/logo-usados.png",
      category: "Embarcación deportiva usada",
      line1: "Canestrari",
      line2: "165",
      ruleText: "Deportiva completa · Mercury 90HP 4T · USD 19.000",
      ghostText: "Canestrari 165",
      heroPhoto: "/img/usado-canestrari165.webp",
      pdfUrl: "/img/usado-canestrari165.webp",
      price: "USD 19.000",
      description: [
        "La Canestrari 165 es un clásico del astillero, reconocida por su excelente calidad de construcción y su navegación deportiva suave y divertida.",
        "Esta unidad, en condición usada seleccionada, cuenta con un motor fuera de borda Mercury de 90 HP de 4 tiempos (4T), garantizando un consumo bajo y una gran respuesta de potencia.",
        "Nota: La lancha no incluye tráiler. Cuenta con equipamiento deportivo completo y butacas confortables para disfrutar de largas jornadas en el agua de forma segura."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha usada Canestrari 165 con Mercury 90HP por USD 19.000.",
      isMotor: false,
      specs: [
        { label: "Precio", value: "USD 19.000", svgPath: "M12 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 14c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" },
        { label: "Condición", value: "Usada Seleccionada", svgPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "Motor", value: "Mercury 90 HP 4T", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Tráiler", value: "No incluido", svgPath: "M6 18L18 6M6 6l12 12" },
        { label: "Equipamiento", value: "Deportiva Completa", svgPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
        { label: "Estado", value: "Lista para navegar", svgPath: "M5 13l4 4L19 7" }
      ]
    },
    geunaf170: {
      name: "Geuna F170",
      brand: "Geuna",
      brandLogo: "/images/logo-usados.png",
      category: "Embarcación deportiva usada",
      line1: "Geuna",
      line2: "F170",
      ruleText: "Deportiva completa · Equipada con Mercury 90HP",
      ghostText: "Geuna F170",
      heroPhoto: "/img/usado-geunaf170.webp",
      pdfUrl: "/img/usado-geunaf170.webp",
      description: [
        "La Geuna F170 combina la modernidad de su diseño y la practicidad de una lancha deportiva ideal para paseos, deportes y diversión acuática en general.",
        "Presentada como una usada seleccionada en óptimo estado de conservación, está motorizada con un motor Mercury de 90 HP de excelente rendimiento y confiabilidad.",
        "Esta unidad incluye tráiler reglamentario de transporte, lista para enganchar y llevar a cualquier espejo de agua de forma segura e inmediata."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha usada Geuna F170 con Mercury 90HP.",
      isMotor: false,
      specs: [
        { label: "Condición", value: "Usada Seleccionada", svgPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "Motor", value: "Mercury 90 HP", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Tráiler", value: "Incluido (Reglamentario)", svgPath: "M8 9h8m-8 4h8m-9 4h10a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
        { label: "Equipamiento", value: "Deportiva Completa", svgPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
        { label: "Estado", value: "Lista para navegar", svgPath: "M5 13l4 4L19 7" }
      ]
    },
    bermuda180: {
      name: "Bermuda 180 Sport",
      brand: "Bermuda",
      brandLogo: "/images/logo-usados.png",
      category: "Embarcación deportiva usada",
      line1: "Bermuda",
      line2: "180 Sport",
      ruleText: "Deportiva completa · Equipada con Mercury 150HP",
      ghostText: "Bermuda 180 Sport",
      heroPhoto: "/img/usado-bermuda180.webp",
      pdfUrl: "/img/usado-bermuda180.webp",
      description: [
        "La clásica y prestigiosa Bermuda 180 Sport, bautizada 'Sofia', se ofrece en condición usada seleccionada, impecable y equipada al máximo rendimiento.",
        "Su motorización consta de un motor Mercury de 150 HP de fuerza inigualable, que la convierte en una opción deportiva líder para esquí, wakeboard y navegación rápida.",
        "Incluye tráiler reglamentario en perfecto estado, ideal para traslados terrestres seguros. Una oportunidad única de adquirir una lancha deportiva premium lista para usar."
      ],
      waMsg: "Hola! Quisiera obtener información y cotización sobre la lancha usada Bermuda 180 Sport con Mercury 150HP.",
      isMotor: false,
      specs: [
        { label: "Condición", value: "Usada Seleccionada", svgPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "Motor", value: "Mercury 150 HP", svgPath: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Tráiler", value: "Incluido (Reglamentario)", svgPath: "M8 9h8m-8 4h8m-9 4h10a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
        { label: "Equipamiento", value: "Deportiva Completa", svgPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
        { label: "Estado", value: "Lista para navegar", svgPath: "M5 13l4 4L19 7" }
      ]
    }
  };

  // Model aliases
  modelsDB.geunaf121 = modelsDB.geuna212;
  modelsDB.geunaf212 = modelsDB.geuna212;
  modelsDB.geunasupreme = modelsDB.geuna212;
  modelsDB.geuna212supreme = modelsDB.geuna212;
  modelsDB.f121 = modelsDB.geuna212;
  modelsDB.f212 = modelsDB.geuna212;
  modelsDB.geuna170 = modelsDB.geuna170wake;
  modelsDB.geunawake170 = modelsDB.geuna170wake;
  modelsDB.geunaf170wake = modelsDB.geuna170wake;
  modelsDB.wake170 = modelsDB.geuna170wake;
  modelsDB.f170wake = modelsDB.geuna170wake;
  modelsDB.geuna165 = modelsDB.geunaf165;
  modelsDB.f165 = modelsDB.geunaf165;
  modelsDB.f540 = modelsDB.geuna540;
  modelsDB.g540 = modelsDB.geuna540;
  modelsDB['540'] = modelsDB.geuna540;
  modelsDB.sf470 = modelsDB.pampasf470;
  modelsDB['pampa-sf470'] = modelsDB.pampasf470;
  modelsDB.pampamarin = modelsDB.pampasf470;
  modelsDB.pampa470 = modelsDB.pampasf470;
  modelsDB.pampa540 = modelsDB.pampa520;
  modelsDB.pampamarin520 = modelsDB.pampa520;
  modelsDB.pampamarin540 = modelsDB.pampa520;
  modelsDB['520'] = modelsDB.pampa520;
  modelsDB['pampa-520'] = modelsDB.pampa520;
  modelsDB.sf190 = modelsDB.pampasf190;
  modelsDB['pampa-sf190'] = modelsDB.pampasf190;
  modelsDB.pampa190 = modelsDB.pampasf190;
  modelsDB.starfish190 = modelsDB.pampasf190;
  modelsDB.pampastarfish = modelsDB.pampasf190;
  modelsDB.pampastarfish190 = modelsDB.pampasf190;
  modelsDB.pampasf490 = modelsDB.pampasf190;
  modelsDB.sf490 = modelsDB.pampasf190;
  modelsDB.pampa490 = modelsDB.pampasf190;
  modelsDB['26'] = modelsDB.drakkar26;
  modelsDB['drakkar-26'] = modelsDB.drakkar26;
  modelsDB.drakkar23 = modelsDB.drakkar23;
  modelsDB['23'] = modelsDB.drakkar23;
  modelsDB['drakkar-23'] = modelsDB.drakkar23;
  modelsDB.drakkar = modelsDB.drakkar23;
  modelsDB.drakkar26dobledeck = modelsDB.drakkar26dobledeck;
  modelsDB['drakkar-26-doble-deck'] = modelsDB.drakkar26dobledeck;
  modelsDB['drakkar-doble-deck'] = modelsDB.drakkar26dobledeck;
  modelsDB['doble-deck'] = modelsDB.drakkar26dobledeck;
  modelsDB.dobledeck = modelsDB.drakkar26dobledeck;
  modelsDB.drakkar26dd = modelsDB.drakkar26dobledeck;
  modelsDB.k210 = modelsDB.klasea;
  modelsDB.klasek210 = modelsDB.klasea;
  modelsDB['klase-a'] = modelsDB.klasea;
  modelsDB['klase-a-k210'] = modelsDB.klasea;
  modelsDB.cargoopen620 = modelsDB.cargo620;
  modelsDB['cargo-620'] = modelsDB.cargo620;
  modelsDB['cargo-open-620'] = modelsDB.cargo620;
  modelsDB['sport-160m'] = modelsDB.sport160m;
  modelsDB['sport160'] = modelsDB.sport160m;
  modelsDB['sportcraft-1600'] = modelsDB.sportcraft1600;
  modelsDB['canestrari-165'] = modelsDB.canestrari165;
  modelsDB['dorado-550'] = modelsDB.dorado550;

  /* ══ DYNAMIC CONTENT LOADING ═════════════════════════════ */
  const urlParams = new URLSearchParams(window.location.search);
  const modelKey = (urlParams.get('model') || 'safari550').toLowerCase();
  const info = modelsDB[modelKey] || modelsDB.safari550;

  // Update Document metadata
  document.title = `${info.name} — Náutica Aire Libre`;

  // Update Hero Section
  const ghost = document.getElementById('detailHeroGhost');
  if (ghost) ghost.textContent = info.ghostText || info.name;

  const heroPhoto = document.getElementById('detailHeroPhoto');
  if (heroPhoto) {
    heroPhoto.src = info.heroPhoto;
    heroPhoto.alt = info.name;
  }

  const brandLogo = document.getElementById('detailHeroBrandLogo');
  if (brandLogo) {
    brandLogo.src = info.brandLogo;
    brandLogo.alt = info.brand;
  }

  const brandName = document.getElementById('detailHeroBrandName');
  if (brandName) brandName.textContent = info.category;

  const line1 = document.getElementById('detailHeroLine1');
  if (line1) line1.textContent = info.line1;

  const line2 = document.getElementById('detailHeroLine2');
  if (line2) line2.textContent = info.line2;

  const ruleText = document.getElementById('detailHeroRuleText');
  if (ruleText) ruleText.textContent = info.ruleText;

  const heroBody = document.getElementById('detailHeroBody');
  if (heroBody) heroBody.textContent = info.description[0] || "";

  // WhatsApp setup
  const baseWhatsAppUrl = "https://wa.me/5493764711617";
  const whatsappMsg = encodeURIComponent(info.waMsg || "Hola! Quisiera consultar sobre " + info.name);
  
  // Update floating WhatsApp widget and mobile nav links with current model context
  const waItems = document.querySelectorAll('.wa-item, .nav-contact-item');
  waItems.forEach(item => {
    const phone = item.dataset.phone;
    if (phone) {
      item.href = `https://wa.me/${phone}?text=${whatsappMsg}`;
    }
  });

  const heroCta = document.getElementById('detailHeroCta');
  if (heroCta) {
    heroCta.href = `${baseWhatsAppUrl}?text=${whatsappMsg}`;
    const displayPrice = info.price || info.usdPrice;
    if (displayPrice) {
      heroCta.classList.add('btn-has-price');
      heroCta.innerHTML = `
        <span class="cta-price-stack">
          <span class="cta-price-label">PRECIO</span>
          <span class="cta-price-val">${displayPrice}</span>
        </span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      `;
    } else {
      heroCta.classList.remove('btn-has-price');
      heroCta.innerHTML = `Consultar precio <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
    }
  }

  const descCta = document.getElementById('detailDescCta');
  if (descCta) {
    if (info.cashPrice && info.usdPrice) {
      // Create a flex container for custom price buttons
      const btnContainer = document.createElement('div');
      btnContainer.className = 'custom-price-buttons';
      btnContainer.style.display = 'flex';
      btnContainer.style.flexWrap = 'wrap';
      btnContainer.style.gap = '16px';
      btnContainer.style.marginTop = '28px';

      // Cash price button (highlighted / solid orange)
      const cashBtn = document.createElement('a');
      cashBtn.href = `${baseWhatsAppUrl}?text=${encodeURIComponent("Hola! Quisiera consultar por el " + info.name + " al precio de Contado Efectivo de " + info.cashPrice)}`;
      cashBtn.target = '_blank';
      cashBtn.className = 'btn-price-cash';
      cashBtn.style.display = 'inline-flex';
      cashBtn.style.alignItems = 'center';
      cashBtn.style.gap = '10px';
      cashBtn.style.fontFamily = "'Barlow Condensed', sans-serif";
      cashBtn.style.fontWeight = '700';
      cashBtn.style.fontSize = '0.9rem';
      cashBtn.style.letterSpacing = '0.18em';
      cashBtn.style.textTransform = 'uppercase';
      cashBtn.style.background = 'var(--orange)';
      cashBtn.style.color = 'var(--deep)';
      cashBtn.style.border = '1px solid var(--orange)';
      cashBtn.style.padding = '13px 28px';
      cashBtn.style.textDecoration = 'none';
      cashBtn.style.transition = 'all 0.2s';
      cashBtn.style.cursor = 'pointer';
      cashBtn.innerHTML = `Contado Efectivo: ${info.cashPrice}`;
      cashBtn.onmouseover = () => {
        cashBtn.style.background = 'transparent';
        cashBtn.style.color = 'var(--orange)';
      };
      cashBtn.onmouseout = () => {
        cashBtn.style.background = 'var(--orange)';
        cashBtn.style.color = 'var(--deep)';
      };

      // USD price button (outlined / info style)
      const usdBtn = document.createElement('a');
      usdBtn.href = `${baseWhatsAppUrl}?text=${encodeURIComponent("Hola! Quisiera consultar por el " + info.name + " al precio de " + info.usdPrice)}`;
      usdBtn.target = '_blank';
      usdBtn.className = 'btn-price-usd';
      usdBtn.style.display = 'inline-flex';
      usdBtn.style.alignItems = 'center';
      usdBtn.style.gap = '10px';
      usdBtn.style.fontFamily = "'Barlow Condensed', sans-serif";
      usdBtn.style.fontWeight = '700';
      usdBtn.style.fontSize = '0.9rem';
      usdBtn.style.letterSpacing = '0.18em';
      usdBtn.style.textTransform = 'uppercase';
      usdBtn.style.background = 'transparent';
      usdBtn.style.color = 'var(--white)';
      usdBtn.style.border = '1px solid rgba(255, 255, 255, 0.2)';
      usdBtn.style.padding = '13px 28px';
      usdBtn.style.textDecoration = 'none';
      usdBtn.style.transition = 'all 0.2s';
      usdBtn.style.cursor = 'pointer';
      usdBtn.innerHTML = `Precio: ${info.usdPrice}`;
      usdBtn.onmouseover = () => {
        usdBtn.style.background = 'rgba(255, 255, 255, 0.05)';
        usdBtn.style.borderColor = 'rgba(255, 255, 255, 0.4)';
      };
      usdBtn.onmouseout = () => {
        usdBtn.style.background = 'transparent';
        usdBtn.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      };

      // Standard WhatsApp button (standard outlined)
      const waBtn = document.createElement('a');
      waBtn.href = `${baseWhatsAppUrl}?text=${whatsappMsg}`;
      waBtn.target = '_blank';
      waBtn.className = 'desc-cta';
      waBtn.style.margin = '0'; // reset default margin-top
      waBtn.innerHTML = `
        Consultar disponibilidad
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 13px;"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      `;

      btnContainer.appendChild(cashBtn);
      btnContainer.appendChild(usdBtn);
      btnContainer.appendChild(waBtn);

      // Hide or replace the original button
      descCta.style.display = 'none';
      const existingContainer = descCta.parentElement.querySelector('.custom-price-buttons');
      if (existingContainer) existingContainer.remove();
      descCta.parentElement.appendChild(btnContainer);
    } else {
      descCta.style.display = 'inline-flex';
      descCta.href = `${baseWhatsAppUrl}?text=${whatsappMsg}`;
      if (info.price) {
        descCta.classList.add('btn-has-price');
        descCta.innerHTML = `
          <span class="cta-price-stack">
            <span class="cta-price-label">PRECIO</span>
            <span class="cta-price-val">${info.price}</span>
          </span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 16px;"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        `;
      }
      const existingContainer = descCta.parentElement.querySelector('.custom-price-buttons');
      if (existingContainer) existingContainer.remove();
    }
  }

  // Update Description section
  const descEyebrow = document.getElementById('detailDescEyebrow');
  if (descEyebrow) descEyebrow.textContent = `${info.brand} · ${info.line1} ${info.line2}`;

  const descTitle = document.getElementById('detailDescTitle');
  if (descTitle) {
    descTitle.innerHTML = info.isMotor 
      ? `Potencia y<br/>confiabilidad<br/><em>Mercury.</em>`
      : `Para quienes<br/>viven el<br/><em>agua.</em>`;
  }

  const descBody = document.getElementById('detailDescBody');
  if (descBody) {
    descBody.innerHTML = info.description.map(p => `<p class="desc-body">${p}</p>`).join('');
  }

  // Render Inner model/engine Image if available
  const innerImageContainer = document.getElementById('detailInnerImageContainer');
  const innerImage = document.getElementById('detailInnerImage');
  if (innerImageContainer && innerImage) {
    if (info.innerImage) {
      innerImage.src = info.innerImage;
      innerImage.alt = info.name;
      innerImageContainer.style.display = 'block';

      // Custom styling for transparent motor cutouts
      if (info.innerImage.includes('cutout')) {
        // Floating engine container style
        innerImageContainer.style.background = 'radial-gradient(circle, rgba(90, 173, 207, 0.18) 0%, transparent 70%)';
        innerImageContainer.style.border = 'none';
        innerImageContainer.style.boxShadow = 'none';
        innerImageContainer.style.display = 'flex';
        innerImageContainer.style.justifyContent = 'center';
        innerImageContainer.style.alignItems = 'center';
        innerImageContainer.style.padding = '40px 0';
        
        innerImage.style.maxHeight = '380px';
        innerImage.style.width = 'auto';
        innerImage.style.borderRadius = '0';
        innerImage.style.border = 'none';
        innerImage.style.boxShadow = 'none';
        innerImage.style.filter = 'drop-shadow(0 15px 30px rgba(90, 173, 207, 0.4))';
        
        // Add float animation dynamically
        if (!document.getElementById('motorFloatStyle')) {
          const style = document.createElement('style');
          style.id = 'motorFloatStyle';
          style.innerHTML = `
            @keyframes floatOutboard {
              0% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-12px) rotate(1deg); }
              100% { transform: translateY(0px) rotate(0deg); }
            }
            .floating-motor {
              animation: floatOutboard 5s ease-in-out infinite;
            }
          `;
          document.head.appendChild(style);
        }
        innerImage.classList.add('floating-motor');
      } else {
        // Reset to default style for standard images
        innerImageContainer.style.background = '';
        innerImageContainer.style.border = '';
        innerImageContainer.style.boxShadow = '';
        innerImageContainer.style.display = 'block';
        innerImageContainer.style.padding = '';

        innerImage.style.maxHeight = '';
        innerImage.style.width = '';
        innerImage.style.borderRadius = '12px';
        innerImage.style.border = '1px solid rgba(255,255,255,0.1)';
        innerImage.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
        innerImage.style.filter = '';
        innerImage.classList.remove('floating-motor');
      }
    } else {
      innerImageContainer.style.display = 'none';
    }
  }

  // Update Specs Grid
  const specsGrid = document.getElementById('detailSpecsGrid');
  if (specsGrid && info.specs) {
    specsGrid.innerHTML = info.specs.map(spec => {
      const isPrice = spec.label.toLowerCase() === 'precio' || spec.label.toLowerCase() === 'valor';
      return `
        <div class="dspec ${isPrice ? 'dspec-price' : ''}">
          <svg class="dspec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="${spec.svgPath}" />
          </svg>
          <div class="dspec-val">${spec.value}</div>
          <div class="dspec-key">${spec.label}</div>
        </div>
      `;
    }).join('');

    // If PDF is available, append the PDF download button at the end of the specs description
    if (info.pdfUrl) {
      // Clear previous download containers if any
      const existingPdf = document.querySelector('.pdf-download-container');
      if (existingPdf) existingPdf.remove();

      const ctaDiv = document.createElement('div');
      ctaDiv.className = 'pdf-download-container';
      ctaDiv.style.marginTop = '32px';
      ctaDiv.style.gridColumn = '1 / -1';
      ctaDiv.innerHTML = `
        <a href="${info.pdfUrl}" class="btn-primary btn-pdf" download style="display: inline-flex; align-items: center; gap: 10px; width: auto; padding: 12px 28px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          Descargar Folleto PDF
        </a>
      `;
      const descTextCol = descEyebrow.parentElement;
      if (descTextCol) {
        descTextCol.appendChild(ctaDiv);
      }
    }
  }

  // Toggle Visibility for Video & Gallery sections
  const videoSection = document.getElementById('detailVideoSection');
  const gallerySection = document.getElementById('detailGallerySection');

  if (!info.videoId) {
    if (videoSection) videoSection.style.display = 'none';
  } else {
    if (videoSection) videoSection.style.display = '';

    // Dynamically update video section texts & cover image
    const videoEyebrow = document.getElementById('detailVideoEyebrow');
    if (videoEyebrow) videoEyebrow.textContent = `${info.name} · En movimiento`;

    const videoFloatTag = document.getElementById('detailVideoFloatTag');
    if (videoFloatTag) {
      videoFloatTag.innerHTML = `<span class="vft-dot"></span>${info.brand} ${info.line1} ${info.line2} — Presentación oficial`;
    }

    const posterModel = document.getElementById('detailVideoPosterModel');
    if (posterModel) posterModel.textContent = `${info.line1} ${info.line2}`;

    const posterBrand = document.getElementById('detailVideoPosterBrand');
    if (posterBrand) posterBrand.textContent = info.brand;

    const videoPoster = document.getElementById('videoPoster');
    if (videoPoster) {
      if (info.videoPoster) {
        videoPoster.style.setProperty('--video-poster-img', `url('${info.videoPoster}')`);
      } else {
        videoPoster.style.removeProperty('--video-poster-img');
      }
    }
  }
  if (gallerySection) {
    gallerySection.style.display = info.gallery ? '' : 'none';
  }

  /* ══ VIDEO AUTOPLAY ═════════════════════════════════════ */
  const VIDEO_ID = info.videoId || 'TU_VIDEO_ID_AQUI';
  const playBtn = document.getElementById('playBtn');
  const videoPoster = document.getElementById('videoPoster');
  const videoFrameWrap = document.getElementById('videoFrameWrap');
  
  function activateVideo() {
    if (!videoPoster || !videoFrameWrap) return;
    videoPoster.style.transition = 'opacity 0.5s ease';
    videoPoster.style.opacity = '0';
    setTimeout(() => {
      videoPoster.style.display = 'none';
      videoFrameWrap.style.display = 'block';
      videoFrameWrap.style.opacity = '0';
      videoFrameWrap.style.transition = 'opacity 0.4s ease';
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      videoFrameWrap.appendChild(iframe);
      requestAnimationFrame(() => requestAnimationFrame(() => videoFrameWrap.style.opacity = '1'));
    }, 450);
  }
  if (playBtn && videoPoster) {
    playBtn.addEventListener('click', activateVideo);
    videoPoster.addEventListener('click', (e) => { if (!playBtn.contains(e.target)) activateVideo(); });
  }

  /* ══ GALLERY & LIGHTBOX ════════════════════════════════ */
  if (info.gallery && gallerySection) {
    const galleryGrid = document.getElementById('galleryGrid');
    const galleryIntro = gallerySection.querySelector('.gallery-intro');
    
    if (galleryIntro) {
      const gEyebrow = galleryIntro.querySelector('.gallery-eyebrow');
      const gTitle = galleryIntro.querySelector('.gallery-title');
      if (gEyebrow) gEyebrow.textContent = `${info.name} · En imágenes`;
    }

    if (galleryGrid) {
      // Build dynamic gallery grid
      galleryGrid.innerHTML = info.gallery.map((img, i) => `
        <div class="g-cell g-pos-${i+1}" style="--gd:${i*0.08}s" data-index="${i}" data-tag="${img.tag}">
          <div class="g-img" style="background-image: url('${img.src}'); background-position: center 30%;"></div>
          <div class="g-overlay"></div>
          <div class="g-glow"></div>
          <div class="g-info">
            <span class="g-tag">${img.tag}</span>
            <span class="g-zoom">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
              </svg>
            </span>
          </div>
        </div>
      `).join('');
    }

    // Dynamically update gallery counter text
    const galleryCounterSpan = gallerySection.querySelector('.gallery-counter span:not(.gc-line)');
    if (galleryCounterSpan) {
      galleryCounterSpan.textContent = `${info.gallery.length} fotografías · ${info.name}`;
    }

    /* Gallery IntersectionObserver */
    const gCells = document.querySelectorAll('.g-cell');
    const gObs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('g-visible'); gObs.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    gCells.forEach(c => gObs.observe(c));

    /* Lightbox */
    const lightbox  = document.getElementById('lightbox');
    const lbImg     = document.getElementById('lbImg');
    const lbCaption = document.getElementById('lbCaption');
    const lbDots    = document.getElementById('lbDots');
    let currentIdx  = 0;

    if (lightbox && lbDots) {
      lbDots.innerHTML = ""; // Clear dots
      // Build dots
      info.gallery.forEach((_,i) => {
        const d = document.createElement('div');
        d.className = 'lb-dot' + (i===0?' active':'');
        d.addEventListener('click', () => showLb(i));
        lbDots.appendChild(d);
      });

      function showLb(idx, direction) {
        currentIdx = (idx + info.gallery.length) % info.gallery.length;
        if (lbImg) {
          if (direction === 'next') {
            lbImg.style.transition = 'none';
            lbImg.style.transform = 'translateX(40px)';
            lbImg.style.opacity = '0';
            lbImg.src = info.gallery[currentIdx].src;
            requestAnimationFrame(() => {
              lbImg.style.transition = 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease';
              lbImg.style.transform = 'translateX(0)';
              lbImg.style.opacity = '1';
            });
          } else if (direction === 'prev') {
            lbImg.style.transition = 'none';
            lbImg.style.transform = 'translateX(-40px)';
            lbImg.style.opacity = '0';
            lbImg.src = info.gallery[currentIdx].src;
            requestAnimationFrame(() => {
              lbImg.style.transition = 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease';
              lbImg.style.transform = 'translateX(0)';
              lbImg.style.opacity = '1';
            });
          } else {
            lbImg.style.transition = 'opacity 0.25s ease';
            lbImg.style.transform = 'translateX(0)';
            lbImg.style.opacity = '1';
            lbImg.src = info.gallery[currentIdx].src;
          }
        }
        if (lbCaption) lbCaption.textContent = info.gallery[currentIdx].tag;
        document.querySelectorAll('.lb-dot').forEach((d,i) => d.classList.toggle('active', i===currentIdx));
      }
      function openLb(idx) {
        showLb(idx);
        lightbox.classList.add('lb-open');
        document.body.style.overflow = 'hidden';
      }
      function closeLb() {
        lightbox.classList.remove('lb-open');
        document.body.style.overflow = '';
        if (lbImg) {
          lbImg.style.transform = 'translateX(0)';
          lbImg.style.opacity = '1';
        }
      }

      gCells.forEach(cell => {
        cell.addEventListener('click', () => openLb(parseInt(cell.dataset.index)));
      });
      const lbClose = document.getElementById('lbClose');
      const lbBackdrop = document.getElementById('lbBackdrop');
      const lbPrev = document.getElementById('lbPrev');
      const lbNext = document.getElementById('lbNext');
      const lbWrap = lightbox.querySelector('.lb-img-wrap') || lightbox;

      if (lbClose) lbClose.addEventListener('click', closeLb);
      if (lbBackdrop) lbBackdrop.addEventListener('click', closeLb);
      if (lbPrev) lbPrev.addEventListener('click', () => showLb(currentIdx - 1, 'prev'));
      if (lbNext) lbNext.addEventListener('click', () => showLb(currentIdx + 1, 'next'));
      document.addEventListener('keydown', e => {
        if (!lightbox.classList.contains('lb-open')) return;
        if (e.key === 'ArrowLeft')  showLb(currentIdx - 1, 'prev');
        if (e.key === 'ArrowRight') showLb(currentIdx + 1, 'next');
        if (e.key === 'Escape')     closeLb();
      });

      // Touch & Drag Gesture Navigation
      let touchStartX = 0;
      let touchStartY = 0;
      let touchDeltaX = 0;
      let isDragging = false;

      function onTouchStart(e) {
        if (!lightbox.classList.contains('lb-open')) return;
        if (e.target.closest('#lbClose') || e.target.closest('#lbPrev') || e.target.closest('#lbNext') || e.target.closest('.lb-dot')) return;
        const touch = e.touches ? e.touches[0] : e;
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
        touchDeltaX = 0;
        isDragging = true;
        if (lbImg) {
          lbImg.style.transition = 'none';
        }
        if (lbWrap) lbWrap.classList.add('grabbing');
      }

      function onTouchMove(e) {
        if (!isDragging) return;
        const touch = e.touches ? e.touches[0] : e;
        const deltaX = touch.clientX - touchStartX;
        const deltaY = touch.clientY - touchStartY;

        // If predominantly horizontal, prevent scroll and drag
        if (Math.abs(deltaX) > Math.abs(deltaY) || !e.touches) {
          if (e.cancelable && e.touches) e.preventDefault();
          touchDeltaX = deltaX;
          if (lbImg) {
            lbImg.style.transform = `translateX(${deltaX}px)`;
            lbImg.style.opacity = `${1 - Math.min(Math.abs(deltaX) / 600, 0.4)}`;
          }
        }
      }

      function onTouchEnd(e) {
        if (!isDragging) return;
        isDragging = false;
        if (lbWrap) lbWrap.classList.remove('grabbing');

        const threshold = 40; // minimum swipe distance in px
        if (touchDeltaX < -threshold) {
          // Swiped left -> Next
          showLb(currentIdx + 1, 'next');
        } else if (touchDeltaX > threshold) {
          // Swiped right -> Prev
          showLb(currentIdx - 1, 'prev');
        } else {
          // Reset
          if (lbImg) {
            lbImg.style.transition = 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease';
            lbImg.style.transform = 'translateX(0)';
            lbImg.style.opacity = '1';
          }
        }
        touchDeltaX = 0;
      }

      // Touch events on lightbox
      lightbox.addEventListener('touchstart', onTouchStart, { passive: false });
      lightbox.addEventListener('touchmove', onTouchMove, { passive: false });
      lightbox.addEventListener('touchend', onTouchEnd);
      lightbox.addEventListener('touchcancel', onTouchEnd);

      // Pointer / mouse drag events
      lightbox.addEventListener('mousedown', onTouchStart);
      window.addEventListener('mousemove', onTouchMove);
      window.addEventListener('mouseup', onTouchEnd);
    }
  }
})();