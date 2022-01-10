import { useContext, useEffect, useState } from "react"
import { useSelector } from "react-redux";
import LoginFormPage from "../LoginFormPage";
import SignInRegisterCombo from "./SignInRegisterCombo";

import './WelcomePage.css'

const WelcomePage = ({newUserDefault}) => {

    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className="welcome-page">
            <div className="welcome-content-area">
                <div className="welcome-left">
                    <div className="welcome image-container">
                        {!sessionUser && <img onMouseDown={(e)=> e.preventDefault()} src="../../../../../assets/greeting-letter-925.png" alt='weclome letter'/>}
                        {sessionUser && <img onMouseDown={(e)=> e.preventDefault()} src="../../../../../assets/handshake.png" alt='handshake'/>}
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
