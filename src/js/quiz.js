alert("Seja bem-vindo ao questionário! Responda as perguntas abaixo por favor");

document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        pergunta: document.getElementById('pergunta'),
        resposta: document.getElementById('resposta'),
        proximaPergunta: document.getElementById("proximo"),
        mensagem: document.getElementById('message'),
        containerPerguntas: document.getElementById('container-perguntas'),
        containerResultado: document.getElementById('container-resultado'),
        listaResultado: document.getElementById('lista-resultado'),
        reiniciarBotao: document.getElementById('inicio-btn')
    };

    const questoes=[
        "Quais são as medidas imediatas que podemos tomar para ajudar pessoas afetadas por enchentes? ",
        "Como a comunidade pode se organizar para prestar suporte durante e após uma enchente?",
        "Quais itens são mais urgentes para doar em casos de enchentes?",
        "Como as pessoas podem se proteger e garantir sua segurança durante uma enchente?",
        "Qual o papel das autoridades e ONGs na assistência às vítimas de enchentes?",
        "De que forma o voluntariado pode ser mais eficaz em situações de enchentes?",
        "Como a prevenção e o planejamento urbano podem reduzir os impactos das enchentes?",
        "Quais são os desafios para o transporte e a logística de ajuda em áreas alagadas?",
        "Como podemos ajudar na reconstrução e recuperação das áreas afetadas após a enchente?",
        "Que ações educativas podem ser feitas para preparar a população para enfrentar enchentes?",
    ]

    let perguntaAtual = 0;
    const respostas = [];

    function mostrarPergunta() {
        elements.pergunta.textContent = questoes[perguntaAtual];
        elements.resposta.value = '';
        elements.mensagem.textContent = '';
        elements.resposta.focus(); // Foca automaticamente no campo de resposta
    }

    function mostrarResultado() {
        elements.containerPerguntas.classList.add('hidden');
        elements.containerResultado.classList.remove('hidden');
        elements.listaResultado.innerHTML = '';

        questoes.forEach((questao, index) => {
            const listaItem = document.createElement('li');
            listaItem.innerHTML = `<strong>${questao}</strong><br> Sua Resposta: <span>${respostas[index]}</span>`;
            elements.listaResultado.appendChild(listaItem);
        });
    }

    function proximaQuestao() {
        const respostaAtual = elements.resposta.value.trim();
        if (respostaAtual === '') {
            elements.mensagem.textContent = "Por favor, digite sua resposta";
            return;
        }
        
        respostas.push(respostaAtual);
        perguntaAtual++;
        
        if (perguntaAtual < questoes.length) {
            mostrarPergunta();
        } else {
            mostrarResultado();
        }
    }

    function reiniciarQuiz() {
        perguntaAtual = 0;
        respostas.length = 0;
        elements.containerResultado.classList.add('hidden');
        elements.containerPerguntas.classList.remove('hidden');
        mostrarPergunta();
    }

    // Configura eventos
    elements.proximaPergunta.addEventListener('click', proximaQuestao);
    elements.reiniciarBotao.addEventListener('click', reiniciarQuiz);

    // Inicia o questionário
    mostrarPergunta();
});