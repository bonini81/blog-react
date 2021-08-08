import React, { useState, useEffect } from 'react';
import LocalNews from '../components/LocalNews/LocalNews';
import  NewsList  from './NewsList';

const Home = () => {

  
  
  return (
    <React.Fragment>

<div class="container-fluid">
  <div class="row">
    

    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 section-links-adb">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <NewsList />
              
   
       
      </div>

            
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      
              
              <LocalNews />
       
      </div>
      <section>

  


      </section>
    </main>
  </div>
</div>



    </React.Fragment>
  );
}
 
export default Home;