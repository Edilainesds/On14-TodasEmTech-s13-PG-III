const express = require("express")

const router = express.Router()

const controller = require("../controller/noteController")

router.get("/all", controller.getAll)
router.post("/create", controller.createNote)

router.get("/:id", controller.noteById)

module.exports = router