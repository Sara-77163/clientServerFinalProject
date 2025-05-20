import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from 'react-router-dom';
const NavBar= () => { 
const navigate=useNavigate();
const items = [
    
        { label: 'Users', icon: 'pi pi-home' ,command: () => navigate('/layout/User')},
        { label: 'Products', icon: 'pi pi-chart-line',command: () => navigate('/layout/User') },
        { label: 'Stores', icon: 'pi pi-list' ,command: () =>navigate('/layout/User')},
        { label: 'City', icon: 'pi pi-inbox' ,command: () => navigate('/layout/User')}
    ];
    const handleTabChange = (e) => {
        items[e.index].command();
    }
    return(
          <div className="card">
            <TabMenu model={items} onTabChange={(e)=>{handleTabChange(e)}}/>
        </div>
    )
 }
export default NavBar;