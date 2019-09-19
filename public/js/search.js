$(document).ready(function() {
    $('.search').on('keyup', function(){
    let searchTerm = $(this).val().toLowerCase();
    $('#hotelTable tbody tr').each(function(){
    let lineStr = $(this).text().toLowerCase();
    if(lineStr.indexOf(searchTerm) === -1){
    $(this).hide();
    } else{
        $(this).show();
    }
    })
    });
})