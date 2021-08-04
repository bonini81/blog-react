import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


/*
*Book Component Doc
*This component is the single view card for books.
*/



const News = (props) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //https://www.freecodecamp.org/news/fetch-data-react/
  //https://www.freecodecamp.org/news/content/images/2021/03/clip-2-axios-min.gif
  
  useEffect(() => {
  
    axios('https://gnews.io/api/v4/search?q=watches&token=3dc0c6909b88ae9b7f1caeda9fa86e31')
    .then(response => {
      
      setData(response.data);
      console.log(data);
    })
      .catch(error => {
        console.error(
          "Error fetching data: ", error);
    setError(error);
  })
    .finally(() => {
      setLoading(false);
  
    })
  
  
  }, [] )
  
  //if (loading) return "Loading...";


    return ( 

<React.Fragment>



      <p>Hello Man</p>


  

</React.Fragment>

     );

}
 
export default News;