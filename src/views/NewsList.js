import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import News from '../components/News';




const NewsList = () => {

  const [data, setData] = useState([]);
  const [ error, setError ] = useState([]);

    
  const getNews = () => axios.get('https://gnews.io/api/v4/search?q=watches&token=b4260ebfe932d9c37aa81837c7ae32e6');

  useEffect(() => {

    getNews()
    .then((response) => {
    const newsfetch = response.data.articles;
      setData(newsfetch);
      console.log(data);
    })
      .catch(() => setError('No News available.'));
    

    }, [])

   
  

    return (
    
<React.Fragment>


<div className="container width-adb">



    <h1 className="remote-news-title">Remote News Area</h1>

            <div className="row">
              
     { data && data.map((datanews) => {
       return <News
     
         title={datanews.title}
         image={datanews.image}
         description={datanews.description}
	
	/>

})}
                        

</div>
</div>


  

</React.Fragment>

     );

}
 
export default NewsList;