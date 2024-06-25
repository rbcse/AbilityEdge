import CtaBox from "./ctabox";
import '../../styles/homecss/cta.css';
function CTA(){
    return <div className="cta-section">
        <h1>Call to Action</h1>
        <div className="boxes">
            <CtaBox heading1="Primary CTA" heading2='"Join our community"' para="Become a member of AbilityEdge today and start exploring our extensive resources and community support." btn="Signup now" link="#" />
            <CtaBox heading1="Secondary CTA" heading2='"Explore our resources"' para="Dive into our comphrensive library of articles, guides and tools designed to empower and inform." btn="Learn more" link="#" />
        </div>
    </div>
}
export default CTA;