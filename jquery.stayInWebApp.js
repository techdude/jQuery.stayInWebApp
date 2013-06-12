/*!
 * jQuery stayInWebApp Plugin
 https://github.com/mrmoses/jQuery.stayInWebApp
 * keeps all internal links in the webapp
 * version: 0.4 (2012-06-19)
 commits mmoses and techdude
 */
(function($) {
	//extend the jQuery object, adding $.stayInWebApp() as a function
	$.extend({
		stayInWebApp: function(options) {
			if(typeof options=="string"){ //we were not passed an object, but only a selector
				//make object
				options = {selector:options};
			}
			//detect iOS full screen mode
			console.log(options);
			if(("standalone" in window.navigator) && window.navigator.standalone) {
				//if the selector is empty, default to all links
				if(!options.selector) {
					options.selector = 'a';
				}
				//bind to the click event of all specified elements
				$(options.selector).click(function(event) {
					
					//only stay in web app for links that are set to _self (or not set)
					if($(this).attr("target") == undefined || $(this).attr("target") == "" || $(this).attr("target") == "_self") {
						//get the destination of the link clicked
						var dest = $(this).attr("href");
						var stay = false; //by default, we do not stay.

						if(!dest.match(/^http(s?)/g)) { //local urls, keep
							stay = true;
						  
						} else if(options.absToStay) { //if some absolute urls must stay
							
							
							//loop throught urls and see if this is one of the ones we should keep
							for(var i = 0; i < options.absToStay.length; i++){
								if(dest.indexOf(options.absToStay[i]) > 0){
									stay = true;
									break;
								}
							}
						}
						
						if(stay){ //if we should stay for this url,
						  //prevent default behavior (opening safari)
						  event.preventDefault();
						  //update location of the web app
						  self.location = dest;
						}
						
						
					}
				});
			}
		} //end stayInWebApp func
	});
})( jQuery );