const storeController=require("../controllers/storeController")
const express=require("express")
const router=express.Router()
router.get("/",storeController.getStore)
router.get("/_id",storeController.getStoreById)
router.post("/",storeController.addStore)
router.put("/",storeController.updateStore)
router.delete("/:_id",storeController.deleteStore)
module.exports=router
