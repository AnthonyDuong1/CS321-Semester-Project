var exploreBtn = document.getElementById("exploreTemplate")
var publish = document.getElementById("publish")

exploreBtn.addEventListener("click", exploreTemplate)
publish.addEventListener("click", publishTemplate)

function exploreTemplate(){
    window.location.href = "http://localhost:8080/explore-template"
    window.location.replace("http://localhost:8080/explore-template")
}

function publishTemplate(){
    let title = document.getElementById("title").textContent
    let subject = document.getElementById("subject").textContent
    let body = document.getElementById("body").textContent
    let closing = document.getElementById("closing").textContent
    let signature = document.getElementById("signature").textContent
    let uid = localStorage.getItem("ID")

    if(uid == null){
        console.log("You must login first before creating a template!")
        return;
    }

    const request = new Request("http://localhost:8080/create", {
        headers:{
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({title: title, subject: subject, body: body, closing: closing, signature: signature, uid: uid})
    });

    let response = fetch(request)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(function(){

    });
}