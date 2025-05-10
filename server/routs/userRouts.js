const userController=require("../controllers/userController")
const express=require("express")
const router=express.Router()
router.get("/",userController.getUsers)
router.get("/_id",userController.getUserById)
router.post("/",userController.addUser)
router.put("/",userController.updateUser)
router.delete("/:_id",userController.deleteUser)
module.exports=router
