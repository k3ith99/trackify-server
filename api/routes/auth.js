const { Router } = require("express");
const router = Router();
const auth = require("../controllers/auth");

router.post("/register", auth.register);

router.post("/login", auth.login);

module.exports = router;
