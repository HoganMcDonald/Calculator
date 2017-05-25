$(document).ready(function() {
  //current readout of number
  var readout = '';
  var memory = 0;
  //updates the Dom to reflect readout
  function updateReadout() {
    $('.output').text(readout);
  }
  //append readout when clicked
  $('.num').on('click', function() {
    readout += $(this).text();
    updateReadout();
  }); //end append readout

  //on click for + plus
  $('#plus').on('click', function() {
    memory = Number(readout);
    readout = '';
    updateReadout();
    $(this).addClass('active');
  }); //end click plus
  //on click for - minus
  //on click for / division
  //on click for x multiply
  //on click for = equals
  $('#equals').on('click', function() {
    //if plus
    if ($('#plus').hasClass('active')) {
      console.log(String(memory + Number(readout)));
      readout = String(memory + Number(readout));
      updateReadout();
    } //end plus
  }); //end click equals
});
