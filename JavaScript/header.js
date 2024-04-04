
window.addEventListener("scroll", function(){
    let nav = document.querySelector('.cabecalho-inferior')
    nav.classList.toggle('rolagem-nav',window.scrollY > 160)
})

window.addEventListener("scroll", function(){
    let nav_link = document.querySelector('#nav-link')
    nav_link.classList.toggle('nav-list',window.scrollY > 200)
})