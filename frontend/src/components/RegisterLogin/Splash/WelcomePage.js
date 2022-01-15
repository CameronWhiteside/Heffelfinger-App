import { useContext, useEffect, useState } from "react"
import { NavLink, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginFormPage from "../LoginFormPage";
import SignInRegisterCombo from "./SignInRegisterCombo";

import './WelcomePage.css'

const WelcomePage = ({ newUserDefault }) => {

    const sessionUser = useSelector(state => state.session.user);
    const location = useLocation()

    if (sessionUser && (location.pathname !== '/')) return (
        <Redirect to="/" />
      );

    return (
        <div className="welcome-page">
            <div className="welcome-content-area">
                <div className="welcome-left">
                    <div className="welcome image-container">
                        {!sessionUser && <img onMouseDown={(e)=> e.preventDefault()} src="/assets/greeting-letter-925.png" alt='weclome letter'/>}
                        {sessionUser &&
                            <div className="welcome-links">
                                {/* <h1 className="wide-welcome">{`Welcome`}</h1> */}
                                <div className="badge-holder">
                                    <NavLink to='/companies'>
                                        <div className="badge-link company-badge"></div>
                                    </NavLink>
                                    <NavLink to='/about'>
                                        <div className="badge-link about-badge"></div>
                                    </NavLink>
                                    <NavLink to='/events' disabled>
                                        <div className="badge-link events-badge">
                                            <div className="coming-soon-icon">
                                                <div/>
                                            </div>
                                        </div>
                                    </NavLink>
                                    <NavLink to='/users'>
                                        <div className="badge-link users-badge">
                                            {/* <div className="coming-soon-icon">
                                                <div/>
                                        </div> */}
                                        </div>
                                    </NavLink>
                                    <div>

                                    </div>

                                </div>
                                {/* <h4 className="path-we">{`Select Your Path`}</h4> */}
                            </div>
                        }
                    </div>
                </div>
                <div className="welcome-right">
                    {!sessionUser && <SignInRegisterCombo newUserDefault={newUserDefault} />}
                </div>
            </div>
        </div>
    )

}

export default WelcomePage
