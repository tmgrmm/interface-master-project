var options = {
    series: [{
        name: 'Number of Reviews',
        data: [60,57,80,147,270]
    }],
    chart: {toolbar: {
            show: false
        },
        height: 180,
        type: 'bar',
    },
    colors: ['#00b0db'],
    plotOptions: {
        bar: {
            borderRadius: 10,
            dataLabels: {
                position: 'top', // top, center, bottom
            },
            columnWidth: '100%',
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            return val;
        },
        offsetY: -20,
        style: {
            fontSize: '12px',
            colors: ["#304758"]
        }
    },


    xaxis: {
        categories: ["1.0", "2.0", "3.0", "4.0", "5.0"],
        position: 'top',
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
            enabled: false,
        },
        labels: {
            show: false
        }
    },
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            formatter: function (val) {
                return val ;
            }
        }

    }
};

var chart = new ApexCharts(document.querySelector("#rating-column-chart"), options);
chart.render();
