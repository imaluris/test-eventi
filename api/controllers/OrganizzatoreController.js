/**
 * OrganizzatoreController
 *
 * @description :: Server-side logic for managing Organizzatores
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    _config: {
        actions: true,
        shortcuts: true,
        rest: true
    },

    orgCompany: (req, res) => {
        Organizzatore.find().exec( (err, org) => {
            return res.view('addEvento',{addEvento: org});
            
        });       
    },
	
};

