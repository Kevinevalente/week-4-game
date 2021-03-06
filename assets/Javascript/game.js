	//Pseudo Code//
	//create function for computer to chose random number from 19-120
	//Display randomly generated computer number
	//link pictures to random values from 1-12, have numbers change every game
	//create a scoring system for points accumulated from crystal clicks
	//display accumulated points from crystal clicks
	//if user score does not equal compter generated number = loss
	//if user score = computer number = win
	//create a wins/loss functional display to keep score after game has been reset

	//variables for game

	var computerChoices = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
	    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
	    57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
	    79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
	    100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
	    118, 119, 120
	];

	var compNumber = "";
	var wins = 0;
	var losses = 0;
	var crystalOne  
	var crystalTwo  
	var crystalThree 
	var crystalFour 
	var score = 0;

	//Lets the computer select a random number 19-120
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	//Display randomly generated computer number
	var computerNumber = function() {
	    $('#random-number').html(computerGuess);
	}
	computerNumber();

	var crystalScore = function(crystalId, value) {
	    $(crystalId).html(value);
	}


	//Finding a number in a range  
	function randomValue() {

	    return Math.floor(Math.random() * 12);
	};

	function setCrystalValue() {
	    crystalOne = randomValue();
	    crystalTwo = randomValue();
	    crystalThree = randomValue();
	    crystalFour = randomValue();

	   
	};

	// Add On-click event listener and add crystal scores together
	//determine win or loss depending on whether or not the score was met or exceeded
	$("#crystal-1").click(function() {
	    console.log(crystalOne);
	    score = (crystalOne + score);
	    $('#score').html(crystalOne + score);



	    if (score === computerNumber) {
	        wins++;
	        $("#wins").html("<h6>" + wins + "</h6>");
	        reset();
	    };

	    if (score > computerNumber) {
	        losses++;
	        $("#losses").html("<h6>" + losses + "</h6>");
	        reset();
	    };

	});

	$("#crystal-2").click(function() {
	    score = (crystalTwo + score);
	    $('#score').html(crystalTwo + score);
	    console.log(score);

	    if (score === computerNumber) {
	        wins++;
	        $("#wins").html("<h6>" + wins + "</h6>");
	        reset();
	    };


	    if (score > computerNumber) {
	        losses++;
	        $("#losses").html("<h6>" + losses + "</h6>");
	        reset();
	    };

	});

	$("#crystal-3").click(function() {
	    score = (crystalThree + score);
	    $('#score').html(crystalThree + score);


	    if (score === computerNumber) {
	        wins++;
	        $("#wins").html("<h6>" + wins + "</h6>");
	        reset();
	    };

	    if (score > computerNumber) {
	        losses++;
	        $("#losses").html("<h6>" + losses + "</h6>");
	        reset();
	    };

	});

	$("#crystal-4").click(function() {
	    score = (crystalThree + score);
	    $('#score').html(crystalThree + score);


	    if (score === computerNumber) {
	        wins++;
	        $("#wins").html("<h6>" + wins + "</h6>");
	        reset();
	    };

//insert wins.html to display
//find out how reset functions work

	    if (score > computerNumber) {
	        losses++;
	        $("#losses").html("<h6>" + losses + "</h6>");
	        reset();
	    };

	});

// $("#score").click(function(score) {
// 	    score = (crystalOne.value + crystalTwo.value + crystalThree.value + crystalFour.vale);
// 	    display.html("#score" + score);
// 	   });


	setCrystalValue()

	crystalScore("#crystal-1", crystalOne);
	crystalScore("#crystal-2", crystalTwo);
	crystalScore("#crystal-3", crystalThree);
	crystalScore("#crystal-4", crystalFour);

	//Function to reset game after win/loss
	var reset = function() {
	    crystalOne = "";
	    crystalTwo = "";
	    crystalThree = "";
	    crystalFour = "";
	    crystalScore();
	}

	crystalScore();

	


