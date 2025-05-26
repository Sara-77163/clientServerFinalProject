import React, { useEffect } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Card } from 'primereact/card';
const NavBar = () => {
    const user = useSelector((state) => state.user.userInfo);
    const navigate = useNavigate();
    const items = [

        { label: 'Users', icon: 'pi pi-home', command: () => navigate('/layout/User') },
        { label: 'Products', icon: 'pi pi-chart-line', command: () => navigate('/layout/User') },
        { label: 'Stores', icon: 'pi pi-list', command: () => navigate('/layout/User') },
        { label: 'City', icon: 'pi pi-inbox', command: () => navigate('/layout/User') },
    ];
    const handleTabChange = (e) => {
        items[e.index].command();
    }
    return (
        <div className="navbar-container" style={{ position: 'relative', width: '100%' }}>
            <div className="card  " style={{ width: '100%' }}>
                <TabMenu model={items} onTabChange={(e) => { handleTabChange(e) }} />
            </div >
            <div className="user-info" style={{
                position: 'absolute',
                top: '50%',
                right: '20px',
                transform: 'translateY(-50%)',
                display: 'flex',
                alignItems: 'center',
                zIndex: 2
            }}>
                <div style={{ marginLeft: '10px' , width: '300px', minWidth: '200px', padding: '12px' }} title="פרטי משתמש">
                    <div>
                        <div><b>name:</b> {user.name}</div>
                        <div><b>אימייל:</b> {user.email}</div>
                        <div><b>userName</b> {user.useName}</div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default NavBar;