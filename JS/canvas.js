var canvas = document.getElementById('daily-chart');

function draw() {

  if (canvas.getContext) {

    var ctx = canvas.getContext('2d');


    ctx.beginPath();

    ctx.strokeStyle = 'lightgrey';
    ctx.lineWidth = 1;

    ctx.moveTo(0, 0);
    ctx.lineTo(600, 0);

    ctx.moveTo(0, 40);
    ctx.lineTo(600, 40);

    ctx.moveTo(0, 80);
    ctx.lineTo(600, 80);

    ctx.moveTo(0, 120);
    ctx.lineTo(600, 120);

    ctx.moveTo(0, 160);
    ctx.lineTo(600, 160);

    ctx.moveTo(0, 200);
    ctx.lineTo(600, 200);

    ctx.stroke();


    ctx.beginPath();

    ctx.strokeStyle = 'lightgrey';
    ctx.lineWidth = 1;

    ctx.moveTo(0, 0);
    ctx.lineTo(0, 200);

    ctx.moveTo(60, 0);
    ctx.lineTo(60, 200);

    ctx.moveTo(120, 0);
    ctx.lineTo(120, 200);

    ctx.moveTo(180, 0);
    ctx.lineTo(180, 200);

    ctx.moveTo(240, 0);
    ctx.lineTo(240, 200);

    ctx.moveTo(300, 0);
    ctx.lineTo(300, 200);

    ctx.moveTo(360, 0);
    ctx.lineTo(360, 200);

    ctx.moveTo(420, 0);
    ctx.lineTo(420, 200);

    ctx.moveTo(480, 0);
    ctx.lineTo(480, 200);

    ctx.moveTo(540, 0);
    ctx.lineTo(540, 200);

    ctx.moveTo(600, 0);
    ctx.lineTo(600, 200);




    ctx.stroke();




        }
}
