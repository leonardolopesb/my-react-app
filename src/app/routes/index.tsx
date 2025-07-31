import { BrowserRouter, Navigate, Routes as RouterRoutes, Route } from "react-router-dom"
import { Main } from "../pages/MainPage"
import { Dashboard } from "../pages/Dashboard";

export const Routes = () => {
    return (
        <BrowserRouter>
            <RouterRoutes>
                <Route path="/" element={<Main />} />
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="*" element={<Navigate to="/" />} />
            </RouterRoutes>
        </BrowserRouter>
    )
}