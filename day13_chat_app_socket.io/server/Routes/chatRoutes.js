const express = require("express");
const { findUserChats, createChat, findChats } = require("../Controller/chatController");

const router = express.Router();

router.post("/", createChat);
router.get("/:userId", findUserChats);
router.get("/find/:firstId/:secondId", findChats);

module.exports = router;
