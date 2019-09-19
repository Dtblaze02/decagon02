 //first method (didnt work)
// $(document).ready(function() {
//     $('#lists').click(function(event) {
//     event.preventDefault();
//     $.getJSON('http://localhost:3000/hotels', function(data){
//         var hotel_data = '';
//         $.each(data, function(key, value){
//             hotel_data += '<tr>';
//             hotel_data += '<td>' + value.hotelname + '</td>';
//             hotel_data += '<td>' + value.city + '</td>';
//             hotel_data += '<td>' + value.location + '</td>';
//             hotel_data += '</tr>'
//         });
//         $('hotelTable').append(hotel_data);
//     })





//second method(worked)
$(document).ready(function() {
$.getJSON('http://localhost:3000/hotels', 
function(data){
    $(data).each(function (i, hotels){
        $('#hotelTable').append($("<tr>")
        .append($("<td>").append(hotels.hotelname))
        .append($("<td>").append(hotels.city))
        .append($("<td>").append(hotels.location)));
    });
// })
// .done(function(){
//     alert("completed");
// })
// .fail(function(e){
//     console.log('error')
//     console.log(e) 
// })
// .always(function(){
//     alert("always runs");
 //   })

    })
})