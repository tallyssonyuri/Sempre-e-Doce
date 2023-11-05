var show_button1 = document.querySelector(".show-button")
var show_button2 = document.querySelector(".show-button2")
var show_button3 = document.querySelector(".show-button3")
var show_button4 = document.querySelector(".show-button4")
var show_button5 = document.querySelector(".show-button5")
var show_button6 = document.querySelector(".show-button6")

var descricao1 = document.getElementById("descricao1")
var prod1 = document.getElementById("prod1")
var descricao2 = document.getElementById("descricao2")
var prod2 = document.getElementById("prod2")
var descricao3 = document.getElementById("descricao3")
var prod3 = document.getElementById("prod3")
var descricao4 = document.getElementById("descricao4")
var prod4 = document.getElementById("prod4")
var descricao5 = document.getElementById("descricao5")
var prod5 = document.getElementById("prod5")
var descricao6 = document.getElementById("descricao6")
var prod6 = document.getElementById("prod6")

show_button1.addEventListener("click", () => {
    if (descricao1.style.display != "none") {
        descricao1.style.display = "none"
        prod1.style.display = "block"
        show_button1.textContent = "Mais sobre"
    }
    else {
        descricao1.style.display = "block"
        descricao1.style.width = "290px"
        prod1.style.display = "none"
        show_button1.textContent = "Voltar"
    }
})

show_button2.addEventListener("click", () => {
    if (descricao2.style.display != "none") {
        descricao2.style.display = "none"
        prod2.style.display = "block"
        show_button2.textContent = "Mais sobre"
    }
    else {
        descricao2.style.display = "block"
        descricao2.style.width = "290px"
        prod2.style.display = "none"
        show_button2.textContent = "Voltar"
    }
})

show_button3.addEventListener("click", () => {
    if (descricao3.style.display != "none") {
        descricao3.style.display = "none"
        prod3.style.display = "block"
        show_button3.textContent = "Mais sobre"
    }
    else {
        descricao3.style.display = "block"
        descricao3.style.width = "290px"
        prod3.style.display = "none"
        show_button3.textContent = "Voltar"
    }
})

show_button4.addEventListener("click", () => {
    if (descricao4.style.display != "none") {
        descricao4.style.display = "none"
        prod4.style.display = "block"
        show_button4.textContent = "Mais sobre"
    }
    else {
        descricao4.style.display = "block"
        descricao4.style.width = "290px"
        prod4.style.display = "none"
        show_button4.textContent = "Voltar"
    }
})

show_button5.addEventListener("click", () => {
    if (descricao5.style.display != "none") {
        descricao5.style.display = "none"
        prod5.style.display = "block"
        show_button5.textContent = "Mais sobre"
    }
    else {
        descricao5.style.display = "block"
        descricao5.style.width = "290px"
        prod5.style.display = "none"
        show_button5.textContent = "Voltar"
    }
})

show_button6.addEventListener("click", () => {
    if (descricao6.style.display != "none") {
        descricao6.style.display = "none"
        prod6.style.display = "block"
        show_button6.textContent = "Mais sobre"
    }
    else {
        descricao6.style.display = "block"
        descricao6.style.width = "290px"
        prod6.style.display = "none"
        show_button6.textContent = "Voltar"
    }
})