$(document).ready(function(){

	var PlantillaPanelInfo = $('#PlantillaPanelInfoOculta').html();
	var PlantillaFilaRepo = $('#PlantillaFilaRepoOculta').html();

  	$('#buscar-usuario').on('click',function(e){
  		e.preventDefault(); // disable the default form submit event
        var usuario = $("#input-usuario").val();
        var n;
        var x=0;

		$.ajax({     
			type: "GET",
			url: 'https://api.github.com/search/users?q='+usuario,
			dataType: "json",
			success: function (data) {
				$("#accordion").empty();
				n = data.items.length;
				console.log(data);
				var i = 0;			
				if (n!=0) {				
					while(i<n){
						$("#accordion").append(PlantillaPanelInfo);
						$('#Cabecera').attr('id', 'Cabecera'+i);
						$('#BotonColapsar').attr('id', 'BotonColapsar'+i);
						$('#BotonColapsar'+i).attr('data-target', '#collapse'+i);
						$('#collapse').attr('id', 'collapse'+i);
						$('#Contenido').attr('id', 'Contenido'+i);
						$('#TablaRepos').attr('id', 'TablaRepos'+i);

						$('#BotonColapsar'+i).append("<b>"+data.items[i].login+"</b>");
						$('#BotonColapsar'+i).attr('style', 'background: url('+data.items[i].avatar_url+');background-position: 0px 0px;background-repeat: no-repeat;background-size: contain;');

						$.ajax({     
							type: "GET",
							url: 'https://api.github.com/users/'+data.items[i].login+'/repos',
							dataType: "json",
							success: function (_data) {
								console.log(_data);
								var l = _data.length;
								if(l!=0){
									var j=0;
									while(j<l){
										$('#TablaRepos'+x).append(PlantillaFilaRepo);

										$('#TablaRepos'+x+'>tr>.Repo:last').append(_data[j].name);
										$('#TablaRepos'+x+'>tr>.Desc:last').append(_data[j].description);
										$('#TablaRepos'+x+'>tr>.Follow:last').append(_data[j].watchers);

										j=j+1;
									}	
								}else{
									$('#Contenido'+x).empty();
									$('#Contenido'+x).append("<p>Sin Repos</p>");
								}
								x=x+1;
				     		},
							statusCode: {
								403: function (response) {
									$("#accordion").empty();
									$("#accordion").append("<h2 align=\"center\">Error 403: Se ha superado la tasa límite de la API.</h2>");
									return false;
								}
							}
						});
						
						i=i+1;
					}
				}else{
					$("#accordion").append("<h1 align=\"center\">No se han encontrado usuarios</h1>");
				}

     		}
		});
	});	
});

