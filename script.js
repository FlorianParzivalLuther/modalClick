'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

const openingModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closing = function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//accessing the btnsOpenModal each and calling by clicking the openingModal Function
for(let i=0; i<btnsOpenModal.length;i++){
    btnsOpenModal[i].addEventListener('click', openingModal); //.innerHTML shows children HTML as well :     <button class="show-modal"><p>Show modal 1</p></button> -> shows: <p>Show modal 1</p>
}
//closing the Modal at the X and on the overlay layer by clicking on it
btnCloseModal.addEventListener('click',closing);
overlay.addEventListener('click',closing);

document.addEventListener('keydown',function(event){
    console.log(event.key)
    if(event.key ==='Escape'){
        if(!modal.classList.contains('hidden')){
            closing()
        }
        
    }
})