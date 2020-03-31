const mongoose = require("mongoose"),
    { Schema } = mongoose,
    userSchema = new Schema({
        name: {
            first: {
                type: String,
                trim: true
            },
            last: {
                type: String,
                trim: true
            }
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        
        zipCode: {
            type: Number,
            min: [10000, "Zip code too short"],
            max: 99999
        },
        vip: {
            type: Boolean,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: Number
        },
        courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
        subscriberAccount: { type: Schema.Types.ObjectId, ref: "Subscriber" }
    }, {
            timestamps: true
});

userSchema.virtual("fullname").get(function () {
    return `${this.name.first} ${this.name.last}`;
});

userSchema.virtual("username").get(function () {
    var lastPart = this.name.last[0];
    if (this.name.last.length > 6) {
        for (let a = 1; a < 7; a++) {
            lastPart = lastPart + this.name.last[a];
        }
    }
    return `${this.name.first[0]}${lastPart}`;
});

module.exports = mongoose.model("User", userSchema);