import React from 'react';


const LocalNews  = ( props ) => {
    return ( 
      <React.Fragment>
        
        <h2 className="card-title">LocalStorage News</h2>
<div className="col-lg-4 estilo-cards-home">
<div className="card card-bonini-link" >
          
<div className="card-body">

          
            <p>{ props.title }</p>
</div>
          </div>
        </div>
      
</React.Fragment>

 );

}

export default LocalNews;