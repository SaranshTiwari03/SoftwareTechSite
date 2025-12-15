import { Helmet } from 'react-helmet-async';
import Banner from "../../components/Banner/Banner";
import FAQ from "../../components/FAQ/FAQ";
import Stats from "../../components/Stats/Stats";
import IndustriesCarousel from "../../components/IndustriesCarousel/IndustriesCarousel";
import ServicesCarousel from "../../components/ServicesCarousel/ServicesCarousel";
import SEO from "../../components/SEO/SEO";
import { pageSEO } from "../../data/seoData";

const Home = () => {
  const seoData = pageSEO.home;

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/"
        ogType="website"
        structuredData={seoData.structuredData}
      />
      
      <main>
        <Banner />
        <Stats />
        <ServicesCarousel />
        <IndustriesCarousel />
        <FAQ />
      </main>
    </>
  );
};

export default Home;