let preloader = document.querySelector('.preloader__wrapper');
let body = document.querySelector('body');
window.onload = ()=>{
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 2000);
}

// ! FORM
form = document.querySelector('.profile__container-form')
form.onsubmit = ()=>{
    let nameInputFlag = false;
    let nameInputEdit = document.querySelector('.profile__container-main-input-name img');
    let nameInput = document.getElementById('userName')
    let nameInputError = document.querySelector('.name-error')
    let nameInputValue = document.getElementById('userName').value
    let nameInputValueTest = /[а-яА-яA-Za-z]/i;
    if (!nameInputValueTest.test(nameInputValue)||nameInputValue.length == 0) {
        nameInput.style.border = '1px solid red';
        nameInput.style.color = 'red';
        nameInputError.style.display = 'block';
        return nameInputFlag;
    }else{
        nameInput.setAttribute('readonly', 'readonly')
        nameInput.style.border = 'none';
        nameInput.style.color = 'black';
        nameInputError.style.display = 'none';
        nameInputFlag = true;
    }
    nameInputEdit.onclick = () => {
        nameInput.removeAttribute('readonly', 'readonly');
    }
    
    let surnameInputFlag = false;
    let surnameInputEdit = document.querySelector('.profile__container-main-input-surname img');
    let surnameInput = document.getElementById('userSurname')
    let surnameInputError = document.querySelector('.surname-error')
    let surnameInputValue = document.getElementById('userSurname').value
    let surnameInputValueTest = /[а-яА-яA-Za-z]/i;
    if (!surnameInputValueTest.test(surnameInputValue)||surnameInputValue.length == 0) {
        surnameInput.style.border = '1px solid red';
        surnameInput.style.color = 'red';
        surnameInputError.style.display = 'block';
        return surnameInputFlag;
    }else{
        surnameInput.setAttribute('readonly', 'readonly')
        surnameInput.style.border = 'none';
        surnameInput.style.color = 'black';
        surnameInputError.style.display = 'none';
        surnameInputFlag = true;
    }
    surnameInputEdit.onclick = () => {
        surnameInput.removeAttribute('readonly', 'readonly');
    }
    
    let middleNameInputFlag = false;
    let middleNameInputEdit = document.querySelector('.profile__container-main-input-middle-name img');
    let middleNameInput = document.getElementById('userMiddleName')
    let middleNameInputError = document.querySelector('.middle-name-error')
    let middleNameInputValue = document.getElementById('userMiddleName').value
    let middleNameInputValueTest = /[а-яА-яA-Za-z]/i;
    if (!middleNameInputValueTest.test(middleNameInputValue)||middleNameInputValue.length == 0) {
        middleNameInput.style.border = '1px solid red';
        middleNameInput.style.color = 'red';
        middleNameInputError.style.display = 'block';
        return middleNameInputFlag;
    }else{
        middleNameInput.setAttribute('readonly', 'readonly');
        middleNameInput.style.border = 'none';
        middleNameInput.style.color = 'black';
        middleNameInputError.style.display = 'none';
        middleNameInputFlag = true;
    }
    middleNameInputEdit.onclick = () => {
        middleNameInput.removeAttribute('readonly', 'readonly');
    }
    
    let citySelectFlag = false;
    let citySelectEdit = document.querySelector('.profile__container-main-input-city img');
    let citySelect = document.getElementById('citySelect')
    let citySelectError = document.querySelector('.city-error')
    let citySelectValue = document.getElementById('citySelect').value
    console.log(citySelectValue);
    if (citySelectValue == 0) {
        citySelect.style.border = '1px solid red';
        citySelectError.style.display = 'block';
        return citySelectFlag;
    }else{
        citySelect.setAttribute('readonly', 'readonly');
        citySelect.style.border = 'none';
        citySelectError.style.display = 'none';
        citySelectFlag = true;
    }
    citySelectEdit.onclick = () => {
        citySelect.removeAttribute('readonly', 'readonly');
    }
    
    let emailInputFlag = false;
    let emailInputEdit = document.querySelector('.profile__container-main-input-email img');
    let emailInput = document.getElementById('userEmail')
    let emailInputError = document.querySelector('.email-error')
    let emailInputValue = document.getElementById('userEmail').value
    let emailInputValueTest = /[a-zA-Z0-9][@][g][m][a][i][l][.][c][o][m]/i;
    if (!emailInputValueTest.test(emailInputValue)||emailInputValue.length == 0) {
        emailInput.style.border = '1px solid red';
        emailInput.style.color = 'red';
        emailInputError.style.display = 'block';
        return emailInputFlag;
    }else{
        emailInput.setAttribute('readonly', 'readonly');
        emailInput.style.border = 'none';
        emailInput.style.color = 'black';
        emailInputError.style.display = 'none';
        emailInputFlag = true;
    }
    emailInputEdit.onclick = () => {
        emailInput.removeAttribute('readonly', 'readonly');
    }

    let phoneInputFlag = false;
    let phoneInputEdit = document.querySelector('.profile__container-main-input-phone img');
    let phoneInput = document.getElementById('userPhone')
    let phoneInputError = document.querySelector('.phone-error')
    let phoneInputValue = document.getElementById('userPhone').value
    let phoneInputValueTest = /[0-9]/i;
    if (!phoneInputValueTest.test(phoneInputValue)||phoneInputValue.length == 0) {
        phoneInput.style.border = '1px solid red';
        phoneInput.style.color = 'red';
        phoneInputError.style.display = 'block';
        return phoneInputFlag;
    }else{
        phoneInput.setAttribute('readonly', 'readonly');
        phoneInput.style.border = 'none';
        phoneInput.style.color = 'black';
        phoneInputError.style.display = 'none';
        phoneInputFlag = true;
    }
    phoneInputEdit.onclick = () => {
        phoneInput.removeAttribute('readonly', 'readonly');
    }
    
    if (nameInputFlag == true || surnameInputFlag == true || middleNameInputFlag == true || citySelectFlag == true || emailInputFlag == true || phoneInputFlag == true) {
        localStorage.setItem('name', nameInputValue);
        localStorage.setItem('surname', surnameInputValue);
        localStorage.setItem('middleName', middleNameInputValue);
        localStorage.setItem('city', citySelectValue);
        localStorage.setItem('email', emailInputValue);
        localStorage.setItem('phone', phoneInputValue);
        return true;
    }else{
        return false;
    }
}