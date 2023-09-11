import { Logger } from "@classycrafter/super-logger";
import moment from "moment";

const logger = new Logger({
    name: "Gamearoo's Development",
    timezone: "America/New_York",
    tzformat: 12,
    writelogs: false,
    colored: true,
    colors: {
        grey: '#bbbbbb',
        gray: '#4C4C4C',
        blue: '#48ACF8',
        loggernamecolor: '#4CBAFF',
        processcolor: '#4C70FF',
        info: {
            color: '#59E77D',
            dark: '#11cc37',
            background: '#D2EED9',
            highlight: false,
        },
        debug: {
            color: '#68E3DF',
            dark: '#13aba4',
            background: '#D5F5F4',
            highlight: false,
        },
        warn: {
            color: '#F2D349',
            dark: '#c9a81b',
            background: '#FAEFBB',
            highlight: false,
        },
        error: {
            color: '#F6545C',
            dark: '#dc222c',
            background: '#FACBCD',
            highlight: false,
        },
        fatal   : {
            color: '#F71111',
            dark: '#9b0000',
            background: '#FAACAC',
            highlight: true,
        }
    }
});


export class BetterDate {
    
 

   
    private clock;
    private tz;
    constructor( timezone?: string, clock?: number) {
        if(!clock) clock = 12;
        if(!timezone) timezone = "America/New_York";
        this.clock = clock;
       

      
        if (!isValidTimeZone(String(timezone))) {
			 logger.error(
				`${timezone} is not a valid timezone a list of zones can be found here https://momentjs.com/timezone/`
			);
            return;
             }

		
        
        this.tz = timezone;

      
    }
    async formattedAsync(timeDate: Date): Promise<{time: string, calendar: string}> {
        return new Promise(async (resolve, reject) => {
            if(!timeDate) {

                    logger.error("No Date Provided", "better-date.js")

                return reject("No date provided")
            }
       
        let date = await moment(timeDate).tz(String(this.tz)).format("MMMM Do YYYY, hh:mm:ss A");

        if(this.clock === 24) date = await moment(timeDate).tz(String(this.tz)).format("MMMM Do YYYY, HH:mm:ss");

        resolve({
            time: date,
            calendar: await moment(timeDate).tz(String(this.tz)).calendar()
        })
    })

    }
    
}

//The valid timezone function
function isValidTimeZone(tz: string) {
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