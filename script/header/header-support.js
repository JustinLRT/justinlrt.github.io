var header = document.getElementById('header-support');
var dynamicHTML = '<div class="red-bg-temp1 center-text"><span class="close-btn" onclick="closeHeader()">×</span><h3>I need your support</h3>Your support means the world to me! If you enjoy my work and want to help me continue creating, please consider making a donation. Every contribution, big or small, makes a difference and helps me grow. Thank you for being part of this journey! Please donate to the following GCash and PayMaya number:<br><h3>0905-660-2907</h3><br>You may email to <a href="mailto:justinlrtmediaunlimited@gmail.com">justinlrtmediaunlimited@gmail.com</a> for more inquires.</div>';

header.innerHTML = dynamicHTML;

function closeHeader() {
	header.style.display = 'none';
}