import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from '../utils/userReducer';

// Main component where the all the activities are done like adding editing and the deleting the user
const Dashboard = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const handleDelete = (id) =>{
      dispatch(deleteUser({id: id}))
      // It dispatch the delete user method where it get deleting by matching there id
    }
  
  return (
    <>
    
    <div className='container'>
    <h2>Dashboard</h2>
    <Link to="/create"><button className='btn btn-success my-3'>Create + </button></Link>
      <table className='table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {/**Here map the all user from default userlist , 
        on the other hand if we have to add userlist from database we can call api and map over here */}
          {users.map((user, index) =>(
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
               <Link to={`/edit/${user.id}`} ><button className='btn btn-sm btn-primary'>Edit</button></Link>{/**Edit button update the user detail */}
                <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger md-2 m-2'>Delete</button>{/**Delete button deleted the user specific record */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}



export default Dashboard
