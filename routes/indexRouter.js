const { Router, text } = require("express");
const indexRouter = Router();
const { validateUser, getAllMessagesFromDb, insertNewMessageIntoDb, getSpecificMessageFromDb, getNewMessageForm } = require("../controllers/messageController");

indexRouter.get("/", getAllMessagesFromDb);

indexRouter.get("/new", getNewMessageForm);

indexRouter.get("/messages/:id", getSpecificMessageFromDb);

// use postman/submit form to send POST requests
indexRouter.post("/new", validateUser, insertNewMessageIntoDb);

module.exports = indexRouter;
