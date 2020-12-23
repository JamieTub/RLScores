const express = require('express');

const app = new express();

app.get('/', (req, res) => {
    res.send("hello");
});

console.log("app started on localhost:5000, ctrl+c to exit")
app.listen(5000);