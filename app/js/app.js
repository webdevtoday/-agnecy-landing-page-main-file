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
	const firstScreenContainer = document.querySelector('.first-screen__container');


	burger.addEventListener('click', () => {
		burger.classList.toggle('burger_active');
		mainMenu.classList.toggle('main-menu_active')
	});


	// Main menu fixed to top

	function fixedMainMenu() {
		let windowWidth = scrollWidth();
		let heightMainMenu = mainMenu.offsetHeight;

		if (windowWidth <= 450 || window.pageYOffset <= heightMainMenu) {
			mainMenu.classList.remove("main-menu_fixed-to-top");
			mainMenu.style.width = "";
			mainMenu.style.left = "";
			mainMenu.style.right = "";
			return false;
		}

		mainMenu.classList.add("main-menu_fixed-to-top");
		mainMenu.style.width = `auto`;
		console.log(getComputedStyle(firstScreenContainer).paddingLeft);
		mainMenu.style.left = `${getComputedStyle(firstScreenContainer).paddingLeft}`;
		mainMenu.style.right = `${getComputedStyle(firstScreenContainer).paddingRight}`;
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

	// debugWindow();

});
