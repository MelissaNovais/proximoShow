
let btnClose = document.getElementsByClassName("btn-close");
let logo = document.getElementsByClassName("logo")[0];
let iconSignup = document.getElementById("icon-signup");
let iconLogin = document.getElementById("icon-login");

iconSignup.addEventListener("click", function () {
    document.getElementById("form-signup").classList.add("show");
    document.getElementById("form-login").classList.remove("show");
    removeLogo();
})

iconLogin.addEventListener("click", function () {
    document.getElementById("form-login").classList.add("show");
    document.getElementById("form-signup").classList.remove("show");
    removeLogo();
})

btnClose[0].addEventListener("click", function () {
    addLogo();
});
btnClose[1].addEventListener("click", function () {
    addLogo();
});

function removeLogo() {
    logo.classList.remove("show");
    logo.classList.add("hide");
}

//Verificar se nao tem nenhum form ativo e mostrar o logo
function addLogo() {
    let logo = document.getElementsByClassName("logo")[0];
    logo.classList.add("show");
    document.getElementById("form-signup").classList.remove("show");
    document.getElementById("form-login").classList.remove("show");
}


