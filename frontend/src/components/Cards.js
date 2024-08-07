import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import women from './images/women.png'
import men from './images/men.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
export default function Cards() {
  const navigate = useNavigate();
  
  function menIems()
  {
    navigate("/menShop");
  }
  function womenIems(){
    navigate("/womenShop");
  }
  return (
    
    <div >
     
        <Container  style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      
    }}>
          <Row  xs={1} md={2} className="g-4">
       <Card style={{ width: '25rem'}}>
      <Card.Img variant="top" src={men} />
      <Card.Body>
        <Card.Title>Men's Shop</Card.Title>
        <Card.Text>
         Contains Men's Jackets
        </Card.Text>
        <Button onClick={menIems}  variant="primary">View More</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem',marginLeft:30}}>
      <Card.Img variant="top" src={women} />
      <Card.Body>
        <Card.Title>Women's Shop</Card.Title>
        <Card.Text>
         Contains Women's Jackets
        </Card.Text>
        <Button variant="primary" onClick={womenIems}>View More</Button>
      </Card.Body>
    </Card>
    </Row>
    </Container>

   
    </div>
  );
}
