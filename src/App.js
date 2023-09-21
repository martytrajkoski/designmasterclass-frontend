import { Container } from 'react-bootstrap';
import '../src/style/AppStyle.scss';
import Index from "./pages/Index";

function App() {
  return (
    <div>
      <Container className='appStyle'>
        <Index/>
      </Container>
    </div>
    
  );
}

export default App;
