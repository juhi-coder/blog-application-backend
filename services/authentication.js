const JWt = require("jsonwebtoken");
const secretkey = "juhikiduniya";

function createToken(user) {
  const payload = {
    _id: user.id,
    email: user.email,
    profileImageUrl: user.profileImageUrl,
    role: user.role,
  };
  const token = JWt.sign(payload, secretkey);
  return token;
}

function validateToken(token) {
  const payload = JWt.verify(token, secretkey);
  return payload;
}
module.exports = { createToken, validateToken };
