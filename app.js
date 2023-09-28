import express from "express";
import bodyParser from "body-parser";
import homeRouter from "./routes/home.js"

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
app.use("/", homeRouter)

app.listen(port, () => {
    console.log(`Server is runing in port: ${port}`)
})
