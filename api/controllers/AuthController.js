/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var passport = require('passport');

 module.exports = {

     _config: {
         actions: false,
         shortcuts: false,
         rest: false
     },

     login: function(req, res) {

         passport.authenticate('local', function(err, user, info) {
             if ((err) || (!user)) {
                 return res.send({
                     message: info.message,
                     user: user
                 });
             }
             req.logIn(user, function(err) {
                 if (err) res.send(err);
                 return res.redirect('/eventi');
             });

         })(req, res);
     },

        loginOrg: function(req, res) {

         passport.authenticate('orgStrat', function(err, org, info) {
             if ((err) || (!org)) {
                 return res.send({
                     message: info.message,
                     org: org
                 });
             }
             req.logIn(org, function(err) {
                 if (err) res.send(err);
                 return res.redirect('eventi/eventi');
             });

         })(req, res);
     },

    logoutOrg: function(req, res) {
         req.logout();
         res.redirect('/');
     },

     logout: function(req, res) {
         req.logout();
         res.redirect('/');
     },
 };
