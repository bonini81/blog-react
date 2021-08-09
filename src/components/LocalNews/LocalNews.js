import React from 'react';

const LocalNews = (props) => {



    return ( 
      <React.Fragment>
        
        <h2 className="card-title">LocalStorage News</h2>
<div className="col-lg-4 estilo-cards-home">
<div className="card card-bonini-link" >
          
<div className="card-body"  >

          <p> Post Id: { props.key }</p>
              <p>{props.title}</p>
              <p>{ props.content }</p>
            </div>
            
           
          </div>
        </div>
      
</React.Fragment>

 );

}

export default LocalNews;