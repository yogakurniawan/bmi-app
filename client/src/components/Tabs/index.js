import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'material-ui/Tabs';

const TabsComponent = ({ value, tabs }) => {
  return (
    <Tabs value={value}>
      {tabs.map(tab => tab)}
    </Tabs>
  )
}

TabsComponent.propTypes = {
  value: PropTypes.string,
  tabs: PropTypes.array
};

export default TabsComponent
