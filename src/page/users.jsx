import React from 'react';
import {NavLink, Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import {headerClass, navClass} from "../classes/listClasses";
import UsersList from "./usersList";
import User from "./user";
import Edit from "./edit";

function Users(props) {
    const {path} = useRouteMatch();

    return (
        <div>
            <div className={headerClass}>Users Layout</div>
            <NavLink to='/' className={navClass}> Main Page</NavLink>

            <Switch>
                <Route path={path + "/:userId/profile"} component={User}/>
                <Route path={path + "/:userId/edit"} component={Edit}/>
                <Route path={path} exact component={UsersList}/>
            </Switch>
        </div>
    );
}

export default Users;