// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if the Authorization header exists and is well-formed
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization token missing or malformed" });
  }

  const token = authHeader.split(" ")[1];

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.Jwt_sec);

    // Fetch the user from the database
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    if (!user) {
      return res.status(401).json({ message: "Invalid token - user not found" });
    }

    // Attach user object to the request for further use in routes
    req.user = user;
    next();
  } catch (err) {
    console.error("JWT authentication error:", err.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = authenticateUser;
