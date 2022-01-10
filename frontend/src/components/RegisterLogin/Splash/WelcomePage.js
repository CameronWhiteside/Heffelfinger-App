import { useContext } from "react"
import { useSelector } from "react-redux";
import LoginFormPage from "../LoginFormPage";

import './WelcomePage.css'

const WelcomePage = () => {

    const sessionUser = useSelector(state => state.session.user);
    let isLoggedIn = (!(!sessionUser));

    // const loggedOutImage = (
    //     <div className="welcome image-container">
    // </div>
    // )

    // const loggedInImage = (
    //     <div className="welcome image-container">
    //     {isLoggedIn && <img src="../../../../../assets/greetingletter.png" alt={letterAltText}/>}
    //     </div>
    // )

    return (
        <div className="welcome-page">
            <div className="welcome-content-area">
                <div className="welcome-left">
                    <div className="welcome image-container">
                        {!isLoggedIn && <img onMouseDown={(e)=> e.preventDefault()} src="../../../../../assets/greeting-letter-925.png" alt='weclome letter'/>}
                        {isLoggedIn && <img onMouseDown={(e)=> e.preventDefault()} src="../../../../../assets/handshake.png" alt='handshake'/>}
                    </div>
                </div>
                <div className="welcome-right">
                    <LoginFormPage />
                </div>
            </div>
        </div>
    )

}

export default WelcomePage
