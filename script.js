let url = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL"

function converter(){
	let input = document.getElementById("valor");
	let valor = input.value;
	console.log(valor);

	fetch(url).then((response)=>{
	return response.json()
	})
	.then((data)=>{
	console.log(data)
	/*RETORNA QUANTO É O DOLAR EM REAIS*/
	let rate = data.rates.BRL;

	let resultado = `${valor} dolares = ${(rate * valor).toFixed(2)} reais`
	document.getElementById("resultado").innerHTML = resultado;
})
}