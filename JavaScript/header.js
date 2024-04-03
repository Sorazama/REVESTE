window.addEventListener("scroll", function(){
    let header = document.querySelector('#container-nav')
    header.classList.toggle('rolagem',window.scrollY > 0)
})

window.addEventListener("scroll", function(){
    let nav = document.querySelector('#container-nav')
    nav.classList.toggle('rolagem-nav',window.scrollY > 160)
})

window.addEventListener("scroll", function(){
    let nav_link = document.querySelector('#nav-link')
    nav_link.classList.toggle('nav-list',window.scrollY > 200)
})