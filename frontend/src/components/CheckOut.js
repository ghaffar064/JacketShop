import React,{useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

export default function CheckOut(  {cart,
    removeItem,inc,dec,totalAmount}) {
    const [number, setNumber] = useState("");
    

    const checkInputnumber = (e) => {
      const onlyDigits = e.target.value.replace(/\D/g, "");
      setNumber(onlyDigits);
    };

    const navigate = useNavigate();
    const  navigatetoPage = (path)=>{
         if (path==='/')
         {
          navigate('/')
         } 
         if (path==='/checkout')
         {
          navigate('/checkout')
         } 
        
    }
  
  return (
    <Container>
         <Row>
         <Row style={{borderBottom:'solid',borderBottomWidth:1,
    
    justifyContent:'center',color:'grey',

    alignItems:'center',display:'flex'}}>
            Jackets Shop

    </Row>
      </Row>
      <Row>
        <Col>
                
              
                <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label style={{fontWeight:'inherit'}}>Contact</Form.Label>
        <Form.Control type="email" placeholder="Email"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{fontWeight:'inherit'}}>Delivery</Form.Label>
       <Col style={{display:'flex'}}>
       <Form.Control type="text" placeholder="First name" style={{marginRight:5}}  />
       <Form.Control type="text" placeholder="Last name"  />
       </Col>
       <Form.Control type="text" placeholder="Address" style={{marginTop:20}} />
       <Col style={{display:'flex',marginTop:20}}>
       <Form.Control type="text" placeholder="Postal code" style={{marginRight:5}} />
       <Form.Control type="text" placeholder="City"  />
       </Col>
       <Form.Control input type="tel" maxLength="11"
      
      value={number}
        onChange={(e) => checkInputnumber(e)}
     
       
       placeholder="Phone" style={{marginTop:20}} />
      </Form.Group> 

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{fontWeight:'inherit'}}>Payment</Form.Label>
        <Form.Check 
            type={'radio'}
            id={'radio'}
            label={'Cash on Delivery'}
          />

      </Form.Group>      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{fontWeight:'inherit'}}>Billing Address</Form.Label>
        <Form.Check
            type={'radio'}
            id={'radio1'}
            label={'Same as shipping address'}
            name="billing"
          />
  

      </Form.Group>      

     
    </Form>

    <p >Total Amount = RS. {totalAmount()}</p>
     <Button variant="danger">Place Order</Button> 

                </Col>
        <Col> 
                   
                   <Row style={{display:'flex'}}>
                       <Col >
                       <Dropdown  autoClose={false}>
         <Dropdown.Toggle  id="dropdown-basic" style={{backgroundColor:'white',border:'none',color:'grey'}}>
          Order Summary
         </Dropdown.Toggle>
   
         <Dropdown.Menu>
         <Row style={{display:'flex',margin:20}}>
        {(
     cart.map((data, index) => (
      
      
   
   <Row key={index} style={{  border: 'solid',
    marginBottom:20   
   }}>
   <Row >
   <Row style={{marginLeft:2  ,display:'flex'}}>
           
      
             <Row>
            
             <Col>{data.ProductName}</Col>
           <Col> Rs. {data.Price}</Col>
            
             <Col style={{marginTop:20}}>Total Price Rs.{parseInt(data.Price)*data.quantity}</Col>
               
            </Row>
            
                
   
            
          
           
           
           
            
     
   </Row>
   
   
   <Col >
   <Row style={{float:'right',margin:20}} >x{data.quantity}</Row>
  
   <img style={{marginTop:5,float:'right'}}
    src={process.env.PUBLIC_URL + `/uploads/${data.fileName}`} height={80} alt={data.ProductName} />
   
   </Col>
   </Row>
   
   
       
   </Row>        
   
   
      
     )))}
        
        
       </Row>
         </Dropdown.Menu>
       </Dropdown>
         
   
   
                       </Col>
   
                  
   
   
          
    
       
       </Row>
   
                       
                        </Col>
      </Row>
     
    </Container>
  );
}
