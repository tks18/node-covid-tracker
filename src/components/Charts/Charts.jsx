import React, { useState, useEffect } from 'react';
import {fetchDailyData} from '../../api/index'; 
import {Line, Bar} from 'react-chartjs-2';

import Styles from './Charts.modules.css';

const Chart = function(){
    const [dailyData, setDailyData] = useState([]);

    useEffect(()=> {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchApi();
    })

    const lineChart = (
        dailyData.length ? <Line data={{
            labels: dailyData.map(({date}) => date),
            datasets: [{
                data: dailyData.map(({confirmed}) => confirmed),
                label: 'Infected',
                borderColor: '#3333FF',
                fill: true
            }, {
                data: dailyData.map(({deaths}) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill: true 
            }],
        }}
        /> : null
    )
    return <div className={Styles.container}>
        {lineChart}
    </div>
}

export default Chart;