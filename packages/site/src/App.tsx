import React from 'react';
import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {createStyles, Grid, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import {Navigation} from "./components/Navigation";
import {Home} from "./pages/home";

import './App.css';
import {pages} from "./pages/pages";
import {Header} from "./components/Header";


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://usf16fomvc.execute-api.eu-west-1.amazonaws.com/dev/graphql',
  })
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%'
    }
  }),
);


function App() {

  const css = useStyles();

  const renderRoutes = () => {
    return pages.map((pageConfig) => {
      return <Route path={pageConfig.path} component={pageConfig.component} />
    });
  };

  return (
    <BrowserRouter>
      <Header/>
      <Grid className={css.container} container direction={'column'} justify={'center'} alignItems={'center'} spacing={3}>
        <Grid item>
          <Navigation />
        </Grid>

        <Grid item>
          <Switch>
            <Route exact path="/" component={Home}/>
            {renderRoutes()}
          </Switch>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
