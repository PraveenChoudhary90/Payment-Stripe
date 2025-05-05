import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import BASE_URL from '../config';
function Home() {
    const [mydata, setMydata] = useState([]);
  
      const loadData = async()=>{
       const  api = "http://localhost:8000/data/display";
        try {
            const response = await axios.get(api);
            console.log(response.data);
            setMydata(response.data);

        } catch (error) {
            console.log(error);
        }
      }



     useEffect(()=>{
        loadData();
     },[]); 




             const ans = mydata.map((key)=>{
            return(
                <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`http://localhost:8000/${key.defaultImage}`} height="200" />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
            Brand:{key.brand}<br></br>
            Price:{key.price}          
        </Card.Text>
        <Button variant="warning">Add To Cart</Button>
      </Card.Body>
    </Card>

                </>
            )

        })



  return (
    <>
    
    <h1>Welcome to home page</h1>
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}}>
        {ans}
    </div>
    </>
  )
}

export default Home