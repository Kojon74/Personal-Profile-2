import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthPage from "./components/auth/AuthPage";
import BlogPage from "./components/blog/BlogPage";
import BlogPost from "./components/blog/BlogPost";
import EditPage from "./components/edit/EditPage";
import MainPage from "./components/main/MainPage";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/ken">
            <AuthPage />
          </Route>
          <Route exact path="/edit">
            <EditPage />
          </Route>
          <Route exact path="/blog">
            <BlogPage />
          </Route>
          <Route exact path={"/blog/:blogId"}>
            <BlogPost />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
