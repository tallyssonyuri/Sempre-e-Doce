var show_button = document.querySelector(".show-button")
var descricao = document.getElementById("descricao1")
var prod1 = document.getElementById("prod1")

show_button.addEventListener("click", () => {
    if (descricao.style.display != "none") {
        descricao.style.display = "none"
        prod1.style.display = "block"
    }
    else {
        descricao.style.display = "block"
        prod1.style.display = "none"
    }
})