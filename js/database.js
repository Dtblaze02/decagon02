$('.regSubmitBtn').click(function(event) {
    event.preventDefault();
    const fullname = $('#fullname').val();
    const username = $('#username').val();
    const password = $('#password').val();
    const email = $('#email').val();
    //Check if user input is empty
    if (!fullname || !username || !password || !email) {
      $('.regMessage').html('Kindly fill in all fields');
      return;
    }
    //Make get request to check if the user already exist
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/users?email=${email}`,
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
            url: 'http://localhost:3000/users',
            data: {
              fullname,
              username,
              email,
              password,
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