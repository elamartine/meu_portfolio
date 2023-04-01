var linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.addEventListener("click", scrollSuave);
function scrollSuave(event) {
  event.preventDefault();
  console.log("Link interno clicado!"); // adicionado para verificar se o manipulador de eventos está sendo acionado
  var secao = document.querySelector(this.hash);
  if (!secao) return;
  secao.style.position = "absolute";
  secao.style.top = "50%";
  secao.style.left = "50%";
  secao.style.transform = "translate(-50%, -50%)";
};


