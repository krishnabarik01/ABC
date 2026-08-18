const heroes = [
  { name: 'Iron Man', description: 'Armor-driven genius with a tactical edge', level: 96, color: '#f6c344', bg: 'linear-gradient(135deg, #e0b42c 0%, #0a192f 70%)', symbol: 'I' },
  { name: 'Captain America', description: 'Symbolic strength and unwavering leadership', level: 92, color: '#f6c344', bg: 'linear-gradient(135deg, #0f3d87 0%, #d4d9e3 100%)', symbol: 'C' },
  { name: 'Thor', description: 'Storm-wielding warrior of Asgard', level: 98, color: '#7cc3ff', bg: 'linear-gradient(135deg, #1b2c70 0%, #7cc3ff 100%)', symbol: 'T' },
  { name: 'Hulk', description: 'Unstoppable force of raw power', level: 100, color: '#5ecb73', bg: 'linear-gradient(135deg, #1e6b34 0%, #7ee88b 100%)', symbol: 'H' },
  { name: 'Spider-Man', description: 'Agile genius with sheer web-slinging energy', level: 89, color: '#ed1d24', bg: 'linear-gradient(135deg, #6d1015 0%, #d13744 100%)', symbol: 'S' },
  { name: 'Doctor Strange', description: 'Sorcerer supreme of the mystic arts', level: 96, color: '#8d67ff', bg: 'linear-gradient(135deg, #320b46 0%, #8d67ff 100%)', symbol: 'D' },
  { name: 'Scarlet Witch', description: 'Chaos magic with reality-breaking potential', level: 97, color: '#ff5ca8', bg: 'linear-gradient(135deg, #560d2c 0%, #ff5ca8 100%)', symbol: 'W' },
  { name: 'Black Panther', description: 'King of Wakanda and tactical strategist', level: 93, color: '#cf8f2b', bg: 'linear-gradient(135deg, #0f0f12 0%, #cf8f2b 100%)', symbol: 'B' },
  { name: 'Captain Marvel', description: 'Cosmic powerhouse with stellar force', level: 99, color: '#7ab3ff', bg: 'linear-gradient(135deg, #11396c 0%, #7ab3ff 100%)', symbol: 'M' },
  { name: 'Ant-Man', description: 'Quantum-sized hero with giant impact', level: 74, color: '#b3e6ff', bg: 'linear-gradient(135deg, #105f62 0%, #b3e6ff 100%)', symbol: 'A' },
  { name: 'Wasp', description: 'Aerial tactician with buzzing speed', level: 78, color: '#d4f2ff', bg: 'linear-gradient(135deg, #2d5c72 0%, #d4f2ff 100%)', symbol: 'W' },
  { name: 'Hawkeye', description: 'Precision marksman with impossible focus', level: 80, color: '#d0a55c', bg: 'linear-gradient(135deg, #402404 0%, #d0a55c 100%)', symbol: 'H' },
  { name: 'Black Widow', description: 'Elite operative with fearless precision', level: 82, color: '#8c2d2d', bg: 'linear-gradient(135deg, #3c1313 0%, #8c2d2d 100%)', symbol: 'N' },
  { name: 'Falcon', description: 'Winged ace with tactical aerial control', level: 85, color: '#8ca4d9', bg: 'linear-gradient(135deg, #1b335f 0%, #8ca4d9 100%)', symbol: 'F' },
  { name: 'Winter Soldier', description: 'Lethal combatant with brutal resilience', level: 90, color: '#c1d3e8', bg: 'linear-gradient(135deg, #21282d 0%, #c1d3e8 100%)', symbol: 'W' },
  { name: 'Shang-Chi', description: 'Master of martial arts and elemental focus', level: 91, color: '#d15d5d', bg: 'linear-gradient(135deg, #3e0d16 0%, #d15d5d 100%)', symbol: 'S' },
  { name: 'Moon Knight', description: 'Relentless vigilante with lunar precision', level: 86, color: '#b8b6d3', bg: 'linear-gradient(135deg, #1a1a2e 0%, #b8b6d3 100%)', symbol: 'M' },
  { name: 'Daredevil', description: 'Blind lawyer navigating darkness with instinct', level: 88, color: '#da4b4b', bg: 'linear-gradient(135deg, #4a1111 0%, #da4b4b 100%)', symbol: 'D' },
  { name: 'Wolverine', description: 'Regenerative powerhouse with adamantium rage', level: 94, color: '#d8663b', bg: 'linear-gradient(135deg, #3a110d 0%, #d8663b 100%)', symbol: 'W' },
  { name: 'Deadpool', description: 'Unhinged chaos with impossible survivability', level: 87, color: '#aaff96', bg: 'linear-gradient(135deg, #214b2b 0%, #aaff96 100%)', symbol: 'D' },
  { name: 'Loki', description: 'Shape-shifting schemer from Asgard', level: 88, color: '#b4b9ff', bg: 'linear-gradient(135deg, #0f1a6f 0%, #b4b9ff 100%)', symbol: 'L' },
  { name: 'Vision', description: 'Synthetic android with cosmic intelligence', level: 92, color: '#dfe8ff', bg: 'linear-gradient(135deg, #0f2333 0%, #dfe8ff 100%)', symbol: 'V' },
  { name: 'Star-Lord', description: 'Spaceborn leader with fearless swagger', level: 84, color: '#f4a960', bg: 'linear-gradient(135deg, #512f0a 0%, #f4a960 100%)', symbol: 'S' },
  { name: 'Groot', description: 'Nature-born titan with unstoppable growth', level: 90, color: '#52d273', bg: 'linear-gradient(135deg, #123b1f 0%, #52d273 100%)', symbol: 'G' },
  { name: 'Rocket Raccoon', description: 'Gadget master with explosive ingenuity', level: 82, color: '#db7a4d', bg: 'linear-gradient(135deg, #461f14 0%, #db7a4d 100%)', symbol: 'R' }
];

const heroGrid = document.getElementById('heroGrid');

heroGrid.innerHTML = heroes.map((hero) => `
  <article class="hero-card" style="--card-glow: ${hero.color}; --card-bg: ${hero.bg};">
    <div class="card-art" data-symbol="${hero.symbol}" style="background: ${hero.bg};"></div>
    <div class="meta">
      <h3>${hero.name}</h3>
      <p>${hero.description}</p>
      <div class="power-level">
        <span>Power</span>
        <div class="bar" style="--level: ${hero.level}%"><span></span></div>
        <strong>${hero.level}</strong>
      </div>
    </div>
  </article>
`).join('');

const counters = document.querySelectorAll('[data-count]');
const startCounters = () => {
  counters.forEach((counter) => {
    const target = Number(counter.dataset.count);
    const start = performance.now();
    const duration = 1200;

    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const value = Math.floor(progress * target);
      counter.textContent = `${value}`;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  });
};

const animateBars = () => {
  document.querySelectorAll('.bar span[data-level]').forEach((bar) => {
    const level = bar.dataset.level;
    bar.style.width = '0%';
    requestAnimationFrame(() => {
      bar.style.transition = 'width 1.2s ease';
      bar.style.width = `${level}%`;
    });
  });
};

const renderPowerBars = () => {
  const chartBars = document.querySelectorAll('.chart-row .bar span');
  chartBars.forEach((bar) => {
    const level = bar.dataset.level || 80;
    bar.style.width = `${level}%`;
  });
};

const countdownTarget = new Date(Date.now() + 1000 * 60 * 60 * 24 * 17 + 1000 * 60 * 60 * 13 + 1000 * 60 * 42 + 1000 * 16);
const updateCountdown = () => {
  const now = new Date();
  const diff = Math.max(countdownTarget - now, 0);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
};

setInterval(updateCountdown, 1000);
updateCountdown();

if (window.particlesJS) {
  particlesJS('particles-js', {
    particles: {
      number: { value: 70, density: { enable: true, value_area: 1000 } },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: { value: 0.4, random: true },
      size: { value: 2, random: true },
      line_linked: { enable: true, distance: 130, color: '#90a4c0', opacity: 0.2, width: 1 },
      move: { enable: true, speed: 1.2, direction: 'none', random: false, straight: false, out_mode: 'out' }
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
      modes: { repulse: { distance: 120, duration: 0.5 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
  });
}

AOS.init({ duration: 1000, once: true, offset: 20 });

if (window.gsap) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.hero-copy', { opacity: 0, x: -60, duration: 1.1, ease: 'power3.out' });
  gsap.from('.hero-visual', { opacity: 0, x: 60, duration: 1.2, ease: 'power3.out', delay: 0.15 });
  gsap.utils.toArray('.timeline-item').forEach((item) => {
    gsap.from(item, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      scrollTrigger: { trigger: item, start: 'top 85%' }
    });
  });
}

const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeBtn = document.querySelector('.lightbox-close');

galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
});

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
  }
});

window.addEventListener('load', () => {
  startCounters();
  renderPowerBars();
  animateBars();
});
