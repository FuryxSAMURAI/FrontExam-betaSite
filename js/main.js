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
  // let cardsArr = '{
    //   "card1":{
      //     "brand":"under armour",
      //   }
  // }
  let cardObj = {
    c1:{
      cardImg: "../assets/images/discount15per/card1/47305c800ca005692abfe2b00774.webp",
      brand:"under armour",
      name:"Чоловіча біла футболка UA Pjt Rock Brahma Bull",
      priceWithDiscount:"1 436 грн",
      price:"1 690 грн"
    },
    c2:{
      cardImg:"../assets/images/discount15per/card2/2e2c2205fdad5e5658d5d0eec9b4.webp",
      brand:"under armour",
      name:"Чоловіча чорна футболка UA TAC HG COMP T",
      priceWithDiscount:"1521 грн",
      price:"1 790 грн"
    },
    c3:{
      cardImg: "../assets/images/discount15per/card3/120b92a6eee1eeeb4fbc987c4e69.webp",
      brand:"under armour",
      name:"Чоловіча кепка Project Rock Trucker",
      priceWithDiscount:"1692 грн",
      price:"1 990 грн"
    },
    c4:{
      cardImg: "../assets/images/discount15per/card4/cb789991a70c026dd37360efd042.webp",
      brand:"under armour",
    name:"Чоловіча зелена пуховая парка UA CGI Down 3-in-1",
    priceWithDiscount:"16 311 грн",
    price:"19 190 грн"
  }    
};
// console.log(card);
  
  //   window.onload = () => {
    //     let cardBrandNameHTML = document.querySelector(".main__container-discount-card-brand-name");
    //     cardBrandNameHTML.innerHTML = cardObj.card1.brand;
//     let cardImgHTML = document.querySelector(".main__container-discount-card-img img");
//     cardImgHTML.src = cardObj.card1.cardImg;
// }
card = `{
  "card1":{
      "card23":"sjkdhs"
  },
  "card2":{
      "card2233":"rewr"
  },
  "card3":{
      "card323":"sdfsdf"
  }
}`
let js = JSON.parse(card)
//  ! ADD CARDS
// console.log(cardObj);
// for (keys of  Object.keys(cardObj)) {
//   console.log(`${keys}: ${obj[keys]}`)
// }
for (let i = 1; i <= 4; i++) {
  console.log(js.card[i].card23);
    // console.log(cardObj.card1.name);
    let out = document.querySelector(".main__container-discount-cards-wrapper");
    let cardsContainer = document.createElement("div");
    cardsContainer.classList.add('main__container-discount-cards-container')
    let cardsWrapper = document.createElement("div");
    cardsWrapper.classList.add('main__container-discount-card-wrapper')
    let cardContainer = document.createElement("div");
    cardContainer.classList.add('main__container-discount-card-container')
    let cardsWrapperIMGCont = document.createElement("div");
    cardsWrapperIMGCont.classList.add('main__container-discount-card-img')
    let cardsWrapperIMG = document.createElement('img');
    cardsWrapperIMG.src = Object.keys(cardObj);
    let cardsInfo = document.createElement("div");
    cardsInfo.classList.add('main__container-discount-card-info')
    let cardsBrand = document.createElement("div");
    cardsBrand.innerHTML = cardObj.c+i.price
    cardsBrand.classList.add('main__container-discount-card-brand-name')
    let cardsName = document.createElement("div");
    cardsName.classList.add('main__container-discount-card-name');
    // cardsName.innerHTML = cardObj.card1.name;
    let cardsPriceWithDis = document.createElement("div");
    cardsPriceWithDis.classList.add('main__container-discount-card-price-withDiscount')
    let cardsPrice = document.createElement('span');
    cardsPrice.classList.add('main__container-discount-card-price')
    out.append(cardsContainer)
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

 