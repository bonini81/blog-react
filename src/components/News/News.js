import React from 'react';


const News  = ( props ) => {
    return ( 
<React.Fragment>
<div className="col-lg-4 estilo-cards-home">
<div className="card card-bonini-link" >
          
<div className="card-body">
<h2 className="card-title">{props.title}</h2>
            <img src={props.image} alt="Test" width="100%" height="auto" />
            <p>{ props.description }</p>
</div>
          </div>
        </div>
      
</React.Fragment>

 );

}

 
export default News;
