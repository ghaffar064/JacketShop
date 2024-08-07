import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './Header.tsx';

export default function NewArrivals({ newArrivals,count,addCart}) {
 


 

  return (
   <div >
      <Header count = {count} myAlert = "New Arrivals"/>
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
  {newArrivals.map((data,index) => (
    <div key={index} style={{  margin: '20px' }}>
      <Card style={{ width: '260px',height:500 }} >
        {data.fileName && (
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + `/uploads/${data.fileName}`}
            style={{ width: 200, height: 300 }}
          />
        )}
        <Card.Body >
          <Card.Title>{data.ProductName}</Card.Title>
         
          <Card.Text>Description: {data.description}</Card.Text>
          <Card.Text style={{fontWeight:'bold',color:'red'}}>Price = Rs. {data.Price}</Card.Text>
          <Button variant="primary" onClick={()=>addCart(data)}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  ))}
</div>
   </div>   
  );  
}
