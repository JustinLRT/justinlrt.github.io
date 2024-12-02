document.addEventListener("DOMContentLoaded", () => {
	const nav = document.getElementById("nav"); // Change to `nav` for root
	const relativePath = "./"; // Path from `/root/` to itself

	// Create the navigation HTML with a placeholder for the theme icon
	const dynamicHTML = `
	<img id="themeIcon" class="icon-nav" src="${relativePath}icon-light.png" alt="Navigation Icon">
	`;
	nav.innerHTML = dynamicHTML;
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