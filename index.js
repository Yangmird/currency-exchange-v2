import {checkNumber} from './src/numberFunction.js'
import {processData} from './src/promise.js'

//console.log("this is first json")
//console.log(checkNumber(7))

processData("hello").then((result) =>{
    console.log(result)
}).catch(error =>{
    console.log("error")
})