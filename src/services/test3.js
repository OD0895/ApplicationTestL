class test3 {
    constructor() {}

    getAniosBisiestos (yearInit, yearFin) {
        let anios = [];
        for (let year = yearInit; year <= yearFin; year++) {
            if (this.isBisiesto(year)) {
                anios.push(year);
            }
        }

        return { 'salida1': anios, 'salida2': anios.join('@') };
    }

    isBisiesto (year) {
        return (year % 400 === 0) ? true : 
                    (year % 100 === 0) ? false : 
                        year % 4 === 0;
    }
}

module.exports = test3;