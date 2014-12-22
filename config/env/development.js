module.exports = {
  db: 'mongodb://localhost/mean-book',
  sessionSecret: 'developmentSessionSecret',
  facebook: {
    clientID: '1581854908715093',
    clientSecret: '0a3f6c7dcf32f9d1a095f716f95e19f2',
    callbackURL: 'http://localhost:3000/oauth/facebook/callback'
  },
  twitter: {
    clientID: 'WjlNanNfXzAHsNv6wNMZoG3zn',
    clientSecret: 'gfgbBCmh6H5P6wWsAlRSYIXItWTgY084YZaWUPfTBLg2X6oQic',
    callbackURL: 'http://localhost:3000/oauth/twitter/callback'
  },
  google: {
    clientID: '1082742985153-nn5l4ehq9a29s35s8iliab5t6b3mgjm9.apps.googleusercontent.com',
    clientSecret: 'HcmZbjVK8r0QwrsvOISEh0wc',
    callbackURL: 'http://localhost:3000/oauth/google/callback'
  }
};
