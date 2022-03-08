class test5 { 

    constructor() {}

    getDataCoincidences(data) {
        let dataArray = Array.from(`${data}`);

        let dataSearch = [...new Set(data)];
        
        const result = dataSearch.map(character => {
            let regexp = new RegExp(`[${character}]`, 'g');
            let coincidence = data.match(regexp).length;
            let result = `${character} = ${coincidence}`;
            return result;
        });
        
        return result.join(', ');
    }
}

module.exports = test5;