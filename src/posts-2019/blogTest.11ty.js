class Test {
    // or `async data() {`
    // or `get data() {`
    data() {
        return {
            layout: "blog-layout.njk",
            date: "2019-09-09",
            tags: ["post"],
            title: "blog test 0",
            url: "test",
            title: "asd",
            layout: "blog-layout.njk",
        };
    }

    render(data) {
        // will always be "Ted"

        function ss3() {
            return 23;
        }
        return ` 
		<div id=pi>

    <button class="btn"> asdasdasd</button>
    <h1 > ${data.name}</h1>
<div> 
</div>
	</div>
    `;
    }
}

module.exports = Test;
