const express = require("express");
const app = express();


app.use((_, res) => {
    res.status(404);
    res.sendFile(__dirname + "/404.html");
});

app.listen(8080);
