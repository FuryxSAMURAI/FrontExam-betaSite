let preloader = document.querySelector('.preloader__wrapper');
let body = document.querySelector('body');
window.onload = ()=>{
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 950);
}

function openMenu() {
    let open = document.querySelector('.header__container-menu-mobile-container')
  open.style.left = '0px'
  }
  function closeMenu() {
  let open = document.querySelector('.header__container-menu-mobile-container')
  open.style.left = '-3000px'
  }

let parsedLocal = JSON.parse(localStorage.getItem('bag'))
// console.log(parsedLocal);

let outLocal = document.getElementById('localStorageOut');

let cardsContainer = document.createElement('div');
cardsContainer.classList.add('main__container-cart-product-container');
let cardsImg = document.createElement('img');
cardsImg.classList.add('main__container-cart-product-img');
cardsImg.src = parsedLocal.img;
let cardsProductInfo = document.createElement('div');
cardsProductInfo.classList.add('main__container-cart-product-info');
let cardsBrandName = document.createElement('div');
cardsBrandName.classList.add('main__container-cart-product-brand-name');
cardsBrandName.innerHTML = 'Бренд:' + '<span>'+parsedLocal.brand+'</span';
let cardsName = document.createElement('div');
cardsName.classList.add('main__container-cart-product-name');
cardsName.innerHTML = parsedLocal.name;
let cardsPrice = document.createElement('div');
cardsPrice.classList.add('main__container-cart-product-price');
cardsPrice.innerHTML = 'Ціна:' + '<span>'+parsedLocal.price+'</span>';

outLocal.appendChild(cardsContainer)
cardsContainer.appendChild(cardsImg)
cardsContainer.appendChild(cardsProductInfo)
cardsProductInfo.appendChild(cardsBrandName)
cardsProductInfo.appendChild(cardsName)
cardsProductInfo.appendChild(cardsPrice)


// API KEY - q6oRuLWfr4YeZBk3U9ZaBdvY42WrpTzq
// API Site - https://apilayer.com/marketplace/order_complete?id=223&txn=free&e=Sign%20Up&l=Success;
// allSumForPayTranslated = document.getElementById('allSumForPayTranslated');
// sumForPayTranslatedCheck = document.getElementById('allSumForPayTranslatedCheck');
// sumForPayTranslated = document.getElementById('allSumForPay');
// sumForPay = document.getElementById('allSumForPay').value;

let sumOut = document.getElementById('sumFromLocalStorage')
sumOut.innerHTML = parsedLocal.price;

sumOutSecond = document.getElementById('sumFromLocalStorageTranslated')
sumOutSecond.innerHTML = sumOut.textContent;

// promocodes = ['NEWSITE','FORPEOPLE','5PERDISCOUNT'];
let promocode = 'NEWSITE';
let promoInput = document.querySelector('.main__container-check-promocode-input input');
// Submit = document.querySelector('.main__container-check-promocode-input input[type="submit"]');
let formSubmit = document.querySelector('.main__container-check-promocode-input form');
formSubmit.onsubmit = ()=>{
            let promoTest = /\d/i;
            let promoFlag = false;
            // console.log(promocode);
            // console.log(promoInput.value);
            if (!promoTest.test(promoInput) || promoInput.value === '') {
                promoInput.style.border = '1px solid red';
                promoInput.style.color = 'red';
                return promoFlag;
            }else{
                promoInput.style.border = '1px solid black';
                promoFlag = true;
            }
            if (promoInput.value===promocode) {
                console.log(1);
                promoInput.style.border = '1px solid black';
                promoFlag = true;
                // promoInput.style.border = '1px solid red';
            }
            if (promoFlag == true) {
                sumOut.innerHTML = '';
                return true;
            }else{
                return false;
            }
    // for (promocode of promocodes) {
    //     let promoTest = /\d/i;
    //     let promoFlag = false;
    //         console.log(promoInput.value);
    //         console.log(promocode);
    //         if (promoInput.value===promocode) {
    //             console.log(1);
    //             promoInput.style.border = '1px solid black';
    //             promoFlag = true;
    //             // promoInput.style.border = '1px solid red';
    //         }
    //         if (!promoTest.test(promoInput) || promoInput.value === '') {
    //             promoInput.style.border = '1px solid red';
    //             promoInput.style.color = 'red';
    //             return promoFlag;
    //         }else{
    //             promoInput.style.border = '1px solid black';
    //             promoFlag = true;
    //         }
    //         if (promoFlag == true) {
    //             sumOut.innerHTML = ''
    //             return true;
    //         }else{
    //             return false;
    //         }
    //     }
    }
// let newSum = '';
// for(let i=0;i<sumForPay.length;i++){
//     if (sumForPay[i]>=0 || sumForPay[i] <= 9) {
//         newSum += sumForPay[i];
//     }
// }
// console.log(newSum);
// console.log(newSum);
// console.log(sumForPay);
let a = sumOut.innerHTML.replace(' грн','')
// console.log(a.replace(' ',''));
function uahToUsd(){
    let requestToUSD;
    if (window.XMLHttpRequest) {
        requestToUSD = new XMLHttpRequest();
    }else{
        requestToUSD = ActiveXObject("Microsoft.XMLHTTP");
    }
    requestToUSD.open("GET", "https://api.apilayer.com/currency_data/convert?base=UAH&symbols=USD&amount=5"+a.replace(' ','')+"&apikey=q6oRuLWfr4YeZBk3U9ZaBdvY42WrpTzq");
    
    requestToUSD.onload = () => {
        let currency = JSON.parse(requestToUSD.response);
        console.log(currency);
        if(requestToUSD.status == 200){
            sumOut.innerHTML = Math.round(currency.result) + ' $';
            sumOutSecond.innerHTML = Math.round(currency.result) + ' $';
        }else if(requestToUSD.status == 404){
            console.log(false);
        }
    }
    requestToUSD.send();
}
function usdToUah(){
    let requestToUAH;
    if (window.XMLHttpRequest) {
        requestToUAH = new XMLHttpRequest();
    }else{
        requestToUAH = ActiveXObject("Microsoft.XMLHTTP");
    }
    requestToUAH.open("GET", "https://api.apilayer.com/currency_data/convert?base=USD&symbols=UAH&amount=5"+a.replace(' ','')+"&apikey=q6oRuLWfr4YeZBk3U9ZaBdvY42WrpTzq");
    
    requestToUAH.onload = () => {
        let currency = JSON.parse(requestToUAH.response);
        console.log(currency);
        if(requestToUAH.status == 200){
            sumOut.innerHTML = Math.round(currency.result) + ' ₴';
            sumOutSecond.innerHTML = Math.round(currency.result) + ' ₴';
        }else if(requestToUAH.status == 404){
            console.log(false);
        }
    }
    requestToUAH.send();
}