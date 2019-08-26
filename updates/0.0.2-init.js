const keystone = require('keystone')
const User = keystone.list('User').model

exports = module.exports = function (done) {
  new User({
    name: {
      first: 'Admin',
      last: 'User'
    },
    email: 'admin@sei',
    password: 'admin',
    isAdmin: true
  }).save(done)
}
