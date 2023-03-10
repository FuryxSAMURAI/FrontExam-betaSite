let preloader = document.querySelector('.preloader__wrapper');
let body = document.querySelector('body');
window.onload = ()=>{
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 950);
}
//  ! CATALOG MENU ON NEWS PAGE

    // ! CALL BACK
    function closeCallBackContainer() {
        document.querySelector('.call-back__container').style.position = 'fixed';
        document.querySelector('.call-back__container').style.bottom = '-200px';
    }
    
    function openCallBackContainer() {
        document.querySelector('.call-back__container').style.zIndex = '30px';
        document.querySelector('.call-back__container').style.position = 'fixed';
        document.querySelector('.call-back__container').style.bottom = '0px';
    }
    // ! call back input number
    let callBackNumberText = document.getElementById('subInputText');
    let callBackNumber = document.getElementById('callBackUserNumber');
    let callBackNumberValue = document.getElementById('callBackUserNumber').value;
    let testCallBackNumber = /^\+[3][8][0]\d{9}/i;
    callBackNumber.value = '';
     console.log(callBackNumber.value);
     console.log(callBackNumberValue.length);
     callBackSendUserNum.onclick = () => {     
      if (!testCallBackNumber.test(callBackNumber.value)) {
        callBackNumberText.style.color = 'red';
            callBackNumber.style.color = 'red';
            callBackNumber.style.border = '1px solid red';
            return false;
      }else{
        callBackNumberText.style.color = '#4e4e4e';
             callBackNumber.style.color = 'black';
             callBackNumber.style.border = '1px solid #ccc';
             return true;

      }
         return true;
     }

    //  ! CHAT
     let chatPreloaderClose = document.querySelector('.main__container-chat-header-close-preloader img');
     let chatClose = document.querySelector('.main__container-chat-header-close-img');
     
     let chatOpen = document.querySelector('.main__container-chat-overlay-img img');

     chatOpen.onclick = () => {
      let chat = document.querySelector('.main__container-chat');
      chat.style.position = 'fixed';
      chat.style.bottom = '0';
     };
     chatClose.onclick = () => {
      let chat = document.querySelector('.main__container-chat');
      chat.style.position = 'fixed';
      chat.style.bottom = '-600px';
     };
     chatPreloaderClose.onclick = () => {
      let chat = document.querySelector('.main__container-chat');
      chat.style.position = 'fixed';
      chat.style.bottom = '-600px';
     };

    let startChat = document.querySelector('.main__container-chat-header-preloader-btnStart button');

    startChat.onclick = ()=>{
      document.querySelector('.main__container-chat-header-preloader').style.display = 'none';
    }

    let userQuestions = document.querySelectorAll('.main__container-chat-question');
    let newDiv = document.createElement('div');
    let p = document.createElement('p');
    let firstP = document.createElement('p');
    firstP.classList.add('main__container-chat-main-screen');
    let secondP = document.createElement('p');
    secondP.classList.add('main__container-chat-main-screen');
    for (userQuestion of userQuestions) {
      userQuestion.onclick = (e)=>{
        switch (e.target.textContent) {
          case 'Чи можу я оглянути товар?':
              outScreen.append(newDiv);
              newDiv.append(firstP)
              firstP.innerHTML += 'Чи можу я оглянути товар?'
              console.log('Чи можу я оглянути товар?');
              setTimeout(function() {
              newDiv.append(secondP)
              secondP.innerHTML += 'Так, послуга огляду товару до сплати працює у відділеннях “Нова Пошта” , Justin та "Укрпошта".'
                }, 2000)
            break;
            case 'Як повернути товар?':
              outScreen.append(newDiv);
              newDiv.append(firstP)
              firstP.innerHTML += 'Як повернути товар?'
              setTimeout(function() {
              newDiv.append(secondP)
              secondP.innerHTML += 'Ви можете повернути товар належної якості протягом 14 днів з моменту покупки. Товар належної якості - це товар без ознак експлуатації, у якого збережений товарний вигляд, етикетки, пакування та додаткові аксесуари. Дані умови не стосуються повернення товарів із браком. Щоб повернути товар, відправте його разом з оригінальним пакуванням, товарною накладною та заповненою заявою про повернення.'
              }, 2000)

            console.log('Як повернути товар?');
            break;
            case 'Хто сплачує відправку товару при поверненні?':
                    outScreen.innerHTML += 'Вартість відправки товару при поверненні оплачуємо ми. При відправці посилки службами "Нова пошта" просто оберіть оплату отримувачем.';
                    break;
                    case 'В який термін я можу повернути товар?':
                      outScreen.innerHTML += 'Послуга примірки недоступна при доставці замовлень кур’єром або до відділень "Нова пошта" та "Justin".';
                      break;
                      case 'Чи можу я зберегти товари до Обраного, щоб замовити їх пізніше? ':
                        outScreen.innerHTML += 'Поки-що ця функція не дступна.';
                        break;
                      case 'Чи можу я приміряти товар?':
                        outScreen.innerHTML += 'Послуга примірки недоступна при доставці замовлень кур’єром або до відділень "Нова пошта" та "Justin".';
                        break;
                        default:
                        outScreen.innerHTML += 'Вибачте, але чат на данний момен не працює. Ви можете звернутися до - <a href="#"> Питання та Відповіді </a>'
                        break;
          }
        };
    }

    // ! MENU
    var acc = document.querySelectorAll("#according");
    var menus = document.querySelectorAll(".main__container-aside-menu-section-lists");
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
      });
    }

    // ! API

    let requestToRandomUser;
    if (window.XMLHttpRequest) {
        requestToRandomUser = new XMLHttpRequest();
    }else{
        requestToRandomUser = ActiveXObject("Microsoft.XMLHTTP");
    }
    requestToRandomUser.open("GET", "https://randomuser.me/api/");
    
    requestToRandomUser.onload = () => {
        let user = JSON.parse(requestToRandomUser.response);
        console.log(user);
        if(requestToRandomUser.status == 200){
          let name = user.results[0].name.first;
          let nameToCHAT = document.getElementById('outConsultantName');
          let picture = user.results[0].picture.thumbnail;
          let chatName = document.querySelector('.main__container-chat-header-consultant-name');
          let pictureChat = document.querySelector('.main__container-chat-header-consultant-img img');
          nameToCHAT.innerHTML = name;
          chatName.innerHTML = name;
          pictureChat.src = picture;
        }else if(requestToRandomUser.status == 404){
          console.log('Вибачте, але чат зараз не працює');
        }
    }
    requestToRandomUser.send();

    // ! JSON
    // var cards = JSON.parse();
    // console.log(cards);
    let json = require('./cards.json');
console.log(json, 'the json obj');