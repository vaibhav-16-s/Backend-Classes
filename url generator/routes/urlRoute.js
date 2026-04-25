const express = require('express');
const router = express.Router();

const { generateShortUrl } = require("../controller/urlController");

router.post('/', generateShortUrl);

module.exports =  router ;