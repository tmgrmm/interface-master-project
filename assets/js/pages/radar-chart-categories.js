var options = {
    series: [{
        name: 'Average Rating',
        data: [3.95, 4, 3.9, 3.8, 4, 3.75]
        },
        {
            name: "Google",
            data: [4.2, 4.8, 3.1, 3.8, 3.5, 2.9]
        },
        {
            name: "TripAdvisor",
            data: [3, 3.2, 4.1, 3.6, 4, 4]
        },
        {
            name: "Facebook",
            data: [4.6, 4.1, 4.5, 4.8, 4.6, 4.3]
        }],
    labels: ['Meals', 'Location', 'Price', 'Features', 'Ambiance', 'Service'],
    chart: { toolbar: {
            show: false
        },
        height: 600,
        type: 'radar',
    },
    colors: ['#00b0db','#00e396','#ffb01a', '#775cd0','#ff4560','#D3D3D3'],
    stroke: {
        width: 2
    },
    fill: {
        opacity: 0.1
    },
    xaxis: {
        categories: ['Meals', 'Location', 'Price', 'Features', 'Ambiance', 'Service'],
        labels: {
            show: true,
            style: {
                colors: ["#000"],
                fontSize: "30px",
                fontFamily: 'Arial'
            }
        }
    },
    dataLabels: {
        enabled: true,
        background: {
            enabled: true,
            borderRadius:2,
        }
    },

};



var chart = new ApexCharts(document.querySelector("#radar-chart-categories"), options);
chart.render();
