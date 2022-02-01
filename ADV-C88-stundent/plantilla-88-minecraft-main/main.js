
var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("Se presiona p y shift al mismo tiempo");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("Se presina m y shifr al mismo tienpo");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;  				
}

	if(keyPressed == '38')
	{
		//arriba up
		up();	
	}
	if(keyPressed == '40')
	{
		//abajo down
		down();
	}
	if(keyPressed == '37')
	{
		//izquierda
		left();
	}
	if(keyPressed == '39')
	{
		//derecha
		right();
	}
	if(keyPressed == '87')
	{
		//imagen wall w
		new_image('wall.jpg')
	}
	if(keyPressed == '71')
	{
		//imagen ground g
		new_image('ground.png')
	}
	if(keyPressed == '76')
	{
		//imagen light_green.png l
		new_image('light_green.png')
	}
	if(keyPressed == '84')
	{
		//imagen trunk.jpg t
		new_image('trunk.jpg')

	}
	if(keyPressed == '82')
	{
		//imagen roof.jpg r
		new_image('roof.jpg')

	}
	if(keyPressed == '89')
	{
		//imagen yellow_wall y
		new_image('yellow_wall.png')

	}
	if(keyPressed == '68')
	{
	//imagen dark_green.png d
	new_image('dark_green.png')
	
	}
	if(keyPressed == '85')
	{
		//imagen unique u
		new_image('unique.png')

	}
	if(keyPressed == '67')
	{
		//imagen cloud c
		new_image('cloud.jpg')

	}
	
}
function up()
{
	if(player_y >=0)
	{
		//cuando se presione la flecha hacia arriba se mueve el jujador 
		player_y=player_y-block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia arriba, X = " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
	if(player_y <=500)
	{
		player_y=player_y+block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia abajo, X = " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();	
	}
}

function left()
{
	if(player_x >0)
	{
		player_x=player_x-block_image_width;
		console.log("ancho del bloque = " + block_image_width);
		console.log("Cuando se presiona la flecha hacia izquierda, X = " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(player_x <=850)
	{
		player_x=player_x+block_image_width;
		console.log("ancho del bloque = " + block_image_width);
		console.log("Cuando se presiona la flecha hacia derecha, X = " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();	
	}
}
