const shoppingListAccess=require("../dataAccess/shoppingListAccess")
const getShoppingLists=async()=>{
    return await shoppingListAccess.getShoppingLists()
}
const getShoppingListById=async (_id)=>{
    return await shoppingListAccess.findById(_id)
 }
 const addShoppingList=async (dataShoppingList)=>{
     return await shoppingListAccess.addShoppingList(dataShoppingList)
 }
 const updateShoppingList=async(ddataShoppingListP)=>{
    return await shoppingListAccess.updateShoppingList(dP)
}
const deleteShoppingList=async (_id)=>{
   
    return await shoppingListAccess.deleteShoppingList(_id)
}

module.exports={getShoppingLists,getShoppingListById,addShoppingList,updateShoppingList,deleteShoppingList}