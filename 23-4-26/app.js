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


app.get('/getCookies', (req, res) => {
    const data = req.cookies.Vaibhav;
    if (data)
        res.send(`Cookies value: ${data}`);
    else
        res.send('No cookies found');
});


app.get('/clearCookies', (req, res) => {
    res.clearCookie('Vaibhav');
    res.send('Cookies Deleted');
});

app.listen(8060, () => {
    console.log("http://localhost:8060");
});