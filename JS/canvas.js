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

    ctx.fillText('16-22', 78, 220);
    ctx.fillText('23-29', 138, 220);
    ctx.fillText('30-5', 200, 220);
    ctx.fillText('6-12', 260, 220);
    ctx.fillText('13-19', 320, 220);
    ctx.fillText('20-26', 375, 220);
    ctx.fillText('27-3', 440, 220);
    ctx.fillText('4-10', 500, 220);
    ctx.fillText('11-17', 560, 220);
    ctx.fillText('18-24', 618, 220);
    ctx.fillText('25-31', 680, 220);


for(var i = 0; i <= 5; i++) {

    ctx.beginPath()
    ctx.moveTo(60, i*40);
    ctx.lineTo(721, i*40);

    ctx.strokeStyle = 'lightgrey';
    ctx.stroke();

}

for(var i = 1; i <= 12; i++) {

    ctx.beginPath();
    ctx.moveTo(i*60, 0);
    ctx.lineTo(i*60, 200);

    ctx.strokeStyle = 'lightgrey';
    ctx.stroke();

}


ctx.beginPath();

ctx.moveTo(60,200);
ctx.lineTo(120, 180);
ctx.moveTo(120, 180);
ctx.lineTo(180, 160);
ctx.moveTo(180, 160);
ctx.lineTo(240, 200);
ctx.moveTo(240, 200);
ctx.lineTo(300, 40);
ctx.moveTo(300, 40);
ctx.lineTo(360, 0);
ctx.moveTo(360, 0);
ctx.lineTo(420, 160);
ctx.moveTo(420, 160);
ctx.lineTo(480, 40);
ctx.moveTo(480,40);
ctx.lineTo(540, 200);
ctx.moveTo(540, 200);
ctx.lineTo(600,40);
ctx.moveTo(600, 40);
ctx.lineTo(660,120);
ctx.moveTo(660,120);
ctx.lineTo(720,40);


ctx.stroke();
}

  }
