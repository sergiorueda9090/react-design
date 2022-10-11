import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { DashboardRoutes } from '../dashboard/routes/DashboardRoutes';

export const AppRouter = () => {
    return (
        <Routes>
            {/*LOGIN AND REGISTER*/}
            <Route path="/auth/*" element={<AuthRoutes />} />

            {/*MY APP*/}
            <Route path="/*" element={<DashboardRoutes />} />
        </Routes>
    )
}