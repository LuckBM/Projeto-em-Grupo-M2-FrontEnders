// Evento de click no SAIBA MAIS no PLANO BÁSICO
document.getElementById("basicMais").addEventListener('click', basic);
function basic() {
    document.getElementById('sobreBasic').innerHTML = 'Assistente de voz';
    document.getElementById('sobreBasicII').innerHTML = 'Correção de códigos em JS';
    document.getElementById('sobreBasicIII').innerHTML = 'Audiobook de JS';
}

// Evento de exclusão de texto PLANO BÁSICO ao clicar em qualquer um dos planos
document.getElementById("ultra").addEventListener('click', basicExit2);
function basicExit2() {
    document.getElementById('sobreBasic').innerHTML = '';
    document.getElementById('sobreBasicII').innerHTML = '';
    document.getElementById('sobreBasicIII').innerHTML = '';
}

document.getElementById("ultimate").addEventListener('click', basicExit3);
function basicExit3() {
    document.getElementById('sobreBasic').innerHTML = '';
    document.getElementById('sobreBasicII').innerHTML = '';
    document.getElementById('sobreBasicII').innerHTML = '';
}

// Evento de click no SAIBA MAIS no PLANO ULTRA
document.getElementById("ultraMais").addEventListener('click', ultra);
function ultra() {
    document.getElementById('sobreUltra').innerHTML = 'Todos benefícios do plano BÁSICO';
    document.getElementById('sobreUltraII').innerHTML = 'Assistente de rotina';
    document.getElementById('sobreUltraIII').innerHTML = 'Correção de códigos em PHP';
    document.getElementById('sobreUltraIV').innerHTML = 'Audiobooks de PHP';
}

// Evento de exclusão de texto PLANO ULTRA ao clicar em qualquer um dos planos
document.getElementById("basic").addEventListener('click', ultraExit);
function ultraExit() {
    document.getElementById('sobreUltra').innerHTML = '';
    document.getElementById('sobreUltraII').innerHTML = '';
    document.getElementById('sobreUltraIII').innerHTML = '';
    document.getElementById('sobreUltraIV').innerHTML = '';
}

document.getElementById("ultimate").addEventListener('click', ultraExit3);
function ultraExit3() {
    document.getElementById('sobreUltra').innerHTML = '';
    document.getElementById('sobreUltraII').innerHTML = '';
    document.getElementById('sobreUltraIII').innerHTML = '';
    document.getElementById('sobreUltraIV').innerHTML = '';
}

// Evento de click no SAIBA MAIS no PLANO ULTIMATE
document.getElementById("ultimateMais").addEventListener('click', ultimate);
function ultimate() {
    document.getElementById('sobreUltimate').innerHTML = 'Todos benefícios dos planos BÁSICO e ULTRA';
    document.getElementById('sobreUltimateII').innerHTML = 'Correção de códigos em Phython';
    document.getElementById('sobreUltimateIII').innerHTML = 'Audiobook de Phython';
    document.getElementById('sobreUltimateIV').innerHTML = 'Persolização de voz da IA';
    document.getElementById('sobreUltimateV').innerHTML = 'Correção de códigos em Phython';
}

// Evento de exclusão de texto PLANO ULTIMATE ao clicar em qualquer um dos planos
document.getElementById("basic").addEventListener('click', ultimateExit);
function ultimateExit() {
    document.getElementById('sobreUltimate').innerHTML = '';
    document.getElementById('sobreUltimate').innerHTML = '';
    document.getElementById('sobreUltimateII').innerHTML = '';
    document.getElementById('sobreUltimateIII').innerHTML = '';
    document.getElementById('sobreUltimateIV').innerHTML = '';
    document.getElementById('sobreUltimateV').innerHTML = '';
}

document.getElementById("ultra").addEventListener('click', ultimateExit3);
function ultimateExit3() {
    document.getElementById('sobreUltimate').innerHTML = '';
    document.getElementById('sobreUltimate').innerHTML = '';
    document.getElementById('sobreUltimate').innerHTML = '';
    document.getElementById('sobreUltimateII').innerHTML = '';
    document.getElementById('sobreUltimateIII').innerHTML = '';
    document.getElementById('sobreUltimateIV').innerHTML = '';
    document.getElementById('sobreUltimateV').innerHTML = '';
}
