import express from "express"
const app = express();

const PORT = 1313;  // Port we're running on

app.get("/", (req, res) => {
    console.log("This application is running");
    res.send("The application works");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>");
});

app.listen(PORT, () =>{
    console.log(`Server running on ${PORT}`);
});