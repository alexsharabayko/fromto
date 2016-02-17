var express = require('express'),
    router = express.Router(),
    path = require('path'),
    multiparty = require('multiparty'),
    cloudinary = require('cloudinary'),
    Car = require('../models/car.js'),
    User = require('../models/user.js');

cloudinary.config({
    cloud_name: 'dz6xtu1hj',
    api_key: '933492627497273',
    api_secret: 'QSfpwFxgACzH0kbKQPe-3dRrOaI'
});

var findUserByToken = function (req, res, next) {
    var token = req.body.token;

    if (!token) {
        return res.status(500).send({ message: 'Bad token' });
    }

    User.findOne({ token: token }, function (err, user) {
        if (err || !user) {
            return res.status(500).send({ message: 'User not found' });
        }

        req.body.user = user;

        next();
    });
};

var parseFormData = function (req, res, next) {
    var form = new multiparty.Form({
        uploadDir: path.dirname(process.mainModule.filename) + '/user_files'
    });

    form.parse(req, function(err, fields, files) {
        if (err) {
            return res.status(500).send({ message: 'Bad form data' });
        }

        var carData = {};

        req.body.token = fields.token[0];
        delete fields.token;

        Object.keys(fields).forEach(function (key) {
            carData[key] = fields[key][0];
        });

        req.body.photos = files.photos;
        req.body.car = carData;

        next();
    });
};

var saveImagesToCDN = function (req, res, next) {
    var photos = req.body.photos,
        resultPhotos = [],
        length = photos && photos.length,
        counter = 0;

    if (length) {
        photos.forEach(function (photo, i) {
            cloudinary.uploader.upload(photo.path, function (result) {
                resultPhotos[i] = result;

                counter += 1;

                if (counter === length) {
                    req.body.car.photos = resultPhotos;
                    next();
                }
            });
        });
    } else {
        next();
    }
};

var createCar = function (req, res, next) {
    var carData = req.body.car,
        car;

    carData.driver = req.body.user._id;

    car = new Car(carData);

    car.save(function (err, car) {
        if (err) {
            res.status(500).send(err);
        }

        req.body.car = car;
        next();
    });
};

var sendCar = function (req, res) {
    res.send(req.body.car);
};

var findAllCars = function (req, res, next) {
    Car.find({}, function (err, car) {
        if (err) {
            return res.status(500).send({ message: 'Internal server error' });
        }

        req.body.car = car;
        next();
    });
};

var findCarById = function (req, res, next) {
    Car.findById(req.params.id, function (err, car) {
        if (err || !car) {
            return res.status(500).send({ message: 'Car not found' });
        }

        req.body.car = car;
        next();
    });
};

var removeCar = function (req, res, next) {
    req.body.car.remove(function (err) {
        if (err) {
            res.status(500).send({ message: 'Internal server error' });
        }

        res.send({ message: 'Ok' });
    });
};

var updateCar = function (req, res, next) {
    res.send({ message: 'Ok' });
};

router.route('/cars/:id')
    .get(findCarById, sendCar)
    .delete(findUserByToken, findCarById, removeCar)
    .put(parseFormData, findUserByToken, findCarById, saveImagesToCDN, updateCar);

router.route('/cars')
    .post(parseFormData, findUserByToken, saveImagesToCDN, createCar, sendCar)
    .get(findAllCars, sendCar);

module.exports = router;