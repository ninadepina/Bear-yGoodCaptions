export async function getCaptions() {
	try {
		const data = await (await fetch('/data/vtt.json')).json();

		return data.map(function (item) {
			const [startTime, endTime] = item.vtt.split(' --> ').map(vttTimestampToSeconds);

			item.text = item.text.map((text, index) => {
				const matchAsterisk = text.match(/\*(.*?)\*/);
				const matchBracket = text.match(/\[(.*?)\]/);
				const matchUnderscore = text.match(/\_(.*?)\_/);

				if (matchAsterisk) text = text.replace(matchAsterisk[0], matchAsterisk[1].toUpperCase());

				if (matchBracket) text = text.replace(matchBracket[0], '[' + matchBracket[1].toUpperCase() + ']');

				if (matchUnderscore) text = text.replace(matchUnderscore[0], '<i>' + matchUnderscore[1] + '</i>');

				return (item.speaker && item.speaker[index] ? item.speaker[index].toUpperCase() + ': ' : '') + text;
			});

			item.situation &&= `(${item.situation.toUpperCase()})`;
			// prettier-ignore
			return { start: startTime, end: endTime, text: item.text, situation: item.situation, classes: item.classes };
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
