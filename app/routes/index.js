var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var todo_cats = {
        '... with kids': [
            {
                title: 'Circus Circus Midway',
                desc: 'Midway circus with arcade',
                link: 'http://www.circusreno.com/event/midway-shows/midway-games',
                highlight: false
            },
            {
                title: 'Discovery Museum',
                desc: 'Learning and science and shit',
                link: 'http://www.discmu.com',
                highlight: true
            }
        ],
        '... outside': [
        ],
        '... for education': [
        ],
        '... with booze': [
        ],
        '... for gaming': [
        ],
        '... for flavor': [
        ],
        '... for shoppers': [
        ],
        '... just for fun': [
        ],
        '... in season': [
        ]
    };

    res.render('index', {title: 'Holly and Mike Mason', todo: todo_cats});
});

module.exports = router;
