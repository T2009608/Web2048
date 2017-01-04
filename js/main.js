var board = [];
var score = 0;

$(document).ready(function(){
	restart();
})

function restart(){
	//init the grid
	init();
}

function init(){
	for (var i = 0; i < 4; i++){
		for (var j = 0; j < 4;j++){
			var cells = $("#grid-cell-" + i + "-" + j);
			cells.css("top", getPosTop(i, j));
			cells.css("left", getPosLeft(i, j));
		}
	}
}
