import React,{useState} from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



export default function SignUP() {

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  function signup(e){

    e.preventDefault()
 
  let data = {name,email,password}
           
        axios.post("/users/register",data).then((response)=>{
          console.log(response)
          if(response.status===201)
          {
            navigate("/");

          }
        }).catch((e)=>{
          console.log(e)
        })

        }


  return (
    <div>
    <div
    style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
        
      }}
    >
        <Form onSubmit={signup}>  
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>   
            
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"  onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
 <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>setPassword(e.target.value)}
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
      <Button type="submit" style={{
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center'
        ,padding:15,backgroundColor:'black',marginLeft:300,
          borderColor:'white',marginTop:40,paddingLeft:80,paddingRight:80}}>Register</Button>
      </Form>
                
    </div>
    </div>
  );
}
