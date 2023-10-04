// variavel que vai armazenar o retorno da função (o numero aleatorio)
let numeroAleatorio = gerarNumeroAleatorio();
let chute; // valor chutado pelo usuário
let chutes = []; // lista que armazenará todos os números chutados
let tentativas =1;

//função que altera o texto na tela
function alterarTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    alterarTextoNaTela('p', 'Escolha um numero entre 1 - 100');
}
exibirMensagemInicial();


//função para gerar um número aleatório:
function gerarNumeroAleatorio(){
    return Math.floor((Math.random() * 100) +1)
}

function verificarChute(){
    // .value, o programa le o código digitado pelo usuario e armazena na variavel chute:
    chute = document.querySelector('input').value;
    chutes.push(chute);

    if(chute == numeroAleatorio){
        let palavraTentativa = tentativas > 1? "tentativas" : "tentativa";
        let msgTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`;
        alterarTextoNaTela('h1', "ACERTOU MISERAVI");
        alterarTextoNaTela('p', msgTentativas);
        // removo o atributo 'disabled'do botao com id 'reiniciar'
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        if(chute > numeroAleatorio){
            alterarTextoNaTela('p', `O número é menor!`);
            alterarTextoNaTela('h5',`Numeros errados: ${chutes}.` )
        } else{
            alterarTextoNaTela('p', `O número é maior!'`);
            alterarTextoNaTela('h5',`Numeros errados: ${chutes}.` )
        }
        tentativas++;
        limparCampo()
    }
}
// função para limpar o campo input
function limparCampo(){
    //limpar o campo do input
    chute = document.querySelector('input');
    chute.value=''; // defino o valor do campo chute = 'vazio'
}

// função para reiniciar o jogo
function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio(); // gera um novo número aleatorio
    limparCampo(); // função limpar campo é chamado
    tentativas = 1; // tentativa volta a valer 1
    chutes = []; // reinicio o array que armazena os números churados
    exibirMensagemInicial(); // exibo a msg inicial novamente
    document.getElementById('reiniciar').setAttribute('disabled', true)
}