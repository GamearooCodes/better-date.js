"use-strict";

const moment = require("moment");
const tz = require("moment-timezone");

const { Logger } = require("simply-logger");

//The valid timezone function
function isValidTimeZone(tz) {
	if (!Intl || !Intl.DateTimeFormat().resolvedOptions().timeZone) {
		throw new Error("Time zones are not available in this environment");
	}
	try {
		Intl.DateTimeFormat(undefined, { timeZone: tz });
		return true;
	} catch (ex) {
		return false;
	}
}

//let's initialize the logger!
class date {
	constructor(timezone, format = 24) {
		const logger = new Logger("better-date.js", "America/New_York", 12);
		if (!isValidTimeZone(String(timezone)))
			return logger(
				`${timezone} is not a valid timezone a list of zones can be found here https://momentjs.com/timezone/`
			);

		this.timezone = timezone;

		try {
			var d = new Date();
			var date24 = moment(d)
				.tz(String(this.timezone))
				.format("MMMM Do YYYY, HH:mm:ss"); // 24 hour format
			var date12 = moment(d)
				.tz(String(this.timezone))
				.format("MMMM Do YYYY, hh:mm:ss A"); // 12 hour format

			let date = date24;

			if (format === 12) date = date12;
			if (format === 24) date = date24;

			this.date = date;

			return this.date.date;
		} catch (err) {
			return logger(`An error: ${err}`);
		}
	}
}

//exporting
module.exports.date = date;
