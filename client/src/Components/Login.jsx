import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { userLogin } from '../redux/action';
const Login = () => {
    const {loading,isAuth}=useSelector(state=>state)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const user={
            email,password
        }
        dispatch(userLogin(user))
    }
  return (
    <div>
       {
        loading?<h1>Loading ...</h1>:localStorage.getItem("token")?<Navigate to="/profil" />:<div>
             <Form onSubmit={handleSubmit}  >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <Link to="/">
    <p>SingUp</p>
    </Link>
        </div>
       }
    </div>
  )
}

export default Login