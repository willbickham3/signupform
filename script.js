let psw = document.querySelector("#user-password");
let confirmPsw = document.querySelector("#confirm-user-password");

psw.onblur = function() {
    let lowerCaseLetter = /[a-z]/g;
    let upperCaseLetter = /[A-Z]/g;
    let num = /[0-9]/g;
    if(psw.value.match(lowerCaseLetter && upperCaseLetter && num) && psw.value.length >= 8) {
        psw.classList.remove("invalid");
        psw.classList.add("valid");
}   else {
        psw.classList.remove("valid");
        psw.classList.add("invalid");
}
}

confirmPsw.onblur = function() {
    if(confirmPsw.value === psw.value) {
        confirmPsw.classList.remove("invalid");
        confirmPsw.classList.add("valid");
}   else {
        confirmPsw.classList.remove("valid")
        confirmPsw.classList.add("invalid")

}
}