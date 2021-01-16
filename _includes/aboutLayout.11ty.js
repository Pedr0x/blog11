const marked = require("marked");

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
	<meta charset="utf-8"> 
	<meta name="viewport" content="width=device-width, initial-scale=1" /> 
	<link rel="stylesheet" href="../../css/main.css" />
	<link rel="stylesheet" href="../../css/reset.css" />
	<link rel="stylesheet" href="../../css/normalize.css" />
	<link rel="stylesheet" href="../../css/blog.css" />
	<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Bitter:wght@500&display=swap" rel="stylesheet">

	<title> About</title> 

	
</head> 
<body> 
	<main class="super-container "> 
	<h1 class="blog-title"> About About</h1>
	</div>
					${marked(data.content)} 
	</div>
	</main> 
	</body>

</html> `;
	}
}

module.exports = Test;
