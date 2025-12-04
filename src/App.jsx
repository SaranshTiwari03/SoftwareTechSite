import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./pages/Layout";
import HomePage from "./pages/Home/Home";
import MainService from "./pages/Services/MainService/MainService";
import WebDevelopmentMain from "./pages/Services/WebDevelopment/WebDevelopmentMain";
import EcommerceWebsite from "./pages/Services/WebDevelopment/EcommerceWebsite";
import WebPortals from "./pages/Services/WebDevelopment/WebPortals";
import MobileAppMain from "./pages/Services/AppDevelopment/MobileAppMain";
import AndroidApp from "./pages/Services/AppDevelopment/AndroidApp";
import CrossPlatformApp from "./pages/Services/AppDevelopment/CrossPlatformApp";
import CustomSoftwareMain from "./pages/Services/CustomSoftware/CustomSoftwareMain";
import CRMSolution from "./pages/Services/CustomSoftware/CRMSolution";
import ERPSolution from "./pages/Services/CustomSoftware/ERPSolution";
import CMSSolution from "./pages/Services/CustomSoftware/CMSSolution";
import CloudServicesMain from "./pages/Services/CloudServices/CloudServicesMain";
import CloudApplicationDevelopment from "./pages/Services/CloudServices/CloudApplicationDevelopment";
import CloudMigrationServices from "./pages/Services/CloudServices/CloudMigrationServices";
import CloudSupportMaintenance from "./pages/Services/CloudServices/CloudSupportMaintenance";
import DigitalMarketingMain from "./pages/Services/DigitalMarketing/DigitalMarketingMain";
import SEOServices from "./pages/Services/DigitalMarketing/SEOServices";
import SEMServices from "./pages/Services/DigitalMarketing/SEMServices";
import SocialMediaMarketing from "./pages/Services/DigitalMarketing/SocialMediaMarketing";
import MainTechnologies from "./pages/Technologies/MainTechnologies/MainTechnologies";
import NodeJS from "./pages/Technologies/Language/NodeJS";
import HTML5 from "./pages/Technologies/Language/HTML5";
import Java from "./pages/Technologies/Language/Java";
import PHP from "./pages/Technologies/Language/PHP";
import Python from "./pages/Technologies/Language/Python";
import DotNet from "./pages/Technologies/Language/DotNet";
import Azure from "./pages/Technologies/Platform/Azure";
import GCP from "./pages/Technologies/Platform/GCP";
import Oracle from "./pages/Technologies/Platform/Oracle";
import SAP from "./pages/Technologies/Platform/SAP";
import MainIndustries from "./pages/Industries/MainIndustries/MainIndustries";
import Automotive from "./pages/Industries/IndustryPages/Automotive";
import Healthcare from "./pages/Industries/IndustryPages/Healthcare";
import Education from "./pages/Industries/IndustryPages/Education";
import RealEstate from "./pages/Industries/IndustryPages/RealEstate";
import Logistics from "./pages/Industries/IndustryPages/Logistics";
import Music from "./pages/Industries/IndustryPages/Music";
import SAAS from "./pages/Industries/IndustryPages/SAAS";
import Retail from "./pages/Industries/IndustryPages/Retail";
import OnDemand from "./pages/Industries/IndustryPages/OnDemand";
import ECommerce from "./pages/Industries/IndustryPages/ECommerce";
import Fintech from "./pages/Industries/IndustryPages/Fintech";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          
          {/* Insights Page (About Page) */}
          <Route path="/insights" element={<About />} />
          
          {/* Main Services Page */}
          <Route path="/services" element={<MainService />} />
          
          {/* Web Development Routes */}
          <Route path="/services/web" element={<WebDevelopmentMain />} />
          <Route path="/services/web/ecommerce" element={<EcommerceWebsite />} />
          <Route path="/services/web/portals" element={<WebPortals />} />
          
          {/* Mobile App Development Routes */}
          <Route path="/services/mobile-app" element={<MobileAppMain />} />
          <Route path="/services/mobile-app/android" element={<AndroidApp />} />
          <Route path="/services/mobile-app/cross-platform" element={<CrossPlatformApp />} />
          
          {/* Custom Software Development Routes */}
          <Route path="/services/custom-software" element={<CustomSoftwareMain />} />
          <Route path="/services/custom-software/crm" element={<CRMSolution />} />
          <Route path="/services/custom-software/erp" element={<ERPSolution />} />
          <Route path="/services/custom-software/cms" element={<CMSSolution />} />
          
          {/* Cloud Services Routes */}
          <Route path="/services/cloud" element={<CloudServicesMain />} />
          <Route path="/services/cloud/app-development" element={<CloudApplicationDevelopment />} />
          <Route path="/services/cloud/migration" element={<CloudMigrationServices />} />
          <Route path="/services/cloud/support" element={<CloudSupportMaintenance />} />
          
          {/* Digital Marketing Routes */}
          <Route path="/services/marketing" element={<DigitalMarketingMain />} />
          <Route path="/services/marketing/seo" element={<SEOServices />} />
          <Route path="/services/marketing/sem" element={<SEMServices />} />
          <Route path="/services/marketing/social-media" element={<SocialMediaMarketing />} />
          
          {/* Technologies Main Page */}
          <Route path="/technologies" element={<MainTechnologies />} />
          
          {/* Language Routes */}
          <Route path="/technologies/nodejs" element={<NodeJS />} />
          <Route path="/technologies/html5" element={<HTML5 />} />
          <Route path="/technologies/java" element={<Java />} />
          <Route path="/technologies/php" element={<PHP />} />
          <Route path="/technologies/python" element={<Python />} />
          <Route path="/technologies/dotnet" element={<DotNet />} />
          
          {/* Platform Routes */}
          <Route path="/technologies/azure" element={<Azure />} />
          <Route path="/technologies/gcp" element={<GCP />} />
          <Route path="/technologies/oracle" element={<Oracle />} />
          <Route path="/technologies/sap" element={<SAP />} />
          
          {/* Industries Main Page */}
          <Route path="/industries" element={<MainIndustries />} />
          
          {/* Industry Routes */}
          <Route path="/industries/automotive" element={<Automotive />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/education" element={<Education />} />
          <Route path="/industries/real-estate" element={<RealEstate />} />
          <Route path="/industries/logistics" element={<Logistics />} />
          <Route path="/industries/music" element={<Music />} />
          <Route path="/industries/saas" element={<SAAS />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/on-demand" element={<OnDemand />} />
          <Route path="/industries/ecommerce" element={<ECommerce />} />
          <Route path="/industries/fintech" element={<Fintech />} />
          
          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />
          
          {/* 404 Page */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;