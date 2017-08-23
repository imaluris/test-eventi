/**
 * EventsController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

index: (req, res) => {
    Events.find().exec( (err, events) => {
       return res.view('eventi', {'eventi' :events});
    });
}
	
};

