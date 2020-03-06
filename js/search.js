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
					$(".panel-info").append("<div><button type=\"button\" class=\"btn btn-info\" data-toggle=\"collapse\" data-target=\"#usuario"+i+"\">"+data.items[i].login+"</button><div id=\"usuario"+i+"\" class=\"collapse\">TEST</div></div>");
					i=i+1;
				}
     		}
		});
	});	
});

