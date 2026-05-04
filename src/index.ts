import express from "express";

const app = express();

app.get("/test", (req, res) => {
    res.send("Hello SENATI, buenos noches");
});

export default app;