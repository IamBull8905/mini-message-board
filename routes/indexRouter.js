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
// use postman to send POST requests
indexRouter.post("/new", (req, res) =>
  res.send("Reached route to add new messages"),
);

module.exports = indexRouter;
