import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  console.log(process.env.PORT);
  
return  res.send("Hello from Express + TS!!!");
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
