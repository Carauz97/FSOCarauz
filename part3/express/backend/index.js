const express = require("express");
const app = express();

app.use(express.static("dist"));
app.use(express.json());

const baseURL = "/api/notes";

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];
app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get(baseURL, (request, response) => {
  response.json(notes);
});

app.get(baseURL + "/:id", (request, response) => {
  const id = Number(request.params.id);
  console.log(id);
  const note = notes.find((note) => note.id === id);
  console.log(note);
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

app.delete(baseURL + "/:id", (request, response) => {
  const id = Number(request.params.id);

  notes = notes.filter((note) => note.id !== id);
  console.log(id);

  response.status(204).end();
});

app.post(baseURL, (request, response) => {
  const note = request.body;
  console.log(note);
  response.json(note);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
