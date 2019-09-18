$(document).ready(function() {
  $('.regSubmitBtn').click(function(event) {
    event.preventDefault();
    const hotelname = $('#hotelname').val();
    const email = $('#email').val();
    const mobile = $('#mobile').val();
    const website = $('#website').val();
    const location = $('#location').val();
    const city = $('#city').val();
    const address = $('#address').val();
    
    //Check if user input is empty
    if (!hotelname || !email || !mobile || !website || !location || !city || !address) {
      $('.regMessage').html('Kindly fill in all fields');
      return;
    }
    //Make get request to check if the user already exist
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/hotels?hotelname=${hotelname}`,
      data: {
        email,
      },
      beforeSend: function() {
        $('.regMessage').html('Loading....');
      },
      success: function(response) {
        if (response.length) {
          $('.regMessage').html('Hotel with the same name already exists, check Hotel name and try again');
        } else {
          //Submit the user data if the user does not exist
          $.ajax({
            method: 'POST',
            url: 'http://localhost:3000/hotels',
            data: {
              hotelname,
              email,
              mobile,
              website,
              location,
              city,
              address
            },
            beforeSend: function() {
              $('.regMessage').html('Loading1...');
            },
            success: function() {
              $('.regMessage').html('Registration Successfull');
              localStorage.setItem('email', email);
              //if sign up successful
              window.location.assign('index.html');
              return;
            }
          });
        }
     
      }



    });


});  //submits


})//ready