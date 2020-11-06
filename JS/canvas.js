var canvas = document.getElementById('daily-chart');

function draw() {

  if (canvas.getContext) {

    var ctx = canvas.getContext('2d');

    ctx.strokeStyle = 'lightgrey';
    ctx.strokeRect(0, 0, 600, 200);


    ctx.beginPath();
    ctx.moveTo(0, 40);
    ctx.lineTo(600, 40);

    ctx.moveTo(0, 80);
    ctx.lineTo(600, 80);

    ctx.moveTo(0, 120);
    ctx.lineTo(600, 120);

    ctx.moveTo(0, 160);
    ctx.lineTo(600, 160);



    ctx.stroke();



        }
}
