$(function() {

  $('#get-balance').on('click', function() {
    $.get('/balance').then(function(data){
      $('#balance').removeClass('large');
      $('#balance').hide().text(data).fadeIn('fast', function() {
        $('#balance').addClass('large');
      });


    }, function() {
      console.log('request failed');
    });
  })



})
