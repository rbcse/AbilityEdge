import '../styles/navbar.css';
function Navbar(){
    return <div className="navbar-section">
        <div className="logo-section">
            <a href="/">AbilityEdge</a>
        </div>
        <div className="nav-icons">
            <a href="">About</a>
            <a href="">Community Stories</a>
            <a href="">Fitness and Wellness</a>
            <a href="">Login</a>
            <i class="fa-solid fa-sun"></i>
        </div>
    </div>
}
export default Navbar;