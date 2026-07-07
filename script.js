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

// CARD CAROUSEL

// SEAMLESS 3D SWIPE CAROUSEL SYSTEM ENGINE
(function() {
	function initProjectCarousels() {
		const carousels = document.querySelectorAll('.carousel-container');

		carousels.forEach(container => {
			const track = container.querySelector('.carousel-track');
			if (!track) return;

			const cards = track.querySelectorAll('.card');
			let dotsContainer = container.nextElementSibling?.classList.contains('dots-container')
			? container.nextElementSibling: container.querySelector('.dots-container');

			if (!cards.length) return;

			let currentIndex = 0;
			let touchStartX = 0;
			let touchEndX = 0;
			const swipeThreshold = 35; // Pixels required to record action

			if (dotsContainer) {
				dotsContainer.innerHTML = '';
				cards.forEach((_, index) => {
					const dot = document.createElement('button');
					dot.classList.add('dot');
					dot.setAttribute('type', 'button'); // Explicit definition
					if (index === currentIndex) dot.classList.add('active');
					dot.addEventListener('click', () => {
						currentIndex = index;
						updateCarousel();
					});
					dotsContainer.appendChild(dot);
				});
			}

			const dots = dotsContainer ? dotsContainer.querySelectorAll('.dot'): [];

			function updateCarousel() {
				cards.forEach((card, index) => {
					// Clean out all layer classes completely
					card.classList.remove('active', 'prev', 'next', 'far-prev', 'far-next', 'far-far-prev', 'far-far-next');

					if (index === currentIndex) {
						card.classList.add('active');
					} else if (index === currentIndex - 1) {
						card.classList.add('prev');
					} else if (index === currentIndex + 1) {
						card.classList.add('next');
					} else if (index === currentIndex - 2) {
						card.classList.add('far-prev');
					} else if (index === currentIndex + 2) {
						card.classList.add('far-next');
					} else if (index < currentIndex) {
						card.classList.add('far-far-prev');
					} else if (index > currentIndex) {
						card.classList.add('far-far-next');
					}
				});
				dots.forEach((dot, index) => {
					if (index === currentIndex) {
						dot.classList.add('active');
					} else {
						dot.classList.remove('active');
					}
				});
			}

			cards.forEach((card, index) => {
				// Track both axes independently for this card
				let cardStartX = 0;
				let cardStartY = 0;

				// 1. Capture exactly where the finger lands on both X and Y axes
				card.addEventListener('touchstart', (e) => {
					cardStartX = e.changedTouches[0].screenX;
					cardStartY = e.changedTouches[0].screenY;
				}, {
					passive: true
				});

				// 2. Evaluate both axes on lift
				card.addEventListener('touchend', (e) => {
					const cardEndX = e.changedTouches[0].screenX;
					const cardEndY = e.changedTouches[0].screenY;

					// Calculate total drift in both directions
					const localDiffX = Math.abs(cardEndX - cardStartX);
					const localDiffY = Math.abs(cardEndY - cardStartY);

					if (index === currentIndex) {
						// CRITICAL BLOCK: Only launch if the user didn't swipe sideways (DiffX)
						// AND didn't scroll vertically to read the page (DiffY)
						if (localDiffX < 10 && localDiffY < 10) {
							const url = card.getAttribute('href');
							if (url) {
								window.location.href = url;
							}
						}
					} else {
						// If it's a side card, block the anchor and slide it to center
						e.preventDefault();
						currentIndex = index;
						updateCarousel();
					}
				});

				// 3. Desktop fallback engine
				card.addEventListener('click',
					(e) => {
						if (index !== currentIndex) {
							e.preventDefault();
							currentIndex = index;
							updateCarousel();
						}
					});
			});


			// Unified touch event listeners
			container.addEventListener('touchstart', (e) => {
				touchStartX = e.changedTouches[0].screenX;
			}, {
				passive: true
			});

			container.addEventListener('touchend', (e) => {
				touchEndX = e.changedTouches[0].screenX;
				const diffX = touchEndX - touchStartX;

				if (diffX < -swipeThreshold && currentIndex < cards.length - 1) {
					currentIndex++;
					updateCarousel();
				} else if (diffX > swipeThreshold && currentIndex > 0) {
					currentIndex--;
					updateCarousel();
				}
			},
				{
					passive: true
				});

			updateCarousel();
		});
	}

	// Hook processing directly inside DOM lifecycle handler
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initProjectCarousels);
	} else {
		initProjectCarousels();
	}
})();


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