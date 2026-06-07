import express from "express";

const app = express();
const port = 1313;

app.get("/", (req, res) => {
    // console.log(req)
    res.send("Hello World");
});

app.get("/contact", (req, res) => {
    res.send("here's my contact info:")
})

app.listen(port, () => {
    console.log(`Server has started on port ${port}`)
});