// ---------- Minimal JS untuk fitur kecil ----------
(function () {
  const copyBtn = document.getElementById('copyProfile');
  const toast = document.getElementById('toast');
  const name = document.getElementById('name').textContent.trim();
  const handle = document.getElementById('handle').textContent.trim();

  // Copy Profile
  copyBtn.addEventListener('click', () => {
    const text = `${name} ${handle} \nLihat link di sini`;
    navigator.clipboard?.writeText(text).then(() => {
      showToast('Profil disalin ke clipboard');
    }).catch(() => {
      showToast('Gagal menyalin — silakan salin manual');
    });
  });

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1800);
  }

  // Theme Toggle
  const themeToggle = document.getElementById('themeToggle');
  let light = false;

  themeToggle.addEventListener('click', (e) => {
    e.preventDefault();
    light = !light;

    if (light) {
      document.documentElement.style.setProperty('--bg', 'linear-gradient(180deg,#f8fafc,#eef2ff)');
      document.documentElement.style.setProperty('--text', '#0b1220');
      document.documentElement.style.setProperty('--muted', '#475569');
      document.documentElement.style.setProperty('--glass', 'rgba(0,0,0,0.04)');
      themeToggle.textContent = 'Gelap';
    } else {
      document.documentElement.style.setProperty('--bg', 'linear-gradient(180deg,#0f172a 0%, #071133 60%)');
      document.documentElement.style.setProperty('--text', '#e6eef8');
      document.documentElement.style.setProperty('--muted', '#a7b0c3');
      document.documentElement.style.setProperty('--glass', 'rgba(255,255,255,0.06)');
      themeToggle.textContent = 'Tema';
    }
  });

})();
