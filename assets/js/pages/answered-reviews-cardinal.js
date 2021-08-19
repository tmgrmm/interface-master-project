var options = {
    series: [53,73.5,100,50],
    chart: {
        height:375,
        width: '100%',
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            customScale: 2,
            dataLabels: {
                name: {
                    fontSize: '22px',
                },
                value: {
                    fontSize: '16px',
                },
                total: {
                    show: true,
                    label: 'Total',
                    fontSize: '18px',
                    formatter: function (w) {
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        return "83/121"
                    }
                }
            }
        }
    },
    colors: ['#00e396','#ffb01a', '#ff4560','#caced2','#6c747c'],
    labels: ['Positive 32/60', 'Neutral 25/34', 'Negative 25/25','Not rated 1/2'],
    legend: {
        show: true,
        fontSize: '12px',
        position: 'bottom',
        horizontalAlign: 'center',


    },

};

var chart = new ApexCharts(document.querySelector("#answered-reviews-cardinal"), options);
chart.render();
