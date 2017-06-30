import React from 'react';
import {
    Sparklines,
    SparklinesLine,
    SparklinesReferenceLine
} from 'react-sparklines';
import _ from 'lodash';

const Chart = (props) => {
    function getAverage(data) {
        return _.round(_.sum(data)/data.length);
    }

    return (
        <div>
            <Sparklines height={props.height} width={props.width} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{getAverage(props.data)} {props.units}</div>
        </div>
    );
};

export default Chart;
