var canvas = document.getElementById('daily-chart');

function draw() {

  if (canvas.getContext) {

    var ctx = canvas.getContext('2d');
    ctx.translate(0.5, 0.5);

    ctx.font = '10px Montserrat, sans-serif';
    ctx.textBaseline = 'middle';



    // canvas column numbers

    ctx.fillText('2500', 20, 20);
    ctx.fillText('2000', 20, 60);
    ctx.fillText('1500', 20, 100);
    ctx.fillText('1000', 20, 140);
    ctx.fillText('500', 20, 180);

    //row date

    ctx.fillText('16-22', 80, 220);
    ctx.fillText('23-29', 138, 220);
    ctx.fillText('30-5', 200, 220);
    ctx.fillText('6-12', 260, 220);
    ctx.fillText('13-19', 320, 220);
    ctx.fillText('20-26', 380, 220);
    ctx.fillText('27-3', 440, 220);
    ctx.fillText('4-10', 500, 220);
    ctx.fillText('11-17', 560, 220);
    ctx.fillText('18-24', 620, 220);
    ctx.fillText('25-31', 680, 220);


for(var i = 0; i <= 5; i++) {

    ctx.beginPath()
    ctx.moveTo(60, i*40);
    ctx.lineTo(721, i*40);

    ctx.strokeStyle = 'lightgrey';
    ctx.stroke();

}

for(var i = 1; i <= 12; i++) {

    ctx.beginPath()
    ctx.moveTo(i*60, 0);
    ctx.lineTo(i*60, 200);

    ctx.strokeStyle = 'lightgrey';
    ctx.stroke();

}

}
  }
