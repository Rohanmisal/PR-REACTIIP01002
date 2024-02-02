import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../utils/userReducer";

// This is the update field where you can update the user details by invoking the update component
const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const {name, email} = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/dashbord");
  };

  return (
    <div className="d-flex justify-content-center align-item-center w-100  vh-100 bg-primary ">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update user</h3>
        <form onSubmit={handleUpdate}>  {/**Form get submitted when the update button was Clicked */}
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={uname}
              onChange={e => setName(e.target.value)} // set the updated name on the useState hook  which updated at dashboard
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              value={uemail}
              onChange={e => setEmail(e.target.value)} // set the updated email on the useState hook  which updated at dashboard
            />
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
