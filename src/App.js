import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Employees from './pages/Employees';
import EditEmployee from './pages/EditEmployee';
import CreateEmployee from './pages/CreateEmployee';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={< Employees/>} /> 
        <Route path="/:id" element={< EditEmployee/>} /> 
        <Route path="/create" element={< CreateEmployee/>} /> 


      </Routes>
    </div>
  );
}

export default App;
