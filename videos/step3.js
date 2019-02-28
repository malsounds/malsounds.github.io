/*

Rules for navigating through the interactive video!

*/


//document.querySelector(".adv").addEventListener('click', advance);

var vid = document.querySelector("iframe");
var player = new Vimeo.Player(vid);

player.on('ended', function() {
	advance(); 
});


var name = sessionStorage.getItem('name');
var classYear = sessionStorage.getItem('classYear');
var major = sessionStorage.getItem('major');

var stepsLeft = sessionStorage.getItem('stepsLeft');
var step = sessionStorage.getItem('step');
var order = sessionStorage.getItem('order');
console.log(order);
console.log(step);
console.log(stepsLeft);

console.log(sessionStorage.getItem(4));

/**function advance() {

	if(sessionStorage.getItem(4) == null){
		window.location="file:///Users/amalbuford/Desktop/CAPSTONE/videos/" + sessionStorage.getItem(3) + ".html";
	}else if(step <= stepsLeft){
		var x = sessionStorage.getItem('step');
		x++;
		sessionStorage.setItem('step', x);
		x = sessionStorage.getItem('stepsLeft');
		x--;
		sessionStorage.setItem('stepsLeft', x);
		window.location="file:///Users/amalbuford/Desktop/CAPSTONE/videos/scene" + sessionStorage.getItem(3) + ".html";
	}else{
		console.log(sessionStorage.getItem(4));
		window.location="file:///Users/amalbuford/Desktop/CAPSTONE/videos/" + sessionStorage.getItem(4) + ".html";
	}

	//.log(formElements[1].value);
	//window.location="file:///Users/amalbuford/Desktop/CAPSTONE/videos/scene1A.html";
}**/

function advance() {

		var x = sessionStorage.getItem('step');
		x++;
		sessionStorage.setItem('step', x);
		x = sessionStorage.getItem('stepsLeft');
		x--;
		sessionStorage.setItem('stepsLeft', x);
		window.location="file:///Users/amalbuford/Desktop/CAPSTONE/videos/" + sessionStorage.getItem(3) + ".html";

	//.log(formElements[1].value);
	//window.location="file:///Users/amalbuford/Desktop/CAPSTONE/videos/scene1A.html";
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