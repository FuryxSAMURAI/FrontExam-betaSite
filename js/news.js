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
          case '???? ???????? ?? ???????????????? ???????????':
              outScreen.append(newDiv);
              newDiv.append(firstP)
              firstP.innerHTML += '???? ???????? ?? ???????????????? ???????????'
              console.log('???? ???????? ?? ???????????????? ???????????');
              setTimeout(function() {
              newDiv.append(secondP)
              secondP.innerHTML += '??????, ?????????????? ???????????? ???????????? ???? ???????????? ???????????? ?? ?????????????????????? ??????????? ????????????? , Justin ???? "????????????????".'
                }, 2000)
            break;
            case '???? ?????????????????? ???????????':
              outScreen.append(newDiv);
              newDiv.append(firstP)
              firstP.innerHTML += '???? ?????????????????? ???????????'
              setTimeout(function() {
              newDiv.append(secondP)
              secondP.innerHTML += '???? ???????????? ?????????????????? ?????????? ???????????????? ???????????? ???????????????? 14 ???????? ?? ?????????????? ??????????????. ?????????? ???????????????? ???????????? - ???? ?????????? ?????? ?????????? ????????????????????????, ?? ?????????? ???????????????????? ???????????????? ????????????, ????????????????, ?????????????????? ???? ?????????????????? ??????????????????. ???????? ?????????? ???? ???????????????????? ???????????????????? ?????????????? ???? ????????????. ?????? ?????????????????? ??????????, ?????????????????? ???????? ?????????? ?? ???????????????????????? ????????????????????, ???????????????? ?????????????????? ???? ???????????????????? ???????????? ?????? ????????????????????.'
              }, 2000)

            console.log('???? ?????????????????? ???????????');
            break;
            case '?????? ?????????????? ?????????????????? ???????????? ?????? ?????????????????????':
                    outScreen.innerHTML += '???????????????? ?????????????????? ???????????? ?????? ???????????????????? ?????????????????? ????. ?????? ?????????????????? ?????????????? ???????????????? "???????? ??????????" ???????????? ?????????????? ???????????? ??????????????????????.';
                    break;
                    case '?? ???????? ???????????? ?? ???????? ?????????????????? ???????????':
                      outScreen.innerHTML += '?????????????? ???????????????? ???????????????????? ?????? ???????????????? ?????????????????? ????????????????? ?????? ???? ?????????????????? "???????? ??????????" ???? "Justin".';
                      break;
                      case '???? ???????? ?? ???????????????? ???????????? ???? ????????????????, ?????? ???????????????? ???? ??????????????? ':
                        outScreen.innerHTML += '????????-???? ???? ?????????????? ???? ??????????????.';
                        break;
                      case '???? ???????? ?? ?????????????????? ???????????':
                        outScreen.innerHTML += '?????????????? ???????????????? ???????????????????? ?????? ???????????????? ?????????????????? ????????????????? ?????? ???? ?????????????????? "???????? ??????????" ???? "Justin".';
                        break;
                        default:
                        outScreen.innerHTML += '??????????????, ?????? ?????? ???? ???????????? ?????????? ???? ????????????. ???? ???????????? ???????????????????? ???? - <a href="#"> ?????????????? ???? ?????????????????? </a>'
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
          console.log('??????????????, ?????? ?????? ?????????? ???? ????????????');
        }
    }
    requestToRandomUser.send();

    // ! JSON
    // var cards = JSON.parse();
    // console.log(cards);
    let json = require('./cards.json');
console.log(json, 'the json obj');