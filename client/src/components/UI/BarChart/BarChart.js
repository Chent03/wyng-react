import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const BarChart = ({votes, titles}) => {
    const data = {
        labels: titles,
        datasets: [
            {   
                label: 'Wyng Gallery Poll',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: votes
            }
        ]
    }

    return(
        <HorizontalBar data={data} />
    )
}

export default BarChart;