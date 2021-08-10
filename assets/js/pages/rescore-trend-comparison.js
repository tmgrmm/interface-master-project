var options = {
        series: [{
            name: "Bon Appétit",
            data: [78.5, 84.5, 81.5, 80, 84.5, 84]
        },
            {
                name: "Cardinal",
                data: [75.5,77,80,74.5,75,76]
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
        colors: ['#00b0db','#00e396','#ffb01a', '#ff4560'],
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

var chart = new ApexCharts(document.querySelector("#rescoreTrendComparison"),options);
chart.render();