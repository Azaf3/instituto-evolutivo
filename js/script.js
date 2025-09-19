// ===== Botão Voltar ao Topo =====
const btnTopo = document.createElement("button");
btnTopo.id = "btnTopo";
btnTopo.className = "btn btn-primary position-fixed bottom-0 end-0 m-3";
btnTopo.style.display = "none";
btnTopo.textContent = "↑ Topo";
document.body.appendChild(btnTopo);

window.onscroll = () => {
  if (document.documentElement.scrollTop > 200) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
};

btnTopo.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// ===== Contadores animados =====
// Para usar, crie elementos no HTML com ids: "contadorAlunos", "contadorCursos", "contadorEventos"
function animarContador(id, valorFinal, duracao) {
  let elemento = document.getElementById(id);
  if (!elemento) return;
  let contador = 0;
  let incremento = valorFinal / (duracao / 50);

  let intervalo = setInterval(() => {
    contador += incremento;
    if (contador >= valorFinal) {
      contador = valorFinal;
      clearInterval(intervalo);
    }
    elemento.textContent = Math.floor(contador);
  }, 50);
}

window.onload = () => {
  animarContador("contadorAlunos", 1500, 2000);
  animarContador("contadorCursos", 25, 2000);
  animarContador("contadorEventos", 60, 2000);
};

// ===== Carousel automático de fotos (galeria de alunos) =====
// Para usar, crie uma seção com id="galeriaAlunos" e coloque imagens dentro
function iniciarCarousel(id, intervaloTempo = 3000) {
  const container = document.getElementById(id);
  if (!container) return;

  const fotos = container.querySelectorAll("img");
  let indiceAtual = 0;

  fotos.forEach((foto, i) => {
    foto.style.display = i === 0 ? "block" : "none";
  });

  setInterval(() => {
    fotos[indiceAtual].style.display = "none";
    indiceAtual = (indiceAtual + 1) % fotos.length;
    fotos[indiceAtual].style.display = "block";
  }, intervaloTempo);
}

// Exemplo: iniciarCarousel("galeriaAlunos", 4000);
