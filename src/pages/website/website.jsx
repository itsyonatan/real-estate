import Companies from "../../components/companies/companies";
import Contact from "../../components/contact/contact";
import Header from "../../components/header/header";
import Residencies from "../../components/residencies/residencies";
import Footer from "../../components/footer/footer";
import Value from "../../components/value/value";
import Testimonials from "../../components/Testimonials/Testimonials";


export default function Website() {


  return (
    <div style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
      <Header />
      <Companies />
      <Residencies />
      <Value />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}