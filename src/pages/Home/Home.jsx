import Banner from "../../components/Banner/Banner";
import FAQ from "../../components/FAQ/FAQ";
import Stats from "../../components/Stats/Stats";
import IndustriesCarousel from "../../components/IndustriesCarousel/IndustriesCarousel";
import ServicesCarousel from "../../components/ServicesCarousel/ServicesCarousel";

const Home = () => (
  <>
    <Banner />
    <Stats />
    <ServicesCarousel />
    <IndustriesCarousel />
    <FAQ />
  </>
);

export default Home;
