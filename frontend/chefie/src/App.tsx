import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import Scan from "./pages/Scan";
import ConfirmIngredients from "./pages/ConfirmIngredients";
import Recipes from "./pages/Recipes";
import Cook from "./pages/Cook";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/onboarding" />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/confirm" element={<ConfirmIngredients />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/cook" element={<Cook />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
