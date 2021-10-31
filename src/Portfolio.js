import Navbar from "./components/Navbar/Navbar";
import CardGrid from "./components/CardGrid/CardGrid";
import Layout from "./Layout/Layout";
import Banner from "./components/Banner/Banner";
import Testimonials from "./components/Testimonials/Testimonials";

const Portfolio = () => (
    <>
    <Navbar />
    <Layout>
        <Banner />
        <CardGrid />
        <Testimonials />
    </Layout>
    </>
)

export default Portfolio;