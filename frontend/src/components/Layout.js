import React from 'react';
import Header from './Header.tsx';
import Sliders from './Sliders';
import Cards from './Cards';
import Footer from './Footer';
import axios from 'axios';

export default function Layout({count,myAlert}) {
  console.log(count)

  return (
    <div>
       <Header count = {count} myAlert = "Winter Collection is just live!"/>
    <Sliders/>
    <Cards/>
    <Footer/>
    </div>
  );
}
