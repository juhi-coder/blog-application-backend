const UserModel = require("../models/user");
const bcrypt = require("bcryptjs");
const auth = require("../services/authentication");

async function signUp(req, res) {
  const { fullname, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await UserModel.create({ fullname, email, password: hashedPassword });
    return res.status(201).json({ success: "User created successfully" });
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
async function login(req, res) {
  const { email, password } = req.body;
  try {
    console.log(`Login attempt for email: ${email}`);
    const user = await UserModel.findOne({ email });
    console.log(user);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).send("Invalid Credentials");
    }
    const token = auth.createToken(user);
    res.status(200).json({ message: "successfully logged in", token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { signUp, login };
