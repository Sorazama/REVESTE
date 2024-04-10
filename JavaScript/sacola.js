function mostra_sacola() {
    clearTimeout(temporizador);
    document.getElementById("sacola").style.opacity = "1"; // Define a opacidade como 1 para tornar a sacola visível
    document.getElementById("sacola").style.visibility = "visible"; // Torna a sacola visível
    document.getElementById("main").style.opacity = "0.4"; // Define a opacidade da div principal como 0.5
}

function some_sacola() {
    temporizador = setTimeout(function() {
        document.getElementById("sacola").style.opacity = "0"; // Define a opacidade como 0 para tornar a sacola invisível
        document.getElementById("sacola").style.visibility = "hidden"; // Torna a sacola invisível
        document.getElementById("main").style.opacity = "1"; // Define a opacidade da div principal como 1
    }, 350);
}

function manterVisivel() {
    clearTimeout(temporizador);
}

function resetarTemporizador() {
    some_sacola();
}


function mostra_perfil() {
    clearTimeout(temporizador);
    document.getElementById("perfil").style.opacity = "1"; // Define a opacidade como 1 para tornar a sacola visível
    document.getElementById("perfil").style.visibility = "visible"; // Torna a sacola visível
    document.getElementById("main").style.opacity = "0.4"; // Define a opacidade da div principal como 0.5
}

function some_perfil() {
    temporizador = setTimeout(function() {
        document.getElementById("perfil").style.opacity = "0"; // Define a opacidade como 0 para tornar a sacola invisível
        document.getElementById("perfil").style.visibility = "hidden"; // Torna a sacola invisível
        document.getElementById("main").style.opacity = "1"; // Define a opacidade da div principal como 1
    }, 350);
}

function manterVisivel() {
    clearTimeout(temporizador);
}

function resetarTemporizador() {
    some_sacola();
}













































/*function mostra_sacola() {
    document.getElementById("sacola").style.visibility = "visible";
}

function some_sacola() {
    document.getElementById("sacola").style.visibility = "hidden";
} */