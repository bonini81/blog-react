import React, { useState, useEffect } from 'react';
import { News } from '../components/News';

const Home = () => {

  
  
  return (
    <React.Fragment>

<div class="container-fluid">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="sidebar-sticky pt-3">
      <h2 data-feather="home">Categories</h2>
        <ul class="nav flex-column">
         
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file">inner-peace</span>
            <News />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file">web-dev-tool</span>
            
            </a>
          </li>
       
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file">js</span>
            
            </a>
          </li>
         </ul>
       
         </div>
    </nav>

    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 section-links-adb">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">My Link's Dashboard</h1>
       
      </div>

      <section>

      <h1 className="titulos-cards">Available Links My Man</h1>


      </section>
    </main>
  </div>
</div>



    </React.Fragment>
  );
}
 
export default Home;