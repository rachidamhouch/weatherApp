import express from "express";
import axios from "axios";

const router = express.Router()

router.get("/", async (req, res) => {
    res.render("home.ejs")
})

router.post("/", async (req, res) => {
    res.render("home.ejs")
})

export default router