import MenueSide from "./shoppingList/MenuSide"
import React from 'react';
import {Route, Navigate } from 'react-router-dom';
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    return (
        <></>
        // <Route
        //     {...rest}
        //     render={props =>
        //         isAuthenticated ? (
        //             <Component {...props} />
        //         ) : (
                    
        //             <Navigate to="/" />
        //         )
        //     }
        // />
    );
}

export default PrivateRoute;