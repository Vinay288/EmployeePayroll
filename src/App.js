import logo from './logo.svg';
import './App.css';
import PayrollForm from './components/payroll-form/payroll-form';
import Home from './components/home/home';
import { Route,Routes,BrowserRouter } from 'react-router-dom'  
function App() {
  return (
    <BrowserRouter>  
      <Routes>
      <Route path="/" element={<PayrollForm />} ></Route> 
      <Route path="/home" element={<Home />}></Route>
      </Routes>
  </BrowserRouter>  
  );
}

export default App;
