var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CarSchema = new Schema({
    driver: {
        type: Schema.Types.ObjectId,
        required: true
    },
    seatsCount: {
        type: Number,
        required: true
    },
    carNumber: {
        type: String,
        required: true
    },

    photos: {
        type: [],
        'default': []
    },

    isCondition: {
        type: Boolean,
        'default': false
    },
    isWifi: {
        type: Boolean,
        'default': false
    },
    isSocket: {
        type: Boolean,
        'default': false
    },
    isWC: {
        type: Boolean,
        'default': false
    },
    isLongLegs: {
        type: Boolean,
        'default': false
    },

    mark: String,
    model: String,
    yearOfIssue: Number,
    color: String,

    createdAt: Date,
    updatedAt: Date
});

CarSchema.pre('save', function (next) {
    if (!this.createdAt) {
        this.createdAt = Date.now();
    }

    this.updatedAt = Date.now();

    next();
});

module.exports = mongoose.model('Car', CarSchema);