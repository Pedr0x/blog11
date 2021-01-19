exports.data = {
	pagination: {
		data: "data",
		size: 3
	}
	//	testdata: ["item1", "item2", "item3", "item4"]
};

class Test {
	constructor() {}
	data() {
		return {
			tags: ["data-page"]
		};
	}

	render(data) {
		const items = data.data
			.map(
				v =>
					`<div class="pagination-item"> <h4>${v.name}</h4><h4>${v.age}</h4></div>`
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
                    <title>Pagination</title> 
                </head> 

                <body> 
                    <main class="super-container">

                    </main> 
                </body>
                </html> 
            `;
	}
}

//module.exports = Test;

function checkValidLink(text, link) {
	if (link === null) return `<a class="invalid-link" href="/404"> ${text}</a>"`;
	return `<a href="${link}"> ${text}</a>"`;
}

exports.render = function (data) {
	const { next, previous, last, first } = data.pagination.href;
	const links = `
        ${checkValidLink("Siguiente", next)}
        ${checkValidLink("Previo", previous)}
        ${checkValidLink("Último", last)}
        ${checkValidLink("Primero", first)}
`;

	return ` 
	<!DOCTYPE html> 
		<html lang="en"> 
		<head> 
			<meta charset="utf-8"> 
			<meta name="viewport" content="width=device-width, initial-scale=1" /> 
			<link rel="stylesheet" href="../../css/main.css" />
			<link rel="stylesheet" href="../../css/pagination.css" />
			<link rel="stylesheet" href="../../css/reset.css" />
			<link rel="stylesheet" href="../../css/normalize.css" />
			<link rel="preconnect" href="https://fonts.gstatic.com">
			<link href="https://fonts.googleapis.com/css2?family=Bitter:wght@500&display=swap" rel="stylesheet">
			<title>Pagination</title> 
		</head> 

		<body> 
			<main class="super-container">
			<div class="paginated-list-super"> 

<div class="paginated-list-container"> 
<ol>
      ${data.pagination.items
			.map(function (item) {
				return `<li>${item.name} ${item.age}</li>`;
			})
			.join("")}
            ${links}
           
    </ol>
</div>
</div>

			</main> 
		</body>
		</html> 
	`;
};

``;
