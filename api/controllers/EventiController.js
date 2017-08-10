/**
 * EventiController
 *
 * @description :: Server-side logic for managing eventis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

_config: {
    rest: true,
    shortcuts: true
},

index: (req, res) => {
    Eventi.find().exec( (err, eventi) => {
      return res.view('eventi/eventi', {'eventi': eventi});
    });
    }
    
};


