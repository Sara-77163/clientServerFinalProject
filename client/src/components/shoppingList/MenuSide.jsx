import React, { useEffect, useRef, useState } from 'react';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { useSelector } from 'react-redux';
import { useGetShoppingListByUserIdQuery } from '../../slices/shoppingList/shoppingListApiSlice';
import ShoppingList from './ShoppingList';

const MenuSide=()=> {
    const toast = useRef(null);
     const [ListShopping, setListShopping] = useState([])
     const [detailList, setDetailList] = useState({});
    const userId = useSelector((state) => state.user.userInfo._id);
    const { data, isLoading } = useGetShoppingListByUserIdQuery(userId)
    useEffect(() => {
            if (!isLoading && data) {
                setListShopping(data)
                console.log(data,ListShopping)
            }
        }, [ isLoading, data])
    const items = [
        {
            label: 'Documents',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    command:()=>{
                        alert("new")
                    }
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search',
                     command:()=>{
                        alert("new")
                    }
                }
            ]
        },
        {
            label: 'My Lists',
            items:ListShopping.map((list) => ({label:list.nameList,command:()=>{
                setDetailList(list)
            }} ))
        }
    ];

    return (
        <div className="card flex justify-content-center">
             <div  className="  flex flex-column md:flex-row justify-content-between my-5">
         <ShoppingList detailList={detailList}/> 
         </div>
          <div className=" p-button-secondary mb-3 md:mb-0" >
            <Toast ref={toast} />
            <Menu model={items} />
            </div>  
       </div>
        
    )
}
export default MenuSide;