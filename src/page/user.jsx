import React from 'react';
import {NavLink, useLocation, useParams} from "react-router-dom";
import {headerClass, navClass} from "../classes/listClasses";

function User(props) {
    const {userId} = useParams()
    return (
        <div className={'flex flex-col w-[200px]'}>
            <div className={headerClass}>UserPage</div>
            <NavLink to="/users" className={navClass} end> Users list Page </NavLink>
            <NavLink to={`/users/${userId}/edit`} className={navClass} end> Edit this user </NavLink>
            user: {userId}
        </div>
    );
}

export default User;