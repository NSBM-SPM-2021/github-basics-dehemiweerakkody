import './css/style.css'
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardColumns,
    CardGroup,
    CardDeck,
    CardLink,
    CardHeader,
    CardFooter,
    Button,
    Row,
    Col
} from 'reactstrap';

import img6 from './beard.png';
import vp from "./assets/images/vp.jpg";
import cardio from "./assets/images/heart.jpg";
import Nuro from "./assets/images/nuro3.jpg";
import pedi from "./assets/images/child.jpg";
import Appointment from "./Appointement";
const ServiceList = () => {
    return (

        <div className="service-my">
                <div>
                    <div className="artists-header">
                        <span >Services</span>
                        <h2 >Category of services</h2>
                        <p>This is our professional services we gives to you</p>
                    </div>
                </div>
                <div>
                    <CardDeck>
                        <Card>
                            <CardImg top width="100%" src={vp} alt="Card image cap" height="350px" />
                            <CardBody className="card-body-my">
                                <CardTitle className="card-body-my">Physician (VP)</CardTitle>
                                <CardText>We Are specializes in medicine to treat adult patients </CardText>

                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={cardio} alt="Card image cap" height="350px" />
                            <CardBody className="card-body-my">
                                <CardTitle>Cardiologist</CardTitle>
                                <CardText>We Are specializes in treating diseases of the cardiovascular system-mainly the heart and blood vessels </CardText>

                            </CardBody>
                        </Card>

                        <Card>
                            <CardImg top width="100%" src={Nuro} alt="Card image cap" height="350px" />
                            <CardBody className="card-body-my">
                                <CardTitle>Neurologist</CardTitle>
                                <CardText>We Are specializes in assess, diagnose, manage, and treat conditions that affect your nervous system</CardText>

                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={pedi} alt="Card image cap" height="350px" />
                            <CardBody className="card-body-my">
                                <CardTitle>Pediatrician</CardTitle>
                                <CardText>We Are specializes in manage the physical, behavioral, and mental care for children from birth until age 18</CardText>

                            </CardBody>
                        </Card>
                    </CardDeck>
                </div>
                <br/>
                <div className="align-content-between">
                    <br/><br/>
                    <Appointment/>
                </div>

            </div>

    );
}

export default ServiceList;
