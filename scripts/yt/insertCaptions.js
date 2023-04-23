import { updateTimerDisplay } from './yt.js';

export function insertCaptions(obj) {
	const ccContainer = document.querySelector('.cc');
	// prettier-ignore
	ccContainer.innerHTML = Object.entries(obj).map(([key, ccItem]) => `
		<p class="p${key}">${ccItem.text.map(part => `<span>${part.text}</span>`).join('')}</p>
		`).join('');
	updateTimerDisplay(obj);
}
