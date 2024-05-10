import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/Navbar/NavBar";

const Main = () => {
  return (
    <div>
      {/* navbar  */}
      <NavBar></NavBar>

      {/* outlet  */}
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet></Outlet>
      </div>

      {/* footer  */}

      <Footer></Footer>
    </div>
  );
};

export default Main;
