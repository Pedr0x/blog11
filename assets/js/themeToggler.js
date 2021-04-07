const root = document.querySelector(":root");
const target = document.querySelector(".change-color-footer-link");
const superContainer = document.querySelector(".super-container");

let isDarkMode = false;

if (localStorage.theme === "dark") toggle();

function toggle() {
	isDarkMode = !isDarkMode;
	if (isDarkMode) {
		localStorage.setItem("theme", "dark");
		superContainer.className = "super-container super-container_dark-mode";
	} else {
		superContainer.className = "super-container";
		localStorage.setItem("theme", "light");
	}
}

target.addEventListener("click", toggle);

fetch("/api/posts.json")
	.then(v => v.json())
	.then(data => {
		console.log(data);
	})
	.catch(err => console.log(err));

fetch("/test-api/AAA.json")
	.then(v => v.json())
	.then(data => {
		console.log(data);
	})
	.catch(err => console.log(err));
