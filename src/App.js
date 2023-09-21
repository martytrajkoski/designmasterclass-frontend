import { Container } from 'react-bootstrap';
import '../src/style/AppStyle.scss';
// import Index from "./pages/Index";
import Homepage from './pages/Homepage';

function App() {
  return (
    <div>
      <Container className='appStyle'>
        <Homepage/>
      </Container>
    </div>
    
  );
}

export default App;
