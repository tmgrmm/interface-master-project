var options = {
    series: [{
            name: "Bon Appétit",
            data: [27, 25, 22, 21, 20, 22]
        },
            {
                name: "Cardinal",
                data: [40,43,45,44,40,39]
            }
        ],
        chart: {toolbar: {
                show: false
            },
            height: 250,
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
            categories: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
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

var chart = new ApexCharts(document.querySelector("#rankingTrendComparison-2"),options);
chart.render();