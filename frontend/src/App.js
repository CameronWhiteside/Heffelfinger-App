import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import LoginFormPage from "./components/RegisterLogin/LoginFormPage";
import SignupFormPage from "./components/RegisterLogin/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Basic/Navigation";
import CompanyBrowser from "./components/PrimaryFeatures/Company/CompanyBrowser";
import AddCompanyForm from "./components/PrimaryFeatures/Company/AddCompanyForm";
import CompanyProfilePage from "./components/PrimaryFeatures/Company/CompanyProfile";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <main>
      {isLoaded && (
        <Switch>
          {/* <Route path="/login">
            <LoginFormPage />
          </Route> */}
          <Route exact path="/companies">
            <CompanyBrowser />
          </Route>
          <Route exact path="/companies/new">
            <AddCompanyForm />
          </Route>
          <Route path="/companies/:id">
            <CompanyProfilePage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
      </main>
    </>
  );
}

export default App;
