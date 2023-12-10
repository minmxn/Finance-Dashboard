import express from "express"
import KPI from "../models/KPI.js"

const router = express.Router()

// we can create multiple routes if we want to but in this case, we are creating one
router.get("/kpis", async(req, res) => {
    try {
        const kpis = await KPI.find() // grab the kpis data from kpi database from "../models/kpi.js"
        res.status(200).json(kpis) // return to the frontend to indicate success result through res.status(...)
    } catch(error){
        res.status(404).json({message: error.message})
    } // return to frontend to indicate there is an error and display error message
})

export default router