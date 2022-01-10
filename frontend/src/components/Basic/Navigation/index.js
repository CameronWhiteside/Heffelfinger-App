// Form
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
// import './Navigation.css';

// function Navigation({ isLoaded }){
//   const sessionUser = useSelector(state => state.session.user);

//   let sessionLinks;
//   if (sessionUser) {
//     sessionLinks = (
//       <ProfileButton user={sessionUser} />
//     );
//   } else {
//     sessionLinks = (
//       <>
//         <NavLink to="/login">Log In</NavLink>
//         <NavLink to="/signup">Sign Up</NavLink>
//       </>
//     );
//   }

//   return (
//     <ul>
//       <li>
//         <NavLink exact to="/">Home</NavLink>
//         {isLoaded && sessionLinks}
//       </li>
//     </ul>
//   );
// }

// export default Navigation;

//Modal Popup
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../../RegisterLogin/LoginFormModal';
import './Navigation.css';
import * as sessionActions from '../../../store/session';
import DropDownMenu from './Menus/DropDownMenu';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const toggleClass = (target, className) => {

    if (target.className.includes(className)){
        let result = target.className.replace(className, '')
        target.className = result
    } else {
        target.className += ` ${className}`
    }

  }


  const clickFunction =
  e => {
      e.stopPropagation()
      toggleClass(e.target.parentElement.parentElement.firstChild, 'show-menu')
      toggleClass(e.target.parentElement.parentElement.parentElement, 'show-menu')
      toggleClass(e.target.parentElement.parentElement, 'show-menu')
  }


  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };



  let logInMenu;
  if (sessionUser) {
    logInMenu = (
      <div className='log-in-menu'>
          <DropDownMenu
          iconClassString='fas fa-user-astronaut'
          rotateToShow={false}
          >
            <button onClick={(e)=>logout(e)}>Log Out</button>
          </DropDownMenu>
      </div>
    );
  } else {
    logInMenu = (
      <div className='log-in-menu'>
        <DropDownMenu
          iconClassString='fas fa-user-astronaut'
          rotateToShow={false}
        >
          <button onClick={() => { history.push('/login') }}>Log In</button>
          <button onClick={() => { history.push('/signup') }}>Sign Up</button>
        </DropDownMenu>
      </div>
      // <div className='session-links'>
      //   <LoginFormModal />
      //   <NavLink to="/signup">Sign Up</NavLink>
      // </div>
    );
  }

  // {loggedIn && <button onClick={()=>logout()}>Log Out</button>}
  // {!loggedIn && <NavLink to='/login'>Log In</NavLink>}
  // {!loggedIn && <NavLink to='/singup'>Sign Up</NavLink>}

  return (
    <div className='navigation glass'>
      <div className='site-logo'>
        <NavLink exact to="/">
        <img src='../../../../../../../../../../../assets/logo-300.png' alt='logo' />
        </NavLink>

      </div>
      <div className='text-links'>
        <NavLink exact to="/">00_Welcome</NavLink>
        <NavLink exact to="/users">01_Octopus Den</NavLink>
        <NavLink exact to="/companies">02_Launchpad</NavLink>
        <NavLink exact to="/events">03_Mess Hall</NavLink>
        <NavLink exact to="/about">04_Free Donuts</NavLink>
      </div>
      {/* <div className="log-in-menu">
        {<DropDownMenu
          icon='fas fa-user-astronaut'
          rotateToShow={false}
        >
          {loggedIn && <button onClick={() => logout()}>Log Out</button>}
          {!loggedIn && <NavLink to='/login'>Log In</NavLink>}
          {!loggedIn && <NavLink to='/singup'>Sign Up</NavLink>}
        </DropDownMenu>
        }
    </div> */}

      {isLoaded && logInMenu}

    </div>
  );
}

export default Navigation;
