
// var options = {
//   series: [{
//   name: 'series1',
//   data: [31, 40, 28, 51, 42, 109, 100]
// }],
// Yaxis: {
//   lines: {
//       show: false
//   }
//  },   
//   chart: {
//   height: 150,
//   type: 'area'
// },
// dataLabels: {
//   enabled: false
// },
// stroke: {
//   curve: 'smooth'
// },
// xaxis: {
//   type: 'datetime',
//   categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
// },
// tooltip: {
//   x: {
//     format: 'dd/MM/yy HH:mm'
//   },
// },
// };

// var chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();



// 2 chart


// var options = {
//   series: [{
//   name: 'PRODUCT A',
//   data: dataSet[0]
// }, {
//   name: 'PRODUCT B',
//   data: dataSet[1]
// }, {
//   name: 'PRODUCT C',
//   data: dataSet[2]
// }],
//   chart: {
//   type: 'area',
//   stacked: false,
//   height: 350,
//   zoom: {
//     enabled: false
//   },
// },
// dataLabels: {
//   enabled: false
// },
// markers: {
//   size: 0,
// },
// fill: {
//   type: 'gradient',
//   gradient: {
//       shadeIntensity: 1,
//       inverseColors: false,
//       opacityFrom: 0.45,
//       opacityTo: 0.05,
//       stops: [20, 100, 100, 100]
//     },
// },
// yaxis: {
//   labels: {
//       style: {
//           colors: '#8e8da4',
//       },
//       offsetX: 0,
//       formatter: function(val) {
//         return (val / 1000000).toFixed(2);
//       },
//   },
//   axisBorder: {
//       show: false,
//   },
//   axisTicks: {
//       show: false
//   }
// },
// xaxis: {
//   type: 'datetime',
//   tickAmount: 8,
//   min: new Date("01/01/2014").getTime(),
//   max: new Date("01/20/2014").getTime(),
//   labels: {
//       rotate: -15,
//       rotateAlways: true,
//       formatter: function(val, timestamp) {
//         return moment(new Date(timestamp)).format("DD MMM YYYY")
//     }
//   }
// },
// title: {
//   text: 'Irregular Data in Time Series',
//   align: 'left',
//   offsetX: 14
// },
// tooltip: {
//   shared: true
// },
// legend: {
//   position: 'top',
//   horizontalAlign: 'right',
//   offsetX: -10
// }
// };

// var chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();
var randomizeArray = function (arg) {
  var array = arg.slice();
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// data for the sparklines that appear below header area
var sparklineData = [10, 20, 10, 10, 20];

// the default colorPalette for this dashboard
//var colorPalette = ['#01BFD6', '#5564BE', '#F7A600', '#EDCD24', '#F74F58'];
var colorPalette = ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0']
var spark3 = {
  chart: {
    id: 'chart',
    group: 'sparklines',
    type: 'area',
    height: 60,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    opacity: 1,
  },
  series: [{
    name: 'Profits',
    data: randomizeArray(sparklineData)
  }],
  labels: [...Array(5).keys()].map(n => `2018-09-0${n + 1}`),
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    min: 0
  },
  colors: ['#008FFB'],
}
//----------------:  // 2//:----------------
var spark2 = {
  chart: {
    id: 'chart1',
    group: 'sparklines',
    type: 'area',
    height: 60,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    opacity: 1,
  },
  series: [{
    name: 'Profits',
    data: randomizeArray(sparklineData)
  }],
  labels: [...Array(5).keys()].map(n => `2018-09-0${n + 1}`),
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    min: 0
  },
  colors: ['#ffc107'],
}
//----------------:// 3//:----------------
var spark1 = {
  chart: {
    id: 'chart2',
    group: 'sparklines',
    type: 'area',
    height: 60,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    opacity: 1,
  },
  series: [{
    name: 'Profits',
    data: randomizeArray(sparklineData)
  }],
  labels: [...Array(5).keys()].map(n => `2018-09-0${n + 1}`),
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    min: 0
  },
  colors: ['#28a745'],
}
//----------------:// 4//:----------------
var spark0 = {
  chart: {
    id: 'chart3',
    group: 'sparklines',
    type: 'area',
    height: 60,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    opacity: 1,
  },
  series: [{
    name: 'Profits',
    data: randomizeArray(sparklineData)
  }],
  labels: [...Array(5).keys()].map(n => `2018-09-0${n + 1}`),
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    min: 0
  },
  colors: ['#dc3545'],
}
// chart-copy:---------
var colorPalette = ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0']
var spark = {
  chart: {
    id: 'chart',
    group: 'sparklines',
    type: 'area',
    height: 60,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    opacity: 1,
  },
  series: [{
    name: 'Profits',
    data: randomizeArray(sparklineData)
  }],
  labels: [...Array(5).keys()].map(n => `2018-09-0${n + 1}`),
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    min: 0
  },
  colors: ['#008FFB'],
}
new ApexCharts(document.querySelector("#chart3"), spark0).render();
new ApexCharts(document.querySelector("#chart2"), spark1).render();
new ApexCharts(document.querySelector("#chart1"), spark2).render();
new ApexCharts(document.querySelector("#chart"), spark3).render();
// main-chart
var options = {
  series: [{
    name: "Page Views",
    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
  },
  {
    name: "Page Views",
    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
  },
  {
    name: 'Total Visits',
    data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
  }
  ],
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [5, 7, 5],
    curve: 'straight',
    dashArray: [0, 8, 5]
  },
  // legend: {
  //   tooltipHoverFormatter: function(val, opts) {
  //     return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
  //   }
  // },
  // markers: {
  //   size: 0,
  //   hover: {
  //     sizeOffset: 6
  //   }
  // },
  xaxis: {
    categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
      '10 Jan', '11 Jan', '12 Jan'
    ],
  },
  // tooltip: {
  //   y: [
  //     {
  //       title: {
  //         formatter: function (val) {
  //           return val + " (mins)"
  //         }
  //       }
  //     },
  //     {
  //       title: {
  //         formatter: function (val) {
  //           return val + " per session"
  //         }
  //       }
  //     },
  //     {
  //       title: {
  //         formatter: function (val) {
  //           return val;
  //         }
  //       }
  //     }
  //   ]
  // },
  // grid: {
  //   borderColor: '#f1f1f1',
  // }
};

var chart = new ApexCharts(document.querySelector("#mainchart"), options);
chart.render();
//----------column-chart:-------------
var column = {
  series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  },
  {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],

  colors: ['rgb(0, 132, 255)', 'rgb(255, 212, 0)'],
  chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded',
    },
  },
  dataLabels: {
    enabled: false,
    
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    labels: {
      show: true,
      rotate: -45,
      rotateAlways: false,
      hideOverlappingLabels: true,
      showDuplicates: false,
      trim: false,
      minHeight: undefined,
      maxHeight: 120,
      style: {
        colors: ["#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff"],
        fontSize: '12px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 400,
        cssClass: 'apexcharts-xaxis-label',
      }
    }
  },
    yaxis: {
      labels: {
        show: true,
        rotate: -45,
        rotateAlways: false,
        hideOverlappingLabels: true,
        showDuplicates: false,
        trim: false,
        minHeight: undefined,
        maxHeight: 120,
        style: {
          colors: ["#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff"],
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label',
        }
      } 
    },
    fill: {
      opacity: 1
    },
    // tooltip: {
    //   y: {
    //     formatter: function (val) {
    //       return "$ " + val + " thousands"
    //     }
    //   }
    // }
  };

  var chart = new ApexCharts(document.querySelector("#column-chart"), column);
  chart.render();
  // SIDE BAR JS:--------------
  $(document).ready(function(){
    $('.sd-logo2').click(function(){
        $(".side-bar").toggleClass("side-width");
        $(".main-bar").toggleClass("side-width");
        $(".sd-content").toggleClass("dispaly-none");
        $(".sd-content1").toggleClass("show");
    });
  });


