import React from 'react';
import BMIForm from '../containers/BMIForm';
import Panel from '../components/Panel';
import { TabGroup } from '../components/Tab';
import { Tab } from 'material-ui/Tabs';


const tabs = [
    <Tab label="US Units" value="usUnit" key="usUnit"/>,
    <Tab label="Metric Units" value="metricUnit" key="metricUnit"/>
];

const WeatherPage = () =>
  <main>
    <TabGroup value="usUnit" tabs={tabs}/>
    <Panel>
        <BMIForm />
    </Panel>
  </main>;

export default WeatherPage
