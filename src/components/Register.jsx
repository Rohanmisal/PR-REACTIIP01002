import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../utils/userReducer";

// Registration take the required for the creating the user
const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate('/')

  const handleSignup = (event) =>{
    event.preventDefault()
    dispatch(addUser({id: users[users.length -1].id + 1 , name, email}))
    // in above line the dispatch function adding the user by checking there id
    navigate('/dashbord')
  }

  return (
    <div className="login template d-flex justify-content-center align-item-center vh-100 bg-primary">
      <div className="form_container border border-danger p-5 rounded bg-white h-75">
      <form onSubmit={handleSignup}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label >Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={e => setName(e.target.value)} 
            required
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered  <Link to="/"> <a href="">sign in? </a></Link> 
        </p>
      </form>
      
      </div>
    </div>
  );
};

export default Register;


