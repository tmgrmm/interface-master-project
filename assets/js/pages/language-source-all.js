var options = {
    series: [{
        name: 'Number of Reviews',
        data: [514, 100, 86, 75, 35]
    }],
    chart: {toolbar: {
            show: false
        },
        type: 'bar',
        height: 300
    },
    plotOptions: {
        bar: {
            barHeight: '100%',
            distributed: true,
            horizontal: true,
            dataLabels: {
                position: 'bottom'
            },
        }
    },
    colors: ['#00b0db','#00e396','#ffb01a', '#775cd0','#ff4560','#D3D3D3'],
    dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
            colors: ['#fff']
        },
        formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex]
        },
        offsetX: 0,
        dropShadow: {
            enabled: true
        }
    },
    stroke: {
        width: 2,
        colors: ['#fff']
    },
    xaxis: {
        categories: ['German', 'English', 'French', 'Other', 'Italian'],
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    legend: {
        show: false
    }

};


var chart = new ApexCharts(document.querySelector("#language-source-all"), options);
chart.render();
