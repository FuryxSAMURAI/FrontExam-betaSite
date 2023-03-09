let preloader = document.querySelector('.preloader__wrapper');
let body = document.querySelector('body');
window.onload = ()=>{
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 950);
}
function openMenu() {
    let open = document.querySelector('.header__menu-container-wrapper')
    open.style.left = '0px'
    console.log(2);
  }
  function closeMenu() {
    let open = document.querySelector('.header__menu-container-wrapper')
  open.style.left = '-3000px'
    console.log(2);
}
function closeCallBackContainer() {
    document.querySelector('.call-back__container').style.position = 'fixed';
    document.querySelector('.call-back__container').style.bottom = '-200px';
}

function openCallBackContainer() {
    document.querySelector('.call-back__container').style.position = 'fixed';
    document.querySelector('.call-back__container').style.bottom = '0px';
}

// ! call back input number
 let callBackNumber = document.getElementById('callBackUserNumber');
 let callBackNumberValue = document.getElementById('callBackUserNumber').value;
 callBackNumber.value = '+380';
 console.log(callBackNumber.value);
 console.log(callBackNumberValue.length);
 callBackSendUserNum.onclick = () => {     
     if (callBackNumberValue.length < 5 || callBackNumberValue.length > 13) {
        callBackNumber.style.color = 'red';
        callBackNumber.style.border = '1px solid red';
        return false;
    }else{
         callBackNumber.style.color = 'black';
         callBackNumber.style.border = '1px solid #ccc';
         return true;
     }
    //  return true;
 }