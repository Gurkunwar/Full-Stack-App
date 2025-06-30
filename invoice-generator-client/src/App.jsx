import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import MenuBar from "./components/MenuBar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard";
import MainPage from "./pages/MainPage";
import PreviewPage from "./pages/PreviewPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <MenuBar />
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/generate" element={<MainPage />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
