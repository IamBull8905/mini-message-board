const db = require("../db/queries");
const links = [{ href: "/new", text: "New Message" }];

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
  const messageIndex = Number(req.params.id) + 1;
  const message = await db.getSpecificMessageDetails(String(messageIndex));
  res.render("message", { message });
}

async function insertNewMessageIntoDb(req, res) {
  const { messageContents, authorName } = req.body;
  await db.insertMessage(messageContents, authorName);
  res.redirect("/");
}

module.exports = {
  getNewMessageForm,
  getAllMessagesFromDb,
  getSpecificMessageFromDb,
  insertNewMessageIntoDb,
};
