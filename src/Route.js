import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoutes"
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

import NotFound from "./containers/NotFound"
import Home from "./containers/Home";
import Login from "./containers/Login";
import NewNote from "./containers/NewNote";
import Note from "./containers/Note";


import SignUp from "./containers/SignUp"

export default ({ childProps }) => <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps}/>
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps}/>
    <UnauthenticatedRoute path="/signup" exact component={SignUp} props= {childProps} />
    <AuthenticatedRoute path="/notes/new" exact component={NewNote} props= {childProps} />
    <AuthenticatedRoute path="/notes/:id" exact component={Note} props= {childProps} />
    <Route path="/index" render={(props) => <div><h3>Index .html</h3></div>} />
    <Route component={NotFound} />
</Switch>;
