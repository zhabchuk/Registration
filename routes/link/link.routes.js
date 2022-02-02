const { Router } = require("express");
const { generateLink, getLink } = require("../../controllers/link/link");
const { authMiddleware } = require("../../middleware/auth.middleware");
const router = Router();

router.post("/generate", authMiddleware, async (req, res) => generateLink(req, res));

router.get("/", authMiddleware, async (req, res) => getLink(req, res));

router.get("/:id", authMiddleware, async (req, res) => {});

module.exports = router;
