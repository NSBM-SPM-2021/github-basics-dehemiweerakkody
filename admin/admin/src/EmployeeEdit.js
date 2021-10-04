import React from 'react'
import {Edit, SimpleForm, TextInput, NumberInput,EditButton} from 'react-admin'

const EmployeeEdit = (props) => {
    return (
        <Edit title='Edit Post'{...props}>
            <SimpleForm>
                <TextInput source='name' />
                <TextInput source='service' />
                <TextInput disabled  source='id' />
                <TextInput source='jobRole' />
                <TextInput source='workingHours' />
                <NumberInput source='workedHours' />
                <TextInput source='sallery' />
                {/*<TextInput source='password' />*/}

            </SimpleForm>

        </Edit>

    )
}

export default EmployeeEdit
