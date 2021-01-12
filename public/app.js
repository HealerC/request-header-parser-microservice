/*
There is an example output that shows at the front page. This client-side code 
gets the info that will normally be gotten by using the api endpoint and show
it in the example on the front page. That is, the information about the user 
is shown as the example output json.
*/
document.addEventListener("DOMContentLoaded", function() {
	const codeElem = document.querySelector("code");	// The example code element
	
	fetch("/api/whoami")
		.then(result => result.json())
		.then(data => {
			/* In the example code in the HTML, there is a break between the "software" and
			the rest of the text to make it look better. This code just puts a <br />
			between the text */
			let dataString = JSON.stringify(data);				// The json data
			let index = dataString.indexOf("\"software\"");		// Position of "software"
			const output = dataString.substring(0, index) + "<br />" +
							dataString.substring(index);
							// Slot in a break element where "software" was 
			codeElem.innerHTML = output;
		});
});