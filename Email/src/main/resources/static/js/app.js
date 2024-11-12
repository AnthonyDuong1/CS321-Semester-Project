var button1 = document.querySelector(".get-btn")
var button2 = document.querySelector(".del-btn")
var button3 = document.querySelector(".add-btn")
var button4 = document.querySelector(".addTemp")
var login = document.getElementById("login")

button1.addEventListener("click", getUsers)
button2.addEventListener("click", delUser)
button3.addEventListener("click", addUser)
button4.addEventListener("click", createTemplate)
login.addEventListener("click", loginUser)


function loginUser(event){

    let user = document.getElementById("user").value
    let pass = document.getElementById("pass").value

    const request = new Request("http://localhost:8080/login", {
        headers:{
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({username: user, password: pass})
    });

    fetch(request)
        .then(response => response.json())
        .then(data => {
            if(data.length == 0){
                console.log("Username/password doesn't exist!")
            }
            else{
                console.log("yes")
                document.getElementById("currID").innerText = "ID: " + data[0].id
            }
        })
        .catch(function(){

        });

}

function getUsers(event){

    const request = new Request("http://localhost:8080/get-all-users", {
        method: "GET",
    });

    let response = fetch(request)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(function(){

        });

    
}

function delUser(event){
    let user = document.getElementById("delUID").value

    const request = new Request("http://localhost:8080/remove/" + user, {
        method: "DELETE",
    });

    let response = fetch(request)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(function(){

    });
}

function addUser(event){
    let user = document.getElementById("username").value
    let pass = document.getElementById("password").value

    const request = new Request("http://localhost:8080/add", {
        headers:{
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({username: user, password: pass})
    });

    let response = fetch(request)
        .then(response => response.json)
        .then(data => {
            if(data.length == 0){
                console.log("Username/password taken!")
            }
            else{
                console.log(data)
            }
        })
        .catch(function(){

    });
}

function createTemplate(){
    let header = document.getElementById("header").value
    let subject = document.getElementById("subject").value
    let genre = document.getElementById("genre").value
    let description = document.getElementById("description").value
    let uid = document.getElementById("currID").innerText.substring(4)

    const request = new Request("http://localhost:8080/create", {
        headers:{
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({header: header, subject: subject, genre: genre, description: description, uid: uid})
    });

    let response = fetch(request)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(function(){

    });
}

function getTemplates(){

}



