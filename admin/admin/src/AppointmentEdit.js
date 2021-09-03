import React from 'react'
import {Edit, SimpleForm, TextInput, DateInput,NumberInput} from 'react-admin'

const AppointmentEdit = (props) => {
    return (
        <Edit title='Edit Appointment'{...props}>
            <SimpleForm>
                <TextInput source='userName'/>
                <DateInput source='date'/>
                <TextInput source='time'/>
                <TextInput source='service'/>
                <TextInput source='consumer'/>
                <DateInput source='birthDate'/>
                <TextInput source='phone'/>
                <TextInput disabled  source='id' />
            </SimpleForm>

        </Edit>

    )
}

export default AppointmentEdit
