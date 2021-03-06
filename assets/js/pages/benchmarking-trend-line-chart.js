var options = {
    series: [{
        name: "Bon Appétit (Me)",
        data: [23, 25, 23, 21, 24, 22]
    },
        {
            name: "Competitor A",
            data: [20, 15, 15, 14, 12, 12]
        },
        {
            name: 'Competitor B',
            data: [12, 13, 11, 18, 18, 20]
        },
        {
            name: "Competitor C",
            data: [25, 26, 26, 25, 27, 26]
        },
        {
            name: "Competitor D",
            data: [34, 33, 32, 36, 34, 34]
        }
    ],
    chart: {toolbar: {
            show: false
        },
        height: 650,
        type: 'line',
        zoom: {
            enabled: false
        },
    },
    colors: ['#00b0db','#00e396','#ffb01a', '#ff4560','#775cd0','#D3D3D3'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        curve: 'straight',
        width: 3,
    },

    legend: {
        tooltipHoverFormatter: function(val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
        }
    },
    markers: {
        size: 0,
        hover: {
            sizeOffset: 6
        }
    },
    xaxis: {
        categories: ["Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    },
    tooltip: {
        y: [
            {
                title: {
                    formatter: function (val) {
                        return val;
                    }
                }
            },
            {
                title: {
                    formatter: function (val) {
                        return val;
                    }
                }
            },
            {
                title: {
                    formatter: function (val) {
                        return val;
                    }
                }
            }
        ]
    },
    grid: {
        borderColor: '#f1f1f1',
    },
    yaxis: {reversed: true}
};

var chart = new ApexCharts(document.querySelector("#benchmarking-trend-line-chart"), options);
chart.render();