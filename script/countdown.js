// Target date and time in UTC
const targetDateUTC = new Date("November 28, 2023 00:00:00 UTC").getTime();

// Offset for the target time zone in milliseconds
const timeZoneOffset = 8 * 60 * 60 * 1000; // GMT +8:00

const updateCountdown = () => {
	const nowUTC = new Date().getTime();
	const nowLocal = nowUTC + timeZoneOffset;
	const distance = targetDateUTC - nowLocal;

	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("days").innerText = days;
	document.getElementById("hours").innerText = hours;
	document.getElementById("minutes").innerText = minutes;
	document.getElementById("seconds").innerText = seconds;
};

updateCountdown();
setInterval(updateCountdown, 1000);