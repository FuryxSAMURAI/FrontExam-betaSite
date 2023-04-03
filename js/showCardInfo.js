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

let outImg = document.querySelector('.main__container-side-card-images-get')

let fetImg = localStorage.getItem('cardForMoreInfoImg');
let img = document.createElement('img');
img.src = fetImg;
outImg.appendChild(img);

let outCardInfo = document.querySelector('.main__container-side-card-info-out')

let outSize = localStorage.getItem('cardForMoreInfoSizes');
let outBrandName = localStorage.getItem('cardForMoreInfoBrandName');
let outName = localStorage.getItem('cardForMoreInfoName');
let outPriceForNews = localStorage.getItem('cardForMoreInfoPriceNews');
let outPrice = localStorage.getItem('cardForMoreInfoPrice');
var outPriceDisc = localStorage.getItem('cardForMoreInfoPriceDisc');
let outPriceSpan = document.createElement('span');

let cardInfoBlockSize = document.createElement('div');
cardInfoBlockSize.classList.add('main__container-side-card-info-size')
let cardInfoBlockBrandName = document.createElement('div');
cardInfoBlockBrandName.classList.add('main__container-side-card-info-brand-name')
let cardInfoBlockName = document.createElement('div');
cardInfoBlockName.classList.add('main__container-side-card-info-name')
let cardInfoBlockPriceNews = document.createElement('div');
cardInfoBlockPriceNews.classList.add('main__container-side-card-info-price-news')
let cardInfoBlockPrice = document.createElement('div');
cardInfoBlockPrice.classList.add('main__container-side-card-info-price')
let cardInfoBlockPriceDisc = document.createElement('div');
cardInfoBlockPrice.classList.add('main__container-side-card-info-price-disc')

outCardInfo.appendChild(cardInfoBlockBrandName)
cardInfoBlockBrandName.append(outBrandName)
outCardInfo.appendChild(cardInfoBlockName)
cardInfoBlockName.append(outName)
outCardInfo.appendChild(cardInfoBlockSize)
cardInfoBlockSize.append(outSize)
outCardInfo.appendChild(cardInfoBlockPrice)
if (outPriceForNews !== null) {
  outCardInfo.appendChild(cardInfoBlockPriceNews)
  cardInfoBlockPriceNews.append(outPriceForNews)
}else if(outPriceForNews === null) {
  cardInfoBlockPrice.append(outPriceDisc)
  cardInfoBlockPrice.append(outPriceSpan)
  outPriceSpan.append(outPrice)
}


let outBtn = document.querySelector('.main__container-side-card-info-btn')

let btnCont = document.createElement('div')
btnCont.classList.add('main__container-side-card-info-btn-container')
let btnBuy = document.createElement('button');
btnBuy.setAttribute('onclick', 'addToBag(event)')
btnBuy.innerHTML = 'Додати до кошика';

outBtn.appendChild(btnCont)
btnCont.appendChild(btnBuy)

function addToBag(event) {
  // console.log(event);
  let img = document.querySelector('.main__container-side-card-images-get img').currentSrc
  let size = false;
  let brand = document.querySelector('.main__container-side-card-info-brand-name').textContent
  let name = document.querySelector('.main__container-side-card-info-name').textContent
  let price = document.querySelector('.main__container-side-card-info-price-news')
  let price2 = outPriceDisc
  var q = '';
  if (price == null) {
    q = price2
  }else{
    q = price.textContent
    // console.log(q);
  }

  let obj = new Object();
  obj.img = img;
  obj.size = size;
  obj.brand = brand;
  obj.name = name;
  obj.price = q;
  console.log(JSON.stringify(obj));
  localStorage.setItem('bag', JSON.stringify(obj));
  let res = JSON.parse(localStorage.getItem('bag'));
  // console.log(res);
  // console.log(price);
  
  window.location.href = '../pages/shoppingCart.html';


  // console.log(price);
  // console.log(event);
  // console.log(event);
  // console.log(event.target.offsetParent.offsetParent.children[0].textContent);
  // console.log(event.target.offsetParent.offsetParent.children[1].textContent);
  // console.log(event.target.offsetParent.offsetParent.children[2].textContent);
  // console.log(event.target.offsetParent.offsetParent.children[3].textContent);
  
  // console.log(event.target.offsetParent.offsetParent.offsetParent.children[1].children[0].currentSrc);
  // localStorage.setItem('bagCardSizes', event.target.offsetParent.offsetParent.children[0].textContent)
  // localStorage.setItem('bagCardBrand', event.target.offsetParent.offsetParent.children[1].textContent)
  // localStorage.setItem('bagCardName', event.target.offsetParent.offsetParent.children[2].textContent)
  // localStorage.setItem('bagCardPrice', event.target.offsetParent.offsetParent.children[3].textContent)
  // localStorage.setItem('bagCardImg', event.target.offsetParent.offsetParent.offsetParent.children[1].children[0].currentSrc)

  // let bagCardBrand = localStorage.getItem('bagCardBrand');
  // let bagCardName = localStorage.getItem('bagCardName');
  // if (bagCardBrand == null || bagCardName == null) {
  //   localStorage.setItem('bagCardBrand', event.target.offsetParent.offsetParent.children[1].textContent);
  //   localStorage.setItem('bagCardName', event.target.offsetParent.offsetParent.children[2].textContent);
  // }else{
  //   bagCardBrand += ' ' + event.target.offsetParent.offsetParent.children[1].textContent, event.target.offsetParent.offsetParent.children[2].textContent
  //   bagCardName += ' ' + event.target.offsetParent.offsetParent.children[2].textContent, event.target.offsetParent.offsetParent.children[2].textContent
  //   localStorage.setItem('bagCardBrand', bagCardBrand);
  //   localStorage.setItem('bagCardName', bagCardName);
  //   // console.log(localStorage.getItem('bagCardName').join(' '));
  // }
}