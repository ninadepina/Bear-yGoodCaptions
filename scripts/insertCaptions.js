import { updateTimerDisplay } from './initCaptions.js';

const ccContainer = document.querySelector('.cc');

export function insertCaptions(obj) {
	// prettier-ignore
	ccContainer.innerHTML = Object.entries(obj).map(([key, ccItem]) => `
		<p class="p${key} ${ccItem.classes.join(' ')}">${ccItem.situation !== null ? `<span class="situation">${ccItem.situation}</span>` : ''}${ccItem.text.map(text => `<span>${text}</span>`).join('')}</p>
		`).join('');
	updateTimerDisplay(obj);
}
