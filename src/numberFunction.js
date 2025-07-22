import isPrime from 'prime-number-check'

//export const checkNumber = (value) =>{
//    return ("This funcion has not yet been implemented")
//}

export const checkNumber = (value) =>{
    return isPrime(value) ? "The number is prime" : "The number is no prime"
}