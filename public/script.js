const burgerMenu = document.getElementById("burger");
const buttons = document.getElementById("buttons");

burgerMenu.addEventListener("click", () => {
	if (buttons.classList.contains("hidden")) {
		buttons.classList.remove("hidden");
	} else {
		buttons.classList.add("hidden");
	}
});

const leftArrow = document.getElementById("chevron-left");
const rightArrow = document.getElementById("chevron-right");

leftArrow.addEventListener("click", () => {});

rightArrow.addEventListener("click", () => {});
