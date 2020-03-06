$(document).ready(function(){

	var PlantillaPanelInfo = $('#PlantillaPanelInfoOculta').html();

  	$('#buscar-usuario').on('click',function(e){
  		e.preventDefault(); // disable the default form submit event
        var usuario = $("#input-usuario").val();
        var n;

		$.ajax({     
			type: "GET",
			url: 'https://api.github.com/search/users?q='+usuario,
			dataType: "json",
			success: function (data) {
				$(".panel-info").empty();
				n = data.items.length;
				console.log(data);
				var i = 0;
				while(i<n){
					$("#accordion").append(PlantillaPanelInfo);
					$('#Cabecera').attr('id', 'Cabecera'+i);
					$('#BotonColapsar').attr('id', 'BotonColapsar'+i);
					$('#BotonColapsar'+i).attr('data-target', '#collapse'+i);
					$('#collapse').attr('id', 'collapse'+i);		
					i=i+1;
				}
     		}
		});
	});	
});

