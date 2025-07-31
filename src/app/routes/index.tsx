import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom"

export const Routes = () => {

    return (
        <BrowserRouter>
            <RouterRoutes>
                <Route path="/" element={<h1>Olá</h1>} />
            </RouterRoutes>
        </BrowserRouter>
    )
}