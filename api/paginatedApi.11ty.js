const marked = require("marked");

exports.data = {
	pagination: {
		data: "collections.post",
		size: 2
	}
	//	testdata: ["item1", "item2", "item3", "item4"]
};

class Index {
	constructor() {}
	data() {
		return {
			date: "2029-06-01",
			title: "Eleventy Blog",
			permalink: data => {
				//console.log(data, "data1");
				return `api/paginatedApi/${data.pagination.pageNumber}.json`;
			},
			layout: "paginationJson.11ty.js"
		};
	}
	render(data) {
		const items = data.pagination.items.map(v => {
			const {
				date,
				data: { landingText, title, mainImage }
			} = v;
			return { date, landingText, title, mainImage };
		});
		//console.log(data.pagination.items[0]);
		return items;
	}
}

module.exports = Index;
