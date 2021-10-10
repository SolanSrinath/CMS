const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

//first API start
app.get("/", (req, res) => {
  res.send("API is running");
});
//first API end

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => {
    return n._id === req.params.id;
  });
  res.send(note);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on port ${PORT}`));
