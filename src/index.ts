import express, { Request, Response } from "express";
import { env } from "./config/env";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  console.log(process.env.PORT);

  return res.send("Hello from Express + TS!!!");
});

app.listen(env.PORT, () => {
  console.log("Server running on port " + env.PORT);
});
