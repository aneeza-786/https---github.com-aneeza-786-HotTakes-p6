const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

// multer to save images on server
const multer = require("../middleware/multer-config");

const saucesCtrl = require("../controllers/sauce");

// routes CRUD of sauces
router.get("/", auth, saucesCtrl.getAllSauces);
router.post("/", auth, multer, saucesCtrl.createSauce);
router.get("/:id", auth, saucesCtrl.getOneSauce);
router.put("/:id", auth, multer, saucesCtrl.modifySauce);
router.delete("/:id", auth, saucesCtrl.deleteSauce);



module.exports = router;