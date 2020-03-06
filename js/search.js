$(document).ready(function(){
  	$('#buscar-usuario').on('click',function(e){
  		e.preventDefault(); // disable the default form submit event
        var usuario = $("#input-usuario").val();

		$.ajax({     
			type: "GET",
			url: 'https://api.github.com/search/users?q='+usuario,
			dataType: "json",
			success: function (data) {
				console.log(data);
				alert(data.items[0].login);
     		}
		});

		//$(".panel-info").append("<div><button type="'button'" class="'btn btn-info'" data-toggle="'collapse'" data-target="'#demo'">Simple collapsible</button><div id="'demo'" class="'collapse'">TEST</div></div>");
		$(".panel-info").append("<div><button type="'button'" class="'btn btn-info'" data-toggle="'collapse'" data-target="'#demo'">Simple collapsible</button></div>");
	});	
});

