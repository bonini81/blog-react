  
import React from 'react';
import { Route } from 'react-router-dom';
// Views


import Home from './views/Home';
import NewsList from './views/NewsList';
import LocalNewsViews from './views/LocalNewsViews';
export default [

<React.Fragment>


<Route exact path="/" component={ Home } ></Route>
    <Route exact path="/newslist" component={NewsList} ></Route>
    <Route exact path="/localnewslist" component={ LocalNewsViews } ></Route>

  </React.Fragment>
  
];