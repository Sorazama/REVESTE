
var paragrafo = document.querySelector('.detalhes')
var selo = document.querySelector('.selo-beneficiente')

// adicionando evento de click

selo.addEventListener('click', detalhes)



// função que apresentará detalhes do card
function detalhes() {
  selo.classList.add('selo-detalhes')
  paragrafo.classList('texto-visivel')
}