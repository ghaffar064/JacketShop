
import React ,{useEffect, useState}from 'react';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
export default function Cart({cart,setcart,count,setcount,
  removeItem,inc,dec,totalAmount
  


}) {


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
    <Container  >
      {cart.length === 0 ? 
 
 
 <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center',
 
 flexDirection: 'column', height: '90vh', fontSize: 20, color: 'grey' }}>
 <div>
   Cart is empty
 </div>
 <Button style={{ marginTop: 10, alignSelf: 'center' }} onClick={()=>navigatetoPage('/')}>Shop Now</Button>
</div>:
    <div style={{display:'flex'}}>
    <Col lg ="8" md ="8" sm = "6" xl = "8" xs = '6'>
            { 
              cart.map((data, index)=>
                   <Row style={{border:'solid',margin:2}}>
                    {
                      data.quantity!==0?
                      <Row >
                      <Col lg = '4' md = '4' sm = '4' xs = 'auto'>
                        <Row>{data.ProductName}</Row>
                        <Row>{data.description}</Row>
                        <Row>Rs.{data.Price}</Row>

                      </Col>
                      <Col lg = '4' md = '4' sm = '4' xs = 'auto'>
                      <img src={process.env.PUBLIC_URL + `/uploads/${data.fileName}`} height={80} alt={data.ProductName} />
                      </Col>
                      <Col lg = '4' md = '4' sm = '4' xs = 'auto'>
                      <Row>
                      <Col lg = '4' md = '4' sm = '4' xs = '4'>
                          <button
          

       onClick={()=>dec(data)}
            > - </button>
                          </Col>
            
                       <Col lg = '4' md = '4' sm = '4' xs = '4'>
                       {data.quantity} 
                       </Col> 
                     <Col lg = '4' md = '4' sm = '4' xs = '2'>
                     <button 
                           variant="danger"

                           onClick={()=>inc(data)}>
                           +
                         </button>
                     </Col>  
                      </Row>
                      
                      </Col>

                   </Row>:removeItem(data)
                  
                       }
                    
                       

                       
                       
                        

                   
                    <Row  >
                      <Col lg=  '4' md = '4' sm = '4'></Col>
                   <Col lg = '4' md = '4' sm = '4' xs = 'auto'>
                   <Button 
      variant="danger"
     
      onClick={() => removeItem(data)}
    >
      RemoveItem
    </Button>
                   </Col>
                   <Col lg = '4' md = '4' sm = '4'></Col>
                    
                    </Row>
                   </Row>
              )
            }
      
      </Col>    
    <Col lg ="4" md ="4" sm = "6" xl = "4" xs = '6' >
      
    {
      totalAmount()===0?<div></div>:
      <div style={{  alignItems: 'center', display: 'flex', justifyContent: 'center',
 
      flexDirection: 'column', height: '20vh', margin:20
      
      }} >
        
      <p style={{fontWeight:'bold',color:'grey'}}>Total Amount = RS. {totalAmount()}</p>
        <Row>
        <Button variant="danger" style={{ marginTop: 10}} onClick={()=>navigatetoPage('/checkout')} >Proceed To Checkout</Button>
        <Button variant="danger" style={{ marginTop: 10 }} onClick={()=>navigatetoPage('/')}>Go Back</Button>
        </Row>
    <Row>
 
    </Row>
    
    </div>
    }
      </Col>    

     
  </div>

}


    </Container>
 
  );

}
