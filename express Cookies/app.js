const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.get('/cookie', (req, res) => {
    res.cookie("Vaibhav", "secFB", {
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        httpOnly: true,
        secure: false
    });
    res.send("Cookie set successfully");
});

app.listen(8060, () => {
    console.log("http://localhost:8060");
});
