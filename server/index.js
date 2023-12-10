import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import kpiRoutes from "./routes/kpi.js"
import KPI from "./models/KPI.js"
import { kpis } from "./data/data.js" // grab data from data.js

dotenv.config()
const app = express()
app.use(express.json)
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

/* ROUTES SETUP */
app.use("/kpi", kpiRoutes)

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000 
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
    
    /* ADD DATA ONE TIME ONLY OR AS NEEDED */
    // await mongoose.connection.db.dropDatabase() // before we seed the database, we need to drop database to ensure that we do not have duplicate data or run into erros. It is ESSENTIAL for DEVELOPMENT PURPOSES. we will run this line once and seed the information.
    // KPI.insertMany(kpis)
})
.catch((error) => console.log(`${error} did not connect`))