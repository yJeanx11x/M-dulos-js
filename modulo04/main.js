//executa uma função após um intervalo de tempo especificado

setTimeout(()=>{
        console.log('oi')
},3000) // tempo em milissegundos

// setInterval() executa uma função após um intervalo de tempo especificado

let valor1 = 10;

const intervalo = setInterval(() => {
  console.log(valor1);
  valor1--;
  if (valor1 == 0) {
        console.log('Feliz ano novo!!!')
        clearInterval(intervalo);// Interrompe o intervalo de execuções.
}
}, 1000);
