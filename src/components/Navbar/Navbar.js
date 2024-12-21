import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <a href="/"><b>CryptoVision</b></a>
            </div>
            <div className="elements">
                <a href="/"><b>About</b></a>
                <a href="/"><b>Contact</b></a>
                <a href="/forum"><b>Community</b></a>
            </div>
            <div className="auth">
                <a href="/login"><b>SignIn</b></a>
                <a href="/register"><b>Register</b></a>
            </div>
        </div>
    )
}

export default Navbar