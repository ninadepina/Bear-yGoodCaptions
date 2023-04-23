export async function getCaptions() {
	try {
		const data = await (await fetch('./assets/cc.vtt')).text();

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

(function () {
	/**
	 * decimal adjustment of a number.
	 *
	 * @param {String}  type  type of adjustment.
	 * @param {Number}  value number
	 * @param {Integer} exp   exponent (10 logarithm of adjustment base)
	 * @returns {Number} adjusted value
	 */
	function decimalAdjust(type, value, exp) {
		// if exp = undefined || zero...
		if (typeof exp === 'undefined' || +exp === 0) {
			return Math[type](value);
		}
		value = +value;
		exp = +exp;
		// if value != number || exp != integer...
		if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
			return NaN;
		}
		// shift
		value = value.toString().split('e');
		value = Math[type](+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp)));
		// shift back
		value = value.toString().split('e');
		return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp));
	}

	// decimal round
	if (!Math.round10) {
		Math.round10 = function (value, exp) {
			return decimalAdjust('round', value, exp);
		};
	}
	// decimal floor
	if (!Math.floor10) {
		Math.floor10 = function (value, exp) {
			return decimalAdjust('floor', value, exp);
		};
	}
	// decimal ceil
	if (!Math.ceil10) {
		Math.ceil10 = function (value, exp) {
			return decimalAdjust('ceil', value, exp);
		};
	}
})();
