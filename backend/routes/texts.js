//routes/texts.js
const express = require("express");
const { GetTextByKeyword, GetText, GetContent } = require("../controls/texts_get.js");
const router = express.Router();

router.get('/:keyword', GetTextByKeyword);
router.get("/Get/:keyword", GetText);
router.get("/Content/:keyword", GetContent)

module.exports = router;