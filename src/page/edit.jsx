import React from 'react';
import {headerClass, navClass} from "../classes/listClasses";
import {NavLink, useParams} from "react-router-dom";

function Edit(props) {
    const {userId} = useParams()
    return (
        <div className={'flex flex-col w-[200px]'}>
            <div className={headerClass}>Edit User Page</div>

            <NavLink to={`/users/${userId}/profile`} className={navClass} end> User profile Page </NavLink>
            <NavLink to={`/users/${Number(userId) + 1}/profile`} className={navClass} end> Another User </NavLink>
            <NavLink to="/users" className={navClass} end> Users List page </NavLink>
        </div>
    );
}

export default Edit;