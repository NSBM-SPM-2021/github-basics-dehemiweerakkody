import * as React from "react";
import { List, Datagrid, TextField,EditButton,DeleteButton,UrlField} from 'react-admin';


export const AppointmentList = props => (
    <List {...props}>

        <Datagrid rowClick="edit">
            <TextField source='userName' />
            <TextField source='date' />
            <TextField source='time' />
            <TextField source='service' />
            <TextField source='id' />
            <TextField source='consumer' />
            <TextField source='birthDate' />
            <TextField source='phone' />
            <EditButton />
            <DeleteButton/>
        </Datagrid>
    </List>
);
export default AppointmentList
