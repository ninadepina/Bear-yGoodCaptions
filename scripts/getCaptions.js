export async function getCaptions() {
	try {
		const data = await (await fetch('../assets/cc.vtt')).text();

		return data.split('\n\n').map((item) => {
			const [number, timeRange, ...textParts] = item.split('\n').filter(Boolean);

			const [startTime, endTime] = timeRange.split(' --> ').map(vttTimestampToSeconds);

			const text = textParts.map((part) => ({ text: part }));

			return { number, start: startTime, end: endTime, text };
		});
	} catch (error) {
		return false;
	}
}

function vttTimestampToSeconds(timestamp) {
	const [hours, minutes, seconds, milliseconds] = timestamp.split(/[:.]/).map(parseFloat);

	return hours * 3600 + minutes * 60 + seconds + milliseconds / 1000;
}
