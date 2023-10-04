// arquivo para testes
let numbers=[1,3,5,7];

function addNum(n){
    numbers.push(n)
    return console.log(numbers)
}
function verifica(n){
    for(let i=0 ; i<numbers.length; i++){
        if(numbers.includes(n)){
            return "número já foi adionado"
        } else{
            numbers.push(n) 
        }
        return numbers
    }
}

console.log(verifica(6))
console.log(verifica(6))
console.log(verifica(1))