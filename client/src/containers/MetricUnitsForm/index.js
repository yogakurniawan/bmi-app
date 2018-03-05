import { reduxForm } from 'redux-form'
import Form from 'components/MetricUnitsForm'

export default reduxForm({
  form: 'MetricUnitsForm', // a unique identifier for this form
  initialValues: { gender: 'male', height: 180, weight: 60 }
})(Form)