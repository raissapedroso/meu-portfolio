// 1. Efeito de Revelação (Scroll Reveal)
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Distância para ativar a animação
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

// Executa ao rolar a página
window.addEventListener('scroll', revealElements);

// Executa uma vez ao carregar para mostrar o que já está na tela
window.addEventListener('load', revealElements);


// 2. Menu Mobile Simples
const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
   
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '70px';
        nav.style.left = '0';
        nav.style.width = '100%';
        nav.style.backgroundColor = '#72161c';
        nav.style.padding = '20px';
        nav.style.zIndex = '1000';
    }
});

const botaoAudio = document.getElementById('ouvir-texto');
const textoParaLer = document.querySelector('.hero-texto p').innerText;

botaoAudio.addEventListener('click', () => {
    // Cancela qualquer fala em andamento antes de começar
    window.speechSynthesis.cancel();

    const fala = new SpeechSynthesisUtterance(textoParaLer);
    fala.lang = 'pt-BR'; // Define o idioma para português
    fala.rate = 1.2;     // Velocidade da fala (1 é o normal)
    
    window.speechSynthesis.speak(fala);
});

// 3. Log de Interação (Opcional - útil para testar acessibilidade)
console.log("Portfólio de Acessibilidade carregado com sucesso!");