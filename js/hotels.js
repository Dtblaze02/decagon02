$(document).ready(function() {
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
      url: `http://localhost:3000/hotels?email=${email}`,
      data: {
        email,
      },
      beforeSend: function() {
        $('.regMessage').html('Loading....');
      },
      success: function(response) {
        if (response.length) {
          $('.regMessage').html('User already exist');
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
              address,
            },
            beforeSend: function() {
              $('.regMessage').html('Loading....');
            },
            success: function() {
              $('.regMessage').html('Registration Successfull');
            },
          });
        }
      },
    });
});