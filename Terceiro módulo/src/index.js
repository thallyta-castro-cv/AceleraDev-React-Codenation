'use strict'


const fibonacci = (n = 15) => 
    Array.from({length: n}).reduce(
        (result,val,i) =>result.concat( i>1 ? result[ i -1] + result[i-2] : i), 
        []
    );
console.log(fibonacci())

const isFibonnaci = (num) => {
    let Fibonacci = fibonacci()
    if(Fibonacci.includes(num)){
        return true
    }else{
        return false
    }
}

module.exports = {
    fibonacci,
    isFibonnaci
}
