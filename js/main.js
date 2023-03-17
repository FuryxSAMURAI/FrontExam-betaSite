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
  "btnDisсText":"Показати весь одяг",
  "ads":{
      "img":"assets/images/ads/photo-1441986300917-64674bd600d8.jpg",
      "title":"До <span>-20%</span> якщо зареєструєшся <br> на нашому сайті!",
      "btnCont":"Детальніше"
  },
  "trendsTitle":"Зараз у тренді",
  "cardTrends":{
    "1":{
      "cardImg":"assets/images/trends/cap/15cf95285117fd50034cd322f362.webp",
      "cardText":"<a href='#'>Кепки</a>"
    },
    "2":{
      "cardImg":"assets/images/trends/tShirt/ae0f8af5d93766560407566613d3.webp",
      "cardText":"<a href='#'>Футболки</a>"
    },
    "3":{
      "cardImg":"assets/images/trends/shorts/cd413a060d102b003cd752585119.webp",
      "cardText":"<a href='#'>Шорти</a>"
    },
    "4":{
      "cardImg":"assets/images/trends/shoe/3c3a79027102bf7e10c5cf777bf5.webp",
      "cardText":"<a href='#'>Взуття</a>"
    }
  },
  "brands":{
    "1":{
      "text":"MEXX"
    },
    "2":{
      "text":"UNDER ARMOUR"
    },
    "3":{
      "text":"TOMMY HILFIGER"
    },
    "4":{
      "text":"DIESEL"
    },
    "5":{
      "text":"CALVIN KLEIN"
    },
    "6":{
      "text":"HELEN MARLEN"
    }
  },
  "popularCLotheTitle":"Зараз популярне",
  "popularCLothe":{
    "1":{
      "cardImg":"assets/images/adsClothe/clothe1/9f3db00d358ce9d02b6803a6a1ef.webp",
      "cardBrand":"under armour",
      "cardName":"Чоловічі чорні шорти UA Vanish Woven 8in Shorts",
      "cardPriceWithDiscount":"1 695 грн",
      "cardPrice":"2 290 грн"
    },
    "2":{
      "cardImg":"assets/images/adsClothe/clothe2/b3bb52b16c8da897080cbe2742c5.jpg",
      "cardBrand":"Preach",
      "cardName":"Жовті шорти Essential Sweat Shorts",
      "cardPriceWithDiscount":"1 695 грн",
      "cardPrice":"3 390 грн"
    },
    "3":{
      "cardImg":"assets/images/adsClothe/clothe3/d02b7a4b50d6637e34d2ea87ea5d.webp",
      "cardBrand":"Tommy Jeans",
      "cardName":"Жіноча бордова футболка TJW RLXD TOMMY SIGNATURE",
      "cardPriceWithDiscount":"685 грн",
      "cardPrice":"1 990 грн"
    },
    "4":{
      "cardImg":"assets/images/adsClothe/clothe4/a2287d543137579cdea2daaf6ffb.webp",
      "cardBrand":"Under Armour",
      "cardName":"Дитячі чорні шорти UA Prototype 2.0 Wdmk",
      "cardPriceWithDiscount":"476 грн",
      "cardPrice":"1 190 грн"
    }
  },
  "btnPopularText":"Показати весь одяг"
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
    let discountCardBtnCont = document.createElement('div');
    discountCardBtnCont.classList.add('main__container-discount-wrapper')
    let discountCardBtn = document.createElement('button');
    discountCardBtn.innerHTML = jsParsed.btnDisсText;
    outMainContainer.appendChild(discountCardBtnCont);
    discountCardBtnCont.appendChild(discountCardBtn)

    // ! ADS
    let adsImg = jsParsed.ads.img;
    let adsTitle = jsParsed.ads.title;
    let adsBtn = jsParsed.ads.btnCont;
    
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
    
    let trendsTitle = document.createElement("div");
    let trends = document.createElement("div");
    trendsTitle.classList.add('main__container-trends-title')
    trendsTitle.innerHTML = jsParsed.trendsTitle;
    outMainContainer.appendChild(trendsTitle)
    
    // ! TRENDS 
    
    let trendsCont = document.createElement("div");
    trendsCont.classList.add('main__container-trends-container')
    let trendsWrapper = document.createElement("div");
    trendsWrapper.classList.add('main__container-trends-wrapper')
    outMainContainer.appendChild(trendsCont)
    trendsCont.appendChild(trendsWrapper)
    for (let i = 1; i <= 4; i++) {
      let trendsCards = document.createElement("div");
      trendsCards.classList.add('main__container-trends-container-cards')
      let trendsCard = document.createElement("div");
      trendsCard.classList.add('main__container-trends-container-card')
      let trendsCardImg = document.createElement("div");
      trendsCardImg.classList.add('main__container-trends-container-cards-img')
      let trendsImg = document.createElement("img");
      trendsImg.src = jsParsed.cardTrends[i].cardImg;
      let trendsCardTitle = document.createElement("div");
      trendsCardTitle.classList.add('main__container-trends-container-cards-title')
      trendsCardTitle.innerHTML = jsParsed.cardTrends[i].cardText
      
      trendsWrapper.append(trendsCards)
      trendsCards.appendChild(trendsCard)
      trendsCard.appendChild(trendsCardImg)
      trendsCardImg.appendChild(trendsImg)
      trendsCard.appendChild(trendsCardTitle)
    }
    
    // ! BRANDS
    
    let brandsCont = document.createElement('div')
    brandsCont.classList.add('main__container-slider-brands-container')
    let brandsWrapper = document.createElement('div')
    brandsWrapper.classList.add('main__container-slider-brands-wrapper')

    for (let i = 1; i <= 6; i++) {
      let brandsText = document.createElement('div');
      brandsText.classList.add('main__container-slider-brands-text')
      brandsText.innerHTML = jsParsed.brands[i].text;
      brandsWrapper.appendChild(brandsText);
      
    }
    
    outMainContainer.appendChild(brandsCont);
    brandsCont.appendChild(brandsWrapper);
    
    // ! POPULAR CLOTHES
    let popularClotheTitle = jsParsed.popularCLotheTitle;
    let popularCont = document.createElement('div');
    popularCont.classList.add('main__container-ads-container-clothe')
    let popularWrapper = document.createElement('div');
    popularWrapper.classList.add('main__container-ads-wrapper-clothe')
    
    outMainContainer.appendChild(popularCont);
    popularCont.appendChild(popularWrapper);
    popularCont.appendChild(popularWrapper);
    for (let i = 1; i <=4; i++) {
      let popularCards = document.createElement('div');
      popularCards.classList.add('main__container-ads-wrapper-clothe-card')
      let popularCardImgCont = document.createElement('div');
      popularCardImgCont.classList.add('main__container-ads-wrapper-clothe-img')
      let popularCardImg = document.createElement('img');
      popularCardImg.src = jsParsed.popularCLothe[i].cardImg
      let popularCardBrand = document.createElement('div');
      popularCardBrand.innerHTML = jsParsed.popularCLothe[i].cardBrand;
      popularCardBrand.classList.add('main__container-ads-wrapper-clothe-brand-title')
      let popularCardName = document.createElement('div');
      popularCardName.innerHTML = jsParsed.popularCLothe[i].cardName;
      popularCardName.classList.add('main__container-ads-wrapper-clothe-title')
      let popularCardPriceWithDiscount = document.createElement('div');
      popularCardPriceWithDiscount.innerHTML = jsParsed.popularCLothe[i].cardPriceWithDiscount;
      popularCardPriceWithDiscount.classList.add('main__container-ads-wrapper-clothe-price')
      let popularCardPrice = document.createElement('span');
      popularCardPrice.innerHTML = jsParsed.popularCLothe[i].cardPrice;
      
      popularWrapper.appendChild(popularCards)
      popularCards.appendChild(popularCardImgCont)
      popularCardImgCont.appendChild(popularCardImg)
      popularCards.appendChild(popularCardBrand)
      popularCards.appendChild(popularCardName)
      popularCards.appendChild(popularCardPriceWithDiscount)
      popularCardPriceWithDiscount.appendChild(popularCardPrice)
    }
    let btnShowMorePopularClothe = document.createElement('div');
    btnShowMorePopularClothe.classList.add('main__container-ads-wrapper-clothe-button')
    let btnShowPopular = document.createElement('button')
    btnShowPopular.innerHTML = jsParsed.btnPopularText;

    outMainContainer.appendChild(btnShowMorePopularClothe)
    btnShowMorePopularClothe.appendChild(btnShowPopular)