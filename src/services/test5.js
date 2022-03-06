class test5 { 

    constructor() {}

    getDataCoincidences(data) {
        let dataArray = Array.from(`${data}`);

        let dataSearch = [...new Set(data)];
        
        const result = dataSearch.map(character => {
            let regexp = new RegExp(`[${character}]`, 'gi');
            let coincidence = data.match(regexp).length;
            return { character, coincidence}
        });
        
        return result;
    }
}

module.exports = test5;