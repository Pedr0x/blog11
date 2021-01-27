const dayjs = require("dayjs");

class Index {
	constructor() {}
	data() {
		return {
			date: "2029-06-01",
			title: "Eleventy Blog",
			layout: "landing.11ty.js"
		};
	}
	render(data) {
		return ` 
		${data.collections.post
			.map(
				post => ` 
					<div class="landing-blog-item-super"> 
						<article class="landing-blog-item depth1">
							<div class="article-title-container"> 
								<h1 class="landing-blog-item-title">
									<a href=${post.url}>${post.data.title}</a>
								</h1>
								<h3 class="landing-blog-item-date">
									${dayjs(post.date).format("DD-MM-YYYY")} 
								</h3>
							</div>
							<h5 class="landing-blog-item-subtitle"> 
								${post.data.landingText}
						</h5>
						</article>
					</div>`
			)
			.join("")}
		`;
	}
}

module.exports = Index;
