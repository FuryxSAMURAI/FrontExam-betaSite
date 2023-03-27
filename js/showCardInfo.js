let preloader = document.querySelector('.preloader__wrapper');
let body = document.querySelector('body');
window.onload = ()=>{
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 950);
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
let outPrice = localStorage.getItem('cardForMoreInfoPrice');

let cardInfoBlockSize = document.createElement('div');
cardInfoBlockSize.classList.add('main__container-side-card-info-size')
let cardInfoBlockBrandName = document.createElement('div');
cardInfoBlockBrandName.classList.add('main__container-side-card-info-brand-name')
let cardInfoBlockName = document.createElement('div');
cardInfoBlockName.classList.add('main__container-side-card-info-name')
let cardInfoBlockPrice = document.createElement('div');
cardInfoBlockPrice.classList.add('main__container-side-card-info-price')

outCardInfo.appendChild(cardInfoBlockBrandName)
cardInfoBlockBrandName.append(outBrandName)
outCardInfo.appendChild(cardInfoBlockName)
cardInfoBlockName.append(outName)
outCardInfo.appendChild(cardInfoBlockSize)
cardInfoBlockSize.append(outSize)
outCardInfo.appendChild(cardInfoBlockPrice)
cardInfoBlockPrice.append(outPrice)

let outBtn = document.querySelector('.main__container-side-card-info-btn')

let btnCont = document.createElement('div')
btnCont.classList.add('main__container-side-card-info-btn-container')
let btnBuy = document.createElement('button');
btnBuy.innerHTML = 'Додати до кошика';

outBtn.appendChild(btnCont)
btnCont.appendChild(btnBuy)
