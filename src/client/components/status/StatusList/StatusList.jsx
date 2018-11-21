import React from 'react';
import Status, { LoaderTemplate } from './../Status/Status.jsx';

import './StatusList.sass';

const StatusList = ({ statuses }) => {
    if (!statuses) {
        return (
            <div styleName="wrapper">
                <LoaderTemplate />
                <LoaderTemplate />
                <div style={{ opacity: '0.8' }}>
                    <LoaderTemplate />
                </div>
                <div style={{ opacity: '0.5' }}>
                    <LoaderTemplate />
                </div>
                <div style={{ opacity: '0.3' }}>
                    <LoaderTemplate />
                </div>
            </div>
        );
    }

    return (
        <div styleName="wrapper">
            {statuses?.map(status => (
                <Status key={'status-' + status?.id} status={status} />
            ))}
        </div>
    );
};

export default StatusList;
