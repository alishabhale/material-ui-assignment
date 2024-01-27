import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import  Dashboard from './Dashboard';
import  Orders from './Orders';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <BrowserRouter basename="/material-ui-assignment">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </BrowserRouter>
      </StyledEngineProvider>
    </React.StrictMode>
  );
}

export default App;
