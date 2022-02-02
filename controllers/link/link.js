const Link = require("../../models/link");
const shortid = require("shortid");

async function generateLink(req, res) {
  try {
    const { from } = req.body;
    const code = shortid.generate();
    const to = "/t/" + code;
    const link = new Link({ to, from, owner: req.user.userId });

    await link.save();
    res.status(201).json({ link });
  } catch (error) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
}

async function getLink(req, res) {
  try {
    const links = await Link.find({ owner: req.user.userId });
    res.status(201).json(links);
  } catch (error) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
}

module.exports = { generateLink, getLink };
