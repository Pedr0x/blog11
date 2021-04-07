const marked = require("marked");

exports.data = {
	pagination: {
		data: "collections.post",
		size: 1
	}
};

class Test {
	constructor(page) {}
	data(page) {
		return {
			addAllPagesToCollections: true,
			layout: "allPosts.11ty.js",
			//		layout: "paginationJson.11ty.js",
			//	tags: ["data-page"],
			permalink: data => {
				const { title } = data.pagination.items[0].data;
				return `/api/posts/${title}.json`;
			}
		};
	}

	render(data) {
		const items = data.pagination.items.map(v => {
			const {
				date,
				templateContent,
				data: { landingText, title, mainImage }
			} = v;
			return { date, landingText, title, mainImage, content: templateContent };
		});
		//	console.log("data1,", data.pagination.items, "data1");
		return items;
		const items1 = data.pagination.items
			.map(
				item => `
                    <div class="pagination-item-super">
                        <div class="pagination-item-container depth1">
                            <h4 class="pagination-item-name">${item.name}</h4>
                            <p class="pagination-item-about-text">${item.about}</p>
                        </div>
                    </div>
                `
			)
			.join("");

		return items1;
	}
}

module.exports = Test;
