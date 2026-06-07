import express from "express";

const app = express();
const port = 1313;

app.get("/", (req, res) => {
    console.log(req)
});

app.listen(port, () => {
    console.log(`Server has started on port ${port}`)
});