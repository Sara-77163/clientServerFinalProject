const cityController=require("../controllers/cityController")
const express=require("express")
const router=express.Router()
router.get("/",cityController.getCities)
router.get("/:_id",cityController.getCityById)
router.post("/",cityController.addCity)
router.put("/",cityController.updateCity)
router.delete("/:_id",cityController.deleteCity)
module.exports=router
