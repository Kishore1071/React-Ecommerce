import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CustomerGet from './components/customers/CustomerGet';
import CustomerPost from './components/customers/CustomerPost';
import CustomerEdit from './components/customers/CustomerEdit';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<CustomerGet />}/>
        <Route path='/add' element={<CustomerPost />}/>
        <Route path='/edit/:userid' element={<CustomerEdit />}/>
      </Routes>
    </div>
  );
}

export default App;
