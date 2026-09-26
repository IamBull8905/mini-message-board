const { body, validationResult, matchedData } = require("express-validator");
const db = require("../db/queries");
const links = [{ href: "/new", text: "New Message" }];

const alphaErr = "Name must only contain letters.";
const nameLengthErr = "Username must contain between 3 and 15 letters.";
const emptyErr = "Message must not be left empty.";

const validateUser = [
  body("authorName")
    .trim()
    .isAlpha()
    .withMessage(alphaErr)
    .isLength({ min: 3, max: 15 })
    .withMessage(nameLengthErr),
  body("messageContents").trim().notEmpty().withMessage(emptyErr),
];

async function getNewMessageForm(req, res) {
  res.render("form", { title: "Send a Message!" });
}

async function getAllMessagesFromDb(req, res) {
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render("index", {
    title: "Mini Message Board",
    messages: messages,
    links: links,
  });
}

async function getSpecificMessageFromDb(req, res) {
  const messageIndex = Number(req.params.id);
  const message = await db.getSpecificMessageDetails(String(messageIndex));
  res.render("message", { message });
}

async function insertNewMessageIntoDb(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("form", {
      title: "Mini Message Board",
      errors: errors.array(),
    });
  }
  const { messageContents, authorName } = matchedData(req);
  await db.insertMessage(messageContents, authorName);
  res.redirect("/");
}

module.exports = {
  validateUser,
  getNewMessageForm,
  getAllMessagesFromDb,
  getSpecificMessageFromDb,
  insertNewMessageIntoDb,
};
