/*

Rules for navigating through the interactive video!

*/


var vid = document.querySelector("iframe");
var player = new Vimeo.Player(vid);

player.on('ended', function() {
  advance(); 
});


function advance() {

	window.location="file:///Users/amalbuford/Desktop/CAPSTONE/videos/endpage.html";

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