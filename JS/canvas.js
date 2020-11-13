var graph = document.getElementById('daily-chart').getContext('2d');
var bar = document.getElementById('barMeter').getContext('2d');
var dough = document.getElementById('doughMeter').getContext('2d');

var numbers = [500,1000,1500,2000,2500,3000,3500,4000,4500,5000,5500];
var numbersDaily = [50,100,150,200,250,300,350];
var numbersDoughNut = [10,20,30];

Chart.defaults.global.defaultFontFamily = 'Montserrat';
Chart.defaults.global.elements.point.radius = 4;
Chart.defaults.global.elements.point.borderColor = '#661aef';


var chart = new Chart(graph, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26','27-3','4-10',
      '11-17','18-24','25-31'],

      datasets: [{
    data: numbers,
    backgroundColor: '#e0d5f5',
    pointBackgroundColor: 'ghostwhite'

  }],
},

    // Configuration options go here
    options: {

      layout: {
            padding: {
                left: 50,
                right: 50,
                top: 50,
                bottom: 10
            }
        },

      legend:{

        display:false
      }
    }
});


var barGraph = new Chart(bar, {

type: 'bar',

data: {
  labels: ['S','M','T','W','T','F','S'],

  datasets: [{


data: numbersDaily,
backgroundColor: '#431E8B',
pointBackgroundColor: 'ghostwhite'

}],
},

options: {


  legend:{

    display:false
  },

  layout: {

        // padding: {
        //     left: 0,
        //     right: 0,
        //     top: 100,
        //     bottom: 0
        // }
  }
}

});

var doughGraph = new Chart(dough, {

  type: 'doughnut',

  data: {
  labels: ['Phones','Tablets','Desktop'],

    datasets: [{

      backgroundColor: [
       'red',
       'green',
       'blue'
   ],
      data: numbersDoughNut,
      pointBackgroundColor: 'ghostwhite'

  }],
  },

  options: {

    layout: {
          padding: {
              left: 30,
              right: 30,
              top: 30,
              bottom: 10
          }
      },

    legend:{

      position:'right',



}
}
  });
