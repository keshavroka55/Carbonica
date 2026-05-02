import { Routes, Route } from "react-router-dom";
import EcoTrackLanding from "../pages/public/LandingPage";

const AppRoute = () => {
    return (
        <>
            <div style={{ padding: "20px" }}>
                <Routes>
                    <Route path="/" element={<EcoTrackLanding />} />
                    <Route path="*" element={<EcoTrackLanding />} />
                </Routes>
            </div>
        </>
    )
}

export default AppRoute;
