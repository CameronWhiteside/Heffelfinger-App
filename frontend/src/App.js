import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import LoginFormPage from "./components/RegisterLogin/LoginFormPage";
// import SignupFormPage from "./components/RegisterLogin/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Basic/Navigation";
import CompanyBrowser from "./components/PrimaryFeatures/Company/CompanyBrowser";
// import AddCompanyForm from "./components/PrimaryFeatures/Company/AddCompanyForm/AddCompanyForm";
import CompanyProfilePage from "./components/PrimaryFeatures/Company/CompanyProfile";
import WelcomePage from "./components/RegisterLogin/Splash/WelcomePage";
// import AddCompanyButton from "./components/PrimaryFeatures/Company/CompanyCRUDButtons/AddCompanyButton";
// import SocialLinksForm from "./components/PrimaryFeatures/ProfileHelpers/ExternalLinksHelper/SocialLinksHelper/SocialLinksForm";
// import ExternalLinksForm from "./components/PrimaryFeatures/ProfileHelpers/ExternalLinksHelper/ExternalLinksForm";
import AboutPage from './components/RegisterLogin/Splash/AboutPage'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {

    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));

  }, [dispatch]);

  return (
    <>

      <main>
      {isLoaded && (
        <Switch>
          {/* <Route path="/login">
            <LoginFormPage />
          </Route> */}
          <Route exact path="/companies">
            <CompanyBrowser />
          </Route>
          <Route path="/companies/:id">
            <CompanyProfilePage />
          </Route>
          <Route path="/signup">
            <WelcomePage newUserDefault={true} />
          </Route>
          <Route path="/login">
            <WelcomePage newUserDefault={false} />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>

            <Route path="/">
            <WelcomePage newUserDefault={true} />
          </Route>
        </Switch>
      )}
      </main>
      <Navigation isLoaded={isLoaded} />
    </>
  );
}

export default App;
