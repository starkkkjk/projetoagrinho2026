// Aguarda o carregamento do DOM para rodar os scripts com segurança
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. MENU RESPONSIVO (HAMBÚRGUER)
       ========================================================================== */
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const menuLinks = document.querySelectorAll('.menu-link');

    // Abre e fecha o menu ao clicar no botão hambúrguer
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('ativo');
    });

    // Fecha o menu automaticamente ao clicar em qualquer link dele
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('ativo');
        });
    });


    /* ==========================================================================
       2. CARROSSEL DE NOTÍCIAS AUTOMÁTICO E MANUAL
       ========================================================================== */
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    let slideAtual = 0;
    let intervaloCarrossel = setInterval(proximoSlide, 4000); // Muda a cada 4 segundos

    function mostrarSlide(indice) {
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Se ultrapassar o último, volta pro primeiro
        if (indice >= slides.length) slideAtual = 0;
        // Se for menor que zero, vai pro último
        else if (indice < 0) slideAtual = slides.length - 1;
        else slideAtual = indice;

        slides[slideAtual].classList.add('active');
    }

    function proximoSlide() {
        mostrarSlide(slideAtual + 1);
    }

    function slideAnterior() {
        mostrarSlide(slideAtual - 1);
    }

    // Controles manuais do carrossel
    nextBtn.addEventListener('click', () => {
        clearInterval(intervaloCarrossel); // Pausa o automático ao interagir
        proximoSlide();
        intervaloCarrossel = setInterval(proximoSlide, 4000); // Retoma
    });

    prevBtn.addEventListener('click', () => {
        clearInterval(intervaloCarrossel);
        slideAnterior();
        intervaloCarrossel = setInterval(proximoSlide, 4000);
    });


    /* ==========================================================================
       3. CALCULADORA ECOLÓGICA DE ÁGUA
       ========================================================================== */
    const btnCalcular = document.getElementById('btn-calcular');
    const inputArea = document.getElementById('input-area');
    const resultadoCalc = document.getElementById('resultado-calc');

    btnCalcular.addEventListener('click', () => {
        const area = parseFloat(inputArea.value);

        if (isNaN(area) || area <= 0) {
            resultadoCalc.style.color = "red";
            resultadoCalc.textContent = "Por favor, digite um tamanho válido em m².";
            return;
        }

        // Simulação matemática: Irrigação por gotejamento poupa aprox. 35 litros por m² por semana
        const economiaLitros = area * 35;
        
        resultadoCalc.style.color = "var(--cor-principal)";
        resultadoCalc.innerHTML = `💧 Economia estimada: <strong>${economiaLitros.toFixed(0)} litros</strong> de água por semana na sua horta!`;
    });


    /* ==========================================================================
       4. CHATBOT SIMULADO (EcoIA)
       ========================================================================== */
    const chatInput = document.getElementById('chat-input');
    const chatEnviar = document.getElementById('chat-enviar');
    const chatResposta = document.getElementById('chat-resposta');

    chatEnviar.addEventListener('click', responderChat);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') responderChat();
    });

    function responderChat() {
        const pergunta = chatInput.value.toLowerCase().trim();

        if (pergunta === "") {
            chatResposta.textContent = "Digite alguma dúvida para que eu possa ajudar!";
            return;
        }

        let resposta = "Desculpe, ainda estou aprendendo sobre esse assunto. Tente perguntar sobre: drone, água, sensores ou robótica!";

        if (pergunta.includes('drone')) {
            resposta = "🤖 Os drones sobrevoam a plantação capturando imagens térmicas que mostram onde precisa de água ou defensivos, evitando desperdício!";
        } else if (pergunta.includes('agua') || pergunta.includes('água') || pergunta.includes('irrigação')) {
            resposta = "💧 A irrigação inteligente usa sensores de umidade. A água só é liberada se a terra realmente estiver seca.";
        } else if (pergunta.includes('sensor') || pergunta.includes('iot')) {
            resposta = "🌱 Sensores IoT analisam os nutrientes e a umidade do solo diretamente debaixo da terra e enviam os dados para o celular do produtor.";
        } else if (pergunta.includes('agrinho')) {
            resposta = "🌾 O Agrinho 2026 incentiva as novas gerações a conectarem o amor pela natureza com o poder das tecnologias digitais!";
        }

        chatResposta.textContent = response = resposta;
        chatInput.value = ""; // Limpa o campo
    }


    /* ==========================================================================
       5. ACESSIBILIDADE (Contraste, Voz e Libras)
       ========================================================================== */
    
    // Alto Contraste
    const btnContraste = document.getElementById('btn-contraste');
    btnContraste.addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');
    });

    // Pop-up de Libras
    const btnLibras = document.getElementById('btn-libras');
    const janelaLibras = document.getElementById('janela-libras');
    const fecharLibras = document.getElementById('fechar-libras');

    btnLibras.addEventListener('click', () => {
        janelaLibras.classList.remove('escondido');
    });

    fecharLibras.addEventListener('click', () => {
        janelaLibras.classList.add('escondido');
    });

    // Leitura de Texto por Voz (Sintetizador Nativo do Navegador)
    const btnVoz = document.getElementById('btn-voz');
    btnVoz.addEventListener('click', () => {
        // Pega um resumo textual do próprio documento
        const textoParaLer = "Bem vindo ao Agrinho 2026. Tecnologia, Agricultura e Sustentabilidade. Descubra como a inovação no campo está construindo um futuro mais verde.";
        
        // Cancela leituras que já estejam acontecendo
        window.speechSynthesis.cancel();

        const fala = new SpeechSynthesisUtterance(textoParaLer);
        fala.lang = 'pt-BR';
        fala.rate = 1.1; // Velocidade da voz
        window.speechSynthesis.speak(fala);
    });

});

/* ==========================================================================
   6. FUNÇÃO DO QUIZ (Fora do escopo para ser chamada pelo 'onclick' do HTML)
   ========================================================================== */
function verificarQuiz(acertou) {
    const quizResultado = document.getElementById('quiz-resultado');
    
    if (acertou) {
        quizResultado.style.color = "green";
        quizResultado.textContent = "🎉 Correto! Os sensores medem com precisão e evitam regar solo que já está úmido.";
    } else {
        quizResultado.style.color = "red";
        quizResultado.textContent = "❌ Tente novamente! Os regadores manuais abertos desperdiçam muita água por evaporação.";
    }
}