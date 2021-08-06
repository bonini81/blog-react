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
  //https://www.freecodecamp.org/news/fetch-data-react/
  //https://www.freecodecamp.org/news/content/images/2021/03/clip-2-axios-min.gif
  // Good example, https://stackoverflow.com/questions/57263525/useeffect-not-being-called-and-not-updating-state-when-api-is-fetched
    
  const getNews = () => axios.get('https://gnews.io/api/v4/search?q=watches&token=b4260ebfe932d9c37aa81837c7ae32e6');

  useEffect(() => {

    getNews()
    .then((response) => {
    const newsfetch = response.data.articles;
      setData(newsfetch);
      console.log(data);
    })
      .catch(() => setError(`No News available.`));
    

    }, [])

   
  

    return (
    
<React.Fragment>


<div className="container width-adb">



    <h1 className="titulos-cards">Remote Links</h1>

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