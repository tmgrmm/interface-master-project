var options = {
    series: [{
        name: "Speed/Waitingtime",
        data: [4, 4.2, 3.5, 3.4, 3.9, 3.4]
    },
        {
            name: "Friendliness",
            data: [4.5, 4.9, 4.5, 3.9, 4.2, 4.4]
        },
        {
            name: 'Language',
            data: [3, 2.7, 3.2, 3.6, 4.1, 3.7]
        },
        {
            name: "Professionalism",
            data: [4.5, 5, 4.9, 4.4, 4.1, 4.2]
        },
        {
            name: "Reception/Seating",
            data: [4, 3.5, 4, 4.6, 4.5, 4.7]
        }
    ],
    chart: {toolbar: {
            show: false
        },
        height: 500,
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
    }
};

var chart = new ApexCharts(document.querySelector("#category-service-line-chart"), options);
chart.render();