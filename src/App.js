import logo from './logo.svg';
import './App.css';
import PayrollForm from './components/payroll-form/payroll-form';
import { Route,Routes,BrowserRouter } from 'react-router-dom'  
function App() {
  return (
    <BrowserRouter>  
      <Routes>
      <Route path="/" element={<PayrollForm />} ></Route> 
      </Routes>
  </BrowserRouter>  
  );
}

export default App;
