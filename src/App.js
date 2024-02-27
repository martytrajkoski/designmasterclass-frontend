import { Container, Row } from 'react-bootstrap';
import '../src/style/AppStyle.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Index from "./pages/Index";
import Homepage from './pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import SubsctiptionComponent from './components/Profile/SubscriptionComponent'
import Photoshop from './pages/Photoshop';
import Illustrator from './pages/Illustrator';

function App() {
  return (
    <div className='appStyle'>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/subscription" element={<SubsctiptionComponent/>}/>
        <Route path='/photoshop' element={<Photoshop/>}/>
        <Route path='/illustrator' element={<Illustrator/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
