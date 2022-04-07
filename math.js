const express = require('express');
let router = express.Router();
const func = require("./func");

router
    .route("/limiteint/:int/limitesup/:sup/method/:method")
    .get((req, res) => {
        const math = [];
        const int = parseInt(req.params.int); 
        const sup = parseInt(req.params.sup);   
        const method = req.params.method;
        if (method == "iter") {
            console.log(func.iter(int, sup));
            math.push(func.iter(int, sup));
        } else {
            math.push(func.rec(int, sup));
        }       
        return res.json(math);
    });

module.exports = router;