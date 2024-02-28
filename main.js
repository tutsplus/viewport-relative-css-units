const hero = document.querySelector(".hero");
const btns = document.querySelectorAll("button");
const headerHeight = document.body.classList.contains("sticky") ? 80 : 0;
for (const btn of btns) {
	btn.addEventListener("click", function () {
		document.querySelector("button.active").classList.remove("active");
		this.classList.add("active");
		hero.style.setProperty(
			"--unit",
			`calc(100${this.textContent} - ${headerHeight}px)`
		);
	});
}
