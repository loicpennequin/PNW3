import React from 'react';
import Status from './../Status/Status.jsx';

import './StatusList.sass';

const StatusList = ({ statuses }) => {
    return (
        <div styleName="wrapper">
            {statuses?.map(status => <Status key={'status-' + status?.id} status={status} />)}
        </div>
    );
};

export default StatusList;
