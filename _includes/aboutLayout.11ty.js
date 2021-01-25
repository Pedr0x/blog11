const marked = require("marked");
const navbar = require("../components/navbar");
const footer = require("../components/footer");
const htmlHead = require("../constants/htmlHead");
const scripts = require("../constants/scripts");

class Test {
	constructor() {}
	data() {
		return {
			tags: ["about"]
		};
	}

	render(data) {
		return `  
<!DOCTYPE html> 
<html lang="en"> 
<head> 
	${htmlHead}
	<link rel="stylesheet" href="../../css/about.css" />

	<title> About</title> 
</head> 
<body> 
	<main class="super-container "> 
	${navbar}
	<div class="about-container">

	<h1 class="about-title"> About About</h1>
					${marked(data.content)} 

                </div>
				${footer}

	</main> 


	</body>
${scripts}
</html> `;
	}
}

module.exports = Test;
