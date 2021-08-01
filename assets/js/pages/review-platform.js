var options = {
    series: [1014, 177, 511],
    labels: ['Google','TripAdvisor', 'Facebook'],
    chart: {
        type: 'donut',
        height: 300
    },
    xaxis: {
        categories: ['Google','TripAdvisor', 'Facebook']
    },
    plotOptions: {
        pie: {
            customScale: 1,
            expandOnClick: true,
            donut: {
                labels: {
                    show: true
                }
            }
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            return val.toFixed(1) + '%'
        }
    },
    colors: ['#00b0db','#00e396','#ffb01a', '#ff4560','#775cd0','#D3D3D3'],
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
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#review-platform"), options);
chart.render();


