$(document).ready(function(){

	$("#sizePicker").submit(function makeGrid(grid){ //Using form id we are submitting and calling makeGrid(),
		$("table tr").remove();  //As we submitting values immediatly removing the table rows by DOM remove(),
		let rows=$("#inputHeight").val();
		let cols=$("#inputWeight").val();  //using rows and cols for taking values for height and weight of creating Pixel,
		//alert(rows+" "+cols);
		for(let i=1;i<=rows;i++){  //looping the with for using rows and cols variable,
			$('#pixelCanvas').append("<tr></tr>");
			for(let j=1;j<=cols;j++){				
				$('tr:last').append("<td> </td>");
				$('td').attr('class','cell'); //adding cell class to all td using attr(),
			}
		}  //in looping appending our requirements,e.g: (<tr> </tr> and <td></td>)
		grid.preventDefault(); //we are preventing the grid using preventDefault() :this will control the escaping functionality of method.
		//based on requirements making pixels cell and adding colors. :)
		$('.cell').css("background-color","#ffffff");
		$('.cell').click(function(){
			let color=$("#colorPicker").val();
			//$(this).css("background-color",color);

			let color1=$(this).css("background-color");
			//alert(color1);
			$(this).css("background-color",color1==="rgb(255, 255, 255)"? color:"#ffffff");			
		});
	});
});










// $('.cell').click(function(){
// 	$(this).toggle(function(){
// 		var color=$("#colorPicker").val();
// 		$(this).css("background-color",color);				
// 	},
// 	function(){
// 		$(this).css("background-color","#FFF");
// 	})			
// });

// each(function(){
// 	if($(this).data('clicked')){
// 		$(this).css("background-color",'#FFF');	
// 	}else if($(this).data('clicked',false)){
// 		$(this).css("background-color",color);
// 	}else{
// 		$(this).data('clicked',true);
// 		$(this).css("background-color",'#FFF');	
// 	}
// })
// $('.cell').click(function(){
// 	var color=$("#colorPicker").val();
// 	$(this).css('background-color',color);
// });

//toggleClass('.colorPick')
// $('.cell').click(function(){
// 		var color=$("#colorPicker").val();
// 		$(this).css('background-color','#FFF');
// });