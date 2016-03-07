
	var setMessages = function (){

		setTimeout(function(){
			var msg1 = document.createElement('div');
			msg1.textContent = "Currently a python application is constructing a search tree in order to find the optimal solution to the cube.";
			msg1.style = "color:black; opacity:0"
			document.getElementsByTagName('div')[0].appendChild(msg1);
			$(msg1).animate({opacity:1})
		},1000);

		setTimeout(function(){
			var msg2 = document.createElement('div');
			msg2.textContent = "This is done by using a two fundamental techniques in Artificial Intelligence, problem formulation and search. ";
			msg2.style = "color:black; opacity:0"
			document.getElementsByTagName('div')[0].appendChild(msg2);
			$(msg2).animate({opacity:1})
		},5000);

		setTimeout(function(){
			var msg3 = document.createElement('div');
			msg3.textContent = "The cube is represented by a 3-dimensional array, and each node or vertex of our search tree contains a 3-dimensional array representing a cube’s configuration. ";
			msg3.style = "color:black; opacity:0"
			document.getElementsByTagName('div')[0].appendChild(msg3);
			$(msg3).animate({opacity:1})
		},10000);

		setTimeout(function(){
			var msg4 = document.createElement('div');
			msg4.textContent = "Two vertices are adjacent if a single 90 degree rotation of a face will transition one cube to another. ";
			msg4.style = "color:black; opacity:0"
			document.getElementsByTagName('div')[0].appendChild(msg4);
			$(msg4).animate({opacity:1})
		},15000);

		setTimeout(function(){
			var msg5 = document.createElement('div');
			msg5.textContent = "The root of our search tree is the initial configuration, and we will search the tree until the solved Rubick’s cube is found, then the path taken from the root of the tree to the solved cube corresponds to the sequence of moves that will solve the Rubik’s cube.";
			msg5.style = "color:black; opacity:0"
			document.getElementsByTagName('div')[0].appendChild(msg5);
			$(msg5).animate({opacity:1})
		},20000);

		setTimeout(function(){
			var msg6 = document.createElement('div');
			msg6.textContent = "So now we wait.";
			msg6.style = "color:black; opacity:0"
			document.getElementsByTagName('div')[0].appendChild(msg6);
			$(msg6).animate({opacity:1})
		},28000);

		setTimeout(function(){
			var msg7 = document.createElement('div');
			msg7.textContent = "Ever heard of God’s number? ";
			msg7.style = "color:black; opacity:0"
			document.getElementsByTagName('div')[0].appendChild(msg7);
			$(msg7).animate({opacity:1})
		},30000);

		setTimeout(function(){
			var msg8 = document.createElement('div');
			msg8.textContent = "Tomas Rokicki, Herbet Kociemba, Morley Davidson, and John Dethridge proved that the maximum number of steps to solve any Rubick’s cube is at most 20.";
			msg8.style = "color:black; opacity:0"
			document.getElementsByTagName('div')[0].appendChild(msg8);
			$(msg8).animate({opacity:1})
		},35000);

		setTimeout(function(){
			var msg9 = document.createElement('div');
			msg9.textContent = "This means that our search tree will contain a node holding the solved Rubick’s cube within 20 levels of the tree. ";
			msg9.style = "color:black; opacity:0"
			document.getElementsByTagName('div')[0].appendChild(msg9);
			$(msg9).animate({opacity:1})
		},40000);

		setTimeout(function(){
			var msg10 = document.createElement('div');
			msg10.textContent = "This implies that worst case, we must check 4,182,283,628,124,518,315,100 cube configurations ( 12 + 12^2 + 12^3 … + 12^19 + 12^20). Since each level the number of nodes increases by a factor of 12. ";
			msg10.style = "color:black; opacity:0"
			document.getElementsByTagName('div')[0].appendChild(msg10);
			$(msg10).animate({opacity:1})
		},45000);

		setTimeout(function(){
			var msg11 = document.createElement('div');
			msg11.textContent = "Why 12? ";
			msg11.style = "color:black; opacity:0"
			document.getElementsByTagName('div')[0].appendChild(msg11);
			$(msg11).animate({opacity:1})
		},50000);

		setTimeout(function(){
			var msg12 = document.createElement('div');
			msg12.textContent = "Well since there are 6 faces of the cube, and each face can be rotated clockwise or counterclockwise, this gives 12 possible moves that can be made given any Rubick’s cube. ";
			msg12.style = "color:black; opacity:0"
			document.getElementsByTagName('div')[0].appendChild(msg12);
			$(msg12).animate({opacity:1})
		},52000);

		setTimeout(function(){
			var msg13 = document.createElement('div');
			msg13.textContent = "This is a fairly complicated computation, even with the sophisticated Astar iIerative Deepening algorithm in use, the computation time may take a while!";
			msg13.style = "color:black; opacity:0"
			document.getElementsByTagName('div')[0].appendChild(msg13);
			$(msg13).animate({opacity:1})
		},57000);













	}

