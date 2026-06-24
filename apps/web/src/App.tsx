import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Grain from "./components/Grain/Grain.tsx";
import Home from "./routes/Home/Home.tsx";

export default function App() {
  return (
    <>
      <Grain />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
