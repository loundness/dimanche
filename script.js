console.log($('#cine').text("Ciné au Pathé Versailles"));
$('body').append("<p> Super cette soirée ! </p>");
console.log($('p').length);
$("p").each(
	function(){
		console.log ($(this).text());
	});
$("#cine").click(
	function(){
		console.log("click !");
	});
