import React from 'react'
import { Navigate, Outlet, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Protector = () => {
    const auth = useSelector(w => w.auth)

    return auth ?
        <Outlet /> :
        <Routes>
            <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
}

export default Protector
