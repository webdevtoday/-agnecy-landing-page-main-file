document.addEventListener("DOMContentLoaded", function() {

	function scrollWidth() {
		return Math.max(
			document.body.scrollWidth, document.documentElement.scrollWidth,
			document.body.offsetWidth, document.documentElement.offsetWidth,
			document.body.clientWidth, document.documentElement.clientWidth
		);
	}

	// Burger

	const burger = document.querySelector('.burger');
	const mainMenu = document.querySelector('.main-menu');

	burger.addEventListener('click', () => {
		burger.classList.toggle('burger_active');
		mainMenu.classList.toggle('main-menu_active')
	});


	// Main menu fixed to top
	const firstScreenContent = document.querySelector('.first-screen__content');

	let windowWidth = scrollWidth();

	function fixedMainMenu() {
		if (windowWidth <= 450) return false;
		if (window.pageYOffset <= 200) {
			mainMenu.style.position = "";
			mainMenu.style.top = "";
			mainMenu.style.width = "";
			return false;
		}

		mainMenu.style.position = "fixed";
		mainMenu.style.top = 0;
		mainMenu.style.width = `${firstScreenContent.offsetWidth}px`;
		return true;
	}

	fixedMainMenu();

	document.addEventListener('resize', () => {
		fixedMainMenu();
	});

	document.addEventListener('scroll', () => {
		fixedMainMenu();
	});
	



	function debugWindow() {
		document.body.insertAdjacentHTML("afterbegin", `
			<div class="debug"></div>
		`);
		const debug = document.querySelector(".debug");
		debug.style.cssText = `
			background: rgba(0, 0, 0, .3);
			position: fixed;
			top: 0;
			left: 0;
			width: 300px;
			height: 300px;
		`;

		document.addEventListener('scroll', () => {
			debug.innerHTML = `Y: ${window.pageYOffset}`;
		});
	}

	debugWindow();

});
