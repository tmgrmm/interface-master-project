var options = {
    series: [{
        name: 'Number of Reviews',
        data: [35, 75, 86,90,100,614]
    }],
    colors: ['#00b0db','#00e396','#ffb01a', '#ff4560','#775cd0','#D3D3D3'],
    chart: {toolbar: {
            show: false
        },
        type: 'bar',
        height: 312
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            horizontal: true,
        }
    },

    dataLabels: {
        enabled: true
    },
    xaxis: {
        categories: ['Italian', 'Other', 'French', 'Dutch', 'English','German']
    }
};

var chart = new ApexCharts(document.querySelector("#rating-languages-all"), options);
chart.render();
