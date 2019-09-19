$(document).ready(function() {
//Login Function
$('.loginSubmitBtn').click(function(event) {
  event.preventDefault();
  const username = $('#username').val();
  const password = $('#password').val();
  if (!username || !password) {
    $('.regMessage').html('Kindly fill in all fields');
    return;
  }
  //Check if the user is in the database
  $.ajax({
    method: 'GET',
    url: `http://localhost:3000/users?username=${username}`,
    data: {
      username,
      password,
    },
    beforeSend: function() {
      $('.regMessage').html('Loading...');
    },
    success: function(response) {
      if (response.length) {
        $('.regMessage').html('Login sucessful');
        $('.checkLogin').html('You are logged in');
        localStorage.setItem('username', username);
        //redirect to home page if the login is successfull
        window.location.assign('index.html');
      } else {
        $('.regMessage').html('Username or password Incorrect');
      }
    },
  });
});
})