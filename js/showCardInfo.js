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
let outPriceDisc = localStorage.getItem('cardForMoreInfoPriceDisc');
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
btnBuy.innerHTML = 'Додати до кошика';

outBtn.appendChild(btnCont)
btnCont.appendChild(btnBuy)
