/*
===========================================
AGRINHO 2026 - JAVASCRIPT PROFISSIONAL
===========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    inicializarMenu();
    inicializarCarrossel();
    inicializarCalculadora();
    inicializarChatbot();
    inicializarAcessibilidade();

});

/*
===========================================
MENU RESPONSIVO
===========================================
*/

function inicializarMenu() {

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const menuLinks = document.querySelectorAll(".menu-link");

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("ativo");
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("ativo");
        });
    });
}

/*
===========================================
CARROSSEL DE NOTÍCIAS
===========================================
*/

function inicializarCarrossel() {

    const slides = document.querySelectorAll(".slide");
    const btnPrev = document.getElementById("prev-slide");
    const btnNext = document.getElementById("next-slide");

    if (!slides.length) return;

    let slideAtual = 0;
    let intervalo;

    function mostrarSlide(index) {

        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        slides[index].classList.add("active");
    }

    function proximoSlide() {
        slideAtual++;
        if (slideAtual >= slides.length) {
            slideAtual = 0;
        }
        mostrarSlide(slideAtual);
    }

    function slideAnterior() {
        slideAtual--;
        if (slideAtual < 0) {
            slideAtual = slides.length - 1;
        }
        mostrarSlide(slideAtual);
    }

    btnNext?.addEventListener("click", () => {
        proximoSlide();
        reiniciarIntervalo();
    });

    btnPrev?.addEventListener("click", () => {
        slideAnterior();
        reiniciarIntervalo();
    });

    function iniciarIntervalo() {
        intervalo = setInterval(proximoSlide, 5000);
    }

    function reiniciarIntervalo() {
        clearInterval(intervalo);
        iniciarIntervalo();
    }

    mostrarSlide(slideAtual);
    iniciarIntervalo();
}

/*
===========================================
QUIZ INTERATIVO
===========================================
*/

function verificarQuiz(respostaCorreta) {

    const resultado = document.getElementById("quiz-resultado");

    if (!resultado) return;

    if (respostaCorreta) {

        resultado.innerHTML =
            "✅ Correto! Sensores de umidade ajudam a economizar água e melhorar a irrigação.";

        resultado.style.color = "#2e7d32";

    } else {

        resultado.innerHTML =
            "❌ Resposta incorreta. O ideal é utilizar sensores inteligentes para evitar desperdícios.";

        resultado.style.color = "#d32f2f";
    }
}

window.verificarQuiz = verificarQuiz;

/*
===========================================
CALCULADORA DE ECONOMIA DE ÁGUA
===========================================
*/

function inicializarCalculadora() {

    const btnCalcular = document.getElementById("btn-calcular");

    if (!btnCalcular) return;

    btnCalcular.addEventListener("click", () => {

        const areaInput = document.getElementById("input-area");
        const resultado = document.getElementById("resultado-calc");

        const area = Number(areaInput.value);

        if (!area || area <= 0) {

            resultado.innerHTML =
                "⚠️ Informe uma área válida em metros quadrados.";

            resultado.style.color = "#d32f2f";

            return;
        }

        /*
         Simulação:
         50 litros economizados por m² por semana
        */

        const economia = area * 50;

        resultado.innerHTML =
            `💧 Sua horta pode economizar aproximadamente <strong>${economia.toLocaleString('pt-BR')} litros</strong> de água por semana usando irrigação inteligente.`;

        resultado.style.color = "#1565c0";
    });
}

/*
===========================================
CHATBOT ECOIA
===========================================
*/

function inicializarChatbot() {

    const btnEnviar = document.getElementById("chat-enviar");

    if (!btnEnviar) return;

    btnEnviar.addEventListener("click", responderChat);

    document
        .getElementById("chat-input")
        ?.addEventListener("keypress", (e) => {

            if (e.key === "Enter") {
                responderChat();
            }
        });
}

function responderChat() {

    const input = document.getElementById("chat-input");
    const resposta = document.getElementById("chat-resposta");

    if (!input || !resposta) return;

    const pergunta = input.value.trim().toLowerCase();

    if (pergunta === "") {

        resposta.innerHTML =
            "Digite uma pergunta relacionada à agricultura sustentável.";

        return;
    }

    const respostas = {

        "drone":
            "🚁 Drones agrícolas monitoram plantações, identificam falhas e ajudam na pulverização de precisão.",

        "drones":
            "🚁 Drones permitem monitoramento aéreo rápido e sustentável das lavouras.",

        "energia solar":
            "☀️ A energia solar reduz custos e diminui a emissão de poluentes nas propriedades rurais.",

        "sustentabilidade":
            "🌱 Sustentabilidade é produzir alimentos preservando os recursos naturais para as futuras gerações.",

        "água":
            "💧 Sensores inteligentes ajudam a controlar a irrigação e evitar desperdícios.",

        "irrigação":
            "💧 Sistemas modernos de irrigação aumentam a produtividade utilizando menos água.",

        "ia":
            "🤖 A Inteligência Artificial ajuda a prever pragas, doenças e otimizar colheitas.",

        "inteligência artificial":
            "🤖 A IA está transformando o agronegócio através da análise de dados em tempo real.",

        "agrinho":
            "🌾 O Agrinho incentiva a educação, cidadania, sustentabilidade e inovação tecnológica."
    };

    let encontrouResposta = false;

    for (const chave in respostas) {

        if (pergunta.includes(chave)) {

            resposta.innerHTML = respostas[chave];
            encontrouResposta = true;
            break;
        }
    }

    if (!encontrouResposta) {

        resposta.innerHTML =
            "🌿 Ainda estou aprendendo. Tente perguntar sobre drones, água, irrigação, energia solar, IA ou sustentabilidade.";
    }

    input.value = "";
}

/*
===========================================
ACESSIBILIDADE
===========================================
*/

function inicializarAcessibilidade() {

    inicializarContraste();
    inicializarLeituraVoz();
    inicializarLibras();
}

/*
===========================================
MODO ALTO CONTRASTE
===========================================
*/

function inicializarContraste() {

    const btnContraste = document.getElementById("btn-contraste");

    if (!btnContraste) return;

    btnContraste.addEventListener("click", () => {

        document.body.classList.toggle("alto-contraste");

        localStorage.setItem(
            "altoContraste",
            document.body.classList.contains("alto-contraste")
        );
    });

    const contrasteSalvo =
        localStorage.getItem("altoContraste") === "true";

    if (contrasteSalvo) {
        document.body.classList.add("alto-contraste");
    }
}

/*
===========================================
LEITOR DE TEXTO
===========================================
*/

function inicializarLeituraVoz() {

    const btnVoz = document.getElementById("btn-voz");

    if (!btnVoz) return;

    btnVoz.addEventListener("click", () => {

        if (!("speechSynthesis" in window)) {

            alert("Seu navegador não suporta leitura por voz.");
            return;
        }

        const texto =
            "Bem-vindo ao Agrinho 2026. Tecnologia, agricultura e sustentabilidade trabalhando juntas para construir um futuro melhor.";

        const fala = new SpeechSynthesisUtterance(texto);

        fala.lang = "pt-BR";
        fala.rate = 1;
        fala.pitch = 1;

        speechSynthesis.cancel();
        speechSynthesis.speak(fala);
    });
}

/*
===========================================
POPUP LIBRAS
===========================================
*/

function inicializarLibras() {

    const btnLibras = document.getElementById("btn-libras");
    const popup = document.getElementById("janela-libras");
    const fechar = document.getElementById("fechar-libras");

    if (!btnLibras || !popup || !fechar) return;

    btnLibras.addEventListener("click", () => {
        popup.classList.remove("escondido");
    });

    fechar.addEventListener("click", () => {
        popup.classList.add("escondido");
    });
}

/*
===========================================
ANIMAÇÃO DE ENTRADA DAS SEÇÕES
===========================================
*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("mostrar");
        }
    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(secao => {
    observer.observe(secao);
});