import "reflect-metadata"
import express from 'express'
import router from './router'
import authRouter from "./router/authRouter";
import testRoute from "./test/route/testRoute";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use("/api/v1", router)
app.use("/api/v1", authRouter)
app.use("/api/v1", testRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})