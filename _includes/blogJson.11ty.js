const marked = require("marked");

class Test {
	constructor() {}
	data() {
		return {
			tags: ["post"]
		};
	}

	render(data) {
		const { title, mainImage, content } = data;

		const obj = {
			title,
			mainImage,
			title,

			content: marked(content)
		};
		return JSON.stringify(obj);
	}
}

module.exports = Test;
