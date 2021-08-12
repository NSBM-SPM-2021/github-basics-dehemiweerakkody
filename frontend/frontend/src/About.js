import './css/style.css'
import Workers from "./Workers";
import {Card, CardBlock, CardBody, CardImgOverlay, Col, Row} from "reactstrap";
import background from "./assets/images/vidcover.jpg";
import video from "./assets/images/movie.mp4"
import ReactPlayer from 'react-player/vimeo'

function playVideo() {
    this.refs.vidRef.play();
}

const About = () => {

    return (
        <div>
            <div>
                <Workers/>
            </div>
            <br/>
            <br/>
            <div>
                <Row>
                    <Col>
                        <br/>
                        <br/>

                                <ReactPlayer url='https://vimeo.com/385010495' />

                    </Col>
                    <Col>
                        <div className="heading-section mb-4 mt-md-5">
                            <span className="subheading">About Us</span>
                            <h2 className="mb-4">We Are Happy To Serve You!</h2>
                        </div>
                        <p>Nursing home medical center is renowned as one of the leading healthcare providers in Sri Lanka today. 
                        In a journey extending over three and a half decades so far, we have expanded our medical-facility network considerably to now include inpatient and outpatient care facilities, laboratories and sample collection centers, pharmacies, and medical imaging units.
                         Medihelp’s distinct healthcare offering is modelled on our patient-focused approach, affordability, accessibility, as well as the comprehensive facilities and high-quality medical expertise on offer.
                         Our presence in several key locations across the island allows us to consistently deliver on our promise of providing quality affordable healthcare for all Sri Lankans.</p>
                    </Col>
                </Row>
            </div>
        </div>

    );
}

export default About;
