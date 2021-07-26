var options = {
    series: [{
        name: 'Number of Reviews',
        data: [177, 511, 1014]
    }],
    colors: ['#00b0db','#00e396','#ffb01a', '#ff4560','#775cd0','#D3D3D3'],
    chart: {toolbar: {
            show: false
        },
        type: 'bar',
        height: 200
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: true,
        }
    },

    dataLabels: {
        enabled: true
    },
    xaxis: {
        categories: ['Facebook', 'TripAdvisor', 'Google']
    }
};

var chart = new ApexCharts(document.querySelector("#rating-source-all"), options);
chart.render();
