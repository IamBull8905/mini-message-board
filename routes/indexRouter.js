const { Router, text } = require("express");
const indexRouter = Router();
const { getAllMessagesFromDb, insertNewMessageIntoDb, getSpecificMessageFromDb, getNewMessageForm } = require("../controllers/messageController");

indexRouter.get("/", getAllMessagesFromDb);

indexRouter.get("/new", getNewMessageForm);

indexRouter.get("/messages/:id", getSpecificMessageFromDb);

// use postman/submit form to send POST requests
indexRouter.post("/new", insertNewMessageIntoDb);

module.exports = indexRouter;
