import { Link, useNavigate,  } from 'react-router-dom';
import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { checkUser } from '../utils/userReducer';
import { useState } from 'react';

// handling the logging componet where you have to fill the all essential fields
const Login = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate('/')

  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(checkUser({id: users[users.length -1].id + 1 , name, email}))
    // calling the dispatch function and chking the user from the userReducer for it present or not
    navigate('/dashbord')
  }
  return (
    <div className="login template d-flex justify-content-center align-item-center vh-100 bg-primary ">
      <div className="form_container p-5 rounded bg-white  h-50 ">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">sign In</h3>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              onChange={e => setName(e.target.value)}
              required
              
            />
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            />
            <label htmlFor="check" className="custom-input-label ms-2">
              Remember me
            </label>
          </div>
          <div className="d-grid">
          <button className="btn btn-primary">Sign in</button> 
          </div>
          <p className="text-end mt-2">
          Don't have an account?<Link to="/signup" className='m-2'>Registration </Link> 
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
