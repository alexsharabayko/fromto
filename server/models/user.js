var mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs'),
    uniqueValidator = require('mongoose-unique-validator'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    token: {
        type: String,
        'default': ''
    },

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        'default': 'passenger', //'driver', 'admin',
        required: true
    },
    avatar: Object,

    createdAt: Date,
    updatedAt: Date
});


UserSchema.pre('save', function (next) {
    if (!this.createdAt) {
        this.createdAt = Date.now();
    }

    this.updatedAt = Date.now();

    next();
});


UserSchema.path('email').validate(function (email) {
    var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailRegex.test(email);
}, 'The e-mail field has bad pattern.');

UserSchema.path('role').validate(function (role) {
    return ['passenger', 'driver', 'admin'].indexOf(role) > -1;
}, 'The role can be only "passenger"');


UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};


UserSchema.plugin(uniqueValidator);


module.exports = mongoose.model('User', UserSchema);