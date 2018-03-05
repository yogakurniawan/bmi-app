import React, { Component } from 'react'
import { Field } from 'redux-form'
import { RadioButton } from 'material-ui/RadioButton'
import RaisedButton from 'material-ui/RaisedButton';
import { renderTextField, renderRadioGroup } from 'components/Forms'

class USUnitsForm extends Component {
  // componentWillMount() {
    // const { initialize } = this.props;
    // initialize({
    //   height: new Date('1990-05-30')
    // });
    // console.log('test')
  // }

  render() {
    const { handleSubmit, submitting } = this.props
    return (
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <div style={{ marginRight: 30 }}>Gender</div>
          <Field name="gender" component={renderRadioGroup}>
            <RadioButton value="male" label="male" />
            <RadioButton value="female" label="female" />
          </Field>
        </div>
        <div className="form-row">
          <div className="label">Height</div>
          <Field
            style={{ width: '20%' }}
            name="feet"
            component={renderTextField}
          />
          <span className="input-field feet">feet</span>
          <Field
            style={{ width: '20%' }}
            name="inches"
            component={renderTextField}
          />
          <span className="input-field">inches</span>
        </div>
        <div className="form-row">
          <div className="label">Weight</div>
          <Field
            name="weight"
            component={renderTextField}
          />
          <span className="input-field">pounds</span>
        </div>
        <div className="button-container">
          <RaisedButton primary type="submit" disabled={submitting}>
            Calculate
          </RaisedButton>
        </div>
      </form>
    )
  }
}

export default USUnitsForm