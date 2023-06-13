let editButton = document.querySelector(".profile__edit-button");
let popupClose = document.querySelector('.popUp__close-button');
let popup = document.querySelector(".popUp");
let likeButton = document.querySelectorAll(".elements__like-button");

function openPopup (e){
    e.preventDefault();
    popup.classList.add("popup_opened");
}
function closePopup (){
    popup.classList.remove("popup_opened");
}
function addLike (){
    for (var j = 0; j < likeButton.length; j++) {
        likeButton[j].classList.add("elements__like-button_active");
    }
}
for (var i = 0; i < likeButton.length; i++) {
    likeButton[i].addEventListener('click', addLike);
}
editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
