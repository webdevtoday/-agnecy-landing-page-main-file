document.addEventListener("DOMContentLoaded", function() {

	const burger = document.querySelector('.burger');
	const mainMenu = document.querySelector('.main-menu');

	burger.addEventListener('click', () => {
		burger.classList.toggle('burger_active');
		mainMenu.classList.toggle('main-menu_active')
	});

});
