'use strict';

const toRedButton = document.querySelector('.color-changer');
const elToRed = document.querySelector('.color-change')

toRedButton.addEventListener('click', (evt) => {
    const button = evt.target;
    for (const element of elToRed) {
        element.classList.add("red");
    }
});

const validNums = document.querySelector('number-form');
const numInput = document.querySelector('#number-input');
const filledForm = document.querySelector('#formFeedback');

validNums.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const userNum = Number(numInput.value);
    if (isNaN(userNum) || userNum >= 10) {
        filledForm.innerText = 'Please enter a smaller number.';
      } else {
        filledForm.innerText = 'You are good to go!';
      }
});
