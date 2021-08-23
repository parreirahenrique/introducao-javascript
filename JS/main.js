/*
var nome = "Henrique Castro";
var idade = 24;
var idade2 = 20;
var frase = "Brasil tem a melhor seleção do mundo!"
var frutas = [{nome: "laranja", quantidade: 10}, {nome:"goiaba", quantidade: 15}];

//alert(nome + " tem " + idade + " anos.");      // apresenta pop-up contendo o conteúdo entre os parênteses
//alert(idade + idade2);

console.log(nome);                               // mostrando variável nome no console
console.log(idade);                              // mostrando variável idade no console
console.log(frase.replace("Brasil", "Espanha")); // troca os caracteres informados por novos caracteres
console.log(frase.toUpperCase())                 // faz com que todos os caracteres fiquem maiúsculos

var lista = ["maçã", "pêra", "laranja"];
lista.push("goiaba");                            // insere novo elemento na última posição do array
lista.pop();                                     // retira último elemento do array
console.log(lista);                              // mostrando array no console posição a posição
console.log(lista.toString());                   // mostrando array concatenado no console
console.log(lista.join(" - "))                   // mostrando array concatenado com os espaçadores desejados
console.log(frutas);

var nome = prompt("Qual seu nome?");             // apresenta pop-up que irá receber informações do usuário

alert("Bem-vindo, " + nome + "!");

var idade = prompt("Qual sua idade?");

if(idade >= 18){
    alert("Você é maior de idade.")
}
else{
    alert("Você é menor de idade.")
}

var counter = 0;

while(counter <=5){
    console.log(counter);
    counter++;
}

var counter;

for(counter = 0; counter <= 5; counter++){
    console.log(counter);
}

var hoje = new Date();
console.log(hoje.getDate);

// Criando funções dentro do JavaScript
function somatorio(n1, n2){                      
    return n1 + n2;
}

console.log(somatorio(2, 3));

function validaIdade(idade){
    var validar;
    
    if(idade >= 18){
        validar = true;
    }

    else if(idade < 18){
        validar = false;
    }

    return validar;
}


console.log(validaIdade(prompt("Qual sua idade?")));
*/

function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";

    //alert("Obrigado por clicar!")
}

function redirecionar(){
    window.open("https://digitalinnovation.one/");             // Redireciona para outra aba
    //window.location.href = "https://digitalinnovation.one/"; // Redireciona para mesma aba
}

function trocar(){
    //alert("Trocar texto.")
    document.getElementById("trocatexto").innerHTML = "Obrigado por passar seu mouse!";
}

function voltar (){
    document.getElementById("trocatexto").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Aguarde o carregamento da página")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}