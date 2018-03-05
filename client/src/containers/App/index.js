import React, { Component } from 'react'
import { AppBar } from 'material-ui'
import { connect } from 'react-redux'
import { Tab } from 'material-ui/Tabs'
import Tabs from 'components/Tabs'
import MetricUnitsForm from 'containers/MetricUnitsForm'
import USUnitsForm from 'containers/USUnitsForm'
import * as globalActions from 'actions/global'
import * as formActions from 'actions/form'

class App extends Component {
  handleActive(value) {
    const { setCurrentTab } = this.props
    setCurrentTab(value)
  }

  handleSubmit(evt, formType) {
    const {
      usUnitFormValues,
      metricUnitFormValues,
      calculateMetricUnits,
      calculateUsUnits
    } = this.props
    evt.preventDefault();
    if (formType === 'usUnit') {
      calculateUsUnits(usUnitFormValues)
    } else {
      calculateMetricUnits(metricUnitFormValues)
    }
  }

  render() {
    const { currentTab, usUnitResult, metricUnitResult } = this.props;
    const result = currentTab === 'usUnit' ? usUnitResult : metricUnitResult
    let justification = '';
    if (result < 16) {
      justification = 'Severe Thinness'
    } else if (result >= 18.5 || result <= 25) {
      justification = 'normal'
    } else if (result >= 16 || result <= 17) {
      justification = 'Moderate Thinness'
    } else if (result >= 17 || result <= 18.5) {
      justification = 'Mild Thinness'
    } else if (result >= 25 || result <= 30) {
      justification = 'Overweight'
    } else if (result >= 30 || result <= 35) {
      justification = 'Obese Class I'
    } else if (result >= 35 || result <= 40) {
      justification = 'Obese Class II'
    } else if (result > 40) {
      justification = 'Obese Class III'
    }
    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title="BMI App"
        />
        <div className="container">
          <Tabs value={currentTab} tabs={[
            <Tab onActive={() => this.handleActive('usUnit')} label="US Units" value="usUnit" key="usUnit">
              <USUnitsForm handleSubmit={(evt) => this.handleSubmit(evt, 'usUnit')} />
            </Tab>,
            <Tab onActive={() => this.handleActive('metricUnit')} label="Metric Units" value="metricUnit" key="metricUnit">
              <MetricUnitsForm handleSubmit={(evt) => this.handleSubmit(evt, 'metricUnit')} />
            </Tab>
          ]} />
          <div className="result-header">
            RESULT
          </div>
          { result && <div className="result-content">
            BMI = {`${result} (${justification})`}
            <ul>
              <li>Normal BMI range: 18.5kg/m2 - 25 kg/m2</li>
              <li>Normal BMI weight range for the height: 128.9lbs - 174.2 lbs</li>
              <li>Ponderal Index: 12.91 kg/m3</li>
            </ul>
          </div>}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setCurrentTab: globalActions.setCurrentTab,
  calculateUsUnits: formActions.calculateUsUnits,
  calculateMetricUnits: formActions.calculateMetricUnits,
};

const mapStateToProps = ({ global, form, usUnitForm, metricUnitForm }) => ({
  currentTab: global.currentTab,
  usUnitResult: usUnitForm.payload && usUnitForm.payload.bmi,
  metricUnitResult: metricUnitForm.payload && metricUnitForm.payload.bmi,
  usUnitFormValues: form.USUnitsForm && form.USUnitsForm.values,
  metricUnitFormValues: form.MetricUnitsForm && form.MetricUnitsForm.values
})

export default connect(mapStateToProps, mapDispatchToProps)(App);