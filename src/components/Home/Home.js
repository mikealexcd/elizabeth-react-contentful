import CardGrid from "../CardGrid/CardGrid";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "../Banner/Banner";
import ContactForm from "../ContactForm/ContactForm";

function Home() {
  return (
    <>
      <Banner />
      <CardGrid />
      <Testimonials />
      <ContactForm />
    </>
  );
}

export default Home;
