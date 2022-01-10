// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import DropDownMenu from '../Navigation/Menus/DropDownMenu'

import * as sessionActions from '../../../store/session';

function LogInMenu() {

  const user = useSelector(state => state.session.user)
  let loggedIn = false;
  if (user) loggedIn=true

  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div className="log-in-menu">
      {loggedIn && <NavLink to={`/users/${user.id}`}>{`HELLO ${user.firstName}`}</NavLink>}
      <DropDownMenu
        icon='fas fa-user-astronaut'
        rotateToShow={false}
      >
        {loggedIn && <button onClick={(e)=> logout(e)}>Log Out</button>}
        {!loggedIn && <NavLink to='/login'>Log In</NavLink>}
        {!loggedIn && <NavLink to='/signup'>Sign Up</NavLink>}
      </DropDownMenu>
    </div>
  );
}

export default LogInMenu;
