import "./Page.css"
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Page() {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'CryptoVision';                                                       
    }, []);

    const handleButtonClick = (path) => {
        navigate(path);
    };
    return (
        <div className="page-body">
            <div className="page-navbar">
                <div className="page-logo">
                    <a href="/"><b>CryptoVision</b></a>
                </div>
                <div className="page-elements">
                    <a href="/about"><b>About</b></a>
                    <a href="/contact"><b>Contact</b></a>
                </div>
            </div>
            <div className="page-container">
                <div className="page-content">
                    <h1>Welcome to CryptoVision</h1>
                    <h4>Your Ultimate Cryptocurrency Tracking Platform</h4>
                    <div className="page-innercontent">
                        <p>
                            At CryptoVision, we empower you with the latest and most accurate data on cryptocurrencies through real-time graphs and predictive analysis. Our platform is designed to assist both seasoned traders and newcomers in making informed decisions in the ever-evolving world of digital currencies.
                        </p>
                    </div>
                </div>
                <div className="page-buttons">
                    <button onClick={() => handleButtonClick('/login')}>Login</button>
                    <button onClick={() => handleButtonClick('/register')}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Page;