This jQuery plugin will stop links from leaving full screen mode on iOS devices. Other side effects may be included.

	$(function() {
		$.stayInWebApp();
	});

This use only links with the class `stay`.

	$(function() {
		$.stayInWebApp('a.stay');
	});
	
Full links (starting with http) will still open in Safari, as well as links with `target="_blank"`.

To prevent an absolute link from opening in safari, add its domain to the absToStay array property of the options object like this:

	$(function() {
		var options = {
			selector: "a.stay",
			absToStay: Array("google.com","test.com","cats"), //allow google.com, test.com, and urls containing the word cats to stay.
		};
		$.stayInWebApp(options);
	});

This can help if you have multiple subdomains eg, test.com, sub.test.com, othersub.test.com. All can be allowed by adding test.com to the array.
- - - - - - - - - -	

Master code by [Joe Moses (mrmoses)](https://github.com/mrmoses).

Thanks to [Bryan Murdaugh and David Leininger](http://fivable.com) for the original starting script (mostly for discovering that self.location works).

Thanks to Ben Nadel for posting about how to [detect iOS full screen mode](http://www.bennadel.com/blog/1950-Detecting-iPhone-s-App-Mode-Full-Screen-Mode-For-Web-Applications.htm).

Stay for certain absolute urls added by [Caleb R. Begly (techdude)](https://github.com/techdude)

Licensed under the MIT License - See [MIT-License.txt](MIT-license.txt)