let nome = "Jeniffer"
// alert(nome)
console.log(nome);

const x = 10;
const lista = ["a","b","c"]
const objeto = {name: "Jeniffer", age: "29" } //Json

console.log(x);
console.log(typeof x);
console.log('---------------------------');

console.log(lista);
console.log(typeof lista);
console.log('---------------------------');

console.log(objeto);
console.log(typeof 'objeto');
console.log(objeto.name);
console.log('---------------------------')

console.log(lista[2]);
console.log('---------------------------')

let opcao = true; //boolean
/* Condicional
...lista
*/

if (2>1){
    console.log("2 é maior que")    
} else {
    console.log("2 não é maior que 1")
}

// Estrutura de Repetição
// i = i + 1
const arr = ["amora", "banana", "caju", "damasco"];
for (let i = 0; i < arr.length; i++){
    // console.log('O valor da repetição é ' + arr[i])
    // tamplate literal, é o uso da crase`
console.log(`O valor da repetição é ${arr[i]}`);
    
}

// função

function soma(){
    console.log(22+11);
}

soma();

function calcula(a,b){
    console.log(a*b)
}
calcula(12,12);