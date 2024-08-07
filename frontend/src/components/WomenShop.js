import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './Header.tsx';


export default function WomenShop({ women,addCart,count }) {
  
 
 


  return (
   <div >
      <Header count = {count} myAlert = "Women's Shop"/>
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
  {women.map((data,index) => (
    <div key={index} style={{  margin: '20px' }}>
      <Card style={{ width: '260px',height:500 }}>
        {data.fileName && (
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + `/uploads/${data.fileName}`}
            style={{ width: 200, height: 300 }}
          />
        )}
        <Card.Body style={{height:100}}>
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
