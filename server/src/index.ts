import cors from "cors";
import express from "express";
import { SERVER_PORT } from "@cosmic-monorepo/shared/constants";
import { ExampleI } from "@cosmic-monorepo/shared/types";

const app = express();

app.use(cors());

app.get("/example", (req, res) => {
  const example: ExampleI = {
    id: 1,
    name: "Example",
  };
  res.send(example);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}!`);
});
