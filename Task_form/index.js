// const express = require("express");
// const app = express();
// const path = require("path");
// const pathj = path.join(__dirname, "component");
// app.use(express.static(pathj));
// app.listen(8075);


const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
app.listen(8075);

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));
const path1=path.join(__dirname, "Component");

// Serve static files from Component folder
app.use(express.static(path1));


// Handle form submission
app.post("/submit", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    const data = `Name: ${name}, Email: ${email}\n`;

    fs.appendFileSync("data.txt", data);

    res.send(`
        <h3>Data Saved!</h3>
        <a href="/data">View Data</a><br>
        <a href="/">Go Back</a>
    `);
});

// Display saved data
app.get("/data", (req, res) => {
    let fileData = "";

    if (fs.existsSync("data.txt")) {
        fileData = fs.readFileSync("data.txt", "utf-8");
    }

    res.send(`
        <h2>Stored Data</h2>
        <pre>${fileData}</pre>
        <a href="/">Go Back</a>
    `);
});

app.listen(8075, () => {
    console.log(`Server running at http://localhost:${8075}`);
});
