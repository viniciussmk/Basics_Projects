function projeto1() {
    let contador = document.querySelector("span");
    let valueContador = contador.innerHTML;
    alert("30 segundos para resolver o QUIZ");

    setInterval(function(){
    valueContador--
        if(valueContador < 0){
            valueContador = 0
            };
    contador.innerHTML = valueContador;
}, 1000);
;}
projeto1();


function projeto2() {
    let respostas = document.querySelectorAll(".respostas");

    for(let i = 0; i < respostas.length; i++) {
        respostas[i].addEventListener('click', ()=>{
    let attr = respostas[i].getAttribute('respostas')
        if(attr == "TRUE"){
            respostas[i].style.backgroundColor = "green";
                alert("PARABÉNS VOCÊ ACERTOU !!!!");
        };   
        if(attr == "FALSE") {
            respostas[i].style.backgroundColor = "red";
                alert("ERROU POXA :(");
        };
        });
    };
};
projeto2();


function projeto3() {

    function getRandomArbitrary(min, max) {
        return parseInt(Math.random() * (max - min) + min);
    };

    let opcoesDoRobo = document.querySelectorAll(".opcao-single");
    let escolhaUsuario = prompt("Escolha: Pedra, Papel ou Tesoura");
    let computadorEscolha = getRandomArbitrary(0,3);

    if(escolhaUsuario == "papel") {
        let escolhaFinal = opcoesDoRobo[computadorEscolha].innerHTML;
        if(escolhaFinal.toLocaleLowerCase() == "papel") {
            alert("EMPATE, O ROBÔ ESCOLHEU PAPEL");
        }else if(escolhaFinal.toLocaleLowerCase() == "pedra") {
            alert("GANHOU !!! O ROBÔ ESCOLHEU PEDRA");
        }else if(escolhaFinal.toLocaleLowerCase() == "tesoura") {
            alert("VOCÊ PERDEU :( O ROBÔ ESCOLHEU TESOURA");
        }};
    if(escolhaUsuario == "pedra") {
        let escolhaFinal = opcoesDoRobo[computadorEscolha].innerHTML;
        if(escolhaFinal.toLocaleLowerCase() == "papel") {
            alert("VOCÊ PERDEU :( O ROBÔ ESCOLHEU PAPEL");
        }else if(escolhaFinal.toLocaleLowerCase() == "pedra") {
            alert("EMPATE, O ROBÔ ESCOLHEU PEDRA");
        }else if(escolhaFinal.toLocaleLowerCase() == "tesoura") {
            alert("GANHOU !!! O ROBÔ ESCOLHEU TESOURA");
        }};
    if(escolhaUsuario == "tesoura") {
        let escolhaFinal = opcoesDoRobo[computadorEscolha].innerHTML;
        if(escolhaFinal.toLocaleLowerCase() == "papel") {
            alert("GANHOU !!! O ROBÔ ESCOLHEU PAPEL");
        }else if(escolhaFinal.toLocaleLowerCase() == "pedra") {
            alert("VOCÊ PERDEU :( O ROBÔ ESCOLHEU PEDRA");
        }else if(escolhaFinal.toLocaleLowerCase() == "tesoura") {
            alert("EMPATE, O ROBÔ ESCOLHEU TESOURA");
        }};
        
    };
projeto3();