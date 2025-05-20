const ShoppingListSchema = require("../models/shoppingListModdel")
const mongoose = require("mongoose")
const UserSchema = require("../models/userModel")
const shoppingListValidator = async (data) => {
    if (!data.userId || !data.productsList || !data.nameList || data.productsList.length === 0)
        return { status: 400, message: "the userId & the productsList & the nameList is required" }
    if (data.nameList.trim() === "")
        return { status: 400, message: "user name is required" }
    if (!mongoose.Types.ObjectId.isValid(data.userId._id))
        return { status: 400, message: "type error" }
    const user = await UserSchema.findById(data.userId._id)
    if (user)
        return { status: 404, message: "the user not found" }
    const ShoppingListbyUser = ShoppingListSchema.findOne({ userId: data.userId._id, nameList: data.nameList })
    if (ShoppingListbyUser)
        return { status: 400, message: "the nameList must be unique" }

    data.productsList.forEach(element => {
        if (!mongoose.Types.ObjectId.isValid(element.product._id))
            return { status: 400, message: "type error" }
        const productId = ShoppingListSchema.findById(element.product._id)
        if (!productId)
            return { status: 404, message: "the product not found" }
        if (typeof element.quantity !== 'number')
            return { status: 400, message: "the amount must be a number" }
    });
    return { status: 200, message: "success" }
}
module.exports = { shoppingListValidator }