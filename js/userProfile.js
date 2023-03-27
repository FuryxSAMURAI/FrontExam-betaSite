function openMenu() {
    let open = document.querySelector('.header__menu-container-wrapper')
  open.style.left = '0px'
}
function closeMenu() {
  let open = document.querySelector('.header__menu-container-wrapper')
open.style.left = '-3000px'
}
function LogIn() {
    let signUp = document.querySelector('.main__container-form-wrapper');
    signUp.style.display = 'none';
    let logIn = document.querySelector('.main__container-form-wrapper-logIn');
    logIn.style.display = 'block';
}
function SignUp() {
    let signUp = document.querySelector('.main__container-form-wrapper');
    signUp.style.display = 'block';
    let logIn = document.querySelector('.main__container-form-wrapper-logIn');
    logIn.style.display = 'none';
}

let preloader = document.querySelector('.preloader__wrapper');
let body = document.querySelector('body');
window.onload = ()=>{
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 950);
}
// localStorage.clear();

// let email = document.getElementById('userEmailRegistration');
// let emailValHelp = document.querySelector('.profile__container-registration--user-name-correct-email');
// email.value = '';
// let pass = document.getElementById('userPassRegistration');
// let passValHelp = document.querySelector('.profile__container-registration--user-password-correct-pass');
// pass.value = '';
// if (localStorage.getItem('email') !== null || localStorage.getItem('pass') !== null) {
//     email.value = localStorage.getItem('email');
//     pass.value = localStorage.getItem('pass');
// }
// let form = document.querySelector('.profile__container--registration-form');
// form.onsubmit = function(){
//     // ! Check email
//     let emailFlag = false;
//     let emailVal = document.getElementById('userEmailRegistration').value;
//     let emailValHelp = document.querySelector('.profile__container-registration--user-name-correct-email');
//     let checkEmailVal = /[a-zA-Z0-9][@][g][m][a][i][l][.][c][o][m]/;
//     // console.log(emailVal);
//     if (!checkEmailVal.test(emailVal)) {
//         console.log('email must have @gmail.com');
//         email.style.cssText = 'border:1px solid red;color:red;';
//         emailValHelp.style.cssText = 'display:block;color:red;';
//         return emailFlag;
//     }else{
//         localStorage.setItem('email', emailVal);
//         email.style.cssText = 'border:1px solid black;color:black;';
//         emailValHelp.style.cssText = 'display:none;color:red;';
//         emailFlag = true;
//     }
//     // ! Check password
//     // let passShowHide = document.querySelector('.profile__container-registration--password img');
    
//     let passFlag = false;
//     let pass = document.getElementById('userPassRegistration');
//     let passVal = document.getElementById('userPassRegistration').value;
//     let passValHelp = document.querySelector('.profile__container-registration--user-password-correct-pass');
//     let checkPassVal = /[a-zA-Z0-9]/;
//     if (!checkPassVal.test(passVal) || passVal.length < 8) {
//         console.log('pas is not correct');
//         pass.style.cssText = 'border:1px solid red;color:red;';
//         passValHelp.style.cssText = 'display:block;color:red;';
//         return passFlag;
//     }else{
//         localStorage.setItem('pass', passVal);
//         pass.style.cssText = 'border:1px solid black;color:black;';
//         passValHelp.style.cssText = 'display:none;color:red;';
//         passFlag = true;
//     }

//     if (emailFlag === true || passFlag === true) {
//         return true;
//     }else{
//         return false;
//     }

//     // ! LOCAL STORAGE
// }
signInForm = document.querySelector('.main__container-form-wrapper')
let inputEmail = document.getElementById('userEmailRegistration')
let inputPass = document.getElementById('userPassRegistration')
inputEmail.value = '';
inputPass.value = '';
if (localStorage.getItem('email') != null || localStorage.getItem('password') != null) {
    inputEmail.value = localStorage.getItem('email');
    inputPass.value = localStorage.getItem('password');
}
signInForm.onsubmit = ()=>{
    let emailFlag = false;
    let inputEmailError = document.querySelector('.input-error-email');
    let inputEmailValue = document.getElementById('userEmailRegistration').value
    let inputEmailValueTest = /[a-zA-Z0-9][@][g][m][a][i][l][.][c][o][m]/i;
    if (!inputEmailValueTest.test(inputEmailValue)) {
        inputEmail.style.border = '1px solid red';
        inputEmail.style.color = 'red';
        inputEmailError.style.display = 'block';
        
        console.log(1);
        return emailFlag;
        
    }else{
        inputEmail.style.color = 'black';
        inputEmail.style.border = 'none';
        inputEmailError.style.display = 'none';
        console.log(2);
        emailFlag = true;
    }
    
    let passFlag = false;
    let inputPassError = document.querySelector('.input-error-pass')
    let inputPassValue = document.getElementById('userPassRegistration').value
    let inputPassValueTest = /[a-zA-Z0-9]/i;
    let passFromStorage = localStorage.getItem('password')
    if (!inputPassValueTest.test(inputPassValue) || inputPassValue.length<8 || inputPassValue != localStorage.getItem('password')) {
        inputPass.style.border = '1px solid red';
        inputPass.style.color = 'red';
        inputPassError.style.display = 'block';
        
        console.log(1);
        return passFlag;
        
    }else{
        inputPass.style.color = 'black';
        inputPass.style.border = 'none';
        inputPassError.style.display = 'none';

        console.log(2);
        passFlag = true
    }
    
    if (emailFlag == true || passFlag == true) {
        localStorage.setItem('email', inputEmailValue)
        localStorage.setItem('password', inputPassValue)
        window.open('../pages/profile.html')

        return true;
    }else{
        return false;
    }
}

LogInForm = document.querySelector('.main__container-form-wrapper-logIn');
let logInInputPhone = document.getElementById('userPhoneRegistration')
let logInInputEmail = document.getElementById('userEmailRegistrationLogIn')
let logInInputPass = document.getElementById('userPassRegistrationLogIn')
logInInputPhone.value = '';
logInInputEmail.value = '';
logInInputPass.value = '';
LogInForm.onsubmit = () =>{
    let logInEmailFlag = false;
    let logInInputEmailError = document.querySelector('.input-error-emailLogIn')
    let logInInputEmailValue = document.getElementById('userEmailRegistrationLogIn').value
    let logInInputEmailValueTest = /[a-zA-Z0-9][@][g][m][a][i][l][.][c][o][m]/i;
    if (!logInInputEmailValueTest.test(logInInputEmailValue)) {
        logInInputEmail.style.border = '1px solid red';
        logInInputEmail.style.color = 'red';
        logInInputEmailError.style.display = 'block';
        
        console.log(1);
        return logInEmailFlag;
        
    }else{
        logInInputEmail.style.color = 'black';
        logInInputEmail.style.border = 'none';
        logInInputEmailError.style.display = 'none';
        
        console.log(2);
        logInEmailFlag = true;
    }
    
    let logInPassFlag = false;
    let logInInputPassError = document.querySelector('.input-error-passLogIn')
    let logInInputPassValue = document.getElementById('userPassRegistrationLogIn').value
    let logInInputPassValueTest = /[a-zA-Z0-9]/i;
    if (!logInInputPassValueTest.test(logInInputPassValue) || logInInputPassValue.length<8) {
        logInInputPass.style.border = '1px solid red';
        logInInputPass.style.color = 'red';
        logInInputPassError.style.display = 'block';
        
        console.log(1);
        return logInPassFlag;
        
    }else{
        logInInputPass.style.color = 'black';
        logInInputPass.style.border = 'none';
        console.log(2);
        logInInputPassError.style.display = 'none';
        logInPassFlag = true
    }
    
    let logInConfirmPassFlag = false;
    let logInInputConfirmPassError = document.querySelector('.input-error-conf-passLogIn')
    let logInInputConfirmPass = document.getElementById('userConfirmPassRegistrationLogIn')
    let logInInputConfirmPassValue = document.getElementById('userConfirmPassRegistrationLogIn').value
    if (logInInputConfirmPassValue != logInInputPassValue) {
        logInInputConfirmPass.style.border = '1px solid red';
        logInInputConfirmPass.style.color = 'red';
        logInInputConfirmPassError.style.display = 'block';
        
        console.log(1);
        return logInConfirmPassFlag;
        
    }else{
        logInInputConfirmPass.style.color = 'black';
        logInInputConfirmPass.style.border = 'none';
        console.log(2);
        logInInputConfirmPassError.style.display = 'none';
        logInConfirmPassFlag = true
    }
    
    if (logInEmailFlag == true || logInPassFlag == true || logInConfirmPassFlag == true) {
        localStorage.setItem('email', logInInputEmailValue)
        localStorage.setItem('password', logInInputPassValue)
        localStorage.setItem('phone', logInInputPhone.value)

        window.open('../pages/profile.html')
        return true;
    }else{
        return false;
    }
    
}

let input = document.getElementById('userPassRegistration');
let imgHidePass = document.querySelector('.hidePass img');
let imgShowPass = document.querySelector('.showPass img');
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

let inputLogIn = document.getElementById('userPassRegistrationLogIn');
let imgHidePassLogIn = document.querySelector('.hidePassLogIn img');
let imgShowPassLogIn = document.querySelector('.showPassLogIn img');
function passShowLogIn() {
        inputLogIn.setAttribute('type','text')
        imgShowPassLogIn.style.display = 'none';
        imgHidePassLogIn.style.display = 'block';
    }
    function passHideLogIn() {
        inputLogIn.setAttribute('type','password')
        imgShowPassLogIn.style.display = 'block';
        imgHidePassLogIn.style.display = 'none';
}
let confirmInputLogIn = document.getElementById('userConfirmPassRegistrationLogIn');
let confirmImgHidePassLogIn = document.querySelector('.confirmHidePass img');
let confirmImgShowPassLogIn = document.querySelector('.confirmShowPass img');
function confirmPassShowLogIn() {
        confirmInputLogIn.setAttribute('type','text')
        confirmImgShowPassLogIn.style.display = 'none';
        confirmImgHidePassLogIn.style.display = 'block';
    }
    function confirmPassHideLogIn() {
        confirmInputLogIn.setAttribute('type','password')
        confirmImgShowPassLogIn.style.display = 'block';
        confirmImgHidePassLogIn.style.display = 'none';
}
    
var element = document.getElementById('userPhoneRegistration');
var maskOptions = {
  mask: '+{38}(000)000-00-00',
  lazy: false
};
var mask = IMask(element, maskOptions);