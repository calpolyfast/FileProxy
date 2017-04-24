const user = {
  username: 'cppfast',
  password: process.env.FILEPROXY_PASSWORD,
};

// Authenticate user
const authenticate = function authenticate(password) {
  if (password === user.password) {
    return true;
  }
  return false;
};

module.exports = {
  authenticate,
  user,
};
