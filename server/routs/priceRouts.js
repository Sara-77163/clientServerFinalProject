const priceController=require("../controllers/priceController")
const express=require("express")
const router=express.Router()
router.get("/",priceController.getPrices)
router.get("/:_id",priceController.getPriceById)
router.post("/",priceController.addPrice)
router.put("/",priceController.updatePrice)
router.delete("/:_id",priceController.deletePrice)
module.exports=router
