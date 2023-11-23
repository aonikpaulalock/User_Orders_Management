import express, { Request, Response } from "express"
import cors from "cors"
import { studentRouter } from "./app/config/module/user/user.route";
const app = express();

// Parser
app.use(cors())
app.use(express.json())

app.use("/api/users", studentRouter)


app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: 'Hello World!'
  })
})

export default app