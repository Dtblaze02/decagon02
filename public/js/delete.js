


// $(document).ready(function() {
//     //delete function
//     $('.delete').click(function(event) {
//         event.preventDefault();
//         const hotelname = this.hotelname;
//         const email = $('#email').val();
//         let el = this;
//         let splithotelname = hotelname.split('_');
//         //delete hotel
//         let deletehotelname = splithotelname[1];

//         //Check if user input is empty
//         if (!hotelname || !email) {
//             $('.regMessage').html('Kindly fill in all fields');
//             return;
//             }
//         });
//       //Make get request to check if the user already exist
$(document).ready(function() {
     $('.delete').click(function(event) {
        event.preventDefault();
        const hotelname = $('#hotelname').val();
        const email = $('#email').val();
        //Check if user input is empty
    if (!hotelname || !email) {
        $('.regMessage').html('Kindly fill in all fields');
        return;
      }
      $.ajax({
        url: `http://localhost:3000/hotels`,
        data: {
            hotelname,
            email
        },
        type: 'DELETE',
        contentType:'application/json',
        dataType:'text',
        beforeSend: function() {
          $('.regMessage').html('Loading...');
        },
        success: function(response) {
            if(response == 1){
            $(this).remove();
            $('.regMessage').html('Account deleted Successfully');
            // localStorage.setItem('email', email);
            window.location.assign('index.html');
            return;
            }else {
                $('.regMessage').html('Your Hotel is not on our system')
            }

          }

        });
    });
})
       
        