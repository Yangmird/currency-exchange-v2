function processData(input,callback){
    try{
        if(!input){
            throw new Error('no input provided')
        }
        const result = input.toUpperCase()
        callback(null,result)

    }catch(err){
        callback(err)
    }
}

