import express from "express";

const app = express();

app.get("/test", (req, res) => {
    res.send("Hello SENATI, buenos noches");
});

const port = parseInt(process.env.PORT || "4000", 10);

app.listen(port, () => {
    console.log(`Express server started on port ${port}`);
});