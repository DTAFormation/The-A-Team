function moveLeft()
{
	//cible le dernier lien
	//l'anime vers la gauche
	$("#slider a").last().animate({"left": -960}, 2000, function(){
		//prend la dernière image et la déplace au début du #slider
		$(this).css("left", 0);
		$("#slider").prepend(this);
		window.setTimeout(moveRight, 2000);
	});
}

function moveRight()
{
	//cible le dernier lien
	//l'anime vers la gauche
	$("#slider a").last().animate({"left": 960}, 2000, function(){
		//prend la dernière image et la déplace au début du #slider
		$(this).css("left", 0);
		$("#slider").prepend(this);
		window.setTimeout(moveLeft, 2000);
	});
}

window.setTimeout(moveLeft, 2000);


//appelle la fonction move dans 2 secondes
//window.setTimeout(move, 1000);

//appelle la fonction move toutes les 2 secondes
//window.setInterval(move, 1000);
