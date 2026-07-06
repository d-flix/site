const menuButton = document.querySelector('.menu-btn');
const menuLinks = document.querySelector('.menu-links');

if (menuButton && menuLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuLinks.classList.toggle('open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  menuLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuLinks.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });
}

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

reveals.forEach((el) => observer.observe(el));

const header = document.querySelector('.topbar');
window.addEventListener('scroll', () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 20);
}, { passive: true });

const referralForm = document.getElementById('referralForm');
if (referralForm) {
  referralForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const referrer = document.getElementById('referrerName')?.value.trim();
    const lead = document.getElementById('leadName')?.value.trim();
    if (!referrer) {
      document.getElementById('referrerName')?.focus();
      return;
    }
    const message = `Olá, vim pelo site da DFLIX e fui indicado por ${referrer}.${lead ? ` Meu nome é ${lead}.` : ''} Quero fazer o teste grátis de 4 horas e conhecer os planos. Em caso de assinatura, quero que a indicação seja registrada para o indicador ganhar 1 mês grátis.`;
    window.open(`https://wa.me/5551995460187?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
}
