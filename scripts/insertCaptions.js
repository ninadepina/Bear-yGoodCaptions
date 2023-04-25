import { updateTimerDisplay } from './initCaptions.js';

const ccContainer = document.querySelector('.cc');

function insertCaptionsInit(obj) {
	Object.values(obj).forEach((ccItem) => {
		const ccObj = Object.assign(document.createElement('p'), { classList: 'off', innerHTML: ccItem.text });

		ccContainer.appendChild(ccObj);
	});
}

export function insertCaptions(obj) {
	// prettier-ignore
	ccContainer.innerHTML = Object.entries(obj).map(([key, ccItem]) => `
		<p class="p${key}">${ccItem.text.map(part => `<span>${part.text}</span>`).join('')}</p>
		`).join('');
	updateTimerDisplay(obj);
}
