import { Container, Row } from 'react-bootstrap';
import '../src/style/AppStyle.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Index from "./pages/Index";
import Homepage from './pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';

function App() {
  return (
    <div className='appStyle'>
      <Routes>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
