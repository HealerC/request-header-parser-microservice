document.addEventListener("DOMContentLoaded", function() {
	const codeElem = document.querySelector("code");
	
	fetch("/api/whoami")
		.then(result => result.json())
		.then(data => {
			let dataString = JSON.stringify(data);
			let index = dataString.indexOf("\"software\"");
			const output = dataString.substring(0, index) + "<br />" +
							dataString.substring(index);
			codeElem.innerHTML = output;
		});
});