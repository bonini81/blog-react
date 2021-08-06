import React from 'react';


const News  = ( props ) => {
    return ( 
<React.Fragment>

<div className="card card-bonini-link" >
<div className="card-body">
  <h2 className="card-title">Hey { props.title }</h2>
	
</div>
</div>
</React.Fragment>

 );

}

 
export default News;
