import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import SelectRolePage from "../pages/SelectRolePage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import EcoTrackLanding from "../pages/public/LandingPage";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import { PublicShowcase } from "../pages/public/showcase";


const AppRoute = () => {
    return (
        <>
            <div style={{ padding: "20px" }}>
                <Routes>

                    {/* Publicly visiable*/}
                    <Route path="/" element={<EcoTrackLanding />} />
                    <Route path="/test" element={<PublicShowcase />} />



                    {/* Auth and password reset. */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/select-role" element={<SelectRolePage />} />
                    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                    <Route path="/reset-password" element={<ResetPasswordPage />} />

                    {/* Student pages*/}
                    {/* Parent pages*/}

                    {/* Teachers pages*/}
                    {/* Admin pages*/}



                    <Route path="/home" element={<HomePage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />

                    <Route path="*" element={<LoginPage />} />
                </Routes>
            </div>
        </>
    )
}

export default AppRoute;
