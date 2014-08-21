var seconds = 3662;
//seconds = 0;
console.log("# seconds: ", seconds);

console.log(formatDuration(seconds));

function formatDuration (seconds) {
    if (seconds == 0){
        return "now";
    }
    if (seconds > 0) {
        retstr = ''
        var unitnames = [" year", " day", " hour", " minute", " second"];
        /*how many seconds are in each unit, where the
        units are years, days, hours, minutes and seconds */
        var secsperunit = [31536000, 86400, 3600, 60, 1];
        //how many of each unit
        var units = [0, 0, 0, 0, 0];
        var commas = 0;
        var totunits = 0;
        /*now loop through calculating the number of each unit
        of time */
        for (i = 0; i <=4; i++) {
            units[i] = Math.floor(seconds / secsperunit[i]);
            commas = (units[i] > 0) ? commas + 1 : commas;
            seconds -= units[i] * secsperunit[i];
        }
        totunits = commas;
        commas -= 2;
        /*now that we know how many of each unit there are,
        and how many commas we'll need, we can put together
        the final string */
        for (i = 0; i <= 4; i++) {
            if (units[i] > 0) {
                retstr += " " + units[i] + unitnames[i];
            }
            retstr = (units[i] > 1) ? retstr += "s" : retstr;
            retstr = (units[i] > 0 && commas > 0) ? retstr + "," : retstr;
            retstr = (units[i] > 0 && totunits > 1 && commas == 0) ? retstr + " and" : retstr;
            commas = (units[i] > 0) ? commas -1 : commas;
        }
        return retstr.trim();
    } 
}