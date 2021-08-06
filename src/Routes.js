  
import React from 'react';
import { Route } from 'react-router-dom';
// Views


import Home from './views/Home';
import NewsList from './views/NewsList';
export default [

<React.Fragment>


<Route exact path="/" component={ Home } ></Route>
<Route exact path="/newslist" component={ NewsList } ></Route>

  </React.Fragment>
  
];