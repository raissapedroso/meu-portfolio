// =========================
// MENU MOBILE
// =========================

const menuBtn =
    document.querySelector('.menu-toggle');

const navMenu =
    document.querySelector('.nav-menu');

if (menuBtn && navMenu) {

    menuBtn.addEventListener('click', () => {

        const isExpanded =
            menuBtn.getAttribute('aria-expanded') === 'true';

        menuBtn.setAttribute(
            'aria-expanded',
            !isExpanded
        );

        navMenu.classList.toggle('active');

    });

}

// =========================
// FECHAR MENU COM ESC
// =========================

document.addEventListener('keydown', (e) => {

    if (
        e.key === 'Escape' &&
        navMenu &&
        navMenu.classList.contains('active')
    ) {

        navMenu.classList.remove('active');

        menuBtn.setAttribute(
            'aria-expanded',
            'false'
        );

        menuBtn.focus();

    }

});

// =========================
// LEITOR DE TEXTO
// =========================

const narrador =
    window.speechSynthesis;

// FUNÇÃO PARA LER TEXTO

function lerTexto(texto) {

    if (!texto) return;

    // PARA LEITURA ANTERIOR
    narrador.cancel();

    // CRIA FALA
    const mensagem =
        new SpeechSynthesisUtterance(texto);

    mensagem.lang = 'pt-BR';

    mensagem.rate = 1;

    mensagem.pitch = 1;

    mensagem.volume = 1;

    // INICIA LEITURA
    narrador.speak(mensagem);

}

// =========================
// BOTÕES DE ÁUDIO
// =========================

// TODOS OS ELEMENTOS
const elementosLeitura =
    document.querySelectorAll(
        'h1, h2, p'
    );

// LOOP
elementosLeitura.forEach(elemento => {

    // IGNORA ELEMENTOS
    // COM CLASSE sem-audio
    if (
        elemento.classList.contains(
            'sem-audio'
        )
    ) {
        return;
    }

    // CRIA BOTÃO
    const botao =
        document.createElement('button');

    // TEXTO
    botao.innerText =
        'Ouvir conteúdo desta seção';

    // CLASSE
    botao.classList.add(
        'botao-audio'
    );

    // ACESSIBILIDADE
    botao.setAttribute(
        'aria-label',
        'Ouvir conteúdo desta seção em voz alta'
    );

    // CLICK
    botao.addEventListener('click', () => {

        lerTexto(
            elemento.innerText
        );

    });

    // INSERE O BOTÃO
    elemento.insertAdjacentElement(
        'afterend',
        botao
    );

});

// =========================
// PARAR LEITURA COM ESC
// =========================

document.addEventListener('keydown', (e) => {

    if (e.key === 'Escape') {

        narrador.cancel();

    }

});

// =========================
// ANIMAÇÃO AO SCROLL
// =========================

const observador =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    'active'
                );

            }

        });

    });

document
    .querySelectorAll('.reveal')
    .forEach(el => {

        observador.observe(el);

    });

// =========================
// FECHAR MENU MOBILE
// =========================

document
    .querySelectorAll('.nav-menu a')
    .forEach(link => {

        link.addEventListener('click', () => {

            if (navMenu) {

                navMenu.classList.remove(
                    'active'
                );

            }

            if (menuBtn) {

                menuBtn.setAttribute(
                    'aria-expanded',
                    'false'
                );

            }

        });

    });