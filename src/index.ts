import express from 'express'
import router from './router';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use("/api/v1", router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})