document.addEventListener('DOMContentLoaded',()=>{
    const pergunta = document.getElementById('pergunta');
    const resposta = document.getElementById('resposta');
    const proximaPergunta = document.getElementById("proximo");
    const mensagem = document.getElementById('message');
    const containerPerguntas = document.getElementById('container-perguntas');
    const containerResultado = document.getElementById('container-resultado');
    const listaResultado = document.getElementById('lista-resultado');
    const reiniciarBotao = document.getElementById('inicio-btn')

    //DECLARANDO O ARRAY DE PERGUNTAS
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
    //DECLARANDOS AS VARIAVEIS
    let perguntas = 0;
    const respostas = [];

    function mostrarPergunta(){
        if(perguntas <questoes.length){
            pergunta.textContent =questoes[perguntas];
            resposta.value='';
            mensagem.textContent ='';
        }else{
            mostrarResultado();
        }
    }

     function mostrarResultado(){
        containerPerguntas.classList.add('hidden');
        containerResultado.classList.remove('hidden');
        listaResultado.innerHTML='';

        questoes.forEach((questoes,index)=>{
            const listaItem =document.createElement('li');
            listaItem.innerHTML = `<strong>${questoes}</strong><br>
            Sua Resposta: <span>${resposta[index]}</span>`
            listaResultado.appendChild(listaItem);
        })
     }

     function nextQuestao(){
        const respostaAtual =resposta.value.trim();
        if(respostaAtual ===''){
            mensagem.textContent ="Por favor , digite sua resposta";
            return;
        }
        respostas.push(respostaAtual);
        perguntas++;
        mostrarPergunta();

     }
     function reiniciarQuiz(){
        perguntas =0;
        respostas.length =0;
        containerResultado.classList.add('hidden');
        containerPerguntas.classList.remove('hidden')
        mostrarPergunta();
     }

     proximaPergunta.addEventListener('click',nextQuestao);
     reiniciarBotao.addEventListener('click',reiniciarQuiz);

     mostrarPergunta();

})