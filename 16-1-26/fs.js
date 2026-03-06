const fs = require("fs");

const fh = fs.openSync("Secfb","w+");
console.log(fh);

fs.writeFileSync(fh, "HELLO ");
fs.closeSync(fh);

const y = fs.readFileSync("Secfb", "utf8");
console.log(y);

fs.appendFileSync("Secfb", "data");

console.log(fs.readFileSync("Secfb","utf8"));

fs.renameSync("Secfb", "Secfb_copy");
fs.cpSync("Secfb_copy", "Secfb_new");
fs.unlinkSync("Secfb_copy");