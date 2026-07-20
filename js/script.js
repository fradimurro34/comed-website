/* =========================================================
   COMED S.r.l. — script.js
   Contiene: dizionario traduzioni IT/EN, motore di traduzione,
   menu mobile, animazioni allo scroll, validazione form contatti.

   COME AGGIUNGERE/MODIFICARE UN TESTO TRADOTTO:
   1. Nell'HTML aggiungi l'attributo data-i18n="chiave.testo" all'elemento
   2. Qui sotto, nell'oggetto TRANSLATIONS, aggiungi la stessa chiave
      sia dentro it: {...} sia dentro en: {...}
   ========================================================= */

const TRANSLATIONS = {
  it: {
    meta: {
      home: {
        title: "COMED S.r.l. | Meccanica di precisione dal 1998 — Castrocielo (FR)",
        description: "COMED S.r.l.: officina di meccanica di precisione a Castrocielo (FR), partner produttivo SKF dal 1998. Tornitura, fresatura, rettifica, elettroerosione, revisione mandrini e progettazione macchine speciali."
      },
      chi: {
        title: "Chi siamo | COMED S.r.l. — Meccanica di precisione dal 1998",
        description: "La storia di COMED: da ditta individuale nel 1997 a S.r.l. dal 2006, partner produttivo SKF. Stabilimento di 1000 mq a Castrocielo (FR), 9 dipendenti, certificazione ISO 9001."
      },
      servizi: {
        title: "Servizi | Tornitura, fresatura, rettifica, EDM — COMED S.r.l.",
        description: "I servizi COMED: tornitura e fresatura CNC, rettifica circolare/tangenziale/senza centri, elettroerosione EDM, revisione elettromandrini, revisione macchine industriali, progettazione macchine speciali."
      },
      settori: {
        title: "Settori serviti | COMED S.r.l. — Meccanica di precisione",
        description: "I settori in cui opera COMED: componentistica di precisione, automazione industriale, macchine utensili, manutenzione e revisione di impianti produttivi."
      },
      contatti: {
        title: "Contatti | COMED S.r.l. — Castrocielo (FR)",
        description: "Contatta COMED S.r.l.: Via Guadicciolo 8, Castrocielo (FR). Tel. 0776 729054 · Cell. 334 1159201 · amministrazione@comedsrl.org"
      }
    },
    nav: {
      home: "Home",
      about: "Chi siamo",
      services: "Servizi",
      sectors: "Settori",
      contact: "Contatti"
    },
    common: {
      skipLink: "Vai al contenuto principale",
      readMore: "Scopri di più",
      requestQuote: "Richiedi informazioni",
      seeServices: "Scopri i servizi",
      contactUs: "Contattaci",
      home: "Home"
    },
    home: {
      hero: {
        eyebrow: "Partner produttivo SKF dal 1998 · Castrocielo, Italia",
        title: "Meccanica di precisione.",
        quote: "« La vera grandezza è nei dettagli »",
        lead: "COMED S.r.l. produce e revisiona componenti meccanici rispettando le tolleranze industriali più severe, su disegno del cliente o a campione — con la cura artigianale di un'officina che lavora al fianco di SKF dal 1998.",
        ctaPrimary: "Scopri i servizi",
        ctaSecondary: "Contattaci"
      },
      stats: {
        founded: { num: "1998", label: "Anno di fondazione" },
        experience: { num: "25+", label: "Anni di esperienza" },
        team: { num: "9", label: "Dipendenti tra tecnici e addetti" },
        quality: { num: "ISO 9001", label: "Sistema qualità certificato" }
      },
      services: {
        eyebrow: "Cosa facciamo",
        title: "Dalla lavorazione alla macchina completa.",
        intro: "Produciamo e revisioniamo componenti meccanici di precisione e ci occupiamo della progettazione e del retrofit di macchine industriali, in un'unica officina.",
        card1: { title: "Tornitura & fresatura CNC", desc: "Lavorazioni su disegno del cliente e a campione, alta precisione." },
        card2: { title: "Rettifica circolare, tangenziale e senza centri", desc: "Rettifica ad alta tolleranza per geometrie complesse." },
        card3: { title: "Elettroerosione EDM", desc: "Elettroerosione a filo e a tuffo per geometrie e cavità complesse." },
        card4: { title: "Revisione elettromandrini", desc: "Revisione mandrini centerless, elettromandrini Gamfior, LMT, GMN e mandrini idrostatici." },
        card5: { title: "Revisione macchine industriali", desc: "Revisione e retrofit elettrico e meccanico di macchinari obsoleti." },
        card6: { title: "Progettazione macchine speciali", desc: "Ufficio tecnico interno: dall'idea al collaudo, incluso reverse engineering." },
        cta: "Vedi tutti i servizi"
      },
      why: {
        eyebrow: "Perché COMED",
        title: "Quattro motivi per lavorare con noi.",
        item1: { title: "Precisione documentata", desc: "Tolleranze industriali severe rispettate, controllo su ogni processo." },
        item2: { title: "Struttura snella e flessibile", desc: "Risposte rapide, dialogo diretto, nessuna burocrazia inutile." },
        item3: { title: "Esperienza SKF dal 1998", desc: "25+ anni al fianco di un partner d'eccellenza internazionale." },
        item4: { title: "Posizione strategica", desc: "Castrocielo, tra Roma e Napoli: consegne rapide nel centro-sud Italia." }
      },
      cta: {
        title: "Parliamo del tuo progetto.",
        text: "Raccontaci le tue esigenze: ti rispondiamo con disponibilità e tempi realistici.",
        button: "Richiedi informazioni"
      }
    },
    chi: {
      pageHero: {
        title: "Chi siamo",
        lead: "Una struttura snella dove ogni dettaglio è curato, ogni processo controllato, ogni cliente un partner."
      },
      story: {
        eyebrow: "La nostra storia",
        title: "Dal 1997 al fianco di SKF."
      },
      timeline: {
        y1997: { year: "1997", text: "COMED nasce come ditta individuale sul finire del 1997, a Castrocielo (FR)." },
        y1998: { year: "1998", text: "Diventa operativa dall'8 gennaio 1998, avviando da subito la partnership produttiva con lo stabilimento SKF di Cassino." },
        y2006: { year: "2006", text: "COMED diventa S.r.l. e inizia a collaborare con gli stabilimenti dell'intero circuito SKF, oltre che con realtà del territorio." },
        today: { year: "Oggi", text: "9 dipendenti tra tecnici e addetti, uno stabilimento di 1000 mq nella zona industriale di Castrocielo, vicino Cassino, e certificazione di qualità ISO 9001." }
      },
      stats: {
        employees: { num: "9", label: "Dipendenti tra tecnici e addetti" },
        area: { num: "1000 mq", label: "Stabilimento a Castrocielo (FR)" },
        experience: { num: "25+", label: "Anni di esperienza" },
        quality: { num: "ISO 9001", label: "Sistema qualità certificato" }
      },
      mission: {
        title: "La nostra Mission",
        text: "Fornire componenti meccanici, lavorazioni, revisioni e progettazioni che rispettano le tolleranze industriali più severe — con la cura artigianale e l'affidabilità documentata che coltiviamo dal 1998, trattando ogni cliente come un partner."
      },
      vision: {
        title: "La nostra Vision",
        text: "Essere il punto di riferimento per la meccanica di precisione nel centro-sud Italia, crescendo attraverso innovazione continua, nuove tecnologie e formazione — senza mai perdere l'attenzione al dettaglio che ci distingue."
      },
      tech: {
        eyebrow: "Ufficio tecnico",
        title: "Progettiamo e costruiamo la macchina, non solo il pezzo.",
        text: "Un ufficio tecnico interno dedicato alla progettazione di meccanismi e macchine industriali di qualsiasi genere e tipologia — dall'idea al collaudo, con tecnici che seguono ogni fase, incluso il reverse engineering di particolari meccanici e la realizzazione dei relativi disegni tecnici esecutivi."
      }
    },
    servizi: {
      pageHero: {
        title: "Servizi",
        lead: "Produciamo e revisioniamo componenti che rispettano le tolleranze industriali più severe — su disegno del cliente o a campione."
      },
      intro: {
        title: "Dalla lavorazione al progetto completo.",
        text: "Ogni lavorazione è seguita internamente, dal preventivo al collaudo finale, con un parco macchine dedicato e un ufficio tecnico che affianca i clienti nella progettazione."
      },
      card1: {
        title: "Tornitura & fresatura CNC",
        desc: "Lavorazioni di tornitura e fresatura su disegno del cliente e a campione, con torni CNC ad assi motorizzati e asse Y (tornitura e fresatura in un solo macchinario) e centri di lavoro ad alta precisione."
      },
      card2: {
        title: "Rettifica circolare, tangenziale e senza centri",
        desc: "Rettifiche piane e tonde ad alta tolleranza per geometrie meccaniche complesse, inclusa la rettifica senza centri (centerless)."
      },
      card3: {
        title: "Elettroerosione EDM",
        desc: "Elettroerosione a filo di ultima generazione ed elettroerosione a tuffo per geometrie e cavità complesse."
      },
      card4: {
        title: "Revisione elettromandrini",
        desc: "Revisione di mandrini mola/rullo centerless, elettromandrini Gamfior, LMT e GMN, e revisione ordinaria di mandrini idrostatici."
      },
      card5: {
        title: "Revisione macchine industriali",
        desc: "Revisione e retrofit di macchinari obsoleti dal punto di vista elettrico e meccanico, per riportarli a piena efficienza produttiva."
      },
      card6: {
        title: "Progettazione macchine speciali",
        desc: "Progettazione e realizzazione di macchine industriali su misura, con retrofit completo, attraverso il nostro ufficio tecnico interno."
      },
      card7: {
        title: "Reverse engineering",
        desc: "Ricostruzione tridimensionale di particolari meccanici e realizzazione dei relativi disegni tecnici esecutivi."
      },
      card8: {
        title: "Carpenteria su misura",
        desc: "Servizi mirati di carpenteria grazie alla collaborazione con partner storici di eccellenza del settore."
      },
      machines: {
        eyebrow: "Parco macchine",
        title: "Tecnologia per ogni lavorazione.",
        colQty: "Quantità",
        colMachine: "Macchinario",
        colSpec: "Caratteristiche",
        row1: { qty: "3×", name: "Torni CNC", spec: "Assi motorizzati e asse Y: tornitura e fresatura in un solo macchinario." },
        row2: { qty: "5×", name: "Centri di lavoro", spec: "Corse max X 1200 · Y 660 · Z 900 mm." },
        row3: { qty: "2×", name: "Rettifiche piane", spec: "Superficie rettificabile 1000 × 400 mm." },
        row4: { qty: "2×", name: "Rettifiche tonde", spec: "Superficie rettificabile 300 × 1200 mm." },
        row5: { qty: "3×", name: "Elettroerosioni a filo", spec: "Di ultima generazione." },
        row6: { qty: "1×", name: "Elettroerosione a tuffo", spec: "Per geometrie e cavità complesse." }
      },
      cta: {
        title: "Hai un disegno o un campione da valutare?",
        text: "Inviaci le specifiche: ti diciamo subito se possiamo lavorarlo e in che tempi.",
        button: "Richiedi informazioni"
      }
    },
    settori: {
      pageHero: {
        title: "Settori",
        lead: "La nostra esperienza nella meccanica di precisione ci porta a lavorare in diversi ambiti industriali, sempre con lo stesso livello di cura per il dettaglio."
      },
      intro: {
        title: "Dove lavora la precisione.",
        text: "Grazie alla partnership produttiva con SKF dal 1998 e a un parco macchine versatile, siamo un fornitore affidabile per aziende che hanno bisogno di componenti e revisioni fuori tolleranza standard. Per riservatezza non pubblichiamo i nominativi dei nostri clienti: raccontiamo invece gli ambiti in cui operiamo."
      },
      card1: {
        title: "Cuscinetti e componentistica di precisione",
        desc: "Lavorazioni e revisioni per l'industria dei cuscinetti e degli organi meccanici di precisione, in continuità con la nostra partnership produttiva SKF."
      },
      card2: {
        title: "Automazione e macchine industriali",
        desc: "Progettazione, costruzione e retrofit di macchine e meccanismi per l'automazione dei processi produttivi."
      },
      card3: {
        title: "Macchine utensili e impiantistica",
        desc: "Revisione di mandrini, elettromandrini e componenti critici per macchine utensili e impianti di produzione."
      },
      card4: {
        title: "Manutenzione e revisione industriale",
        desc: "Interventi di revisione e retrofit elettrico e meccanico su macchinari esistenti, per riportarli a piena efficienza."
      },
      approach: {
        eyebrow: "Il nostro approccio",
        title: "Ogni cliente, un partner.",
        text: "Che si tratti di una singola lavorazione su disegno o della progettazione di una macchina completa, seguiamo ogni commessa con lo stesso metodo: analisi tecnica, controllo delle tolleranze e dialogo diretto, senza intermediazioni inutili."
      }
    },
    contatti: {
      pageHero: {
        title: "Contatti",
        lead: "Raccontaci la tua esigenza: ti rispondiamo con disponibilità e tempi realistici."
      },
      form: {
        title: "Scrivici",
        name: "Nome e cognome",
        email: "Email",
        phone: "Telefono (facoltativo)",
        message: "Messaggio",
        submit: "Invia richiesta",
        required: "Campo obbligatorio",
        errorName: "Inserisci il tuo nome.",
        errorEmail: "Inserisci un indirizzo email valido.",
        errorMessage: "Scrivi un messaggio.",
        note: "Cliccando \"Invia richiesta\" si aprirà il tuo client di posta con il messaggio precompilato verso amministrazione@comedsrl.org.",
        successMsg: "Grazie! Si sta aprendo il tuo client di posta per inviare il messaggio.",
        errorMsgGeneric: "Controlla i campi evidenziati e riprova."
      },
      info: {
        title: "Dati aziendali",
        addressTitle: "Sede operativa",
        addressText: "Via Guadicciolo 8, 03030 Castrocielo (FR), Italia — Zona industriale di Cassino",
        phoneTitle: "Telefono",
        emailTitle: "Email",
        vatTitle: "Partita IVA",
        sdiTitle: "Codice SDI",
        mapCaption: "Mappa: Via Guadicciolo 8, Castrocielo (FR) — inserire embed mappa reale in produzione."
      }
    },
    footer: {
      tagline: "Componenti meccanici di precisione dal 1998. Partner produttivo SKF.",
      linksTitle: "Naviga",
      contactTitle: "Contatti",
      infoTitle: "Dati aziendali",
      rights: "Tutti i diritti riservati."
    }
  },

  en: {
    meta: {
      home: {
        title: "COMED S.r.l. | Precision Mechanics Since 1998 — Castrocielo, Italy",
        description: "COMED S.r.l.: precision mechanics workshop in Castrocielo (FR), Italy, SKF production partner since 1998. Turning, milling, grinding, EDM, spindle overhaul and special machine design."
      },
      chi: {
        title: "About Us | COMED S.r.l. — Precision Mechanics Since 1998",
        description: "COMED's story: from a sole proprietorship in 1997 to an S.r.l. since 2006, SKF production partner. 1000 sqm facility in Castrocielo (FR), 9 employees, ISO 9001 certified."
      },
      servizi: {
        title: "Services | Turning, Milling, Grinding, EDM — COMED S.r.l.",
        description: "COMED's services: CNC turning and milling, cylindrical/surface/centerless grinding, EDM, electrospindle overhaul, industrial machine overhaul, special machine design."
      },
      settori: {
        title: "Industries Served | COMED S.r.l. — Precision Mechanics",
        description: "Industries served by COMED: precision components, industrial automation, machine tools, maintenance and overhaul of production plants."
      },
      contatti: {
        title: "Contact | COMED S.r.l. — Castrocielo, Italy",
        description: "Contact COMED S.r.l.: Via Guadicciolo 8, Castrocielo (FR), Italy. Phone +39 0776 729054 · Mobile +39 334 1159201 · amministrazione@comedsrl.org"
      }
    },
    nav: {
      home: "Home",
      about: "About us",
      services: "Services",
      sectors: "Industries",
      contact: "Contact"
    },
    common: {
      skipLink: "Skip to main content",
      readMore: "Learn more",
      requestQuote: "Get in touch",
      seeServices: "Discover our services",
      contactUs: "Contact us",
      home: "Home"
    },
    home: {
      hero: {
        eyebrow: "SKF production partner since 1998 · Castrocielo, Italy",
        title: "Precision mechanics.",
        quote: "“True greatness is in the details”",
        lead: "COMED S.r.l. manufactures and overhauls mechanical components to the strictest industrial tolerances, to customer drawing or sample — with the artisan care of a workshop that has worked alongside SKF since 1998.",
        ctaPrimary: "Discover our services",
        ctaSecondary: "Contact us"
      },
      stats: {
        founded: { num: "1998", label: "Year founded" },
        experience: { num: "25+", label: "Years of experience" },
        team: { num: "9", label: "Employees, technicians & staff" },
        quality: { num: "ISO 9001", label: "Certified quality system" }
      },
      services: {
        eyebrow: "What we do",
        title: "From machining to the complete machine.",
        intro: "We manufacture and overhaul precision mechanical components, and design and retrofit industrial machinery — all under one roof.",
        card1: { title: "CNC turning & milling", desc: "High-precision machining to customer drawing or sample." },
        card2: { title: "Cylindrical, surface & centerless grinding", desc: "High-tolerance grinding for complex geometries." },
        card3: { title: "EDM (electrical discharge machining)", desc: "Wire and sinker EDM for complex geometries and cavities." },
        card4: { title: "Electrospindle overhaul", desc: "Overhaul of centerless spindles, Gamfior, LMT and GMN electrospindles, and hydrostatic spindles." },
        card5: { title: "Industrial machine overhaul", desc: "Electrical and mechanical overhaul and retrofit of obsolete machinery." },
        card6: { title: "Special machine design", desc: "In-house technical department: from concept to testing, including reverse engineering." },
        cta: "View all services"
      },
      why: {
        eyebrow: "Why COMED",
        title: "Four reasons to work with us.",
        item1: { title: "Documented precision", desc: "Strict industrial tolerances met, with control over every process." },
        item2: { title: "Lean, flexible structure", desc: "Fast responses, direct dialogue, no unnecessary bureaucracy." },
        item3: { title: "SKF experience since 1998", desc: "25+ years alongside an internationally renowned partner." },
        item4: { title: "Strategic location", desc: "Castrocielo, between Rome and Naples: fast deliveries across central-southern Italy." }
      },
      cta: {
        title: "Let's talk about your project.",
        text: "Tell us what you need: we'll get back to you with real availability and timelines.",
        button: "Get in touch"
      }
    },
    chi: {
      pageHero: {
        title: "About us",
        lead: "A lean structure where every detail is cared for, every process is controlled, and every client is a partner."
      },
      story: {
        eyebrow: "Our story",
        title: "Alongside SKF since 1998."
      },
      timeline: {
        y1997: { year: "1997", text: "COMED was founded as a sole proprietorship at the end of 1997, in Castrocielo (FR), Italy." },
        y1998: { year: "1998", text: "Operations began on January 8, 1998, launching a production partnership with the SKF plant in Cassino from day one." },
        y2006: { year: "2006", text: "COMED became an S.r.l. and began collaborating with plants across the entire SKF network, as well as with local businesses." },
        today: { year: "Today", text: "9 employees between technicians and staff, a 1000 sqm facility in the Castrocielo industrial area near Cassino, and ISO 9001 quality certification." }
      },
      stats: {
        employees: { num: "9", label: "Employees, technicians & staff" },
        area: { num: "1000 sqm", label: "Facility in Castrocielo (FR)" },
        experience: { num: "25+", label: "Years of experience" },
        quality: { num: "ISO 9001", label: "Certified quality system" }
      },
      mission: {
        title: "Our Mission",
        text: "To supply mechanical components, machining, overhauls and design work that meet the strictest industrial tolerances — with the artisan care and documented reliability we have cultivated since 1998, treating every client as a partner."
      },
      vision: {
        title: "Our Vision",
        text: "To be the benchmark for precision mechanics in central-southern Italy, growing through continuous innovation, new technologies and training — without ever losing the attention to detail that sets us apart."
      },
      tech: {
        eyebrow: "Technical department",
        title: "We design and build the machine, not just the part.",
        text: "An in-house technical department dedicated to the design of mechanisms and industrial machinery of any kind — from concept to testing, with technicians overseeing every stage, including reverse engineering of mechanical parts and creation of the related technical execution drawings."
      }
    },
    servizi: {
      pageHero: {
        title: "Services",
        lead: "We manufacture and overhaul components that meet the strictest industrial tolerances — to customer drawing or sample."
      },
      intro: {
        title: "From machining to the complete project.",
        text: "Every job is managed in-house, from quotation to final testing, with a dedicated machine fleet and a technical department that supports clients through the design phase."
      },
      card1: {
        title: "CNC turning & milling",
        desc: "Turning and milling to customer drawing or sample, with CNC lathes featuring motorized axes and Y-axis (turning and milling in a single machine) and high-precision machining centers."
      },
      card2: {
        title: "Cylindrical, surface & centerless grinding",
        desc: "High-tolerance surface and cylindrical grinding for complex mechanical geometries, including centerless grinding."
      },
      card3: {
        title: "EDM (electrical discharge machining)",
        desc: "Latest-generation wire EDM and sinker EDM for complex geometries and cavities."
      },
      card4: {
        title: "Electrospindle overhaul",
        desc: "Overhaul of centerless grinding wheel/roller spindles, Gamfior, LMT and GMN electrospindles, and routine overhaul of hydrostatic spindles."
      },
      card5: {
        title: "Industrial machine overhaul",
        desc: "Electrical and mechanical overhaul and retrofit of obsolete machinery, restoring it to full production efficiency."
      },
      card6: {
        title: "Special machine design",
        desc: "Design and manufacture of custom industrial machinery, with complete retrofit, through our in-house technical department."
      },
      card7: {
        title: "Reverse engineering",
        desc: "Three-dimensional reconstruction of mechanical parts and creation of the related technical execution drawings."
      },
      card8: {
        title: "Custom metal fabrication",
        desc: "Targeted fabrication services through our collaboration with long-standing, top-tier industry partners."
      },
      machines: {
        eyebrow: "Machine fleet",
        title: "Technology for every job.",
        colQty: "Quantity",
        colMachine: "Machine",
        colSpec: "Specifications",
        row1: { qty: "3×", name: "CNC lathes", spec: "Motorized axes and Y-axis: turning and milling in a single machine." },
        row2: { qty: "5×", name: "Machining centers", spec: "Max travel X 1200 · Y 660 · Z 900 mm." },
        row3: { qty: "2×", name: "Surface grinders", spec: "Grinding surface 1000 × 400 mm." },
        row4: { qty: "2×", name: "Cylindrical grinders", spec: "Grinding surface 300 × 1200 mm." },
        row5: { qty: "3×", name: "Wire EDM machines", spec: "Latest generation." },
        row6: { qty: "1×", name: "Sinker EDM machine", spec: "For complex geometries and cavities." }
      },
      cta: {
        title: "Have a drawing or sample to evaluate?",
        text: "Send us the specifications: we'll tell you right away if we can machine it and in what timeframe.",
        button: "Get in touch"
      }
    },
    settori: {
      pageHero: {
        title: "Industries",
        lead: "Our experience in precision mechanics leads us to work across several industrial fields, always with the same attention to detail."
      },
      intro: {
        title: "Where precision goes to work.",
        text: "Thanks to our production partnership with SKF since 1998 and a versatile machine fleet, we are a reliable supplier for companies that need components and overhauls outside standard tolerances. For confidentiality reasons we do not publish client names: instead, here are the fields in which we operate."
      },
      card1: {
        title: "Bearings & precision components",
        desc: "Machining and overhaul for the bearings and precision mechanical components industry, building on our SKF production partnership."
      },
      card2: {
        title: "Industrial automation & machinery",
        desc: "Design, construction and retrofit of machines and mechanisms for automating production processes."
      },
      card3: {
        title: "Machine tools & plant engineering",
        desc: "Overhaul of spindles, electrospindles and critical components for machine tools and production plants."
      },
      card4: {
        title: "Industrial maintenance & overhaul",
        desc: "Electrical and mechanical overhaul and retrofit work on existing machinery, restoring it to full efficiency."
      },
      approach: {
        eyebrow: "Our approach",
        title: "Every client, a partner.",
        text: "Whether it's a single job to drawing or the design of a complete machine, we follow every order with the same method: technical analysis, tolerance control and direct dialogue, without unnecessary intermediaries."
      }
    },
    contatti: {
      pageHero: {
        title: "Contact",
        lead: "Tell us what you need: we'll get back to you with real availability and timelines."
      },
      form: {
        title: "Write to us",
        name: "Full name",
        email: "Email",
        phone: "Phone (optional)",
        message: "Message",
        submit: "Send request",
        required: "Required field",
        errorName: "Please enter your name.",
        errorEmail: "Please enter a valid email address.",
        errorMessage: "Please write a message.",
        note: "Clicking \"Send request\" will open your email client with the message pre-filled to amministrazione@comedsrl.org.",
        successMsg: "Thank you! Your email client is opening to send the message.",
        errorMsgGeneric: "Please check the highlighted fields and try again."
      },
      info: {
        title: "Company details",
        addressTitle: "Operating headquarters",
        addressText: "Via Guadicciolo 8, 03030 Castrocielo (FR), Italy — Cassino industrial area",
        phoneTitle: "Phone",
        emailTitle: "Email",
        vatTitle: "VAT number",
        sdiTitle: "SDI code",
        mapCaption: "Map: Via Guadicciolo 8, Castrocielo (FR) — add real map embed in production."
      }
    },
    footer: {
      tagline: "Precision mechanical components since 1998. SKF production partner.",
      linksTitle: "Navigate",
      contactTitle: "Contact",
      infoTitle: "Company details",
      rights: "All rights reserved."
    }
  }
};

const STORAGE_KEY = "comed-lang";
const DEFAULT_LANG = "it";

function getTranslation(lang, key) {
  return key.split(".").reduce((obj, part) => (obj && obj[part] !== undefined ? obj[part] : undefined), TRANSLATIONS[lang]);
}

function applyLanguage(lang) {
  document.documentElement.setAttribute("lang", lang);

  // Testi semplici
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = getTranslation(lang, el.getAttribute("data-i18n"));
    if (value !== undefined) el.textContent = value;
  });

  // Attributi (placeholder, aria-label, alt)
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const value = getTranslation(lang, el.getAttribute("data-i18n-placeholder"));
    if (value !== undefined) el.setAttribute("placeholder", value);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const value = getTranslation(lang, el.getAttribute("data-i18n-aria-label"));
    if (value !== undefined) el.setAttribute("aria-label", value);
  });

  // Meta SEO per pagina corrente
  const page = document.body.getAttribute("data-page");
  const meta = getTranslation(lang, `meta.${page}`);
  if (meta) {
    document.title = meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", meta.description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);
  }

  // Stato pulsanti selettore lingua
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
  });

  localStorage.setItem(STORAGE_KEY, lang);
}

function initLanguage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const lang = saved === "it" || saved === "en" ? saved : DEFAULT_LANG;
  applyLanguage(lang);

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
  });
}

/* ---------- Menu mobile ---------- */
function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- Animazioni allo scroll ---------- */
function initScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((el) => observer.observe(el));
}

/* ---------- Header con ombra dopo lo scroll ---------- */
function initHeaderScrollState() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- Form di contatto ----------
   Nessun backend collegato: alla validazione lato client, il form apre
   il client di posta dell'utente (mailto:) con i dati precompilati.
   Per raccogliere i lead in un database/CRM, sostituire la funzione
   handleSubmit con una chiamata fetch() verso il proprio endpoint. */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const lang = () => document.documentElement.getAttribute("lang") || DEFAULT_LANG;
  const statusBox = document.getElementById("form-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameField = form.querySelector("#field-name");
    const emailField = form.querySelector("#field-email");
    const messageField = form.querySelector("#field-message");
    const phoneField = form.querySelector("#field-phone");

    let valid = true;
    [nameField, emailField, messageField].forEach((f) => f.closest(".form-group").classList.remove("invalid"));

    if (!nameField.value.trim()) {
      nameField.closest(".form-group").classList.add("invalid");
      valid = false;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim());
    if (!emailOk) {
      emailField.closest(".form-group").classList.add("invalid");
      valid = false;
    }
    if (!messageField.value.trim()) {
      messageField.closest(".form-group").classList.add("invalid");
      valid = false;
    }

    if (!valid) {
      if (statusBox) {
        statusBox.textContent = getTranslation(lang(), "contatti.form.errorMsgGeneric");
        statusBox.className = "form-status show error";
      }
      return;
    }

    const subject = encodeURIComponent(`Richiesta informazioni da ${nameField.value.trim()}`);
    const bodyLines = [
      `Nome: ${nameField.value.trim()}`,
      `Email: ${emailField.value.trim()}`,
      phoneField && phoneField.value.trim() ? `Telefono: ${phoneField.value.trim()}` : null,
      "",
      messageField.value.trim()
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));

    window.location.href = `mailto:amministrazione@comedsrl.org?subject=${subject}&body=${body}`;

    if (statusBox) {
      statusBox.textContent = getTranslation(lang(), "contatti.form.successMsg");
      statusBox.className = "form-status show success";
    }
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initMobileNav();
  initScrollReveal();
  initHeaderScrollState();
  initContactForm();
});
