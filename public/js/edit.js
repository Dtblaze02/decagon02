$(document).ready(function() {
    $.getJSON('http://localhost:3000/hotels', 
    function(data){
        $(data).each(function (i, hotels){
            $('#hotelTable').append($("<tr>")
            .append($("<td>").append(hotels.hotelname))
            .append($("<td>").append(hotels.city))
            .append($("<td>").append(hotels.location))
            .append($("<td>").append(hotels.mobile))
            .append($("<td>").append("<button  type = 'submit' style = 'color:white; background: green; padding:2px;border-radius:10px;'>Edit</button>"))
            .append($("<td>").append("<button  type = 'submit' data-id ='{{id}}' class= 'remove' style = 'color:white; background: red; padding:2px; border-radius:10px;'>Delete</button>")))
        });
    });
});





    $('#hotelTable').delegate('.remove','click', function(){

    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3000/hotels' + $('#hotelTable').attr('data-id'),
        success: function(){
        
        }
    });
});
