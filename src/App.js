import Home from "./pages/Home";
import './App.css'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Signin from "./pages/Signin";
import Register from "./pages/Register";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/home" element={<Home />} />
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route path="signin" element={<Signin />} />
          <Route path="register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
