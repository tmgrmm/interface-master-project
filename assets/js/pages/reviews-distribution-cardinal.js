var options = {
  series: [{
      name: "Positive Reviews",
      data: [55.5,51,54,55,43,45]
    },
    {
      name: "Neutral Reviews",
      data: [20,39,32,35,42,41]
    },
    {
      name: "Negative Reviews",
      data: [24.5, 10, 14, 10, 15, 14]
    }
  ],
  chart: {toolbar: {
      show: false
    },
    type: 'area',
    height: 400,
    stacked: true,
    events: {
      selection: function (chart, e) {
        console.log(new Date(e.xaxis.min))
      }
    },
  },
  colors: ['#03c03c', '#FFFF00', '#F28268'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.6,
      opacityTo: 0.8,
    }
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'center',
    fontSize: '15px'
  },
  xaxis: {
    categories: ["Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  },
  yaxis: [{
    min: 0,
    max: 100,
    tickAmount: 4,
  }],
  tooltip: {
    y: {
      formatter: function(value, opts) {
        return value + '%'
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#reviews-distribution-cardinal"), options);
chart.render();

