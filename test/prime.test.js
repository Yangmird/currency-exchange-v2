const isPrime = require('prime-number-check')

//test ('test that 6 is prime',()=>{
//    expect(isPrime(6)).toBe(true)
//})

//test ('test that 6 is not prime',()=>{
//    expect(isPrime(sam(6))).toBe(false)
//})

test ('the function will print 6',()=>{
    expect(sam(6)).toBe(undefined)
})

function sam(x) {
    console.log(x)
}
