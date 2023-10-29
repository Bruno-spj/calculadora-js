/* clica no botao para aparecer em resulta;

todos numeros fiquem aparecendo;

usar o botaoZera (C) para recomeçar:

usar o botaoApagar (AC) para apagar tudo;

fazer os calculos de cada função matematico clicando em cada respequitiva operação;

*/

function inserir (numero){
    
   var numeros = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numeros + numero;
}

function limpar (){
    document.getElementById('resultado').innerHTML = "";
}

function voltar (){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}


function calcular (){
   var resultado =  document.getElementById('resultado').innerHTML;
   if (resultado){
    document.getElementById('resultado').innerHTML = eval(resultado);
   }
   else{
    document.getElementById('resultado').innerHTML = "insira um numero"
   }
}