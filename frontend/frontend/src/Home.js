import {Link} from "react-router-dom";
import background from "./assets/images/background/86514.jpg";
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
import Appointment from "./Appointement";
import Workers from "./Workers";
import ServiceList from "./ServiceList";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div>
            <Card inverse className="overlay-bg">
                <CardImg width="100%" src={background} alt="Card image cap" />

                <CardImgOverlay className="bg-overlay">
                    <div className="navin-bg">
                        <Navbar/>
                    </div>


                    <CardTitle className="overlay-title"><br/>

                        <br/><br/>Welcome To Nurshing Home</CardTitle>
                    <CardText>We are here for Your Care</CardText>
                    <CardText>
                        <small className="text-muted"><Link to="/appointment" className="btn btn-primary btn-outline-primary px-4 py-2">ENQUIRE
                            NOW</Link></small>
                    </CardText>
                </CardImgOverlay>
            </Card>
            <br/>
            <Workers/>
            <br/>
            <Appointment/>
            <br/>
            <ServiceList/>

        </div>



    );
}

export default Home;
