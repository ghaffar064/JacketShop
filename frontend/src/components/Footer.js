import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function Footer() {
  return (
 
    <div style={{backgroundColor:"black"}}>
    <Container style={{height: '90vh'}}>
        <h2 style={{color:'white',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
    }}> SUBSCRIBE TO OUR NEWSLETTER</h2>
    <Form  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:40,
        marginTop:15
        
        }}>
       <Row>
        <Col xs="auto" >
          
          <Form.Control
            type="email"
            placeholder="Email"
            className=" mr-sm-2"
            style={{padding:15,color:'grey',paddingLeft:15,paddingRight:35}}
          />
        </Col>
        <Col xs="auto">
          <Button type="submit" style={{padding:15,backgroundColor:'black',
          borderColor:'white',paddingRight:40,paddingLeft:40}}>Subscribe</Button>
        </Col>
     
        </Row>
       
      </Form>
        
        <Row class="row" >
            <Col>
                <h4 style={{color:'white'}}>MEN'S COLLECTION</h4>
                <ul>
                    <li style={{color:'white'}}><a style={{color:'white'}} href="#">Men's Leather Jackets</a></li>
                    <li style={{color:'white'}}><a style={{color:'white'}} href="#">Men's Puffer Jackets</a></li>
                    <li style={{color:'white'}}><a style={{color:'white'}} href="#">Men's Denim Jackets</a></li>
                    <li style={{color:'white'}}><a style={{color:'white'}} href="#">Men's Coats for winter</a></li>
                   
                </ul>
            </Col>
            <Col >
                <h4 style={{color:'white'}}>WOMEN'S COLLECTION</h4>
                <ul style={{color:'white'}}>
                <li style={{color:'white'}}><a style={{color:'white'}} href="#">Women's Leather Jackets</a></li>
                    <li ><a style={{color:'white'}} href="#">Women's Puffer Jackets</a></li>
                    <li ><a style={{color:'white'}} href="#">Women's Denim Jackets</a></li>
                    <li ><a style={{color:'white'}} href="#">Women's Coats for winter</a></li>
                  
                </ul>
            </Col>
            <Col >
                <h4 style={{color:'white'}}>SHOP</h4>
                <ul style={{color:'white'}}>
                    <li><a style={{color:'white'}} href="#">Best Selling Items</a></li>
                    <li><a style={{color:'white'}} href="#">New Arrivals</a></li>
                    <li><a style={{color:'white'}} href="#">Winter's Shop</a></li>
                   
                </ul>
            </Col>
            <Col class="col-md-3 ">
                <h4 style={{color:'white'}}>Customer Care</h4>
                <ul style={{color:'white'}}>
                    <li><a style={{color:'white'}} href="#">Track Your Order</a></li>
                    <li><a style={{color:'white'}} href="#">Contact Us</a></li>
                    <li><a style={{color:'white'}} href="#">About Us</a></li>
                    <li><a style={{color:'white'}} href="#">FAQ's</a></li>
                   
                </ul>
            </Col>
        </Row>

      
      
    </Container>
</div>
  );
}
