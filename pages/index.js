import Layout from "../components/Layout";
import ResaChauf from "../components/ResaChauffeur";
import Prestation from "../components/Prestations";
import Caroussel from "../components/Caroussel";
import WelcomeSection from "../components/WelcomeSection";
import ImageTopSection from "../components/ImageTopSection";
import PhoneButton from "../components/PhoneButton";
import styleWelcomeSection from "../styles/WelcomeSection.module.css";

export default function Home() {
  return (
    <Layout pageTitle="Les Drivers Airport">
      <ImageTopSection />
      <PhoneButton />
      <div className={styleWelcomeSection.positionSectionHome}>
        <WelcomeSection />
        <ResaChauf />
        <Prestation />
        <Caroussel />
      </div>
    </Layout>
  );
}
