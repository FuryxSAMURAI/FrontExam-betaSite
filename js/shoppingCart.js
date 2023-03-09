let preloader = document.querySelector('.preloader__wrapper');
let body = document.querySelector('body');
window.onload = ()=>{
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 950);
}
// API KEY - q6oRuLWfr4YeZBk3U9ZaBdvY42WrpTzq
// API Site - https://apilayer.com/marketplace/order_complete?id=223&txn=free&e=Sign%20Up&l=Success;
allSumForPayTranslated = document.getElementById('allSumForPayTranslated');
sumForPayTranslatedCheck = document.getElementById('allSumForPayTranslatedCheck');
sumForPayTranslated = document.getElementById('allSumForPay');
sumForPay = document.getElementById('allSumForPay').textContent;

promocodes = ['NEWSITE','FORPEOPLE','5PERDISCOUNT'];
promoInput = document.querySelector('.main__container-check-promocode-input input');
// Submit = document.querySelector('.main__container-check-promocode-input input[type="submit"]');
formSubmit = document.querySelector('.main__container-check-promocode-input form');
formSubmit.onsubmit = ()=>{
    for (promocode of promocodes) {
        let promoTest = /\d/i;
        let promoFlag = false;
            console.log(promoInput.value);
            if (promoInput.value===promocode) {
                console.log(1);
                promoInput.style.border = '1px solid black';
                promoFlag = true;
                // promoInput.style.border = '1px solid red';
            }
            if (!promoTest.test(promoInput) || promoInput.value === '') {
                promoInput.style.border = '1px solid red';
                promoInput.style.color = 'red';
                return promoFlag;
            }else{
                promoInput.style.border = '1px solid black';
                promoFlag = true;
            }
            if (promoFlag == true) {
                return true;
            }else{
                return false;
            }
        }
    }
let newSum = '';
for(let i=0;i<sumForPay.length;i++){
    if (sumForPay[i]>=0 || sumForPay[i] <= 9) {
        newSum += sumForPay[i];
    }
}
console.log(newSum);
// console.log(newSum);
// console.log(sumForPay);
function uahToUsd(){
    let requestToUSD;
    if (window.XMLHttpRequest) {
        requestToUSD = new XMLHttpRequest();
    }else{
        requestToUSD = ActiveXObject("Microsoft.XMLHTTP");
    }
    requestToUSD.open("GET", "https://api.apilayer.com/exchangerates_data/convert?to=USD&from=UAH&amount="+newSum.replace(' ', '')+"&apikey=q6oRuLWfr4YeZBk3U9ZaBdvY42WrpTzq");
    
    requestToUSD.onload = () => {
        let currency = JSON.parse(requestToUSD.response);
        console.log(currency);
        if(requestToUSD.status == 200){
            sumForPayTranslatedCheck.innerHTML = Math.round(currency.result) + ' $';
            allSumForPayTranslated.innerHTML = Math.round(currency.result) + ' $';
        }else if(requestToUSD.status == 404){
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
    requestToUAH.open("GET", "https://api.apilayer.com/exchangerates_data/convert?to=UAH&from=UAH&amount="+newSum.replace(' ', '')+"&apikey=q6oRuLWfr4YeZBk3U9ZaBdvY42WrpTzq");
    
    requestToUAH.onload = () => {
        let currency = JSON.parse(requestToUAH.response);
        console.log(currency);
        if(requestToUAH.status == 200){
            sumForPayTranslatedCheck.innerHTML = Math.round(currency.result) + ' ₴';
            allSumForPayTranslated.innerHTML = Math.round(currency.result) + ' ₴';
        }else if(requestToUAH.status == 404){
        }
    }
    requestToUAH.send();
}