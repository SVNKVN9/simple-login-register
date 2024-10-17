import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'

import Home from './components/Home.tsx'
import Login from './components/Login.tsx'
import Register from './components/Register.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
