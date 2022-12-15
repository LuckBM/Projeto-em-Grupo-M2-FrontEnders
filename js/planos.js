// Evento de click no SAIBA MAIS no PLANO BÁSICO
document.getElementById("basicMais").addEventListener('click', basic);
function basic() {
    document.getElementById('sobreBasic').innerHTML = 'MINHA NOSSA SENHORA O IMPOSSIVEL ACONTECEU';
}

// Evento de exclusão de texto PLANO BÁSICO ao clicar em qualquer um dos planos
document.getElementById("medium").addEventListener('click', basicExit);
function basicExit() {
    document.getElementById('sobreBasic').innerHTML = '';
}

document.getElementById("ultra").addEventListener('click', basicExit2);
function basicExit2() {
    document.getElementById('sobreBasic').innerHTML = '';
}

document.getElementById("ultimate").addEventListener('click', basicExit3);
function basicExit3() {
    document.getElementById('sobreBasic').innerHTML = '';
}

// Evento de click no SAIBA MAIS no PLANO MÉDIO
document.getElementById("mediumMais").addEventListener('click', medium);
function medium() {
    document.getElementById('sobreMedium').innerHTML = 'MINHA NOSSA SENHORA O IMPOSSIVEL ACONTECEU';
}

// Evento de exclusão de texto PLANO MÉDIO ao clicar em qualquer um dos planos
document.getElementById("basic").addEventListener('click', mediumExit);
function mediumExit() {
    document.getElementById('sobreMedium').innerHTML = '';
}

document.getElementById("ultra").addEventListener('click', mediumExit2);
function mediumExit2() {
    document.getElementById('sobreMedium').innerHTML = '';
}

document.getElementById("ultimate").addEventListener('click', mediumExit3);
function mediumExit3() {
    document.getElementById('sobreMedium').innerHTML = '';
}

// Evento de click no SAIBA MAIS no PLANO ULTRA
document.getElementById("ultraMais").addEventListener('click', ultra);
function ultra() {
    document.getElementById('sobreUltra').innerHTML = 'MINHA NOSSA SENHORA O IMPOSSIVEL ACONTECEU';
}

// Evento de exclusão de texto PLANO ULTRA ao clicar em qualquer um dos planos
document.getElementById("basic").addEventListener('click', ultraExit);
function ultraExit() {
    document.getElementById('sobreUltra').innerHTML = '';
}

document.getElementById("medium").addEventListener('click', ultraExit2);
function ultraExit2() {
    document.getElementById('sobreUltra').innerHTML = '';
}

document.getElementById("ultimate").addEventListener('click', ultraExit3);
function ultraExit3() {
    document.getElementById('sobreUltra').innerHTML = '';
}

// Evento de click no SAIBA MAIS no PLANO ULTIMATE
document.getElementById("ultimateMais").addEventListener('click', ultimate);
function ultimate() {
    document.getElementById('sobreUltimate').innerHTML = 'MINHA NOSSA SENHORA O IMPOSSIVEL ACONTECEU';
}

// Evento de exclusão de texto PLANO ULTIMATE ao clicar em qualquer um dos planos
document.getElementById("basic").addEventListener('click', ultimateExit);
function ultimateExit() {
    document.getElementById('sobreUltimate').innerHTML = '';
}

document.getElementById("medium").addEventListener('click', ultimateExit2);
function ultimateExit2() {
    document.getElementById('sobreUltimate').innerHTML = '';
}

document.getElementById("ultra").addEventListener('click', ultimateExit3);
function ultimateExit3() {
    document.getElementById('sobreUltimate').innerHTML = '';
}