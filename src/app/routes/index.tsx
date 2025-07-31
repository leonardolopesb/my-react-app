import { BrowserRouter, Navigate, Routes as RouterRoutes, Route } from "react-router-dom"
import { Main } from "../pages/tsx/MainPage"
import { Dashboard } from "../pages/tsx/Dashboard";

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