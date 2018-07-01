// When size is submitted and color picked by the user, call makeGrid() and colorIn() 
 $('#sizePicker').submit(function(evt){
	 evt.preventDefault();
	 $('#pixelCanvas').children().remove();
	 makeGrid();
	 colorIn();
 });
 
 // Select size input 
 function makeGrid() { 
	var row;
	var column;
	var table;
	
	row = $('#inputWidth').val();
	column =$('#inputHeight').val();
	table = $('#pixelCanvas');
	
 // Create rows  
	for (var x =1; x <= row; x++){
		table.append('<tr></tr>');
		
		//Create columns
		for(var y =1; y <= column; y++){
			$('tr').last().append('<td></td>');
		}
	}
 } 

 //Select a color input
function colorIn(){
	var colorSelector;
	colorSelector = $('#colorPicker').val();
	$('td').click(function(){
		$(this).css('background',colorSelector);
	});
	//Remove color from grid when double click cell
	$('td').dblclick(function(evt){
		evt.preventDefault();
		$(this).css('background-color','transparent');

	});
}
//Clear the grid and reset the inputs
$('#clear').click(function(){
	$('#pixelCanvas').children().remove();
	$('#inputHeight').val(1);
	$('#inputWidth').val(1);
});
