import app from "./index.js";
const port = parseInt(process.env.PORT || "4000", 10);
app.listen(port, () => {
    console.log(`Express server started on port ${port}`);
});
//# sourceMappingURL=server.js.map