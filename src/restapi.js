import fetch from "node-fetch"

fetch("http://jsonplaceholder.typicode.com/todos/1").
    then(response =>{
        return response.json();
    }).then(data =>{
        console.log(data);
        for(var i in data){
            console.log(`key is ${i} and value is ${data[i]}`);
        }
    }).catch(error =>{
        console.log("error is"+error)
    })