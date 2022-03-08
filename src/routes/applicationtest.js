const express = require('express');

const test5 = require('../services/test5');
const test3 = require('../services/test3');
const test2 = require('../services/test2');


function applicationTestApi(app) {
    const router = express.Router();
    app.use('/api', router);

    const test5Service = new test5();
    const test3Service = new test3();
    const test2Service = new test2();

    router.get('/test5/:data', (req, res, next) => {
        const { data } = req.params;
        try {
            const result = test5Service.getDataCoincidences(data);
            res.status(200).json({
                message: 'Success',
                result
            });
        }catch(err) {
            next(err);
        }
    });

    router.get('/test3', (req, res, next) => {
        const { yearInit, yearFin } = req.query;
        try {
            const result = test3Service.getAniosBisiestos( yearInit, yearFin);
            res.status(200).json({
                message: 'Success',
                result
            });
        }catch(err) {
            next(err);
        }
    });

    router.get('/test2', (req, res, next) => {
        const { dateInit, dateFin } = req.query;
        try {
            const result = test2Service.getLastDaysMonthSunday( dateInit, dateFin);
            res.status(200).json({
                message: 'Success',
                result
            });
        }catch(err) {
            next(err);
        }
    });
}

module.exports = applicationTestApi;