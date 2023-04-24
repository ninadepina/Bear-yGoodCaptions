export function toggleCaptions(num, startT, endT, curT) {
	const curP = document.querySelector(`.p${num}`);
	curP.classList.toggle('off', curT > endT);
	curP.classList.toggle('on', curT > startT);
}
