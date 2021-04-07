class Index {
	constructor() {}
	data() {
		return {
			date: "2029-06-01",
			title: "Eleventy Blog",
			permalink: "/api/posts.json"
			//	layout: "landing.11ty.js"
		};
	}
	render(data) {
		const { post } = data.collections;
		const allPosts = post.map(v => {
			const { date, landingText, title, mainImage, content } = v.data;
			return {
				date,
				title,
				mainImage,
				landingText,
				content
			};
		});
		//	console.log(post[0], "data.post");
		return JSON.stringify(allPosts);
	}
}

module.exports = Index;
