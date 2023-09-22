import { Container, Row } from 'react-bootstrap';
import '../src/style/AppStyle.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Index from "./pages/Index";
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className='appStyle'>
      <Homepage/>
    </div>
    
  );
}

export default App;
