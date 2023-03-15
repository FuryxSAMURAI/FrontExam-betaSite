let preloader = document.querySelector('.preloader__wrapper');
let body = document.querySelector('body');
window.onload = ()=>{
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 950);
}
  let cardBrandNameHTML = document.querySelectorAll(".main__container-discount-card-brand-name");
  let cardNameHTML = document.querySelectorAll(".main__container-discount-card-name");
  let cardPriceWithDiscountHTML = document.querySelectorAll(".main__container-discount-card-price-withDiscount");
  let cardPriceHTML = document.querySelectorAll(".main__container-discount-card-price");
  for (const brand of cardBrandNameHTML) {
      brand.innerHTML = cardObj.card[i].brand;
      // console.log(brand);
    }
    for (const name of cardBrandNameHTML) {
      // name.innerHTML = '12'
      // console.log(name);
    }
    for (const discount of cardBrandNameHTML) {
      // discount.innerHTML = '12'
      // console.log(discount);
    }
    for (const price of cardBrandNameHTML) {
      // price.innerHTML = '12'
      // console.log(price);
    }
  // console.log(cardBrandNameHTML);
    let cardImgHTML = document.querySelector(".main__container-discount-card-img img");
    // cardImgHTML.src = cardObj.card1.cardImg;
    
    // }
    function openMenu() {
      let open = document.querySelector('.header__menu-container-wrapper')
    open.style.left = '0px'
  }
  function closeMenu() {
    let open = document.querySelector('.header__menu-container-wrapper')
  open.style.left = '-3000px'
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
//  let callBackNumber = document.getElementById('callBackUserNumber');
//  let callBackNumberValue = document.getElementById('callBackUserNumber').value;
//  callBackNumber.value = '+380';
//  console.log(callBackNumber.value);
//  console.log(callBackNumberValue.length);
//  callBackSendUserNum.onclick = () => {     
  //      if (callBackNumberValue.length < 5 || callBackNumberValue.length > 13) {
//         callBackNumber.style.color = 'red';
//         callBackNumber.style.border = '1px solid red';
//         return false;
//     }else{
  //          callBackNumber.style.color = 'black';
  //          callBackNumber.style.border = '1px solid #ccc';
  //          return true;
  //      }
  //  return true;
  //  }
  
  // ! JSON
card = `{
  "cardDisc":{
    "1":{
      "cardImg": "assets/images/discount15per/card1/47305c800ca005692abfe2b00774.webp",
      "brand":"under armour",
      "name":"Чоловіча біла футболка UA Pjt Rock Brahma Bull",
      "priceWithDiscount":"1 436 грн",
      "price":"1 690 грн"
    },
    "2":{
      "cardImg":"assets/images/discount15per/card2/2e2c2205fdad5e5658d5d0eec9b4.webp",
      "brand":"under armour",
      "name":"Чоловіча чорна футболка UA TAC HG COMP T",
      "priceWithDiscount":"1521 грн",
      "price":"1 790 грн"
    },
    "3":{
      "cardImg": "assets/images/discount15per/card3/120b92a6eee1eeeb4fbc987c4e69.webp",
      "brand":"under armour",
      "name":"Чоловіча кепка Project Rock Trucker",
      "priceWithDiscount":"1692 грн",
      "price":"1 990 грн"
    },
    "4":{
      "cardImg": "assets/images/discount15per/card4/cb789991a70c026dd37360efd042.webp",
      "brand":"under armour",
      "name":"Чоловіча зелена пуховая парка UA CGI Down 3-in-1",
      "priceWithDiscount":"16 311 грн",
      "price":"19 190 грн"
    }
  },
  "ads":{
      "img":"assets/images/ads/photo-1441986300917-64674bd600d8.jpg",
      "title":"До <span>-20%</span> якщо зареєструєшся <br> на нашому сайті!",
      "btnCont":"Детальніше"
  }
}`
let jsParsed = JSON.parse(card)

//  ! ADD CARDS
let outMainContainer = document.querySelector(".main__container");
let outAds = document.querySelector(".main__container-discount-cards-wrapper");
let cardsContainer = document.createElement("div");
cardsContainer.classList.add('main__container-discount-cards-container')
let cardsWrapper = document.createElement("div");
cardsWrapper.classList.add('main__container-discount-card-wrapper')
for (let i = 1; i <= 4; i++) {
  let cardContainer = document.createElement("div");
  
  let img = jsParsed.cardDisc[i].cardImg;
  let brand = jsParsed.cardDisc[i].brand;  
  let name = jsParsed.cardDisc[i].name;
  let priceWithDiscount = jsParsed.cardDisc[i].priceWithDiscount;
  let price = jsParsed.cardDisc[i].price;
  
  // ! UNDER ARMOUR -15% 
  cardContainer.classList.add('main__container-discount-card-container')
  let cardsWrapperIMGCont = document.createElement("div");
  cardsWrapperIMGCont.classList.add('main__container-discount-card-img')
  let cardsWrapperIMG = document.createElement('img');
  cardsWrapperIMG.src = img;
  let cardsInfo = document.createElement("div");
      cardsInfo.classList.add('main__container-discount-card-info')
      let cardsBrand = document.createElement("div");
      cardsBrand.innerHTML = brand
      cardsBrand.classList.add('main__container-discount-card-brand-name')
      let cardsName = document.createElement("div");
      cardsName.innerHTML = name;
      cardsName.classList.add('main__container-discount-card-name');
      let cardsPriceWithDis = document.createElement("div");
      cardsPriceWithDis.classList.add('main__container-discount-card-price-withDiscount')
      cardsPriceWithDis.innerHTML = priceWithDiscount;
      let cardsPrice = document.createElement('span');
      cardsPrice.classList.add('main__container-discount-card-price')
      cardsPrice.innerHTML = price
      outAds.appendChild(cardsContainer)
      cardsContainer.appendChild(cardsWrapper);
      cardsWrapper.appendChild(cardContainer);
      cardContainer.appendChild(cardsWrapperIMGCont)
      cardsWrapperIMGCont.appendChild(cardsWrapperIMG)
      cardContainer.appendChild(cardsInfo)
      cardsInfo.appendChild(cardsBrand)
      cardsInfo.appendChild(cardsName)
      cardsInfo.appendChild(cardsPriceWithDis)
      cardsPriceWithDis.appendChild(cardsPrice)
    }
    // ! ADS
    let adsImg = jsParsed.ads.img;
    let adsTitle = jsParsed.ads.title;
    let adsBtn = jsParsed.ads.btnCont;
    console.log(adsImg);
    console.log(adsTitle);
    console.log(adsBtn);

    let adsContainer = document.createElement('div')
    adsContainer.classList.add('main__container-ads-container')
    let adsWrapper = document.createElement('div')
    adsWrapper.classList.add('main__container-ads-wrapper')
    let adsImgWrapper = document.createElement('div')
    adsImgWrapper.classList.add('main__container-ads-img-wrapper')
    let adsImgWrapperCont = document.createElement('img')
    adsImgWrapperCont.src = adsImg;
    let adsInfoWrapper = document.createElement('div')
    adsInfoWrapper.classList.add('main__container-ads-info-wrapper')
    let adsInfoTitle = document.createElement('div')
    adsInfoTitle.classList.add('main__container-ads-wrapper-title')
    adsInfoTitle.innerHTML = adsTitle;
    let adsInfoSubBtn = document.createElement('div')
    adsInfoSubBtn.classList.add('main__container-ads-wrapper-subtitle-btn')
    let adsInfoBtn = document.createElement('button')
    adsInfoBtn.innerHTML = adsBtn;


    outMainContainer.append(adsContainer)
    adsContainer.appendChild(adsWrapper)
    adsWrapper.appendChild(adsImgWrapper)
    adsImgWrapper.appendChild(adsImgWrapperCont)
    adsWrapper.appendChild(adsInfoTitle)
    adsInfoTitle.appendChild(adsInfoSubBtn)
    adsInfoSubBtn.appendChild(adsInfoBtn)