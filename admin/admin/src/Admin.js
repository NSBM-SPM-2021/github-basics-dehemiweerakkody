import * as React from "react";
import { Admin, Resource } from 'react-admin';
 import simpleRestClient from 'ra-data-simple-rest';
import {EmployeeList} from "./EmployeeList";
import Dashboard from "./Dashboard";
import EmployeeCreate from "./EmployeeCreate";
import EmployeeEdit from "./EmployeeEdit";
import AppointmentList from "./AppointmentList";
import AppointmentCreate from "./AppointmentCreate";
import AppointmentEdit from "./AppointmentEdit";


const dataProvider = simpleRestClient('https://nsbm-spm-backend.herokuapp.com');
const AdminList = () => (

       <Admin dataProvider={dataProvider} dashboard={Dashboard}>
        <Resource name="doctors" list={EmployeeList} create={EmployeeCreate} edit={EmployeeEdit}/>
           <Resource name="appointments" list={AppointmentList} create={AppointmentCreate} edit={AppointmentEdit}/>
           </Admin>
    );
export default AdminList;
