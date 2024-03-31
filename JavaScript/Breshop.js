var selos = document.querySelectorAll('.selo-beneficiente');
var paragrafos = document.querySelectorAll('.detalhes');

// Itera sobre cada selo e adiciona os ouvintes de eventos
selos.forEach(function(selo, index) {
  selo.addEventListener('mouseover', function() {
    mostraDetalhes(paragrafos[index], selo);
  });
  selo.addEventListener('mouseleave', function() {
    esconde(paragrafos[index], selo);
  });
});

// Função que apresentará detalhes do card
function mostraDetalhes(paragrafo, selo) {
  paragrafo.classList.add('texto-visivel');
  selo.classList.add('selo-detalhes');
}

function esconde(paragrafo, selo) {
  paragrafo.classList.remove('texto-visivel');
  selo.classList.remove('selo-detalhes');
}
