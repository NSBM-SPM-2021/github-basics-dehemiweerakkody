import {Container, Alert, Col, Row, Card, CardBody, CardTitle, CardImg, CardSubtitle} from 'reactstrap';
import {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "./axios";
import  {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import img6 from "./img5.jpg";

toast.configure()
const Appointment = () => {
    const [title, setTitle] = useState('');
    const [userName, setUserName] = useState('');
    const [service, setService] = useState('consultant');
    const [date, setDate] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phone, setPhone] = useState('');
    const [consumer, setConsumer] = useState('Dr.Saman Perera');
    const [time, setTime] = useState('evening');
    const [employees,setEmployees] = useState([]);
    const history = useHistory();

const success = () =>{
     toast.success('Your Appoinment booked!',{
         position:toast.POSITION.TOP_CENTER,
         autoClose:3000
     })
}
    const erroralert = () =>{
        toast.error('Date Already Booked!',{
            position:toast.POSITION.TOP_LEFT,
            autoClose:3000
        })

    }
    function submit() {

        const appointment = { userName,date, time, service,consumer,birthDate,phone};
        console.log(appointment)
        axios.post('http://localhost:3001/appointments', appointment)
            .then(response =>
                    // console.log(response),
                    success(),
                history.push('/')
            )
            .catch(error => {
                erroralert()
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }
    const handleSubmit = () => {
        // e.preventDefault();


        // fetch('/appointments', {
        //     method: 'GET',
        //     headers: { "Content-Type": "application/json" },
        //     // body: JSON.stringify(blog)
        // }).then((response) => {
        //     console.log(response);
        //     history.push('/');
        // })
    }

        useEffect(() =>{
            //get data function
            async function fetchPosts() {
                const response = await  axios.get("/employee");
                //save data to the setvideos from response
                console.log(response.data)
                setEmployees(response.data);
                return response;
            }
            fetchPosts().then(r => console.log("done"));
        },[]);


    return (
        <div className="create">
            <h2>Make an Appointment</h2>
            <form className="appointment-form">

                <Row className="mt-3">
                    <Col xs="6">
                        <label>Name:</label>
                        <input
                            className="bg-light p-2 border name"
                            type="text"
                            required
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        {/*<div className="bg-light p-2 border">.col-6</div>*/}
                    </Col>
                    <Col xs="6">
                        <label>Birth Date:</label>
                        <input
                            className="bg-light p-2 border date"
                            type="date"
                            required
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                        />
                        {/*<div className="bg-light p-2 border">.col-6</div>*/}
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs="6">
                        <label>Date:</label>
                        <input
                            className="bg-light p-2 border date"
                            type="date"
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        {/*<div className="bg-light p-2 border">.col-6</div>*/}
                    </Col>
                    <Col xs="6">
                        <label>Phone:</label>
                        <input
                            className="bg-light p-2 border phone"
                            type="text"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        {/*<div className="bg-light p-2 border">.col-6</div>*/}
                    </Col>
                </Row>
                <label>Service:</label>
                <select
                    className="bg-light p-2 border"
                    value={service}
                    required
                    onChange={(e) => setService(e.target.value)}
                >
                    {employees.map(
                        ({name, service, jobRole, workingHours, workedHours, sallery}) =>(
                            <option value={service}>{service}</option>
                        )
                    )}
                </select>
                {/*<label>Description:</label>*/}
                {/*<textarea*/}
                {/*    className="bg-light p-2 border description"*/}
                {/*    required*/}
                {/*    value={service}*/}
                {/*    onChange={(e) =>setService(e.target.value) }*/}
                {/*/>*/}
                <Row className="mt-3">
                    <Col xs="6">
                        <label>Consumer:</label>
                        <select
                            className="bg-light p-2 border"
                            value={consumer}
                            required
                            onChange={(e) => setConsumer(e.target.value)}
                        >
                            {employees.map(
                                ({name, service, jobRole, workingHours, workedHours, sallery}) =>(
                                    <option value={name}>{name}</option>
                                )
                            )}

                        </select>
                    </Col>
                    <Col xs="6">
                        <label>Time:</label>
                        <select
                            className="bg-light p-2 border"
                            value={time}
                            required
                            onChange={(e) => setTime(e.target.value)}
                        >
                            <option value="evening">Evening</option>
                            <option value="morning">Morning</option>
                        </select>
                    </Col>
                </Row>



                <button onClick={submit} className="makeappointment">Make an Appointment</button>
            </form>
        </div>
    );
}

export default Appointment;
