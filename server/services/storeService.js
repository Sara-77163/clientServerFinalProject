const storeAccess = require("../dataAccess/storeAccess")
const priceAccess = require("../dataAccess/priceAccess")
const getStores=async()=>{
    return await storeAccess.getStores()
}
const getStoreById=async(_id)=>{
    return await storeAccess.getStoreById(_id)
}
const getListStoreByTotalPrice = async(cityId, items) => {
    const stores =await  storeAccess.getStoreByCity(cityId)
    console.log("items")
    console.log(items[0])
    const productsId=items.map((item)=>{
        return item
    })
    const prices= await priceAccess.getPricesByBarcodes(productsId,stores)
    const amount = stores.map( (store) => {
        const pricesByStore = prices.filter(price => price.storeId === store._id)
        if(productsId.length!=pricesByStore.length)
            return null;
        // if (pricesByStore.length === 0) {
        //     return { total: 0, storeName: store.name }
        // }
        const pricesByQuantity= pricesByStore.map((price)=>{
            const index = items.findIndex(item => item.product._id === price.productId)
            return price*items[index].quantity
        })
        const total = pricesByQuantity.reduce((accumulator, price) => accumulator + price, 0)
        const totalStore = { total, storeName:store.name }
        return totalStore
    }
    )
    const filteredAmount = amount.filter((entry) => entry !== null);
    const result = filteredAmount.sort((a, b) => a.total - b.total);
    console.log("result", result)
    return result
}
const addStore=async(dataStore)=>{
   return await storeAccess.addStore(dataStore)
}
const updateStore = async (dataStore) => {
    
    return await storeAccess.updateStore(dataStore)
}
const deleteStore=async(_id)=>{
return await storeAccess.deleteStore(_id)
}
module.exports = { getListStoreByTotalPrice,getStores,getStoreById ,addStore,updateStore,deleteStore}