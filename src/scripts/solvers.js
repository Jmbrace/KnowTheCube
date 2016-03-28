/*


	SOLVERS

	Our Cube has its own animation loop conveniently called Cube.loop().
	If Cube.isSolving === true then within that loop Cube will call
	window.solver.consider( cube ). This means when you create your own
	Solver instance you have to set window.solver equal to your instance.

	Solver.consider() will do some very basic checking and if all's well
	will pass the Cube instance to Solver.logic() which is the function that
	you need to write yourself. 

	Your logic() should return false is the cube is solved or if something's
	gone horribly wrong. This will set Cube.isSolving = false and stop the
	solver from being called within the Cube's animation loop. 

	Your logic() should return true if an incremental improvement has been 
	made and the logic() should be run again in the next loop; For example,
	run again after a twist queue completes.

	--

	@author Mark Lundin - http://www.mark-lundin.com
	@author Stewart Smith


*/





//This function will return the cube configuration
ERNO.buildListForApi = function(){

	var list = [];
	for( var i = 0; i < window.cube.cubelets.length; i ++ )
	{
		list.push(window.cube.cubelets[i].id);
	}
	window.myList = list;
	return list;
}

ERNO.Solver = function(handleButton){


	var leftCenter = window.cube.cubelets[4].id;
	var rightCenter = window.cube.cubelets[14].id;
	var topCenter = window.cube.cubelets[10].id;
	var goalState = [];
	var initialConfiguration = [];

	if(topCenter == 4)
	{
		if(leftCenter == 14 && rightCenter == 10)
		{
			//This is Blue, WHite, Orange
			goalState = [8, 5, 2, 17, 14, 11, 26, 23, 20, 7, 4, 1, 16, 13, 10, 25, 22, 19, 6, 3, 0, 15, 12, 9, 24, 21, 18];
			initialConfiguration = ERNO.buildListForApi();
		}
		if(leftCenter == 10 && rightCenter == 12)
		{
			//This is Orange, WHite, Green
			goalState = [2, 1, 0, 11, 10, 9, 20, 19, 18, 5, 4, 3, 14, 13, 12, 23, 22, 21, 8, 7, 6, 17, 16, 15, 26, 25, 24];
			initialConfiguration = ERNO.buildListForApi();
		}
		if(leftCenter == 12 && rightCenter == 16)
		{
			//This is Green, WHite, Red
			goalState = [0, 3, 6, 9, 12, 15, 18, 21, 24, 1, 4, 7, 10, 13, 16, 19, 22, 25, 2, 5, 8, 11, 14, 17, 20, 23, 26];
			initialConfiguration = ERNO.buildListForApi();
		}
		if(leftCenter == 16 && rightCenter == 14)
		{
			//This is Red, WHite, Blue
			goalState = [6, 7, 8, 15, 16, 17, 24, 25, 26, 3, 4, 5, 12, 13, 14, 21, 22, 23, 0, 1, 2, 9, 10, 11, 18, 19, 20];
			initialConfiguration = ERNO.buildListForApi();
		}
	}
	if(topCenter == 16)
	{
		if(leftCenter == 4 && rightCenter == 12)
		{
			//This is White, Red, Green
			goalState = [8, 7, 6, 5, 4, 3, 2, 1, 0, 17, 16, 15, 14, 13, 12, 11, 10, 9, 26, 25, 24, 23, 22, 21, 20, 19, 18];
			initialConfiguration = ERNO.buildListForApi();
		}
		if(leftCenter == 12 && rightCenter == 22)
		{
			//This is green, Red, yellow
			goalState = [6, 15, 24, 3, 12, 21, 0, 9, 18, 7, 16, 25, 4, 13, 22, 1, 10, 19, 8, 17, 26, 5, 14, 23, 2, 11, 20];
			initialConfiguration = ERNO.buildListForApi();
		}
		if(leftCenter == 22 && rightCenter == 14)
		{
			//This is yellow, Red, blue
			goalState = [24, 25, 26, 21, 22, 23, 18, 19, 20, 15, 16, 17, 12, 13, 14, 9, 10, 11, 6, 7, 8, 3, 4, 5, 0, 1, 2];
			initialConfiguration = ERNO.buildListForApi();
		}
		if(leftCenter == 14 && rightCenter == 4)
		{
			//This is blue, Red, white
			goalState = [26, 17, 8, 23, 14, 5, 20, 11, 2, 25, 16, 7, 22, 13, 4, 19, 10, 1, 24, 15, 6, 21, 12, 3, 18, 9, 0];
			initialConfiguration = ERNO.buildListForApi();
		}
	}
	if(topCenter == 14)
	{
		if(leftCenter == 4 && rightCenter == 16)
		{
			//This is White, Blue, Red
			goalState = [2, 5, 8, 1, 4, 7, 0, 3, 6, 11, 14, 17, 10, 13, 16, 9, 12, 15, 20, 23, 26, 19, 22, 25, 18, 21, 24];
			initialConfiguration = ERNO.buildListForApi();
		}
		if(leftCenter == 16 && rightCenter == 22)
		{
			//This is Red, Blue, yellow
			goalState = [8, 17, 26, 7, 16, 25, 6, 15, 24, 5, 14, 23, 4, 13, 22, 3, 12, 21, 2, 11, 20, 1, 10, 19, 0, 9, 18];
			initialConfiguration = ERNO.buildListForApi();
		}
		if(leftCenter == 22 && rightCenter == 10)
		{
			//This is yellow, Blue, Orange
			goalState = [26, 23, 20, 25, 22, 19, 24, 21, 18, 17, 14, 11, 16, 13, 10, 15, 12, 9, 8, 5, 2, 7, 4, 1, 6, 3, 0];
			initialConfiguration = ERNO.buildListForApi();
		}
		if(leftCenter == 10 && rightCenter == 4)
		{
			//This is Orange, Blue, white
			goalState = [20, 11, 2, 19, 10, 1, 18, 9, 0, 23, 14, 5, 22, 13, 4, 21, 12, 3, 26, 17, 8, 25, 16, 7, 24, 15, 6];
			initialConfiguration = ERNO.buildListForApi();
		}
	}
	if(topCenter == 10)
	{
		if(leftCenter == 4 && rightCenter == 14)
		{
			//This is White, Orange, Blue
			goalState = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
			initialConfiguration = ERNO.buildListForApi();
		}
		if(leftCenter == 14 && rightCenter == 22)
		{
			//This is Blue, Orange, yellow
			goalState = [2, 11, 20, 5, 14, 23, 8, 17, 26, 1, 10, 19, 4, 13, 22, 7, 16, 25, 0, 9, 18, 3, 12, 21, 6, 15, 24];
			initialConfiguration = ERNO.buildListForApi();
		}
		if(leftCenter == 22 && rightCenter == 12)
		{
			//This is yellow, Orange, Green
			goalState = [20, 19, 18, 23, 22, 21, 26, 25, 24, 11, 10, 9, 14, 13, 12, 17, 16, 15, 2, 1, 0, 5, 4, 3, 8, 7, 6];
			initialConfiguration = ERNO.buildListForApi();
		}
		if(leftCenter == 12 && rightCenter == 4)
		{
			//This is Green, Orange, white
			goalState = [18, 9, 0, 21, 12, 3, 24, 15, 6, 19, 10, 1, 22, 13, 4, 25, 16, 7, 20, 11, 2, 23, 14, 5, 26, 17, 8];
			initialConfiguration = ERNO.buildListForApi();
		}
	}
	if(topCenter == 12)
	{
		if(leftCenter == 10 && rightCenter == 22)
		{
			//This is Orange, Green, Yellow
			goalState = [0, 9, 18, 1, 10, 19, 2, 11, 20, 3, 12, 21, 4, 13, 22, 5, 14, 23, 6, 15, 24, 7, 16, 25, 8, 17, 26];
			initialConfiguration = ERNO.buildListForApi();
		}
		if(leftCenter == 22 && rightCenter == 16)
		{
			//This is Yellow, Green, Red
			goalState = [18, 21, 24, 19, 22, 25, 20, 23, 26, 9, 12, 15, 10, 13, 16, 11, 14, 17, 0, 3, 6, 1, 4, 7, 2, 5, 8];
			initialConfiguration = ERNO.buildListForApi();
		}
		if(leftCenter == 16 && rightCenter == 4)
		{
			//This is Red, Green, White
			goalState = [24, 15, 6, 25, 16, 7, 26, 17, 8, 21, 12, 3, 22, 13, 4, 23, 14, 5, 18, 9, 0, 19, 10, 1, 20, 11, 2];
			initialConfiguration = ERNO.buildListForApi();
		}
		if(leftCenter == 4 && rightCenter == 10)
		{
			//This is White, Green, Orange
			goalState = [6, 3, 0, 7, 4, 1, 8, 5, 2, 15, 12, 9, 16, 13, 10, 17, 14, 11, 24, 21, 18, 25, 22, 19, 26, 23, 20];
			initialConfiguration = ERNO.buildListForApi();
		}
	}
	if(topCenter == 22)
	{
		if(leftCenter == 10 && rightCenter == 14)
		{
			//This is Orange, Yellow, Blue
			goalState = [18, 19, 20, 9, 10, 11, 0, 1, 2, 21, 22, 23, 12, 13, 14, 3, 4, 5, 24, 25, 26, 15, 16, 17, 6, 7, 8];
			initialConfiguration = ERNO.buildListForApi();
		}
		if(leftCenter == 14 && rightCenter == 16)
		{
			//This is Blue, Yellow, Red
			goalState = [20, 23, 26, 11, 14, 17, 2, 5, 8, 19, 22, 25, 10, 13, 16, 1, 4, 7, 18, 21, 24, 9, 12, 15, 0, 3, 6];
			initialConfiguration = ERNO.buildListForApi();
		}
		if(leftCenter == 16 && rightCenter == 12)
		{
			//This is Red, Yellow, Green
			goalState = [26, 25, 24, 17, 16, 15, 8, 7, 6, 23, 22, 21, 14, 13, 12, 5, 4, 3, 20, 19, 18, 11, 10, 9, 2, 1, 0];
			initialConfiguration = ERNO.buildListForApi();
		}
		if(leftCenter == 12 && rightCenter == 10)
		{
			//This is Green, Yellow, Orange
			goalState = [24, 21, 18, 15, 12, 9, 6, 3, 0, 25, 22, 19, 16, 13, 10, 7, 4, 1, 26, 23, 20, 17, 14, 11, 8, 5, 2];
			initialConfiguration = ERNO.buildListForApi();
		}
	}
	console.log("Executing GET call to solution.");
	$.ajax({
		url: 'http://iknowthecube.herokuapp.com/solve/'+ initialConfiguration + '/' + goalState,
		type: 'GET',
		success: function(result){
			result.solution = result.solution.substring(2,result.solution.length);
			handleButton.disabled = false;
			alert(result.solution);
		},
		error: function(result){
			alert("Some error occured");
			handleButton.disabled = false;
		}
	})
	// this.logic = function( cube ){ return false };;
}




//  This is the method called within Cube.loop() when Cube.isSolving === true.
//  It will call Solver.logic() which is the function you need to fill in.

ERNO.Solver.prototype.consider = function( cube ){


	//  Was our solver passed a valid Cube?
	//  Kind of important, eh?

	if( cube === undefined ){

		console.warn( 'A cube [Cube] argument must be specified for Solver.consider().' );
		return false;
	}
	else if( cube instanceof ERNO.Cube === false ){

		console.warn( 'The cube argument provided is not a valid Cube.' );
		return false;
	}


	//  If we're solving we should really make certain we aren't shuffling!
	//  Otherwise our logic will never actually run.
	//  The hook for this is in Cube.loop() so look there to see what's up.

	cube.isShuffling = false;


	//  If the cube is already solved then our job is done before it started.
	//  If not, we need to try solving it using our current solve method.

	if( cube.isSolved() ){

		ERNO.Solver.prototype.explain( 'I’ve found that the cube is already solved.' );
		return false;
	}
	else return this.logic( cube );
};




//  We should always hit at what the Solver wants to do next
//  so we can hault auto-solving and give the user a chance to 
//  figure out the next move for his/herself.

ERNO.Solver.prototype.hint = function( text ){

	console.log(

		'%c'+ text +'%c\n',
		'background-color: #EEE; color: #333', ''
	);
};


//  If hinting is text displayed *before* a move is made
//  then explaining is text displayed *after* a move is made.

ERNO.Solver.prototype.explain = function( text ){

	console.log(

		'Solver says: %c '+ text +' %c\n',
		'color: #080', ''
	);
};



