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
    // userQuestions.forEach(()=> {
    //   console.log(userQuestions);
    // });
    let newDivQuestion = document.createElement('div');
    let newDivAnswered = document.createElement('div');
    for (userQuestion of userQuestions) {
      userQuestion.onclick = (e)=>{
        console.log(userQuestion.textContent);
        console.log(e.target);
        switch (e.target.textContent) {
          case 'Чи можу я оглянути товар?':
            outScreen.appendChild(newDivQuestion)
            outScreen.appendChild(newDivAnswered)
                newDivQuestion.className = 'main__container-chat-main-screen';
                newDivAnswered.className = 'main__container-chat-main-screen';
                newDivQuestion.innerHTML = 'Чи можу я оглянути товар?';
                newDivAnswered.innerHTML = 'Так, послуга огляду товару до сплати працює у відділеннях “Нова Пошта” , Justin та "Укрпошта".';
                // outScreen.innerHTML += 'Так, послуга огляду товару до сплати працює у відділеннях “Нова Пошта” , Justin та "Укрпошта".';
                break;
                case 'Як повернути товар?':
                  outScreen.appendChild(newDivQuestion)
            outScreen.appendChild(newDivAnswered)
                newDivQuestion.className = 'main__container-chat-main-screen';
                newDivAnswered.className = 'main__container-chat-main-screen';
                newDivQuestion.innerHTML += 'Як повернути товар?';
                  newDivAnswered.innerHTML += 'Ви можете повернути товар належної якості протягом 14 днів з моменту покупки. Товар належної якості - це товар без ознак експлуатації, у якого збережений товарний вигляд, етикетки, пакування та додаткові аксесуари. Дані умови не стосуються повернення товарів із браком. Щоб повернути товар, відправте його разом з оригінальним пакуванням, товарною накладною та заповненою заявою про повернення.';
                  break;
                  case 'Хто сплачує відправку товару при поверненні?':
                    outScreen.innerHTML += '';
                    break;
                    case 'В який термін я можу повернути товар?':
                      outScreen.innerHTML += 'Послуга примірки недоступна при доставці замовлень кур’єром або до відділень "Нова пошта" та "Justin".';
                      break;
                      case 'Чи можу я зберегти товари до Обраного, щоб замовити їх пізніше? ':
                        outScreen.innerHTML += 'Поки-що ця функція не дступна.';
                        break;
                      case 'Чи можу я приміряти товар? ':
                        outScreen.innerHTML += 'Послуга примірки недоступна при доставці замовлень кур’єром або до відділень "Нова пошта" та "Justin".';
                        break;
                        default:
                        outScreen.innerHTML += 'Вибачте, але чат на данний момен не працює. Ви можете звернутися до - <a href="#"> Питання та Відповіді </a>'
                        break;
          }
        };
    }

    // ! MENU
    function openMenu(e) {
      let menuListsContainers = document.querySelectorAll('.main__container-aside-menu-section-lists');
      let menuListContainers = document.querySelectorAll('.main__container-aside-menu-section-list');
      for (menuListContainer of menuListContainers) {
        menuListContainer.style.display = 'block';
        for (menuListsContainer of menuListsContainers) {
          menuListsContainer.style.position = 'relative';
          menuListsContainer.style.top = '10px';
          
        }
      }
        // menuContainer.style.display = 'none';
    }

    // ! API

    let request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }else{
        request = ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open("GET", "https://randomuser.me/api/");
    
    request.onload = () => {
        let user = JSON.parse(request.response);
        console.log(user);
        if(request.status == 200){
          let name = user.results[0].name.first;
          let picture = user.results[0].picture.thumbnail;
          let chatName = document.querySelector('.main__container-chat-header-consultant-name');
          let pictureChat = document.querySelector('.main__container-chat-header-consultant-img img');
          chatName.innerHTML = name;
          pictureChat.src = picture;
        }else if(request.status == 404){
        }
    }
    request.send();