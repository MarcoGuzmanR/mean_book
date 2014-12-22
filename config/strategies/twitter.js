var passport = require('passport'),
    url      = require('url'),
    TwitterStrategy = require('passport-twitter').Strategy,
    config   = require('../config'),
    users    = require('../../app/controllers/users.server.controller');

module.exports = function() {
  passport.user(new TwitterStrategy({
    consumerKey: config.twitter.clientID,
    consumerSecret: config.twitter.clientID,
    callbackURL: config.twitter.callbackURL,
    passReqToCallback: true
  },
  function(req, token, tokenSecret, profile, done) {
    var providerData = profile._json;
    providerData.token = token;
    providerData.tokenSecret = tokenSecret;

    var providerUserProfile = {
      fullName: profile.displayName,
      username: profile.username,
      provider: 'twitter',
      providerId: profile.id,
      providerData: providerdata
    };

    users.saveOAuthUsersProfile(req, providerUserProfile, done);
  }));
};
