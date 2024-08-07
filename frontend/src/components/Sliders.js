import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import download from './images/download.png'

import brownJacket from './images/brownJacket.jpg'
import maroonJacket from './images/maroonJacket.jpg'


export default function Sliders() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <div style={{  display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      }} >
          <Carousel>
          <Carousel.Item>
          <img
      
      style={{height:600, width:700}}
      src={download}  
      alt='not found'  
     
    />
            <Carousel.Caption>
              <h3 style={{color:'grey'}}>Black Leather Jacket</h3>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
      
      style={{height:600, width:700}}
      src={maroonJacket}    
      alt='not found'
    />
               <Carousel.Caption>
              <h3  style={{color:'grey'}}>Maroon Leather Jacket</h3>
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
      
      style={{height:600, width:700}}
      src={brownJacket} 
      alt='not found'   
    
    />
            <Carousel.Caption>
              <h3  style={{color:'grey'}}>Brown Leather Jacket</h3>
              <p>
               
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>
      );
}
