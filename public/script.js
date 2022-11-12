const burgerMenu = document.getElementById("burger");
const buttons = document.getElementById("buttons");

burgerMenu.addEventListener("click", () => {
	if (buttons.classList.contains("hidden")) {
		buttons.classList.remove("hidden");
	} else {
		buttons.classList.add("hidden");
	}
});
