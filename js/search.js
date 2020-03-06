$(document).ready(function(){
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
				var i = 0;
				while(i<n){
					$("#accordion").append("<div class=\"card\"><div class=\"card-header\" id=\"Cabecera"+i+"\"><button class=\"btn btn-block\" data-toggle=\"collapse\" data-target=\"#collapse"+i+"\" aria-expanded=\"true\" aria-controls=\"collapse"+i+"\">"+data.items[i].login+"</button></div><div id=\"collapse"+i+"\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\"><div class=\"card-body\">TEST</div></div></div>");
					i=i+1;
				}
     		}
		});
	});	
});

