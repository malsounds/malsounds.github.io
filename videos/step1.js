/*

Rules for navigating through the interactive video!

*/


//document.querySelector(".adv").addEventListener('click', advance);
//document.querySelector(".video").addEventListener('ended', advance);

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

function advance() {

	if(step < stepsLeft){
		var x = sessionStorage.getItem('step');
		x++;
		sessionStorage.setItem('step', x);
		x = sessionStorage.getItem('stepsLeft');
		x--;
		sessionStorage.setItem('stepsLeft', x);
		window.location="file:///Users/amalbuford/Desktop/CAPSTONE/videos/scene" + sessionStorage.getItem(1) + ".html";
	}else{

	}

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

