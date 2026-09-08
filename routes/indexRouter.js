const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hii im so cool!",
    user: "Nish",
    added: new Date(),
  },
  {
    text: "BESTIE BOOO - yeah duh ofc you are!!",
    user: "Viv",
    added: new Date(),
  },
  {
    text: "How flattering...",
    user: "Nish",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form", { title: "Send a Message!" });
});

// use postman/submit form to send POST requests
indexRouter.post("/new", (req, res) => {
  const { messageContents, authorName } = req.body;
  messages.push({ text: messageContents, user: authorName, added: new Date() });
  res.redirect("/");
});

module.exports = indexRouter;
