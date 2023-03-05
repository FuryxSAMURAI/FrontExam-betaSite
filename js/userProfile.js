let preloader = document.querySelector('.preloader__wrapper');
let body = document.querySelector('body');
window.onload = ()=>{
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 950);
}
let email = document.getElementById('userEmailRegistration');
let emailValHelp = document.querySelector('.profile__container-registration--user-name-correct-email');
email.value = '';
let pass = document.getElementById('userPassRegistration');
let passValHelp = document.querySelector('.profile__container-registration--user-password-correct-pass');
pass.value = '';
if (localStorage.getItem('email') !== null || localStorage.getItem('pass') !== null) {
    email.value = localStorage.getItem('email');
    pass.value = localStorage.getItem('pass');
}
let form = document.querySelector('.profile__container--registration-form');
form.onsubmit = function(){
    // ! Check email
    let emailFlag = false;
    let emailVal = document.getElementById('userEmailRegistration').value;
    let emailValHelp = document.querySelector('.profile__container-registration--user-name-correct-email');
    let checkEmailVal = /[a-zA-Z0-9][@][g][m][a][i][l][.][c][o][m]/;
    // console.log(emailVal);
    if (!checkEmailVal.test(emailVal)) {
        console.log('email must have @gmail.com');
        email.style.cssText = 'border:1px solid red;color:red;';
        emailValHelp.style.cssText = 'display:block;color:red;';
        return emailFlag;
    }else{
        localStorage.setItem('email', emailVal);
        email.style.cssText = 'border:1px solid black;color:black;';
        emailValHelp.style.cssText = 'display:none;color:red;';
        emailFlag = true;
    }
    // ! Check password
    // let passShowHide = document.querySelector('.profile__container-registration--password img');
    
    let passFlag = false;
    let pass = document.getElementById('userPassRegistration');
    let passVal = document.getElementById('userPassRegistration').value;
    let passValHelp = document.querySelector('.profile__container-registration--user-password-correct-pass');
    let checkPassVal = /[a-zA-Z0-9]/;
    if (!checkPassVal.test(passVal) || passVal.length < 8) {
        console.log('pas is not correct');
        pass.style.cssText = 'border:1px solid red;color:red;';
        passValHelp.style.cssText = 'display:block;color:red;';
        return passFlag;
    }else{
        localStorage.setItem('pass', passVal);
        pass.style.cssText = 'border:1px solid black;color:black;';
        passValHelp.style.cssText = 'display:none;color:red;';
        passFlag = true;
    }

    if (emailFlag === true || passFlag === true) {
        return true;
    }else{
        return false;
    }

    // ! LOCAL STORAGE
}
let input = document.getElementById('userPassRegistration');
let imgHidePass = document.querySelector('.hidePass');
let imgShowPass = document.querySelector('.showPass');
function passShow() {
        input.setAttribute('type','text')
        imgShowPass.style.display = 'none';
        imgHidePass.style.display = 'block';
    }
    function passHide() {
        input.setAttribute('type','password')
        imgShowPass.style.display = 'block';
        imgHidePass.style.display = 'none';
}
    