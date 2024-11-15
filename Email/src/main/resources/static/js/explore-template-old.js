var createBtn = document.getElementById("createTemplate")
var deleteBtn = document.getElementById("deleteButton")

createBtn.addEventListener("click", createTemplate)
deleteBtn.addEventListener("click", deleteTemplate)

getTemplates()
function getTemplates(){
    let templateLists = document.getElementById("templateListItems")

    const request = new Request("http://localhost:8080/get-all-templates", {
        method: "GET",
    });

    let response = fetch(request)
        .then(response => response.json())
        .then(data => {
            data.forEach((template) => {
                templateLists.innerHTML += "<li onclick='templateClick(event) '" + "value='" + template.tid + "'" + ">" + template.title + "</li>"
            })
        })
        .catch(function(){

        });
}

function createTemplate(){
    window.location.href = "http://localhost:8080/create-template"
    window.location.replace("http://localhost:8080/create-template")
}

function templateClick(event){
    console.log(event.target.value)
    displayTemplate(event.target.value)
}

function displayTemplate(templateID){
    let titleBar = document.getElementById("titleBar")
    let dSubject = document.getElementById("displaySubject")
    let dBody = document.getElementById("displayBody")
    let dClosing = document.getElementById("displayClosing")
    let dSignature = document.getElementById("displaySignature")


    const request = new Request("http://localhost:8080/get-template/" + templateID, {
        method: "GET",
    });

    let response = fetch(request)
        .then(response => response.json())
        .then(data => {
            titleBar.innerText = "Title: " + data.title
            titleBar.value = templateID
            dSubject.innerText = data.subject
            dBody.innerText = data.body
            dClosing.innerText = data.closing
            dSignature.innerText = data.signature
        })
        .catch(function(){

        });
}

function deleteTemplate(){
    let currentTID = document.getElementById("titleBar").value
    
    const request = new Request("http://localhost:8080/delete/" + currentTID, {
        method: "DELETE",
    });

    let response = fetch(request)
        .then(response => response.json())
        .then(data => {
            window.location.reload();
            console.log(data)
        })
        .catch(function(){

        });
}