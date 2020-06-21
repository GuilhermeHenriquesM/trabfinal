const valorescotacao = 'https://api.exchangeratesapi.io/latest?base=BRL'
async function pegarvalores() {
  const response = await fetch(valorescotacao);
  const data = await response.json();

  document.getElementById("EUR").textContent = data.rates.EUR
  document.getElementById("RUB").textContent = data.rates.RUB
  document.getElementById("USD").textContent = data.rates.USD
  document.getElementById("JPY").textContent = data.rates.JPY
  documente.getElementById("data").textContent = data.date

}
function converterMoeda(){
  var valor = document.getElementById("quantia").value;
  var moedaOut = document.querySelector('input[name="moedaOut"]:checked').value;

  var valorConvertido = 0;

  if(moedaOut == "dolar"){
    valorConvertido = valor * 0.1867430742;
  }else if(moedaOut == "euro"){
    valorConvertido = valor * 0.16658615;
  }else if(moedaOut == "rublo"){
    valorConvertido = valor * 12.9364973596;
  }else{
    valorConvertido = valor * 19.9520231888;
  }

  var divResultado = document.getElementById("resultado");
  divResultado.innerHTML = "Valor Convertido = " + valorConvertido;
  divResultado.className = "show";
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);