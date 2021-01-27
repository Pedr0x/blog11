const marked = require("marked");
const navbar = require("../src/components/navbar");
const footer = require("../src/components/footer");
const htmlHead = require("../src/constants/htmlHead");
const scripts = require("../src/constants/scripts");
/* #b5698c */
class Test {
	constructor() {}
	data() {
		return {
			tags: ["post"]
		};
	}

	render(data) {
		return ` 
<!DOCTYPE html> 
<html lang="en"> 
<head> 
	${htmlHead}
	<link rel="stylesheet" href="../../css/blog.css" />



	<title>${data.title}</title> 

	
</head> 
<body> 
	<main class="super-container ">
	${navbar}
 <div class="super-container-blog">
<img  src="${data.mainImage}" class="blog-main-img"/>

	<div class="blog-container">
	<div>
	<h1 class="blog-title">  ${data.title}</h1>
	</div>
					${marked(data.content)} 

	</div>
	</div>
	${footer} 

	</main>

	</body>
	${scripts}

</html> `;
	}
}

module.exports = Test;
