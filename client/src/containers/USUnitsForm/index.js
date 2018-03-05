import { reduxForm } from 'redux-form'
import Form from 'components/USUnitsForm'

export default reduxForm({
  form: 'USUnitsForm', // a unique identifier for this form
  initialValues: { gender: 'male', feet: 5, inches: 10, weight: 160 }  
})(Form)