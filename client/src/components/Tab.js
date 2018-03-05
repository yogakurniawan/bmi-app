import React from 'react';
import {Tabs as MaterialUITabs} from 'material-ui/Tabs';

export class TabGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    render() {
        return (
            <MaterialUITabs
                value={this.state.value}
                onChange={this.handleChange}
            >
                {this.props.tabs.map(tab => tab)}
            </MaterialUITabs>
        );
    };
}


