import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './routes'
import Container from '@mui/material/Container'

function App() {
  const routes = useRoutes(false)

  return (
    <Container
      //fixed
      sx={{
        height: '100vh'
      }}
    >
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </Container>
  );
}

export default App;
