var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
    var n = Math.random();

    fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams;
    let x = search_params.get("x");
    if (x == null) {
        res.send('sin applied to ' + n + ' is ' + Math.sin(n));
    }
    else {
        res.send('sin applied to ' + x + ' is ' + Math.sin(x));

    }

});

module.exports = router;


