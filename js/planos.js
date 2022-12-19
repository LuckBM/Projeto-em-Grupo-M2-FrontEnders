// Evento de click no SAIBA MAIS no PLANO BÁSICO
document.getElementById("basicMais").addEventListener('click', basic);
function basic() {
    document.getElementById('sobreBasic').innerHTML = 'Assistente de voz';
    document.getElementById('sobreBasicII').innerHTML = 'Correção de códigos em JS';
    document.getElementById('sobreBasicIII').innerHTML = 'Audiobook de JS';
}

// Evento de exclusão de texto PLANO BÁSICO ao clicar em qualquer um dos planos ou duas vezes no SAIBA MAIS de BÁSICO
document.getElementById("basic").addEventListener('dblclick', basicExitI);
function basicExitI() {
    document.getElementById('sobreBasic').innerHTML = '';
    document.getElementById('sobreBasicII').innerHTML = '';
    document.getElementById('sobreBasicIII').innerHTML = '';
}

document.getElementById("ultra").addEventListener('click', basicExitII);
function basicExitII() {
    document.getElementById('sobreBasic').innerHTML = '';
    document.getElementById('sobreBasicII').innerHTML = '';
    document.getElementById('sobreBasicIII').innerHTML = '';
}

document.getElementById("ultimate").addEventListener('click', basicExitIII);
function basicExitIII() {
    document.getElementById('sobreBasic').innerHTML = '';
    document.getElementById('sobreBasicII').innerHTML = '';
    document.getElementById('sobreBasicIII').innerHTML = '';
}

// Evento de click no SAIBA MAIS no PLANO ULTRA
document.getElementById("ultraMais").addEventListener('click', ultra);
function ultra() {
    document.getElementById('sobreUltra').innerHTML = 'Todos benefícios do plano BÁSICO';
    document.getElementById('sobreUltraII').innerHTML = 'Assistente de rotina';
    document.getElementById('sobreUltraIII').innerHTML = 'Correção de códigos em PHP';
    document.getElementById('sobreUltraIV').innerHTML = 'Audiobooks de PHP';
}

// Evento de exclusão de texto PLANO ULTRA ao clicar em qualquer um dos planos ou duas vezes no SAIBA MAIS de Ultra
document.getElementById("ultra").addEventListener('dblclick', ultraExitI);
function ultraExitI() {
    document.getElementById('sobreUltra').innerHTML = '';
    document.getElementById('sobreUltraII').innerHTML = '';
    document.getElementById('sobreUltraIII').innerHTML = '';
    document.getElementById('sobreUltraIV').innerHTML = '';
}

document.getElementById("basic").addEventListener('click', ultraExitII);
function ultraExitII() {
    document.getElementById('sobreUltra').innerHTML = '';
    document.getElementById('sobreUltraII').innerHTML = '';
    document.getElementById('sobreUltraIII').innerHTML = '';
    document.getElementById('sobreUltraIV').innerHTML = '';
}

document.getElementById("ultimate").addEventListener('click', ultraExitIII);
function ultraExitIII() {
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
    document.getElementById('sobreUltimateIV').innerHTML = 'Personalização de voz da IA';
    document.getElementById('sobreUltimateV').innerHTML = 'Atualizações em tempo real';
}

// Evento de exclusão de texto PLANO ULTIMATE ao clicar em qualquer um dos planos ou duas vezes no SAIBA MAIS de Ultimate
document.getElementById("ultimate").addEventListener('dblclick', ultimateExitI);
function ultimateExitI() {
    document.getElementById('sobreUltimate').innerHTML = '';
    document.getElementById('sobreUltimateII').innerHTML = '';
    document.getElementById('sobreUltimateIII').innerHTML = '';
    document.getElementById('sobreUltimateIV').innerHTML = '';
    document.getElementById('sobreUltimateV').innerHTML = '';
}

document.getElementById("basic").addEventListener('click', ultimateExitII);
function ultimateExitII() {
    document.getElementById('sobreUltimate').innerHTML = '';
    document.getElementById('sobreUltimateII').innerHTML = '';
    document.getElementById('sobreUltimateIII').innerHTML = '';
    document.getElementById('sobreUltimateIV').innerHTML = '';
    document.getElementById('sobreUltimateV').innerHTML = '';
}

document.getElementById("ultra").addEventListener('click', ultimateExitIII);
function ultimateExitIII() {
    document.getElementById('sobreUltimate').innerHTML = '';
    document.getElementById('sobreUltimateII').innerHTML = '';
    document.getElementById('sobreUltimateIII').innerHTML = '';
    document.getElementById('sobreUltimateIV').innerHTML = '';
    document.getElementById('sobreUltimateV').innerHTML = '';
}