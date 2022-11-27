const router = require("express").Router();

router.get("/login", (req, res) => {
  return res.send(req.headers.authorization);
});

module.exports = router;
