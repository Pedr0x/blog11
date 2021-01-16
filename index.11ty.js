const dayjs = require("dayjs");

class Test {
	constructor() {}
	data() {
		return {
			name: "Ted",
			/* eleventyComputed: {
				title: this.blog1Data.title
			}, */
			//			layout: "blog-layout.njk",
			date: "2029-06-01",
			title: "bloggy 1 1 1",
			ex: "ex this is ",
			/* pagination: {
				data: "post",
				size: 10,
				reverse: true
			},  */

			layout: "landing.11ty.js"

			// … other front matter keys
		};
	}
	render(data) {
		//     console.log(data.collections.post, 25);
		return ` 
${data.collections.post
	.map(
		post => ` 
		<div class="landing-blog-item-super"> 
			<article class="landing-blog-item">
				<div class="article-title-container"> 
					<h1 class="landing-blog-item-title">
						<a href=${post.url}>${post.data.title}</a>
					</h1>
					<h3 class="landing-blog-item-date">
					 	${dayjs(post.date).format(" DD-MM-YYYY")} 
					 </h3>
				</div>
				<h5 class="landing-blog-item-subtitle"> 
	${/*post.data.subtitle*/ ""}
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
	</h5>
	</article>
</div>`
	)
	.join("")}`;
	}
}

module.exports = Test;
