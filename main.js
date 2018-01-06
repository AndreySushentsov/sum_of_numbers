(function() {
    const ctx = document.getElementById('numbers').getContext('2d');  // take canvas element
    const img = new Image(); // create Image element


    img.src = './img/sprite.png';  // add src attribute image element

    // Handle event 'Load' and show image
    img.addEventListener('load',() => {
      ctx.drawImage(img, -1, 80, 500, 50);
    })

    ctx.strokeStyle = 'red'; // arrow color
    ctx.lineWidth = 2;      // arrow width


    // Generate Random Number
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    // Convert degrees to radians
    function degToRad(degrees) {
      const pi = Math.PI;
      return degrees * (pi/180);
    }


    // Calculate length of horda
    function length(radius, angle) {
      const D = 2 * radius;
      const alfa = (angle * Math.PI) / 360;
      const sinAlfa = Math.sin(alfa);

      return D * sinAlfa;
    }

    // drawArrow
    function drawArrow(arg, arg2, arg3, arg4) {
      ctx.beginPath();
      ctx.arc(arg, arg2, arg3, 3.48, 5.93);
      ctx.stroke();


      if(arg4 == true){

        if(a == 6){
          ctx.beginPath();
          ctx.moveTo((lenHorda + 19),82);
          ctx.lineTo((lenHorda + 12),73);
          ctx.moveTo((lenHorda + 19),82);
          ctx.lineTo((lenHorda + 23),73);
          ctx.stroke()
        }else{
          ctx.beginPath();
          ctx.moveTo((lenHorda + 21),82);
          ctx.lineTo((lenHorda + 15),75);
          ctx.moveTo((lenHorda + 21),82);
          ctx.lineTo((lenHorda + 23),75);
          ctx.stroke()
        }

      }else{
        if(b == 2){
          ctx.beginPath();
          ctx.moveTo((lenHorda + lenHorda2 +21),88);
          ctx.lineTo((lenHorda + lenHorda2 +14),82);
          ctx.moveTo((lenHorda + lenHorda2 +21),88);
          ctx.lineTo((lenHorda + lenHorda2 +22),77);
          ctx.stroke()
        }else if(b == 5){
          ctx.beginPath();
          ctx.moveTo((lenHorda + lenHorda2 +24.5),78);
          ctx.lineTo((lenHorda + lenHorda2 +18),74);
          ctx.moveTo((lenHorda + lenHorda2 +24.5),78);
          ctx.lineTo((lenHorda + lenHorda2 +26),71);
          ctx.stroke()
        }else{
          ctx.beginPath();
          ctx.moveTo((lenHorda + lenHorda2 +26),84);
          ctx.lineTo((lenHorda + lenHorda2 +18),80);
          ctx.moveTo((lenHorda + lenHorda2 +26),84);
          ctx.lineTo((lenHorda + lenHorda2 +26),77);
          ctx.stroke()
        }
      }

    }


    const a = getRandomInt(6,10);                     // first number
    const sum = getRandomInt(11, 15);                 // result of sum
    const b = sum - a;                                // second number
    const radius = a * 11.5;                          // radius first arrow
    const x = radius + 16;                            // x coordinate of center first arrow
    const y = (a == 6 || a == 7) ? 99 + a : 105 + a;  // y coordinate of center first arrow

    const lenHorda = length(radius,140);              // horda legth first arrow



    const radius2 = b * 11.5;                         // radius second arrow
    const x2 = (lenHorda + 20) + radius2;             // x coordinate of center second arrow
    const y2 = (b <= 5) ? 95 : 110;                   // y coordinate of center second arrow

    const lenHorda2 = length(radius2,140);


    //draw first arrow
    setTimeout(function() {
      drawArrow(x,y,radius,1);
    }, 250);

    // add values of numbers in span elements
    $('#numA').text(a);
    $('#numB').text(b);
    $('#sum').text('??');

    const input1 = document.createElement('input');   // create first input field
    const input2 = document.createElement('input');   // create second input field
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');

    // add styles first input field
    $(input1).css({'width':'25px',
                  'height': '30px',
                  'position': 'absolute',
                  'display' : 'none',
                  'bottom' : '25',
                  'left' : radius,
                  'font-size' : '1.3rem',
                  'padding-left' : '10px',
                  'padding-right' : '0'
                });

    // add styles second input field
    $(input2).css({'width':'25px',
                  'height': '30px',
                  'position': 'absolute',
                  'display' : 'none',
                  'bottom' : '20',
                  'left' : radius2 + lenHorda,
                  'font-size' : '1.3rem',
                  'padding-left' : '10px',
                  'padding-right' : '0'
    });

    $(span1).css({'width':'25px',
                  'height': '30px',
                  'position': 'absolute',
                  'display' : 'none',
                  'bottom' : '25px',
                  'left' : radius,
                  'font-size' : '1.4rem',
                  'color' : 'black'
    });

    $(span2).css({'width':'25px',
                  'height': '30px',
                  'position': 'absolute',
                  'display' : 'none',
                  'bottom' : '25px',
                  'left' : radius2 + lenHorda,
                  'font-size' : '1.4rem',
                  'color' : 'black'
    });

    $(span1).text(a);
    $(span2).text(b);

    // Append elements on DOM
    $('#app').append($(input1));
    $('#app').append($(input2));
    $('#app').append($(span1));
    $('#app').append($(span2));

    // Show first input
    setTimeout(function() {
      $(input1).fadeIn(300);
    }, 400);

    // Handle event on first input
    $(input1).on('keydown',function () {
      setTimeout(function() {
        if($(input1).val() == ''){
          $(input1).animate({'color' : 'black'}, 150);
          $('#numA').animate({'background-color':'transparent', 'color' : 'black'}, 200);
        }else if($(input1).val() != a){
          $(input1).css({'color':'red'});
          $('#numA').animate({'background-color':'#ff7732', 'color' : '#fff'}, 200);
        }else{
          $(input1).animate({'color' : 'black'}, 150);
          $(input1).fadeOut(300);
          $(span1).fadeIn(300);
          $('#numA').animate({'background-color':'transparent', 'color' : 'black'}, 200);
          drawArrow(x2,y2,radius2);
          $(input2).fadeIn(300);
        }
      }, 100)
    });

    // Handle event on second input
    $(input2).on('keydown',function () {
      setTimeout(function() {
        if($(input2).val() == ''){
          $(input2).animate({'color' : 'black'}, 150);
          $('#numB').animate({'background-color':'transparent', 'color' : 'black'}, 200);
        }else if($(input2).val() != b){
          $(input2).css({'color':'red'});
          $('#numB').animate({'background-color':'#ff7732', 'color' : '#fff'}, 200);
        }else{
          $(input2).fadeOut(300);
          $(span2).fadeIn(300);
          $('#numB').animate({'background-color':'transparent', 'color' : 'black'}, 200);
          $('#sum').text(sum).animate({'background-color':'green', 'color' : '#fff'}, 300);
        }
      }, 100)
    });
  }
)();
