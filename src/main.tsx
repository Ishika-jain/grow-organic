import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page2 from './components/Page2.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}></Route>
          <Route path='/page2' element={<Page2/>}></Route>

        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
