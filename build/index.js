"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 3050;
app.get("/", (req, res) => {
    if (Math.random() > 0.5) {
        res.status(200).send("Success!");
    }
    else {
        res.status(400).send("Failed!");
    }
});
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
//# sourceMappingURL=index.js.map