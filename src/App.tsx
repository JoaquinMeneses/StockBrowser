import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex-grow bg-primary">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
