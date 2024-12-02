// COLLAPSIBLE
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}

// BROWSER THEME COLOR META
var themeColorMeta = document.querySelector('meta[name="theme-color"]');
if (themeColorMeta) {
	themeColorMeta.setAttribute('content', '#008000');
}

// META TAGS
var descriptionMeta = document.querySelector('meta[name="description"]');
var ogTitleMeta = document.querySelector('meta[property="og:title"]');
var ogDescMeta = document.querySelector('meta[property="og:description"]');
var ogImageMeta = document.querySelector('meta[property="og:image"]');

if (descriptionMeta) {
	descriptionMeta.content = "Justin LRT is a student and trainspotter. Explore the most reliable pages of LRT Line 1 and Pasay City West High School.";
}
if (ogTitleMeta && ogDescMeta && ogImageMeta) {
	ogTitleMeta.content = "Justin LRT";
	ogDescMeta.content = "Justin LRT is a student and trainspotter. Explore the most reliable pages of LRT Line 1 and Pasay City West High School.";
	ogImageMeta.content = "https://justinlrt.github.io/media/cover.jpg";
}

// VERIFIED POP-UP
function verified() {
	alert("This profile was verified.\n\nVerified profiles are able to provide reliable sources and high quality posts.");
}

// DARK MODE
document.addEventListener("DOMContentLoaded", () => {
	const savedMode = localStorage.getItem("darkMode");
	const themeIcon = document.getElementById("themeIcon");

	// Function to get the relative path to handle navigation from different folder depths
	function getRelativePath() {
		const depth = window.location.pathname.split('/').length - 2; // Adjust for current page
		return depth === 0 ? "": "../".repeat(depth);
	}

	const relativePath = getRelativePath();

	// Apply dark mode and set icon
	function updateThemeAndIcon() {
		if (savedMode === "enabled") {
			document.body.classList.add("dark-mode");
			if (themeIcon) {
				themeIcon.src = `${relativePath}icon-dark.png`;
			}
		} else {
			document.body.classList.remove("dark-mode");
			if (themeIcon) {
				themeIcon.src = `${relativePath}icon-light.png`;
			}
		}
	}

	// Call the function to apply the theme and icon
	updateThemeAndIcon();

	// Optional: To dynamically change the logo when the theme is toggled (if toggled via UI)
	const darkModeToggle = document.getElementById("darkModeToggle");
	if (darkModeToggle) {
		darkModeToggle.addEventListener("change", () => {
			if (darkModeToggle.checked) {
				localStorage.setItem("darkMode", "enabled");
			} else {
				localStorage.setItem("darkMode", "disabled");
			}
			updateThemeAndIcon(); // Update theme and icon after toggle
		});
	}
});