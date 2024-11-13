var createBtn = document.getElementById("createTemplate")

createBtn.addEventListener("click", createTemplate)

function createTemplate(){
    window.location.href = "http://localhost:8080/create-template"
    window.location.replace("http://localhost:8080/create-template")
}