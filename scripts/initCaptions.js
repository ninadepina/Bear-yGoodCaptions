import { getCaptions } from './getCaptions.js';
import { toggleCaptions } from './toggleCaptions.js';
import { insertCaptionsVid } from './insertCaptions.js';

const player = document.querySelector('#vid');
player.addEventListener('loadedmetadata', init);

async function init() {
	const cc = await getCaptions();
	insertCaptionsVid(cc);
	player.addEventListener('timeupdate', () => updateTimerDisplay(cc));
}

export function updateTimerDisplay(cc) {
	cc.forEach((c) => toggleCaptions(cc.indexOf(c), c.start, c.end, Math.floor10(player.currentTime, -1)));

	// 120.6 = length of video
	if (player.currentTime < 120.6) setTimeout(() => updateTimerDisplay(cc), 100);
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
