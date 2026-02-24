const express = require("express");
const app = express();
const port = 3000;

// Tell Express to serve files from "public" folder
app.use(express.static("public"));

app.listen(port, () => {
    console.log("Server running on " + port);
});