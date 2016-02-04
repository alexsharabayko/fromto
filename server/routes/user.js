var express = require('express'),
    router = express.Router(),
    path = require('path'),
    multiparty = require('multiparty'),
    cloudinary = require('cloudinary'),
    User = require('../models/user.js');

cloudinary.config({
    cloud_name: 'dz6xtu1hj',
    api_key: '933492627497273',
    api_secret: 'QSfpwFxgACzH0kbKQPe-3dRrOaI'
});

var parseFormData = function (req, res, next) {
    var form = new multiparty.Form({
        uploadDir: path.dirname(process.mainModule.filename) + '/user_files'
    });

    form.parse(req, function(err, fields, files) {
        var user = {};

        err && res.send(err);

        Object.keys(fields).forEach(function (key) {
            user[key] = fields[key][0];
        });

        user.avatar = files.avatar[0];

        req.user = user;

        next();
    });
};

var uploadAvatarToCDN = function (req, res, next) {
    var user = req.user,
        crop = null;

    if (user.avatar) {
        crop = {
            x: user.avatar_x || 0,
            y: user.avatar_y || 0,
            width: user.avatar_w || 100,
            heigth: user.avatar_h || 100,
            crop: 'crop'
        };

        delete user.avatar_x;
        delete user.avatar_y;
        delete user.avatar_w;
        delete user.avatar_h;

        cloudinary.uploader.upload(user.avatar.path, function (result) {
            req.user.avatar = result;

            next();
        }, crop);
    } else {
        next();
    }
};

var saveNewUser = function (req, res, next) {
    var user = new User(req.user);

    user.password = user.generateHash(user.password);

    user.save(function (err) {
        err ? res.status(500).send(err) : next();
    });
};



router.route('/register').post(parseFormData, uploadAvatarToCDN, saveNewUser, function (req, res) {
        res.json({ message: 'Ok' });
    });

module.exports = router;