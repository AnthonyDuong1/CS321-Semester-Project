function logout(){
    localStorage.removeItem("ID")
    window.location.href = "http://localhost:8080/"
    window.location.replace("http://localhost:8080/")            
}

function openTab(event, tabId) {
    document.querySelectorAll('.content').forEach(content => {
        content.classList.add('hidden');
    });
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.remove('hidden');
    event.currentTarget.classList.add('active');
}

//Create template functions

function publishTemplate(){
    let subject = document.getElementById("email-subject").value
    let introduction = document.getElementById("introduction").value
    let action = document.getElementById("call-to-action").value
    let closing = document.getElementById("closing").value
    let signature = document.getElementById("signature").value
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
        body: JSON.stringify({subject: subject, introduction: introduction, action: action, closing: closing, signature: signature, uid: uid})
    });

    let response = fetch(request)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(function(){

    });
}

function clearFields(){
    document.querySelectorAll('.field').forEach(field => {
        field.children[1].value = ''
    })
}

//Explore template functions

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
                templateLists.innerHTML += "<li onclick='templateClick(event) '" + "value='" + template.tid + "'" + ">" + template.subject + "</li>"
            })
        })
        .catch(function(){

        });
}

function templateClick(event){
    console.log(event.target.value)
    displayTemplate(event.target.value)
}

function displayTemplate(templateID){
    let titleBar = document.getElementById("titleBar")
    let dSubject = document.getElementById("displaySubject")
    let dIntro = document.getElementById("displayIntroduction")
    let dAction = document.getElementById("displayAction")
    let dClosing = document.getElementById("displayClosing")
    let dSignature = document.getElementById("displaySignature")


    const request = new Request("http://localhost:8080/get-template/" + templateID, {
        method: "GET",
    });

    let response = fetch(request)
        .then(response => response.json())
        .then(data => {
            titleBar.innerText = "Title: " + data.subject
            titleBar.value = templateID
            dSubject.innerText = data.subject
            dIntro.innerText = data.introduction
            dAction.innerText = data.action
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
