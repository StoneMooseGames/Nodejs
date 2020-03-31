const mongoose = require("mongoose");
const subscriberSchema = mongoose.Schema({
    name: {
        type: String,
        required: true // prevents from saving to database unless rules are met
    },
    email: {
        type: String,
        lowercase: true, // property indicates that it's not case-sensitive
        unique: true, //a Mongoose schema helper
        required: true
    },
    zipCode: {
        type: Number,
        min: [10000, "zip code too short"],
        max: 99999
        // setting min and max values so that zipcode is 5 digits in length
    },
    vip: {
        type: Boolean,
        required: true
    },
    courses: { type: mongoose.Schema.Types.ObjectId, ref: "course" }
});

subscriberSchema.methods.getInfo = function () {
    return `name: ${this.name} Email: ${this.email} Zip Code: ${this.zipCode}`;
};

subscriberSchema.methods.findLocalSubscribers = function () {
    return this.model("Subscriber")
        .find({ zipCode: this.zipCode })
        .exec();
};

module.exports = mongoose.model("Subscriber", subscriberSchema);

