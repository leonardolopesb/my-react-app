import { BrowserRouter, Navigate, Routes as RouterRoutes, Route } from "react-router-dom"
import { Main } from "../pages/tsx/MainPage"
import { LoginPage } from "../pages/tsx/LoginPage";

export const Routes = () => {
    return (
        <BrowserRouter>
            <RouterRoutes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<LoginPage />} />

                <Route path="*" element={<Navigate to="/" />} />
            </RouterRoutes>
        </BrowserRouter>
    )
}