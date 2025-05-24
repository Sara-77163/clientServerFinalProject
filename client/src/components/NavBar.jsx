import React from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { Outlet, useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { useSelector } from 'react-redux';
const NavBar = () => {
    const user = useSelector((state) => state.fullName);
    const navigate = useNavigate();
    const items = [

        { label: 'Users', icon: 'pi pi-home', command: () => navigate('/layout/User') },
        { label: 'Products', icon: 'pi pi-chart-line', command: () => navigate('/layout/User') },
        { label: 'Stores', icon: 'pi pi-list', command: () => navigate('/layout/User')},
        { label: 'City', icon: 'pi pi-inbox', command: () => navigate('/layout/User') }
    ];
    const handleTabChange = (e) => {
        items[e.index].command();
    }
    return (

            <div className="card  ">
                  <TabMenu model={items} onTabChange={(e) => { handleTabChange(e) }} />
                </div>
 

    )
}
export default NavBar;