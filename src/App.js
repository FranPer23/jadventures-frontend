import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    </BrowserRouter>
  );
}

export default App;