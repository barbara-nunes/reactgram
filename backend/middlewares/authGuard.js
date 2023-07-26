const User = require("../models/User");

const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

const authGuard = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
 
  // Check if header has a token
  if (!token) return res.status(401).json({ errors: ["Acesso negado!"] });
  //console.log({token})
  // Check if token is valid
  try {
    console.log("here")
    const verified = jwt.verify(token, jwtSecret);
    console.log({verified})
    req.user = await User.findById(verified.id).select("-password");

    next();
  } catch (err) {
    console.log({err})
    res.status(400).json({ errors: ["O Token é inválido!"] });
  }
};

module.exports = authGuard;