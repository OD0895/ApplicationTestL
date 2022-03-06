const moment = require('moment');

class test2 {
    constructor() {}

    getLastDaysMonthSunday(dateInit, dateFin) {

        let init = moment(dateInit);
        let fin = moment(dateFin);

        let result = 0;
        for (var m = moment(init); m.isBefore(fin); m.add(1, 'days')) {
            let lastDay = m.format('YYYY-MM-')+ m.daysInMonth();

            if( lastDay == m.format('YYYY-MM-DD') ) {
                if( m.weekday() == 0 ) {
                    result++;
                }

            }
        }
        return result;
    }
}

module.exports = test2;