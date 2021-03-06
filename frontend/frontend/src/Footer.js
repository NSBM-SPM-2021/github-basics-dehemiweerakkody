import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="ftco-footer ftco-section" style={{
           backgroundColor: "#2D7CD8"
        }}>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2 logo">Healthcare</h2>
                            <p>We care about your Health</p>
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                <li className="ftco-animate"><Link href="#"><span className="icon-twitter"></span></Link></li>
                                <li className="ftco-animate"><Link href="#"><span className="icon-facebook"></span></Link>
                                </li>
                                <li className="ftco-animate"><Link href="#"><span className="icon-instagram"></span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4 ml-md-5">
                            <h2 className="ftco-heading-2">Useful Information</h2>
                            <ul className="list-unstyled">
                                <li><Link href="#" className="py-2 d-block">FAQs</Link></li>
                                <li><Link href="#" className="py-2 d-block">Privacy</Link></li>
                                <li><Link href="#" className="py-2 d-block">About Us</Link></li>
                                <li><Link href="#" className="py-2 d-block">Terms Condition</Link></li>
                            </ul>
                        </div>
                        <br/>
                    <br/>

                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Services</h2>
                            <ul className="list-unstyled">
                                <li><Link to="/" className="py-2 d-block">Ambulance</Link></li>
                                <li><Link to="/services" className="py-2 d-block">Operation theatre</Link></li>
                                <li><Link to="/about" className="py-2 d-block">Inpatient care</Link></li>
                                <li><Link to="/appointment" className="py-2 d-block">Health Check-Ups</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Contact Us</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li><span className="icon icon-map-marker"></span><span className="text">No. 578, Elvitigala Mawatha, Narahenpita, Colombo 05, Sri Lanka</span>
                                    </li>
                                    <li><span className="icon icon-phone"></span><span className="text">71 9393390</span>
                                    </li>
                                    <li><span className="icon icon-envelope"></span><span
                                        className="text">contactus@Nursinghome.com</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
