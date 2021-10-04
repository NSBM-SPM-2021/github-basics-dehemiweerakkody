import React from 'react'
import {Create, SimpleForm, TextInput,NumberInput} from 'react-admin'

const EmployeeCreate = (props) => {
    return (
        <Create title='Create a Post'{...props}>
            <SimpleForm>
                <TextInput source='name' />
                <TextInput source='service' />
                {/*<NumberInput source='id' />*/}
                <TextInput source='jobRole' />
                <TextInput source='workingHours' />
                <NumberInput source='workedHours' />
                <TextInput source='sallery' />
                {/*<TextInput source='password' />*/}
            </SimpleForm>

        </Create>

    )
}

export default EmployeeCreate
