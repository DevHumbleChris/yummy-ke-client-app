import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from '../Views/Homepage'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Homepage />} />
        </Routes>
    </BrowserRouter>
  )
}
