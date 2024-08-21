'use client'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Chart, Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughNutsCharts = ({accounts}:DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [10, 20, 30],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3']
    
    }
  return (
    <div>
        <Doughnut 
           data={data}
           options={{cutout:'60%',
            plugins: {
                legend: {
                 display: false,
                },
                
                }
           }}
        />
    </div>
  )
}

export default DoughNutsCharts
