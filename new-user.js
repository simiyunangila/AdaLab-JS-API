document.getElementById('form').addEventListener('submit',async function(event){
event.preventDefault();

let firstname =document.getElementById('firstname').value;
let lastname =document.getElementById('lastname').value;
let age =document.getElementById('age').value;
let data = {
    firstname:firstname,
    lastname:lastname,
    age:age
};
console.log({data});

let result =await fetch('https://dummyjson.com/users/add',{
    method: 'POST',
    headers:{
'Content-Type':'application/json'
    },
body:JSON.stringify(data)
})
.then(response=>response.json())
.then(response=>response)
.catch(error=>error.message)
console.log({result});

let success = document.getElementById('success');
result.id ? success.innerHTML = 'User added successfully': success.innerHTML = 'user not added'
})