import './App.css'

import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './routes'
import Container from '@mui/material/Container'

function App() {
  const routes = useRoutes()

  return (
    <Container
      //fixed
      sx={{
        position: 'relative',
        height: '100vh'
      }}
    >
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </Container>
  )
}

export default App
