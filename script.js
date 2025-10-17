function updateTime() {
	const timeElement = document.querySelector('.time');
	timeElement.textContent = Date.now() + 'ms';
}

updateTime();
setInterval(updateTime, 1000);
