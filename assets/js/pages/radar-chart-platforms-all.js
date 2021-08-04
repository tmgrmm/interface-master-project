
var options = {
    series: [{
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
        }
    ],
    chart: { toolbar: {
            show: false
        },
        height: 350,
        type: 'radar',
    },
    colors: ['#00b0db','#00e396','#ffb01a'],
    yaxis: {
        categories: ['Meals', 'Location', 'Price', 'Features', 'Ambiance', 'Service'],
        labels: {
            show: true,
        },

    },
    dataLabels: {
        enabled: true,
        background: {
            enabled: true,
            borderRadius:2,
        }
    }
};

var chart = new ApexCharts(document.querySelector("#radar-chart-platforms-all"), options);
chart.render();