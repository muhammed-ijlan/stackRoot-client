import Home from "./pages/Home";
import './App.css'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signin from "./pages/Signin";
import Register from "./pages/Register";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="signin" element={<Signin />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
