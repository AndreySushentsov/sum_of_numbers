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
    function drawArrow(arg, arg2, arg3) {
      ctx.beginPath();
      ctx.arc(arg, arg2, arg3, 3.48, 5.93);
      ctx.stroke();
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
    const y2 = (b <= 4) ? 93 : 110;                   // y coordinate of center second arrow


    drawArrow(x,y,radius);                            //draw first arrow

    // add values of numbers in span elements
    $('#numA').text(a);
    $('#numB').text(b);
    $('#sum').text('??');

    const input1 = document.createElement('input');   // create first input field
    const input2 = document.createElement('input');   // create second input field

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
                  'bottom' : '25',
                  'left' : radius2 + lenHorda,
                  'font-size' : '1.3rem',
                  'padding-left' : '10px',
                  'padding-right' : '0'
    });

    // Append inputs on DOM
    $('#app').append($(input1));
    $('#app').append($(input2));

    // Show first input
    setTimeout(function() {
      $(input1).fadeIn(300);
    }, 400);

    // Handle event on first input
    $(input1).on('keydown',function () {
      setTimeout(function() {
        if($(input1).val() != a){
          $(input1).css({'color':'red'});
          $('#numA').animate({'background-color':'#ff7732', 'color' : '#fff'}, 300);
        }else{
          $(input1).fadeOut(300);
          $('#numA').animate({'background-color':'transparent', 'color' : 'black'}, 300);
          drawArrow(x2,y2,radius2);
          $(input2).fadeIn(300);
        }
      }, 100)
    });

    // Handle event on second input
    $(input2).on('keydown',function () {
      setTimeout(function() {
        if($(input2).val() != b){
          $(input2).css({'color':'red'});
          $('#numB').animate({'background-color':'#ff7732', 'color' : '#fff'}, 300);
        }else{
          $(input2).fadeOut(300);
          $('#numB').animate({'background-color':'transparent', 'color' : 'black'}, 300);
          $('#sum').text(sum).animate({'background-color':'green', 'color' : '#fff'}, 300);
        }
      }, 100)
    });
  }
)();
