const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/authMiddleware')
const authorizeRole = require('../middleware/roleMiddleware')

const { verify } = require('jsonwebtoken')
// only admin could access
router.get('/admin', verifyToken, authorizeRole("admin"), (req, res) => {
  res.status(200).json({message: "Welcome Admin"})
})

// only admin and manager could access
router.get('/manager', verifyToken, authorizeRole("admin", "manager"), (req, res) => {
  res.status(200).json({message: "Welcome Manager"})
})

// everyone could access
router.get('/user',verifyToken, authorizeRole("admin", "manager", "user"), (req, res) => {
  res.status(200).json({message: "Welcome User"})
})

module.exports = router