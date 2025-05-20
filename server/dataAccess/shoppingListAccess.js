const ShoppingListSchema=require("../models/shoppingListModdel")
const getShoppingLists=async()=>{
    const ShoppingLists=await ShoppingListSchema.find().lean()
    return ShoppingLists
}
const getShoppingListById=async (_id)=>{
    const ShoppingList=await ShoppingListSchema.findById(_id).lean()
    return ShoppingList
 }
 const addShoppingList=async (dataShoppingList)=>{
     const newShoppingList=await ShoppingListSchema.create({dataShoppingList})
     return newShoppingList
 }
 const updateShoppingList=async(sL)=>{
    let ShoppingList=await ShoppingListSchema.findById(sL._id)
    if(!ShoppingList)
        return undefined
    ShoppingList.nameList=sL.nameList
    ShoppingList.productsList=sL.productsList
    const updateShoppingList=await ShoppingList.save()
    return updateShoppingList
}
const deleteShoppingList=async (_id)=>{
    const ShoppingList=await ShoppingListSchema.findById(_id)
    if(!ShoppingList)
        return undefined
    const daletedShoppingList= await ShoppingList.deleteOne()
    return daletedShoppingList
}
module.exports={getShoppingLists,getShoppingListById,addShoppingList,updateShoppingList,deleteShoppingList}