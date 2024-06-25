import Navbar from "../navbar";
import Hero from "./Hero";
import CTA from "./cta";
import '../../styles/homecss/homepage.css';
function Home(){
    return <div className="home-section">
        <Navbar />
        <Hero />
        <CTA />
    </div>
}
export default Home;