import { Route, Routes, Navigate } from 'react-router-dom';
import { DashboardPage } from '../pages';

export const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <DashboardPage /> } />
            <Route path="/*" element={ <Navigate to="/"/> } />
        </Routes>
    )
}