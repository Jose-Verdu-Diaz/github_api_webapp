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
	});
});
