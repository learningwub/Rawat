var loginscreen = document.getElementById('loginscreen')
console.log(loginscreen)
console.log(typeof(loginscreen))
function closeLogin() {
    console.log('Hi')
}
loginscreen.addEventListener(onclick,closeLogin)
closeLogin()