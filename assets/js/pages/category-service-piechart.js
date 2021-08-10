var options = {
    series: [55, 44, 13],
    chart: {
       height: 300,
        type: 'pie',
    },
    labels: ['Positive', 'Neutral', 'Negative'],
    colors: ['#0acf97','#ffbc00','#fa5c7c'],
    legend: {
        show: true,
        fontSize: '14px',
        position: 'bottom',
        horizontalAlign: 'center',
    },
    responsive: [{
        breakpoint: 100,
        options: {
            chart: {
                width: 10
            },
            legend: {
                position: 'left'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#category-service-all-pie"), options);
chart.render();
