import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Nav from './Components/Nav';
import Signup from './Components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './Components/Admin';
import Customer from './Components/Customer';
import Viewfill from './Components/Viewbill';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav/>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/admin/*' element={<Admin/>}/>
      <Route path='/customer/*' element={<Customer/>}/>
      <Route path='/customer/viewbill' element={<Viewfill/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}
export default App;