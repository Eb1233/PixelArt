//We get the values of height and width
var height ,width, selectedColor;
$('#sizePicker').submit(function(event){
    event.preventDefault();
    height=$("#inputHeight").val();//Return the value attribute ($(selector).val()) https://www.w3schools.com/jquery/html_val.asp
    width=$("#inputWidth").val();
    makeGrid(height,width);
});

//Here we make the grid
function makeGrid(column,row) {
    $('tr').remove();
    for (var i=1; i<=column; i++){
        $('#pixelCanvas').append('<tr id=table'+ i + '></tr>');
        for (var j = 1; j <= row; j++){
            $('#table'+ i).append('<td></td>');
        }
    }

//To add color
$('td').click(function ChooseColor(){
    selectedColor = $('#colorPicker').val();
    if ($(this).attr('style')){//attr() The jQuery attr() method is used to set or return attributes and values of the selected elements  https://www.javatpoint.com/jquery-attr
        $(this).removeAttr('style')
    }else{
        $(this).attr('style', 'background-color:' + selectedColor);
    }

    })
   
}
