// ===== JS completo para index.html =====
window.addEventListener('DOMContentLoaded', () => {

  // ===== Carregar footer dinâmico =====
  fetch('js/footer.html')
    .then(response => response.text())
    .then(data => {
      const container = document.getElementById('footer');
      if (!container) return;
      container.innerHTML = data;
      container.querySelector('footer')?.classList.add('iee-footer');
    })
    .catch(err => {
      console.warn('Não foi possível carregar o footer:', err);
    });

  // ===== Botão Voltar ao Topo =====
  const btnTopo = document.createElement('button');
  btnTopo.id = 'btnTopo';
  btnTopo.className = 'btn btn-primary position-fixed bottom-0 end-0 m-3';
  btnTopo.style.opacity = 0;
  btnTopo.style.transition = 'opacity 0.5s';
  btnTopo.textContent = '↑ Topo';
  btnTopo.style.display = 'none';
  document.body.appendChild(btnTopo);

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 200) {
      btnTopo.style.display = 'block';
      setTimeout(() => btnTopo.style.opacity = 1, 50);
    } else {
      btnTopo.style.opacity = 0;
      setTimeout(() => btnTopo.style.display = 'none', 500);
    }
  });

  btnTopo.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ===== Contadores animados (se existirem) =====
  function animarContador(id, valorFinal, duracao) {
    const elemento = document.getElementById(id);
    if (!elemento) return;
    let contador = 0;
    const incremento = valorFinal / (duracao / 50);

    const intervalo = setInterval(() => {
      contador += incremento;
      if (contador >= valorFinal) {
        contador = valorFinal;
        clearInterval(intervalo);
      }
      elemento.textContent = Math.floor(contador);
    }, 50);
  }

  animarContador('contadorAlunos', 1500, 2000);
  animarContador('contadorCursos', 25, 2000);
  animarContador('contadorEventos', 60, 2000);

  // ===== Carousel automático de fotos com fade (suporte a #galeriaAlunos apenas) =====
  function iniciarCarousel(id, intervaloTempo = 3000) {
    const container = document.getElementById(id);
    if (!container) return;

    const fotos = container.querySelectorAll('img');
    if (!fotos || fotos.length < 2) return; // nada a animar
    let indiceAtual = 0;

    fotos.forEach((foto, i) => {
      foto.style.opacity = i === 0 ? '1' : '0';
      foto.style.position = 'absolute';
      foto.style.transition = 'opacity 1s ease';
      foto.style.left = 0;
      foto.style.top = 0;
    });

    container.style.position = 'relative';
    container.style.minHeight = '1px';

    setInterval(() => {
      fotos[indiceAtual].style.opacity = '0';
      indiceAtual = (indiceAtual + 1) % fotos.length;
      fotos[indiceAtual].style.opacity = '1';
    }, intervaloTempo);
  }

  iniciarCarousel('galeriaAlunos', 4000);

});

// ===== Lightbox / Galeria dedicada =====
(function(){
  function qs(selector){ return document.querySelector(selector); }
  function qsa(selector){ return Array.from(document.querySelectorAll(selector)); }

  const thumbs = qsa('.galeria-thumb, .galeria-grid img');
  if (!thumbs || thumbs.length === 0) return;

  const lightbox = document.getElementById('lightbox') || (function(){
    const el = document.createElement('div'); el.id = 'lightbox'; el.className = 'lightbox'; document.body.appendChild(el); return el;
  })();
  const lightboxImg = document.getElementById('lightboxImg');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;

  function openLightbox(index){
    const img = thumbs[index];
    if(!img) return;
    currentIndex = index;
    // create elements if missing
    let lb = document.getElementById('lightbox');
    if(!lb) return;
    let lbImg = document.getElementById('lightboxImg');
    if(!lbImg){ lbImg = document.createElement('img'); lbImg.id = 'lightboxImg'; lb.appendChild(lbImg); }
    lbImg.src = img.src;
    lbImg.alt = img.alt || '';
    lb.classList.add('open');
    lb.setAttribute('aria-hidden','false');
  }

  function closeLightbox(){
    const lb = document.getElementById('lightbox');
    if(!lb) return;
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden','true');
  }

  function showNext(){ openLightbox((currentIndex + 1) % thumbs.length); }
  function showPrev(){ openLightbox((currentIndex - 1 + thumbs.length) % thumbs.length); }

  thumbs.forEach((t, i) => {
    t.setAttribute('data-index', i);
    t.style.cursor = 'pointer';
    t.addEventListener('click', (e) => { e.preventDefault(); openLightbox(i); });
  });

  // Delegation for modal clicks
  document.addEventListener('click', (e) => {
    const lb = document.getElementById('lightbox');
    if(!lb) return;
    if(e.target === lb) closeLightbox();
    if(e.target && e.target.id === 'prevBtn') showPrev();
    if(e.target && e.target.id === 'nextBtn') showNext();
    if(e.target && e.target.id === 'lightboxImg') return;
  });

  document.addEventListener('keydown', (e) => {
    const lb = document.getElementById('lightbox');
    if(!lb || !lb.classList.contains('open')) return;
    if(e.key === 'Escape') closeLightbox();
    if(e.key === 'ArrowRight') showNext();
    if(e.key === 'ArrowLeft') showPrev();
  });

})();

// ===== Animação de entrada para elementos com .animated-up (IntersectionObserver) =====
(function(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  const targets = document.querySelectorAll('.animated-up');
  targets.forEach(t => observer.observe(t));

  // Compatibilidade: animação simples para cards em pages que tenham <main> e título 'Cursos'
  try {
    const pageTitle = document.querySelector('main h1, main .display-5')?.textContent || document.querySelector('h1')?.textContent || '';
    if (pageTitle && pageTitle.toLowerCase().includes('cursos')) {
      const cards = Array.from(document.querySelectorAll('main .card'));
      cards.forEach((card, i) => {
        card.classList.add('card-fade');
        void card.offsetWidth;
        setTimeout(() => card.classList.add('show'), 80 + (i * 60));
      });
    }
  } catch (e) { /* silencioso */ }

})();

