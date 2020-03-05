$(document).ready(function(){
  	$("#btn1").click(function(){
		$.ajax({     
			type: "GET",
			url: 'https://api.github.com/search/users?q=Jose-Verdu-Diaz',
			dataType: "json",
			success: function (data) {
				console.log(data);
     		},
		});
	});
});
