(() => {
  const key = 'montreal-detroit-spain-2026-document-wallet';
  try {
    if (localStorage.getItem(key)) return;
  } catch (_) {}
  window.setPrivateTravelDocuments?.({
    etaNumber: "J529583310",
    etaEmailUrl: "https://mail.google.com/mail/u/0/#all/1919196b1475806f",
    estaNumber: "9794F02F5J20O55R",
    estaEmailUrl: "https://mail.google.com/mail/u/0/#all/1a07a82d1bc49fe6"
  });
})();
