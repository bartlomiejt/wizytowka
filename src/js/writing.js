// const modal = document.querySelector('.modal');
// const input = document.querySelector('.modal-input');
// const modalBtn = document.querySelector('.modal-btn');
// const saveBtn = document.querySelector('.save-btn');
const text = document.querySelector('.header__text');
const text2 = document.querySelector('.header__welcome');
// const errorMsg = document.querySelector('.error-msg');

let inputValue = 'Mam na imię Bartłomiej Stworzę Twoją Profesjonalną Stronę Internetową';
let inputValue2 = 'Cześć!';
let timeout;
let speed = 30;
let speed2 = 60;
let index = 1;
let index2 = 1;

const writingAnimation = () => {
	text.innerHTML = inputValue.slice(0, index);
	index++;
	if (index > inputValue.length) return;
	timeout = setTimeout(writingAnimation, speed);
};
const writingAnimation2 = () => {
	text2.innerHTML = inputValue2.slice(0, index2);
	index2++;
	if (index2 > inputValue2.length) return;
	timeout = setTimeout(writingAnimation2, speed2);
};

document.addEventListener('DOMContentLoaded', function () {
	writingAnimation2();
	setTimeout(() => {
		writingAnimation();
	}, 1000);
});

