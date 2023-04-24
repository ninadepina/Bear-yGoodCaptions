import { updateTimerDisplay } from './initCaptions.js';

function insertCaptions(obj) {
	const ccContainer = document.querySelector('.cc');

	Object.values(obj).forEach((ccItem) => {
		const ccObj = Object.assign(document.createElement('p'), { classList: 'off', innerHTML: ccItem.text });

		ccContainer.appendChild(ccObj);
	});
}

export function insertCaptionsVid(obj) {
	const ccContainer = document.querySelector('.cc');
	// prettier-ignore
	ccContainer.innerHTML = Object.entries(obj).map(([key, ccItem]) => `
		<p class="p${key}">${ccItem.text.map(part => `<span>${part.text}</span>`).join('')}</p>
		`).join('');
	updateTimerDisplay(obj);
}
