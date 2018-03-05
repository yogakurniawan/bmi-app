import React from 'react';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Panel = () => (
    <Card>
        <CardHeader
            actAsExpander={true}
            showExpandableButton={false}
        />
        <CardActions>
            <FlatButton label="Calculate"/>
        </CardActions>
    </Card>
);

export default Panel;