exports.data = {
	pagination: {
		data: "data1",
		size: 3
	}
};

class Test {
	constructor() {}
	data() {
		return {
			layout: "paginationTemplate.11ty.js",
			tags: ["data-page"]
		};
	}

	render(data) {
		const items = data.data1
			.map(
				v =>
					`<div class="pagination-item"> 
                        <h4>${v.name}</h4>
                        <h4>${v.age}</h4>
                        <h4>${v.phone}</h4>
                        <p>${v.about}</p>

                    </div>`
			)
			.join("");
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
                    <title>3 Pagination</title> 
                </head> 

                <body> 
                    <main class="super-container">
                    ${items}
                    </main> 
                </body>
                </html> 
            `;
	}
}

module.exports = Test;
