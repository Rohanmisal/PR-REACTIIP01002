import { useState } from "react"    
import { addUser } from "../../utils/userReducer"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch(); // calling a dispatch function for the dispatches the event
    const navigate = useNavigate('/')
    
    // On the submit button Clicked the handleSubmit called and it update the user details
    const handleSubmit = (event) =>{
      event.preventDefault()
      dispatch(addUser({id: users[users.length -1].id + 1 , name, email}))
      navigate('/dashbord')
    }
    return(
      <div className="login template d-flex justify-content-center align-item-center   vh-100 bg-primary">
      <div className="form_container p-5 rounded bg-white h-50">
      <h3>Add new user</h3>
        <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={e => setName(e.target.value)} //name is set here when the user get typed it.
            />
        </div>
        
        <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={e => setEmail(e.target.value)}//email is set here when the user get typed it.
            />
        </div><br/>

        {/* Note :- We can also add more fields here regarding to the requirement */}
        <button className="btn btn-info">Submit</button> 

          </form>
          </div>
          </div>
    )
  }


  export default Create;