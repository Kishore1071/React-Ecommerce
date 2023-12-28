import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CustomerGet from './components/customers/CustomerGet';
import CustomerPost from './components/customers/CustomerPost';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<CustomerGet />}/>
        <Route path='/add' element={<CustomerPost />}/>
      </Routes>
    </div>
  );
}

export default App;
