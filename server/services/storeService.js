const storeAccess = require("../dataAccess/storeAccess")
const priceAccess = require("../dataAccess/priceAccess")
const getStores=async()=>{
    return await storeAccess.getStores()
}
const getStoreById=async(_id)=>{
    return await storeAccess.getStoreById(_id)
}
const getListStoreByTotalPrice = (cityId, items) => {
    const stores = storeAccess.getStoreByCity(cityId)
    const productsId=items.map((item)=>{
        return item.product._id
    })
    const amount = stores.map( (storeName) => {
        const prices=priceAccess.getPricesByBarcodes(productsId,storeName)
        const pricesByQuantity= prices.map((price,index)=>{
            return price*items[index].quantity
        })
        const total = pricesByQuantity.reduce((accumulator, price) => accumulator + price, 0)
        const totalStore = { total, storeName }
        return totalStore
    }
    )
    amount.sort((a, b) =>  a.total - b.total )
    return amount
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