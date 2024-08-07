import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './Header.tsx';


export default function MenShop({ men1,count,addCart }) {
  


 

  return (
   <div >
      <Header count = {count} myAlert = "Men's Shop"/>
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
  {men1.map((man,index) => (
    <div key={index} style={{  margin: '20px' }}>
      <Card style={{ width: '260px' ,height:500}}>
        {man.fileName && (
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + `/uploads/${man.fileName}`}
            style={{ width: 200, height: 300 }}
          />
        )}
        <Card.Body >
          <Card.Title>{man.ProductName}</Card.Title>
         
          <Card.Text style={{height:'20%'}}>Description: {man.description}</Card.Text>
          <Card.Text style={{fontWeight:'bold',color:'red'}}>Price = Rs. {man.Price}</Card.Text>
          <Button variant="primary" onClick={()=>addCart(man)}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  ))}
</div>
   </div>   
  );
}
