function insertCaptions(obj) {
	const ccContainer = document.querySelector('.cc');

	Object.values(obj).forEach((ccItem) => {
		const ccObj = Object.assign(document.createElement('p'), { classList: 'off', innerHTML: ccItem.text });

		ccContainer.appendChild(ccObj);
	});
}
