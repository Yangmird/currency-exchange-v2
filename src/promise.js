export function processData(input){
    return new Promise((resolve,reject) =>{
        if(input){
            const res = input.toUpperCase()
            resolve(res)
        }else{
            reject("input is not required")
        }
    })
}