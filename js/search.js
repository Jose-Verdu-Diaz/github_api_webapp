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
					$('#Contenido').attr('id', 'Contenido'+i);

					$('#BotonColapsar'+i).append(data.items[i].login);	

					var x=i;
					$.ajax({     
						type: "GET",
						url: 'https://api.github.com/users/'+data.items[i].login+'/followers',
						dataType: "json",
						success: function (_data) {
							console.log(_data);
							var l = _data.length;
							if(l!=0){
								var j=0;
								while(j<l){
									$('#Contenido'+x).append("<p>"+_data[j].login+"</p>");
									j=j+1;
								}	
							}else{
								$('#Contenido'+x).append("<p>Sin seguidores</p>");
							}

			     		}
					});
					i=i+1;
				}
     		}
		});
	});	
});

