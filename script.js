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
document.addEventListener('DOMContentLoaded', function() {
	// Replace #ff0000 with your desired color code
	document.querySelector('meta[name="theme-color"]').setAttribute('content', '#1557FF');
});