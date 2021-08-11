var options = {
    series: [{
            name: "Bon Appétit",
            data: [23, 25, 23, 21, 24, 22]
        },
            {
                name: "Cardinal",
                data: [40,43,45,44,40,39]
            },
        {
            name: "Crown Phoenix Hotel",
            data: [66,68,70,80,88,87]
        }
        ],
        chart: {toolbar: {
                show: false
            },
            height: 400,
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
                            return val + ' (Schaffhausen)';
                        }
                    }
                },
                {
                    title: {
                        formatter: function (val) {
                            return val +' (Schaffhausen)';
                        }
                    }
                },
                {
                    title: {
                        formatter: function (val) {
                            return val+' (Zurich)';
                        }
                    }
                }
            ]
        },
        grid: {
            borderColor: '#f1f1f1',
        },
        yaxis: {reversed: true,}
    };

var chart = new ApexCharts(document.querySelector("#rankingTrendComparison-2"),options);
chart.render();