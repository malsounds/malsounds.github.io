/*

Rules for navigating through the interactive video!

*/

document.querySelector(".submit").addEventListener('click', advance);
//console.log('debug');
var scenes = ["1a", "1b", "2a", "2b", "2c", "2d", "3a", "3b", "3c", "ending1", "ending2", "ending3"];

function advance() {
	//onsole.log(postData[i]);

	var data = $('#myForm').serializeArray();
	var majorNum = $("#mySelect");

	majorNum.find('option:selected').each(function(){
		data.push({value:$(this).val(),text:$(this).text()});
	});


	sessionStorage.setItem('name', data[0].value);
	sessionStorage.setItem('classYear', data[1].value);
	sessionStorage.setItem('major', data[2].value);

	var major = sessionStorage.getItem('major');
	var classYear = sessionStorage.getItem('classYear');
	var name = sessionStorage.getItem('name');


	var nameLength = name.length;
	var vowels = 0;

	for(var i = 0; i < nameLength; i++){
		if(isVowel(name.charAt(i))){
			vowels++;
		}
	}
	
	var order = routeFinder(name, classYear, major, nameLength, vowels);
	//console.log("DEBUG ORDER");
	console.log(order);
	var num = 0;
	sessionStorage.setItem('step', num);
	sessionStorage.setItem('stepsLeft', order.length);
	sessionStorage.setItem('order', order);

	for(var i = 0; i < order.length; i++){
		sessionStorage.setItem(i, order[i]);
	}

	console.log(sessionStorage.getItem(0));
	console.log(sessionStorage.getItem('step'));


	if(sessionStorage.getItem(0) == '1a'){
		var x = sessionStorage.getItem('step');
		x++;
		sessionStorage.setItem('step', x);
		window.location="file:///Users/amalbuford/Desktop/CAPSTONE/videos/scene1a.html";
	}else if(sessionStorage.getItem(0) == '1b'){
		var x = sessionStorage.getItem('step');
		x++;
		sessionStorage.setItem('step', x);
		window.location="file:///Users/amalbuford/Desktop/CAPSTONE/videos/scene1b.html";
	}

	//.log(formElements[1].value);
	//window.location="file:///Users/amalbuford/Desktop/CAPSTONE/videos/scene1A.html";

}

function routeFinder(name, classYear, major, nameLength, vowels){

	var order = [];
	var endFound = false;


	if(major == 0){

		var primes = [];
		primes = uniquePrimeFactors(classYear);
		//console.log(primes);

		var n = multiplyPrimes(primes);
		//console.log(n);
		//START WITH SCENE 1A
		order.push(scenes[0]);

		//IF LESS THAN 300, 2A
		if(n < 300){
			order.push(scenes[2]);
		}else{  //IF MORE, 2B
			order.push(scenes[3]);
		}

		// if at 2A, HIGHER PROBB OF GOING TO 3B
		if(order.includes(scenes[2])){  

			var j = (nameLength^vowels) * .2;

			if(j > 2){ //chance that you go to 3B is 81/100

				if(numberPass(81, 100)){
					order.push(scenes[7]);
				}else{
					order.push(scenes[6]);
				}

			}else{ //chance that you go to 3b is 60/100

				if(numberPass(60, 100)){
					order.push(scenes[7]);
				}else{
					order.push(scenes[6]);
				}

			}


		} //if at 2B, you go to 3A,
		else if(order.includes(scenes[3])){

			order.push(scenes[6]);

		}


	}else if (major == 1){

		var primes = uniquePrimeFactors(classYear);

		var n = multiplyPrimes(primes);

		//START WITH SCENE 1B
		order.push(scenes[1]);

		if(n < 300){
			order.push(scenes[4]);
		}else{
			order.push(scenes[5]);
		}

		if(order.includes(scenes[4])){ // if we're at 2C, go to 3C
			order.push(scenes[8]);
		}else if(order.includes(scenes[5])){ //if you're at 2D, higher prob of going to 3b

			var j = (nameLength^vowels) * .2;

			if(j > 2){ //chance that you go to 3B is 81/100
				if(numberPass(81,100)){
					order.push(scenes[7]);
				}else{
					order.push(scenes[8]);
				}
			}else{ //chance that you go to 3B is 60/100

				if(numberPass(60,100)){
					order.push(scenes[7]);
				}else{
					order.push(scenes[8]);
				}

			}

		}
	}

	//console.log('order current: ' + order);

	while(!endFound){  //UNTIL WE HIT THE END

		if(order.includes(scenes[7])){ //IF AT SCENE 3B
			endFound = true;

			/*

			IF Humanities, 25% Chance of Ending 1
			IF Stem, 25% chance of Ending 3

			*/

			if(major==0){

				if(numberPass(75, 100)){
					order.push(scenes[10]);
				}else{
					order.push(scenes[9]);
				}

			}else if(major == 1){

				if(numberPass(75,100)){
					order.push(scenes[10]);
				}else{
					order.push(scenes[11]);
				}

			}

		}else if(order.includes(scenes[6])){ //IF AT SCENE 3A

			/*

			IF we visited 2A, higher chance of going to 3B
			ELSE if we visited 2B, hgiher chance of hitting humanities ending

			*/			

			if(order.includes(scenes[2])){  //if we visited 2A

				if(numberPass(66,100)){
					order.push(scenes[10]); //Go to 3b
					endFound = true;
				}else{
					order.push(scenes[9]); //or else go to end
					endFound = true;
				}

			}else if(order.includes(scenes[3])){ //If we visited 2b

				if(numberPass(66,100)){
					order.push(scenes[9]);  //hit ending
					endFound = true;
				}else{
					order.push(scenes[10]); //else go to 3b
					endFound = true;
				}

			}

		}else if(order.includes(scenes[8])){ //IF AT SCENE 3C

			/*

			IF we visited 2D, higher chance of going to 3B
			ELSE if we visited 2C, hgiher chance of hitting Stem ending

			*/			

			if(order.includes(scenes[4])){  //if we visited 2C

				if(numberPass(66, 100)){
					order.push(scenes[11]);
					endFound = true;
				}else{
					order.push(scenes[10]);
					endFound = true;
				}

			}else if(order.includes(scenes[5])){
				if(numberPass(66, 100)){
					order.push(scenes[10]);
					endFound = true;
				}else{
					order.push(scenes[11]);
					endFound = true;
				}
			}

		}

	}

	return order;

}

function numberPass(i, y){
	var n = Math.random() * y;
	if(n < i) return true;
	else return false;
}

function uniquePrimeFactors(n){
	var primes = [];
	divisor = 2;

	while(n > 2){
		if(n%divisor == 0){
			primes.push(divisor);
			n = n/divisor;
		}else{
			divisor++;
		}
	}
	return primes;
	
}

function multiplyPrimes(primes){
	var n = 1;

	for(var i = 0; i < primes.length; i++){
		n = n * getRandomInt(1, primes[i]);

	}

	return n;
}

function getRandomArbitrary(min, max){
	return Math.random() * (max-min) + min;
}

function getRandomInt(min, max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isVowel(a){
	if(a == 'a' || a == 'A' || a=='e' || a=='E' || a=='i' || a=='I' || a=='o' || a=='O' || a=='u' || a=='U' || a=='y' || a=='Y'){
		return true;
	}
	else{
		return false;
	}
}

(function($,undefined){
  '$:nomunge'; // Used by YUI compressor.
  
  $.fn.serializeObject = function(){
    var obj = {};
    
    $.each( this.serializeArray(), function(i,o){
      var n = o.name,
        v = o.value;
        
        obj[n] = obj[n] === undefined ? v
          : $.isArray( obj[n] ) ? obj[n].concat( v )
          : [ obj[n], v ];
    });
    
    return obj;
  };
  
})(jQuery);