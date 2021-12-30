import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {useRoutes} from './routes'
import Container from '@mui/material/Container'

function App() {
  const routes = useRoutes(false)

  return (    
    <Container 
    maxWidth="sm"
    sx={{ alignContent: 'center',
    alignItems: 'center',
    height: 100 }}
    >
    <BrowserRouter>
        {routes}
    </BrowserRouter>
    </Container>
  );
}

export default App;
