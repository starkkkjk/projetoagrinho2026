# projetoagrinho2026
Aqui está a lista completa de todas as funcionalidades desenvolvidas para o projeto do Agrinho 2026, organizada e explicada em formato de texto para você incluir em seu arquivo de documentação, relatório ou leitura:

📋 Relatório de Funcionalidades do Projeto (Agrinho 2026)
1. Sistema de Acessibilidade Integrado
Alto Contraste: Altera instantaneamente a paleta de cores do site para preto, branco e amarelo. Melhora a leitura para usuários com baixa visão ou dificuldades visuais através da inversão dinâmica de variáveis CSS.

Ouvir Texto (Sintetizador de Voz): Utiliza a API nativa do navegador (speechSynthesis) para converter o resumo do site em áudio em tempo real, permitindo que deficientes visuais ou leitores iniciantes ouçam o conteúdo principal.

Assistente de Libras: Dispara um pop-up/janela flutuante no canto da tela focado na inclusão de usuários surdos ou com deficiência auditiva, simulando a ativação de um suporte na Língua Brasileira de Sinais.

2. Navegação e Layout Estruturado
Menu Responsivo (Estilo Hambúrguer): Criado especificamente para telas menores e dispositivos móveis. O menu se esconde dentro de um botão flutuante e, ao ser clicado, expande-se verticalmente. O menu fecha sozinho de forma automática assim que o usuário clica em qualquer seção do site.

Layout Mobile-First (Estilo Aplicativo): Toda a interface foi centralizada e limitada a uma largura máxima de 600px. Isso faz com que o site se comporte e pareça um aplicativo moderno tanto em smartphones quanto em telas de computadores, facilitando o uso rápido e intuitivo.

3. Dinâmica de Conteúdo
Carrossel Automático e Manual de Notícias: Um painel de informações que alterna sozinho entre três notícias de tecnologia agrícola a cada 4 segundos. Caso o usuário queira ler no próprio ritmo, os botões manuais avançam ou retornam os slides, pausando temporariamente o temporizador automático para evitar interrupções.

Linha do Tempo Interativa: Uma estrutura cronológica visual que separa as eras da agricultura em "Passado" (tração animal), "Presente" (GPS e automação) e "Futuro" (robótica autônoma e IA), guiando os olhos do estudante pelo avanço tecnológico.

4. Ferramentas Interativas (JavaScript Ativo)
Quiz Educativo do Agrinho: Um jogo rápido de perguntas e respostas sobre sustentabilidade no campo. Avalia as respostas do usuário instantaneamente e exibe uma mensagem colorida (verde para acerto, vermelho para erro) explicando o motivo ecológico por trás daquela resposta.

Calculadora Ecológica de Água: Uma ferramenta matemática onde o usuário insere a área (em metros quadrados) de uma horta fictícia. O sistema processa o dado e calcula o volume estimado em litros de água que seriam poupados semanalmente caso o agricultor utilizasse sensores de irrigação inteligente por gotejamento em vez de regadores comuns.

Painel Simulador de Clima: Mostra as condições climáticas e a temperatura atual da Região Agrícola do Paraná através de ícones estilizados, exibindo se as condições estão ou não favoráveis para o plantio no dia.

Chatbot EcoIA (Inteligência Artificial Simulada): Um campo de conversa interativo onde o usuário digita palavras-chave (como "drone", "água", "sensores" ou "agrinho") e o robô responde instantaneamente com uma explicação pedagógica personalizada sobre como essa tecnologia impacta o ecossistema.

🛠️ Tecnologias Utilizadas
HTML5: Estruturação semântica do conteúdo (tags header, main, section, footer).

CSS3: Estilização baseada em Flexbox e CSS Grid para o design do app, uso de animações suaves (@keyframes) e variáveis nativas (:root) para controle do Alto Contraste.

JavaScript (Vanilla): Manipulação do DOM, controle de temporizadores, lógica matemática da calculadora e escuta de eventos (click, keypress).