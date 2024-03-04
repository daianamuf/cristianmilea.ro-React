import { Outlet } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

function AppLayout() {
  return (
    <div>
      <Nav />
      <div>
        <main>
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;
