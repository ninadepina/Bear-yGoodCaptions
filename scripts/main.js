const overlay = document.querySelector('.visuals');
const video = document.querySelector('.vid');

overlay.addEventListener('click', () => {
	video.paused ? video.play() : video.pause();
});
