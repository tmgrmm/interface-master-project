var options = {
    series: [{
        name: "re:Score",
        data: [78.5, 84.5, 81.5, 80, 84.5, 84]
    }],
    chart: {
        toolbar: {
            show: false
        },
        height: 320,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    colors: ['#00b0db'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        curve: 'straight',
        width: 3,
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 1.5
        },
    },
    xaxis: {
        categories: ["Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    }
};

var chart = new ApexCharts(document.querySelector("#rescoreTrend"),options);
chart.render();