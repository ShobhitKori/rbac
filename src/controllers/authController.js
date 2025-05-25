const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const user = await User.findOne({ username })
    if (user) {
      return res.status(409).json({ message: `A user already exists with username: ${username}. Try Logging in.` })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({ username, password: hashedPassword, role })
    await newUser.save()
    res.status(201).json({ message: `user registered with username: ${username}` })

  } catch (err) {
    res.status(500).json({ message: `Error registering user: ${err}` })
  }
}
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username })
    if (!user) {
      return res.status(404).json({ message: `No user exists with username: ${username}.` })
    }
    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      return res.status(400).json({ message: "Unauthorized" })
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" })
    res.status(200).json({ token })
  } catch (err) {
    res.status(500).json({ message: `Error Logging in the user: ${err}` })
  }
}

module.exports = { register, login }