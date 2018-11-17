'use strict';

var moment = require('moment');

// validates that the quantity is in the range (0, 24)
function quantityIsValid(err, done) {
    var quantity = this.quantity;
    setTimeout(function() {
        if(quantity <= 0 || quantity > 24) {
            err();
        }
        done();			
    }, 1000);	
}
// validates that the date isn't from the future
function dateIsValid(err, done) {
    var date = this.date;
        setTimeout(function() {
            if(moment(date) > moment()) {
                err();
            }
            done();			
        }, 1000);
}

module.exports = function(Hour) {
    Hour.validateAsync('quantity', quantityIsValid, {message: 'Hours quantity must be greater than zero and can\'t exceed one day'});
    Hour.validateAsync('date', dateIsValid, {message: 'Date can\'t be from the future' })
};


