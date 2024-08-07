import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// import { Provider } from 'react-redux';
import { useState,useEffect } from 'react';

import Layout from './components/Layout';

import {
  BrowserRouter ,
  
  Route,
  
  Routes
} from "react-router-dom";
import NewArrivals from './components/NewArrivals';
import Cart from './components/Cart';
import Login from './components/Login';
import SignUP from './components/SignUP';
import MenShop from './components/MenShop';
import WomenShop from './components/WomenShop';
import CheckOut from './components/CheckOut';


function App() {
  const [cart, setcart] = useState([])
  const [men, setMen] = useState([{}]);
  const [quantity, setquantity] = useState(1)



  
  
  const [count, setcount] = useState(0)
  useEffect(() => {
    axios.get("/products/MenJackets").then((response) => {
      // console.log(response);
      setMen(response.data.array);
    }).catch((e) => {
      console.log(e);
    });
  }, []);

  const [women, setWomen] = useState([{}]);

  useEffect(() => {
    axios.get("/products/WomenJackets").then((response) => {
      console.log(response.data.array);
      setWomen(response.data.array);
    }).catch((e) => {
      console.log(e);
    });
  }, []);
  const [newArrivals, setNewArrivals] = useState([{}]);

  useEffect(() => {
    axios.get("/products/newArrivals").then((response) => {
      console.log(response.data.array);
      setNewArrivals(response.data.array);
    }).catch((e) => {
      console.log(e);
    });
  }, []);
  const addCart = (data)=>{
   
    
    const exist = cart.find((x)=>{
     
     
      return x._id===data._id //returning item in which xid = dataid
      
    })
    if (!exist)
       {
        console.log("when product does not exists quantity",)
        setcart([...cart,{...data,quantity:1}])
       setcount(count+1)
       
       console.log(cart)
  }
       
    else{
      
      
      
      setcount(count+1)
     
      setcart(cart.map((item)=>{
                return item._id ===data._id?{...exist,quantity:exist.quantity+1}:item

      }))
     
      
    }
      
    }
    
    const removeItem = (data)=>{
      setcount(count > 0 ? count - data.quantity : count);
      
      let index = cart.indexOf(data);
      if (index !== -1) {
          cart.splice(index, 1); 
          setcart(cart)
      }
    }
    const inc= (data)=>{
      setcount(count>0?count+1:count)
      const exist = cart.find((x)=>{
          return x._id===data._id
  
      })
      setcart(cart.map((item)=>{
            return item._id===data._id?{...exist,quantity:exist.quantity>0?exist.quantity+1:exist.quantity}:item
  
      }))
    }
    const dec= (data)=>{
  
      setcount(count>0?count-1:count)
      const exist = cart.find((x)=>{
          return x._id===data._id
  
      })
      setcart(cart.map((item)=>{
            return item._id===data._id?{...exist,quantity:exist.quantity>0?exist.quantity-1:0}:item
  
      }))
    }
    function totalAmount  (){
      let totalAmount1 = 0
            cart.map((item)=>{
                    totalAmount1 +=item.quantity*parseInt(item.Price)


            })
            return totalAmount1
    }
 
  return (
    // <Provider store = {store} >
      
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout count = {count} />}/>
     
     
      <Route path="/newArrivals" element={<NewArrivals newArrivals = {newArrivals} addCart={addCart} count = {count}
      
      />}/>
      <Route path="/Cart" element={<Cart cart = {cart} setcount ={setcount} count = {count}
          setcart = {setcart} removeItem = {removeItem} inc = {inc} dec = {dec}
          totalAmount={totalAmount} 
      />}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/checkout" element={<CheckOut  cart = {cart} setcount ={setcount} count = {count}
          setcart = {setcart} removeItem = {removeItem} inc = {inc} dec = {dec}
          totalAmount={totalAmount} 
         
          />}/>
      <Route path="/SignUp" element={<SignUP/>}/>
      <Route path="/menShop" element={<MenShop men1 = {men} addCart={addCart} count = {count}/>}/>
      <Route path="/womenShop" element={<WomenShop women = {women} addCart={addCart} count = {count}
 
      />}/>
      
    </Routes>
  </BrowserRouter>
   
   
  );
}

export default App;
  