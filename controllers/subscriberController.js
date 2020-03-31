const Subscriber = require("../models/Subscriber");




//exports.getSubscriptionPage = (req, res) => {
//    res.render("contact");
//};



module.exports = {
    index: (req, res, next) => {
        Subscriber.find().then(subscribers => {
            res.locals.subscribers = subscribers;
            next();
        })
            .catch(error => {
                console.log(`Error fetching subscribers: ${error.message}`)
                res.redirect("/");
            })
    },
    indexView: (req, res) => {
        res.render("subscribers/index");
    },
    getSubscriptionPage:(req, res) => {
            res.render("contact");
    }
};
