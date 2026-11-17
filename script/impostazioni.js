/* ════════════════════════════════════════════════════════════════
   IMPOSTAZIONI DEL SITO LSPD · si modificano SOLO qui
   ────────────────────────────────────────────────────────────────
   Webhook Discord (facoltativi): tasto destro sul canale → Modifica canale
   → Integrazioni → Webhook → Nuovo webhook → «Copia URL del webhook».
   ════════════════════════════════════════════════════════════════ */
window.GU_IMPOSTAZIONI = {
  // Indirizzo pubblico del sito
  indirizzoSito: 'https://lspd-now.github.io/',

  // Link d'invito al server Discord (facoltativo)
  invitoDiscord: '',

  // Webhook dei canali Discord (facoltativi)
  webhookCandidature: '',
  webhookEsami: '',
  webhookVerifiche: '',
  inviaEsamiCapitolo: false,
  menzioneCandidature: '',
  menzioneEsami: '',

  // ARCHIVIO ONLINE: stesso progetto Supabase della Gang Unit, ma tabelle separate
  // (tutte quelle della polizia iniziano con «lspd_»).
  supabaseUrl: 'https://ualahkrbqqzlqvqrgleh.supabase.co',
  supabaseChiave: 'sb_publishable_71gjjZgx-KwNf0VWO-n3bw_YVxJcniF',
  prefissoArchivio: 'lspd_',

  // Comando mostrato in home e nella gerarchia (foto e nome arrivano da Discord).
  // Chi entra nell'Area Comando lo decide invece l'archivio (tabella lspd_comandanti).
  altoComando: [
    { grado: 'Capo della Polizia', discordId: '670641594558316574', nome: '' },
    { grado: 'Comandante', discordId: '267362907522727946', nome: '' },
    { grado: 'Capitano', discordId: '542468183588864036', nome: '' }
  ]
};
