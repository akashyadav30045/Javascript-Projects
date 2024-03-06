const inputfield = document.querySelector("#password");
const outfield = document.querySelector("#output");

inputfield.addEventListener('input',()=>{
    let password = inputfield.value;
    if(password.length < 8){
        outfield.innerHTML='Password is too short';
    }
    else if(password.length < 12){
        outfield.innerHTML='Password is Medium';
    } 
    else{
        outfield.innerHTML='Password is Strong';
    }
})