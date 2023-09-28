import express from "express";
import axios from "axios";

const router = express.Router()

router.get("/", async (req, res) => {
    const ip = await axios.get("https://api.ipify.org?format=json")
    const loction = await axios.get(`https://ipinfo.io/${ip.data.ip}/geo`)
    const temp = await axios.get(`https://api.weatherapi.com/v1/current.json?key=a577836ded914bb7bb5155450230109&q=${loction.data.city}`)
    const data = {
        data: temp.data,
        region: loction.data.region
    }
    res.render("home.ejs", data)
})

router.post("/", async (req, res) => {
    try{
        const temp = await axios.get(`https://api.weatherapi.com/v1/current.json?key=a577836ded914bb7bb5155450230109&q=${req.body["city"]}`)
        const data = {
            data: temp.data
        }
        res.render("home.ejs", data)
    }catch(error)
    {
        res.render("home.ejs", {
            error: "No matching location found"
        })
    }
})

export default router