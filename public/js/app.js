$(function() {

  $('#get-balance').on('click', function() {
    var randUpDown = Math.random();
    console.log(randUpDown);
    var randLeftRight = Math.random();

    if (randUpDown > .5) {
      randUpDown = 1;
    }
    else {
      randUpDown = -1;
    }

    if (randLeftRight > .5) {
      randLeftRight = 1;
    }
    else {
      randLeftRight = -1;
    }

    var leftRight = (150 * randLeftRight)+'';
    var upDown = (50 * randUpDown)+'';
    console.log(leftRight, upDown);

    $.get('/balance').then(function(data){
      $('#balance').removeClass('large');
      $('#balance').animate({left: leftRight, top: upDown}, 0);
      $('#balance').hide().text(data).fadeIn('fast', function() {
        $('#balance').addClass('large');
      });
      $('#balance').animate({left: "0", top: "0"}, {duration: 300});


    }, function() {
      console.log('request failed');
    });
  })


})
