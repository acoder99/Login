document.getElementById("btn").addEventListener("click" , function(){

mytext();
mypassword();
})


function mytext(){
let text  = document.getElementById('text').value;
let err1 = document.getElementById('err1');
let inp = document.querySelector('input');

if(text == ""){
err1.innerHTML = 'qiymat bo\'sh';
inp.classList.add('err')
inp.classList.remove('valid');

}
else if(text.length > 0){
err1.innerHTML = "";
inp.classList.remove('err')
inp.classList.add('valid');

}


}

function mypassword(){
    let password  = document.getElementById('password').value;
    let err2 = document.getElementById('err2');
    let inp2 = document.getElementById('password');
    
    if(password == ""){
    err2.innerHTML = 'qiymat bo\'sh';
    inp2.classList.add('err')
    inp2.classList.remove('valid');
    
    }
    else if(password.length > 0){
    err2.innerHTML = "";
     inp2.classList.add('valid');
    inp2.classList.remove('err') 
    }
    
    
    }