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
