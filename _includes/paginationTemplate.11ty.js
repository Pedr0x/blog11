const navbar = require("../src/components/navbar");
const footer = require("../src/components/footer");
const htmlHead = require("../src/constants/htmlHead");
const scripts = require("../src/constants/scripts");

exports.data = {
	pagination: {
		data: "data1",
		size: 3
	}
	//	testdata: ["item1", "item2", "item3", "item4"]
};

//module.exports = Test;

function checkValidLink(text, link) {
	if (link === null)
		return `<a class="pagination-link_invalid" href="/404"> ${text}</a>`;
	return `<a  class="pagination-link" href="${link}"> ${text}</a>`;
}

exports.render = function (data) {
	const { next, previous, last, first } = data.pagination.href;
	const links = `
		<div class="pagination-links-super">
			<div class="pagination-links-container">
				${checkValidLink("Next", next)}
				${checkValidLink("Previous", previous)}
				${checkValidLink("Last", last)}
				${checkValidLink("First", first)}
			</div>
		</div>

`;

	return ` 
	<!DOCTYPE html> 
		<html lang="en"> 
		<head> 
			${htmlHead}
			<link rel="stylesheet" href="../../css/pagination.css" />
			<link rel="stylesheet" href="../../css/pagination-mobile.css" />
			<title>Pagination</title> 
		</head> 
		<body>
		<main class="super-container">
		${navbar}
			<div class="paginated-list-super">
				<div class="paginated-list-container">
					${data.pagination.items
						.map(item => {
							return `
					<div
						class="pagination-item-super">
						 <div class="pagination-item-container depth1">
						<h4 class="pagination-item-name">${item.name}</h4>
						<p class="pagination-item-about-text">${item.about}</p>
					</div>
				</div>
				`;
						})
						.join("")} ${links}
				</div>
			</div>
			${footer}

		</main>
	</body>
	
${scripts}
		</html> 
	`;
};

``;
