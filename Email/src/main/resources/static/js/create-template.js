var exploreBtn = document.getElementById("exploreTemplate")

exploreBtn.addEventListener("click", exploreTemplate)

function exploreTemplate(){
    window.location.href = "http://localhost:8080/explore-template"
    window.location.replace("http://localhost:8080/explore-template")
}