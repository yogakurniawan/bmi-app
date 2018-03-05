import React from 'react'
import { Field } from 'redux-form'
import InputNumber from './InputNumber'
import validateNotEmpty from '../validations/validateNotEmpty'

const onSubmit = values => alert(JSON.stringify(values));

const SimpleForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <Field label="Weight" name="weight" component={InputNumber} validate={validateNotEmpty} type="number" />
            <Field label="Height" name="height" component={InputNumber} validate={validateNotEmpty} type="number" />
            <button type="submit">Submit</button>
        </form>
    )
};

export default SimpleForm
