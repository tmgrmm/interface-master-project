
var options = {
    series: [{
        name: "Bon Appétit",
        data: [4.2, 4.8, 3.1, 3.8, 3.5, 2.9]
    },
        {
            name: "Cardinal",
            data: [3, 3.2, 4.1, 3.6, 4, 4.5]
        },
        {
            name: "Crown Phoenix Hotel",
            data: [3.5, 3.5, 4.7, 4.8, 3.2, 3.9]
        }
    ],
    chart: { toolbar: {
            show: false
        },
        height: 400,
        type: 'radar',
    },
    colors: ['#00b0db','#00e396','#ffb01a', '#ff4560'],
    xaxis: {
        categories: ['Meals', 'Location', 'Price', 'Features', 'Ambiance', 'Service'],
        labels: {
            show: true,
        },

    },
    dataLabels: {
        enabled: true,
        background: {
            enabled: true,
            borderRadius:1,
        }
    }
};

var chart = new ApexCharts(document.querySelector("#radar-chart-benchmarking-2"), options);
chart.render();