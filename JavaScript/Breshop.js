
var paragrafo = document.querySelector('.detalhes')
var selo = document.querySelector('.selo-beneficiente')

// adicionando evento de click

selo.addEventListener('mouseover', mostraDetalhes)
selo.addEventListener('mouseleave', esconde)



// função que apresentará detalhes do card
function mostraDetalhes() {
  selo.classList.add('selo-detalhes')
  paragrafo.classList.add('texto-visivel')
}

function esconde() {
  selo.classList.remove('selo-detalhes')
  paragrafo.classList.remove('texto-visivel')
}