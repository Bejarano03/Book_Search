const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose")
const routes = require("./routes");

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/booksearch"));
}

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      }
);

// Define API routes

app.use(routes);

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});