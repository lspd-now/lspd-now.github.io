/* ════════════════════════════════════════════════════════════════
   BANDI LSPD · usati solo se l'archivio online non risponde.
   Con l'archivio collegato i bandi si gestiscono dall'Area Comando.
   ════════════════════════════════════════════════════════════════ */
window.GU_BANDI = [
  {
    id: 'reclute-2026-01',
    numero: 'Bando n. 01/2026',
    titolo: 'Reclutamento Reclute LSPD',
    attivo: true,
    foto: 'immagini/foto/pattuglia-a-piedi.jpg',
    sottotitolo: "Ingresso in Accademia, con percorso verso Agente I",
    apertoA: 'Cittadini di Los Santos',
    apertura: '2026-11-17T18:00',
    chiusura: '2026-12-07T23:59',
    posti: 10,
    esameRichiesto: false,
    descrizione: "Il Dipartimento di Polizia di Los Santos cerca cittadini motivati da inserire in Accademia come Reclute. La formazione è gestita dalle Risorse Umane (H.R.) con lezioni teoriche, pratiche e simulazioni, fino alla promozione ad Agente I.",
    requisiti: [
      'Fedina penale pulita',
      'Età reale minima di 17 anni, microfono funzionante e Discord attivo',
      'Nessuna sanzione dello staff negli ultimi 30 giorni',
      'Disponibilità a seguire 2 lezioni teoriche e 1 lezione pratica con l\'H.R.',
      'Nessun personaggio legato a organizzazioni criminali'
    ],
    preferenziali: [
      'Conoscenza delle strade di Los Santos',
      'Buona comunicazione via radio',
      'Esperienza di roleplay in fazioni o lavori di squadra'
    ],
    fasi: [
      ['Candidatura', 'Si invia dal sito entro la chiusura del bando.'],
      ['Colloquio H.R.', 'Colloquio con le Risorse Umane su Discord, con un caso pratico.'],
      ['Esito', "L'esito compare sul sito, nella pagina Bandi."],
      ['Accademia', '4 rapporti di pattuglia, 2 lezioni teoriche, 1 pratica e 5 giorni di servizio da Recluta.'],
      ['Agente I', 'Promozione al termine dell\'Accademia (art. 6.1).']
    ],
    note: 'Le candidature incomplete o inviate fuori dal sito non vengono valutate.'
  },
  {
    id: 'swat-2026-01',
    numero: 'Bando interno n. 02/2026',
    titolo: 'Selezione operatori S.W.A.T.',
    attivo: false,
    foto: 'immagini/foto/squadra-muretto.jpg',
    sottotitolo: 'Ingresso nel reparto come Operatore in prova',
    apertoA: 'Agenti LSPD dal grado di Agente II',
    interno: true,
    apertura: '2026-12-01T18:00',
    chiusura: '2026-12-14T23:59',
    posti: 5,
    esameRichiesto: false,
    descrizione: "Selezione interna per entrare nel reparto S.W.A.T., responsabile delle operazioni ad alto rischio. I selezionati iniziano come Operatori in prova per due settimane.",
    requisiti: [
      'Grado di Agente II o superiore (art. 9.1)',
      'Nessuna sanzione disciplinare attiva',
      'Buona conoscenza delle procedure di rapina e ostaggi (art. 4.11)'
    ],
    preferenziali: ['Esperienza negli interventi a rischio alto', 'Valutazioni positive dei superiori'],
    fasi: [
      ['Candidatura', 'Si invia dal sito, indicando chi ti propone.'],
      ['Valutazione', 'Il Comandante e il Direttore S.W.A.T. valutano le candidature.'],
      ['Prova', 'Due settimane da Operatore in prova tra corsi, test pratici e valutazioni.'],
      ['Conferma', 'Conferma come Operatore S.W.A.T.']
    ],
    note: 'Bando riservato al personale già in servizio nell\'LSPD.'
  },
  {
    id: 'brevetto-asd-2026',
    numero: 'Bando interno n. 03/2026',
    titolo: 'Brevetto A.S.D. · Unità elicotteri',
    attivo: false,
    foto: 'immagini/foto/asd-eliporto.jpg',
    galleria: ['immagini/foto/asd-eliporto.jpg', 'immagini/foto/asd-pilota.jpg', 'immagini/foto/asd-retro.jpg', 'immagini/foto/asd-pilota-fianco.jpg', 'immagini/foto/asd-911.jpg', 'immagini/foto/elicottero-fianco.jpg', 'immagini/foto/elicottero-tramonto.jpg', 'immagini/foto/elicottero-palazzi.jpg'],
    sottotitolo: 'Abilitazione al pilotaggio degli elicotteri LSPD (unità EAGLE)',
    apertoA: 'Agenti LSPD in servizio',
    interno: true,
    apertura: '',
    chiusura: '2026-12-31T23:59',
    posti: 4,
    esameRichiesto: false,
    descrizione: "Selezione interna per entrare nell'Air Support Division: il supporto aereo al pattugliamento con gli elicotteri (unità EAGLE), con sorveglianza dall'alto, supporto visivo e tracciamento dei sospetti per le pattuglie a terra.",
    requisiti: [
      'Essere un agente LSPD attivo',
      'Nessuna sanzione disciplinare attiva',
      'Conoscenza delle comunicazioni radio (art. 5.1) e delle regole sugli elicotteri nei livelli DEFCON (art. 10.1)'
    ],
    preferenziali: ['Esperienza di pilotaggio di elicotteri', 'Esperienza negli inseguimenti e nel coordinamento con le pattuglie'],
    fasi: [
      ['Candidatura', 'Si invia dal sito, entro la chiusura del bando.'],
      ['Valutazione', 'Il responsabile A.S.D. e il Comando valutano le candidature.'],
      ['Addestramento al volo', 'Prove pratiche di pilotaggio e di supporto alle pattuglie.'],
      ['Brevetto', 'Rilascio del brevetto A.S.D. e ingresso nel reparto.']
    ],
    note: 'Bando riservato al personale già in servizio nell\'LSPD.'
  }
];
