import React from 'react'
import { Navigate, Outlet, Routes, Route } from 'react-router-dom'

const Protector = () => {
    const auth = localStorage.getItem("auth")
    return auth ?
        <Outlet /> :
        <Routes>
            <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
}

export default Protector
