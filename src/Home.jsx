import Layout from "@/containers/Layout";
import Hero from "@/components/Hero/Hero.jsx";
import Carousel from "./components/Carousel/Carousel";
import CenterText from "./components/CenterText/CenterText";
import TitleWithText from "./components/TitleWithText/TitileWithText";
import CardSlider from "./components/CardSlider/CardSlider";
import Testimonials from "./components/Testimonials/TEstimonials";

function Home() {
    return (
        <>
            <Layout>
                <Hero />
                <Carousel />
                <CenterText />
                <TitleWithText />
                <CardSlider />
                <Testimonials />
            </Layout>
        </>
    );
}

export default Home;
