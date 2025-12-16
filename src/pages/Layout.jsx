import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import StrategyModal from "../components/StrategyModal/StrategyModal";
import OfferStrip from "../components/OfferStrip/OfferStrip";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <OfferStrip />
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
    <StrategyModal />
  </>
);

export default Layout;