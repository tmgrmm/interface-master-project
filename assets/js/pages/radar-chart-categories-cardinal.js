window.Apex = {
    tooltip: {
        theme: "light",
        x: {
            formatter: function (val) {
                return val;
            }
        }
    }
};


var options = {
    series: [{
        name: 'Average Rating',
        data: [3.95, 4, 4.5, 3.8, 4, 4.75]
        },
        {
            name: "Google",
            data: [4.2, 3.8, 4.1, 3.8, 4.5, 3.9]
        },
        {
            name: "TripAdvisor",
            data: [3, 3.2, 4.1, 3.6, 4, 4]
        },
        {
            name: "Facebook",
            data: [4.6, 4.0, 4.2, 3.8, 3.7, 3.9]
        }],
    chart: { toolbar: {
            show: false
        },
        height: 500,
        type: 'radar',
        foreColor: '#000000',
    },
    colors: ['#00b0db','#00e396','#ffb01a', '#775cd0','#ff4560','#D3D3D3'],
    stroke: {
        width: 2,
    },
    fill: {
        opacity: 0.1
    },
    xaxis: {
        categories: ['Meals', 'Location', 'Price', 'Features', 'Ambiance', 'Service'],
        labels: {
            show: true,
            style: {
                colors: ["#000000","#000000","#000000","#000000","#000000","#000000"],
                fontSize: "14px",
                fontFamily: 'Arial',
            },
        }
    },
    dataLabels: {
        enabled: true,
        background: {
            enabled: true,
            borderRadius:2,
        },

    },

};



var chart = new ApexCharts(document.querySelector("#radar-chart-categories-cardinal"), options);
chart.render();
