var options = {
    series: [{
        name: 'Your rank',
        data: [23, 25, 23, 21, 24, 22]
    }],
    chart: {
        toolbar: {
            show: false
        },
        height: 350,
        type: 'line',
    },
    stroke: {
        show: true,
        curve: 'straight',
        width: 3,
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            dataLabels: {
                position: 'top', // top, center, bottom
            },
        }
    },
    colors: ['#00b0db'],
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            return val + ".";
        },
        offsetY: -20,
        style: {
            fontSize: '12px',
            colors: ["#304758"]
        }
    },

    xaxis: {
        categories: ["Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        position: 'bottom',
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        crosshairs: {
            fill: {
                type: 'gradient',
                gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                }
            }
        },
        tooltip: {
            enabled: true,
        }
    },
    yaxis: {
        reversed: true,
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: true,
            formatter: function (val) {
                return val + ".";
            }
        }

    }

};

var chart = new ApexCharts(document.querySelector("#benchmarkingTrend"), options);
chart.render();


