
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Create from './components/Action/Create.jsx';
import Dashboard from './components/Dashboard.jsx';
import Update from './components/Action/Update.jsx';

function App() {

  return (
    // This is Router page where all the Routes are defined
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Register/>}/>
      <Route path='/dashbord' element={<Dashboard/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/edit/:id' element={<Update/>}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
