// index.js
// Capturando o elemento button do nosso html
const button = document.querySelector("button");
const p = document.querySelector('p')

let contador = 0

// index.js
button.addEventListener("click", function () {
    contador++
    p.innerHTML = contador;
  console.log("hello world");
});

/*Introdução
Quando um evento é acionado, nem sempre ele acontece imediatamente após ser acionado. Existem duas fases que determinam quando o evento será tratado de fato. Essas fases nós chamamos de capturing ou fase de captura e bubbling ou fase de borbulhamento

Capturing
Na fase de capturing, o navegador começa verificando se existe algum handler para o evento ocorrido a partir do root da página, ou seja, pelo <html>, e assim vai verificando todos os filhos imediatos até chegar no elemento onde ocorreu o evento.

Bubbling
Na fase de bubbling, acontece o contrário. O navegador começa verificando a partir do elemento clicado, e vai 'subindo', e verificando o pai imediato de cada elemento, até chegar ao root da página, ou seja, o <html>..*/

/*target
A propriedade target, é quem guarda o elemento que disparou o evento, onde ocorreu o clique, por exemplo. Em outras palavras, é o elemento onde o evento iniciou.

currentTarget
Já a propriedade currentTarget, é quem guarda o elemento que possui o event listener(o 'manipulador' de evento), é o elemento ao qual você chamou o método addEventListener.

Nota: É importante saber que só é possível visualizar o valor de event.currentTarget enquanto o evento está sendo interceptado. Note que ao inspecionar o Objeto Evento no console, o seu valor sempre vai ser null. Para conseguir verificar o real currentTarget, você precisa acessar ele diretamente através do console.log, dessa forma: console.log(event.currentTarget).

Vamos ver um exemplo, na prática, ainda com o mesmo código utilizado na aula anterior.

Vamos só fazer algumas alterações em nosso, JS. Vamos adicionar mais uma variável, e em seguida, selecionar o elemento body. E agora, no nosso addEventListener, trocamos o botao por body, dessa forma:*/

const body = document.querySelector('body');
body.addEventListener('click', function(event){
    console.log(event);
});


body.addEventListener('click', function(event){
  console.log('evento: ', event);
  console.log('current target: ', event.currentTarget);
  console.log('target: ', event.target);
});

/*preventDefault()
Para entendermos como o preventDefault() funciona e quando ele nos será útil, primeiro precisamos entender o conceito de Ações Padrão do Navegador

Ações Padrão do Navegador
Como já vimos, um evento é um movimento que já acontece na nossa página, e que nos permite executar alguma ação a partir da ocorrência desse evento.

E o navegador, por padrão, intercepta vários desses eventos e ele mesmo executa alguma ação. Chamamos isso de Ações Padrão do Navegador.

Como, por exemplo:

O clique em um link: que inicia a página através de uma URL;
O clique no botão de um formulário: que inicia o envio do formulário para o servidor;
O ato de clicar e arrastar o mouse em cima de um texto: faz com que o texto seja selecionado.
Mas, muitas vezes você vai precisar executar uma ação diferente do padrão do navegador, e vai querer que essa ação padrão não seja executada. E é nesse momento que utilizamos o método preventDefault(). Traduzindo literalmente, significa "previna o padrão", ou seja, não execute o comportamento padrão.

Vamos ver um exemplo prático disso, para esclarecer melhor, ainda utilizando o nosso código anterior:

Vamos fazer uma pequena alteração no nosso HTML, vamos envolver nosso botão em uma tag form, dessa forma:.*/ 

/*<form action="">
    <button id="meuBotao">Mostrar parágrafo</button>
</form>

Note que agora, ao clicar no botão, é possível ver que a função foi executada, pois algo aparece no console, porém, por poucos segundos, já que logo em seguida a página é recarregada.

Isso porque o atributo action está vazio. Se quiser, você pode tentar adicionar uma url para um site qualquer e ver o redirecionamento acontecendo na prática.

Para evitar esse comportamento, vamos adicionar o event.preventDefault() ao nosso arquivo javascript. Dessa forma:

E também já podemos voltar o addEventListener para o button.

botao.addEventListener('click', function(event){
  event.preventDefault();
  console.log('evento: ', event);
  console.log('current target: ', event.currentTarget);
  console.log('target: ', event.target);
});


stopPropagation()
O método stopPropagation(), que traduzindo literalmente significa parar propagação, como o próprio nome já diz, para a propagação do evento para os outros elementos. Em outras palavras, impede que o bubbling ou o capturing aconteça.

Mas, diferente do preventDefault(), o stopPropagation() não impede a execução das ações padrão do navegador!


stop propagation

Esse método pode ser muito útil quando precisarmos interceptar o mesmo evento em dois elementos com relação de pai e filho, porém acionando funções diferentes em cada um.

Vamos ver um exemplo disso na prática:

Em nosso exemplo anterior, temos um button interceptando um evento de clique e vamos agora fazer o mesmo com o body.

Vamos simplificar isso um pouco. No javascript, faremos as seguintes mudanças:

Por agora, podemos esquecer aquele parágrafo escondido.


botao.addEventListener('click', function(event){
  event.preventDefault();
  alert('clicou no button!');
});

body.addEventListener('click', function(){
  alert('clicou no body!');
});


Note que mesmo ao clicar apenas no button, ambos os alerts foram mostrados. Isso acontece devido ao efeito de bubbling.

Para evitar isso, vamos adicionar o stopPropagation(), no elemento filho, para que quando o evento acontecer, ele não seja propagado para o body. Dessa forma:

botao.addEventListener('click', function(event){
  event.preventDefault();
  event.stopPropagation();
  alert('clicou no button!');
});

body.addEventListener('click', function(){
  alert('clicou no body!');
});

Agora sim, ao clicar no button, apenas o código atrelado a ele é executado, e para executar o alert('clicou no body!'), é necessário clicar em algum outro lugar do body, fora do button.*/

