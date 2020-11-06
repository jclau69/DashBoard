var canvas = document.getElementById('daily-chart');

function draw() {

  if (canvas.getContext) {

    var ctx = canvas.getContext('2d');


for(var i = 0; i <= 5; i++) {

    ctx.beginPath()
    ctx.moveTo(0, i*40);
    ctx.lineTo(600, i*40);


    ctx.strokeStyle = 'lightgrey';
    ctx.stroke();

}

for(var i = 0; i <= 11; i++) {

    ctx.beginPath()
    ctx.moveTo(i*60, 0);
    ctx.lineTo(i*60, 200);


    ctx.strokeStyle = 'lightgrey';
    ctx.stroke();

}

}
  }
