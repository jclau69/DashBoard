var ctx = document.getElementById('daily-chart').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Montserrat';
Chart.defaults.global.elements.point.radius = 4;
Chart.defaults.global.elements.point.borderColor = '#661aef';

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26','27-3','4-10',
      '11-17','18-24','25-31'],

      datasets: [{
    data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    backgroundColor: '#e0d5f5',
    pointBackgroundColor: 'ghostwhite'

  }],
},


    // Configuration options go here
    options: {

    }
});
