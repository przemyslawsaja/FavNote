import React from 'react';
import Notes from "./Notes";
import store from "../store";
import Article from "./Article";
import Twitters from "./Twitters";
import { routes } from "../routes";
import { Provider } from 'react-redux';
import DetailsPage from "./DetailsPage";
import MainTemplate from "../templates/MainTemplate"
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

const Root = () => (
        <Provider store={store}>

            <BrowserRouter>
                <MainTemplate>
                    <Switch>
                        <Route exact path={routes.home} render={() => <Redirect to="notes"/>} />
                        <Route exact path={routes.notes} component={Notes}/>
                        <Route path={routes.note} component={DetailsPage}/>
                        <Route exact path={routes.articles} component={Article}/>
                        <Route path={routes.article} component={DetailsPage}/>
                        <Route exact path={routes.twitters} component={Twitters}/>
                        <Route path={routes.twitter} component={DetailsPage}/>
                    </Switch>
                </MainTemplate>
            </BrowserRouter>
        </Provider>
);

export default Root;
