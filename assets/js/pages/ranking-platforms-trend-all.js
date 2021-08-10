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
        chart: {toolbar: {
                show: false
            },
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
        },
        colors: ['#00b0db','#00e396','#ffb01a'],
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

var chart = new ApexCharts(document.querySelector("#ranking-platforms-trend-all"),options);
chart.render();