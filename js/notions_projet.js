// $( ".cadre" )
//   .hover(function() {
//     $( "#hide" ).fadeOut('slow');
//     $( "#show" ).fadeIn('slow');
// 	},
// 	function() {
// 	$( "#hide" ).fadeIn('slow');
//     $( "#show" ).fadeOut('slow');
// 	});



function hide()
{
	//cible le dernier lien
	//l'anime vers la gauche
	$(".cadre div.slide").last().fadeOut('slow', function(){
		//prend la dernière image et la déplace au début du #slider
		$(".cadre").prepend(this);
		$( this ).show();
		window.setTimeout(hide, 2000);
	});
}

window.setTimeout(hide, 2000);



 

