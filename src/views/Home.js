import React, { useState } from 'react';
import  NewsList  from './NewsList';


const Home = () => {

  
  
  return (
    <React.Fragment>

<div class="container-fluid">
  <div class="row">
    

    <main role="main" className="col-md-12 ml-sm-auto col-lg-12 px-md-4 section-links-adb">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <NewsList />
  
       
      </div>
     
    </main>
  </div>
</div>



    </React.Fragment>
  );
}
 
export default Home;