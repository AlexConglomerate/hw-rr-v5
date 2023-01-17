import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import React from "react";
import {headerClass, navClass} from "./classes/listClasses";
import Users from "./page/users";
import MainPage from "./page/mainPage";

const App = () => {
    return (
        <>
            <div className={headerClass}>App Layout</div>
            <NavLink to="/users" className={navClass} end> Users list Page </NavLink>
            <Switch>
                <Route path={'/users'} component={Users}/>
                <Route path={'/'} component={MainPage}/>
                <Redirect to={'/'}/>
            </Switch>
        </>
    )

}

export default App;