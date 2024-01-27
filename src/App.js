import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import  Dashboard from './Dashboard'
import  Dashboard1 from './Orders'

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <React.StrictMode>
    <StyledEngineProvider injectFirst>

      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="/dashboard1" element={<Dashboard1 />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
  );
}

export default App;
