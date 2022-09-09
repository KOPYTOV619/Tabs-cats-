'use strict';

window.addEventListener('DOMContentLoaded', () => {
	let btn = document.querySelectorAll('.block__button'),
		btnsBlock = document.querySelector('.block__buttons'),
		catImg = document.querySelectorAll('.block__img');

	/* Данная функция скрывает табы и убирает класс active */
	function hideImg() {
		catImg.forEach(item => {
			item.style.display = 'none';
		});
		
		btn.forEach(item => {
			item.classList.remove('button__active');
		});
	}
	/* Данная функция возвращает отображение табов и добавляет класс active */
	function showImg(i = 0) {
		catImg[i].style.display = 'block';
		btn[i].classList.add('button__active');
	}

	hideImg();
	showImg();

	btnsBlock.addEventListener('click', (event) => {
		let target = event.target;

		if (target && target.classList.contains('block__button')) {
			btn.forEach((item, i) => {
				if (target == item) {
					hideImg();
					showImg(i);
				}
			});
		}
	});
});


