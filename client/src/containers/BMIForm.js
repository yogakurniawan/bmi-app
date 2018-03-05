import SimpleForm from '../components/SimpleForm';
import { reduxForm } from 'redux-form';

export default reduxForm({
    form: 'simpleForm',
    initialValues: {
        height: 0,
        weight: 0
    }
})(SimpleForm)