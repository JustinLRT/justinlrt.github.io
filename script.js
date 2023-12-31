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