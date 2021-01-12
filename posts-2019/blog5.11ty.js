class Test {
    // or `async data() {`
    // or `get data() {`
    data() {
        return {
            layout: "blogJavaScript.11ty.js",
            date: "2020-09-09",
            tags: ["post"],
            title: "blog test 5",
            url: "test",
            name: "example 5",
            title: "Blog 5 x",
        };
    }

    render(data) {
        return ` 
		<div id=pi>
	</div>
    `;
    }
}

module.exports = Test;
