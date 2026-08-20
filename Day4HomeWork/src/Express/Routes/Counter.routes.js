const express = require("express");

const CounterRoutes = express.Router();

let StartCount = 0;


// GET Increment
CounterRoutes.get("/counter/inc", (req, res) => {
    try {
        StartCount++;

        res.json({
            count: StartCount
        });

    } catch (error) {
        res.json({
            err: error.message
        });
    }
});


// GET Decrement
CounterRoutes.get("/counter/dec", (req, res) => {
    try {
        if(StartCount > 0){
            StartCount--;
            res.json({
                count: StartCount
            }); 
        } else {
            res.json({
                count : StartCount,
                message : "Count cannot go below 0"
            })
        }

    } catch (error) {
        res.json({
            err: error.message
        });
    }
});


// GET Reset
CounterRoutes.get("/counter/reset", (req, res) => {
    try {
        StartCount = 0;

        res.json({
            count: StartCount
        });

    } catch (error) {
        res.json({
            err: error.message
        });
    }
});


// GET Count
CounterRoutes.get("/counter/count", (req, res) => {
    try {
        res.json({
            count: StartCount
        });

    } catch (error) {
        res.json({
            err: error.message
        });
    }
});


module.exports = {
    CounterRoutes
};