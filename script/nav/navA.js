document.addEventListener("DOMContentLoaded", () => {
	const navA = document.getElementById("navA");
	const relativePath = "../"; // Path from `/root/a/` to `/root/`

	// Create the navigation HTML with a placeholder for the theme icon
	const dynamicHTML = `
	<img id="themeIcon" class="icon-nav" src="${relativePath}icon-light.png" alt="Navigation Icon">
	`;
	navA.innerHTML = dynamicHTML;
	const themeIcon = document.getElementById("themeIcon");
	const savedMode = localStorage.getItem("darkMode");

	// Update the logo based on the saved theme
	function updateLogo() {
		if (savedMode === "enabled") {
			themeIcon.src = `${relativePath}icon-dark.png`;
		} else {
			themeIcon.src = `${relativePath}icon-light.png`;
		}
	}

	// Call the function to apply the correct logo on page load
	updateLogo();
});