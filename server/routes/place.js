var express = require('express'),
    router = express.Router(),
    Place = require('../models/place.js'),
    User = require('../models/user.js');

router.route('/places').post(function (req, res) {
    var token = req.body.token;

    if (!token) {
        return res.status(500).send({ message: 'Bad token' });
    }

    User.findOne({ token: token }).exec(function (err, user) {
        if (err || !user) {
            return res.status(500).send({ message: 'User not found' });
        }

        //if (user.role !== 'admin') {
        //    return res.status(500).send({ message: 'User is not admin' });
        //}

        Place.collection.insert(require('../json-data/places.json'), function (err) {
            if (err) {
                return res.status(500).send({ message: 'Places internal error' });
            }

            res.send({ message: 'Ok' });
        });
    });
});

module.exports = router;