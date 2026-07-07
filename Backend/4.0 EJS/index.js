import express from "express"

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

app.get("/", (req, res) => {

    let message = "Hey, it's a weekday. It's time to work hard!";
    // get today's date
    const today = new Date();
    const dayIdx = today.getDay();

    if (dayIdx === 0 || dayIdx === 6){
        message = "Hey, it's a weekend. Have some fun!";
    }

    res.render("index.ejs", {
        text: message
    });
})