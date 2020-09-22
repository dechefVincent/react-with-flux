import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CoursesPage from "./CoursesPage";
import Header from "./Header";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";

const App = () => {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/courses"} component={CoursesPage} />
        <Route path={"/course/:slug"} component={ManageCoursePage} />
        <Route path={"/course"} component={ManageCoursePage} />
        <Route path={"/about"} component={AboutPage} />
        <Redirect from={"/about-page"} to={"/about"} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
