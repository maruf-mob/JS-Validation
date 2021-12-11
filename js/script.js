//1.0 get elements from html;

var useName=document.getElementById('userName');
var useErr=document.getElementById('userErr');

var useEmail=document.getElementById('useEmail');
var emailErr=document.getElementById('emailErr');

var userPass=document.getElementById('userPass');
var passErr=document.getElementById('passErr');

var rePass=document.getElementById('rePass');
var rePassErr=document.getElementById('rePassErr');

//2.0 create a function for submit button;
function subm(){
    
    //user name;
    if(userName.value == ""){
        userName.style.borderColor = "red";
        userName.focus();
        userErr.innerHTML ="Please Fill Your Name First"; 
        return false;
    }
    //email;
    if(userEmail.value == ""){
        userEmail.style.borderColor = "red";
        userEmail.focus();
        emailErr.innerHTML ="Please Fill Your Email First"; 
        return false;
    }
    //user pass;
    if(userPass.value == ""){
        userPass.style.borderColor = "red";
        userPass.focus();
        passErr.innerHTML ="Please Input Your Password"; 
        return false;
    }
    if(userPass.value.length <= 5){
        userPass.style.borderColor = "red";
        userPass.focus();
        passErr.innerHTML ="Please Insert Atleast 6 Characters"; 
        return false;
    }
    //confirm pass;
    if(rePass.value == ""){
        rePass.style.borderColor = "red";
        rePass.focus();
        rePassErr.innerHTML ="Please Confirm Your Password"; 
        return false;
    }
    
    if(rePass.value != userPass.value){
        rePass.style.borderColor = "red";
        rePass.focus();
        rePassErr.innerHTML ="Password and confirm password did not match"; 
        return false;
    }
}

//3.0 to create a function to remove error after filling input tag;
function errRmv(){
    
    //user name;
    if(userName.value != ""){
        userName.style.brderColor ="#ddd";
        userErr.innerHTML= "";
    }
    //email;
    if(userEmail.value != ""){
        userEmail.style.brderColor ="#ddd";
        emailErr.innerHTML= "";
    }
    //user pass;
    if(userPass.value != ""){
        userPass.style.brderColor ="#ddd";
        passErr.innerHTML= "";
    }
    //confirm pass;
    if(rePass.value != ""){
        rePass.style.brderColor ="#ddd";
        rePassErr.innerHTML= "";
    }
}

//4.0 create an event in js;

userName.addEventListener('blur',errRmv);

userEmail.addEventListener('blur',errRmv);

userPass.addEventListener('blur',errRmv);

rePass.addEventListener('blur',errRmv);


//modal js;

var btn = document.getElementById('btn');
var modal = document.getElementById('modal');
var close = document.getElementById('close');

btn.addEventListener('click',function(){
   modal.style.display ="flex"; 
});
close.addEventListener('click',function(){
   modal.style.display ="none"; 
});
