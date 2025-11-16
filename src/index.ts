import express, { Request, Response } from "express";
// import dotenv from "dotenv";
// dotenv.config();

const app = express();
const PORT = 3000;
// const PORT = process.env.PORT;

app.use(express.json());

app.get("/:user", (req: Request, res: Response) => {
  const user = req.params.user || "Guest";
  console.log(process.env.PORT);
  
return  res.send(`Hello Iam ${user} from Express + TS!!! Subhro Branch`);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
