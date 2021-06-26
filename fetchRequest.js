
const fetch=require("node-fetch")

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            for(let n=0;n<json.length;n++){
            console.log(json[n].name);
            }
        })
        .catch(err => console.error(err))
