(function(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  canvas.width = 1580;

  canvas.height = 580;


  function drawStar(cx, cy, spikes, outerRadius, innerRadius, color) {

      cy = 580 - cy;

      var rot = Math.PI / 2 * 3;
      var x = cx;
      var y = cy;
      var step = Math.PI / spikes;

      ctx.beginPath();

      ctx.moveTo(cx, cy - outerRadius);

      for (i = 0; i < spikes; i++) {
          x = cx + Math.cos(rot) * outerRadius;
          y = cy + Math.sin(rot) * outerRadius;
          ctx.lineTo(x, y)
          rot += step

          x = cx + Math.cos(rot) * innerRadius;
          y = cy + Math.sin(rot) * innerRadius;
          ctx.lineTo(x, y)
          rot += step
      }

      ctx.lineTo(cx, cy - outerRadius)
      ctx.closePath();
      ctx.lineWidth=5;
      ctx.strokeStyle=color;
      ctx.stroke();
      ctx.fillStyle=color;
      ctx.fill();
  }


  var myConstellation = constellation;
  document.getElementById("name").innerHTML = myConstellation["name"];

  var factor1, factor2;
  for (var ind = 0; ind < myConstellation["stars"].length; ind++) {
    if (myConstellation["name"] == "Draco"){
      factor1 = 18;
      factor2 = 240;
      factor3 = 11;
      factor4 = 30;
    }
    if (myConstellation["name"] == "Orion"){
      factor1 = 12;
      factor2 = 500;
      factor3 = 8;
      factor4 = 12;
    }
    if (myConstellation["name"] == "Pegasus"){
      factor1 = 14;
      factor2 = 360;
      factor3 = 12;
      factor4 = 10;
    }
    if (myConstellation["name"] == "Scorpius"){
      factor1 = 24;
      factor2 = 100;
      factor3 = 10;
      factor4 = 20;
    }
    if (myConstellation["name"] == "Ursa Major"){
      factor1 = 18;
      factor2 = 120;
      factor3 = 11;
      factor4 = 0;
    }


    drawStar(myConstellation["stars"][ind]["x_coordinate"]*factor1 + factor2, 
             myConstellation["stars"][ind]["y_coordinate"]*factor3 + factor4,
             myConstellation["stars"][ind]["number_of_spikes"], 
             10,
             5, 
             myConstellation["stars"][ind]["color"]);

  }  
  console.log(myConstellation["stars"].length);

})();




