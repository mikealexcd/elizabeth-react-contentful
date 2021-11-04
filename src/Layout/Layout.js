import "./Layout.scss";
import Header from "../components/Navbar/Navbar";
import CardGrid from "../components/CardGrid/CardGrid";
import Testimonials from "../components/Testimonials/Testimonials";
import Banner from "../components/Banner/Banner";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer"

function Layout() {
    return (
        <div className="container">
            <Header />
            <Banner />
            <CardGrid />
            <Testimonials />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default Layout;