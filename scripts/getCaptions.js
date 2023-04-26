export async function getCaptions() {
	try {
		const data = await (await fetch('/data/vtt.json')).json();

		return data.map(function (item) {
			const [startTime, endTime] = item.vtt.split(' --> ').map(vttTimestampToSeconds);

			item.text = item.text.map((text, index) =>
				item.speaker && item.speaker[index] ? item.speaker[index].toUpperCase() + ': ' + text : text
			);

			return { start: startTime, end: endTime, text: item.text, classes: item.classes };
		});
	} catch (err) {
		console.error(err);
		return false;
	}
}

function vttTimestampToSeconds(timestamp) {
	const [hours, minutes, seconds, milliseconds] = timestamp.split(/[:.]/).map(parseFloat);

	return hours * 3600 + minutes * 60 + seconds + milliseconds / 1000;
}
