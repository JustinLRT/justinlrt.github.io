// /page/ folder, ../
var footerA = document.getElementById('footerA');
var dynamicHTML = '<a href="#top">Go back to top</a><br><br><a href="../home.html">Home</a> | <a href="aboutus.html">About us</a> | <a href="contact.html">Contact us</a><br><br><div class="social"><a href="https://www.facebook.com/justinlovelrt"><img src="../media/ui/facebook_footer.svg" /></a><a href="https://youtube.com/@JustinLRT"><img src="../media/ui/youtube_footer.svg" /></a></div><br>While using this site, you agree to have read and accepted our <a href="termsofservice.html">Terms of Service</a> and <a href="prvcyplcy.html">Privacy Policy</a>.<br><br><a href="copyright.html">Copyright</a> © 2019–2024 Justin LRT. All rights reserved.';
footerA.innerHTML = dynamicHTML;