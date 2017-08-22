var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
bcrypt = require('bcrypt');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findOne({ id: id } , function (err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {

    User.findOne({ email: email }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }

      bcrypt.compare(password, user.password, function (err, res) {
          if (!res)
            return done(null, false, {
              message: 'Invalid Password'
            });
          var returnUser = {
            email: user.email,
            createdAt: user.createdAt,
            id: user.id
          };
          return done(null, returnUser, {
            message: 'Logged In Successfully'
          });
        });
    });
  }
));

passport.serializeUser(function(org, done) {
    done(null, org.id);
});

passport.deserializeUser(function(id, done) {
    Organizzatore.findOne({ id: id } , function (err, org) {
        done(err, org);
    });
});

passport.use('orgStrat', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {

    Organizzatore.findOne({ email: email }, function (err, org) {
      if (err) { return done(err); }
      if (!org) {
        return done(null, false, { message: 'Incorrect email.' });
      }

      bcrypt.compare(password, org.password, function (err, res) {
          if (!res)
            return done(null, false, {
              message: 'Invalid Password'
            });
          var returnOrg = {
            email: org.email,
            createdAt: org.createdAt,
            id: org.id
          };
          return done(null, returnOrg, {
            message: 'Logged In Successfully'
          });
        });
    });
  }
));
