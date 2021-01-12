/* 
const styles = {
	"@global": {
		body: {
			color: "green"
		},
		a: {
			textDecoration: "underline"
		}
	},
	withTemplates: `
    border-radius: 3px;
    background-color: green;
    color: red;
    margin: 20px 40px;
    padding: 10px;
  `,
	button: {
		fontSize: 12,
		"&:hover": {
			background: "blue"
		}
	},
	ctaButton: {
		extend: "button"
	},
	"@media (min-width: 1024px)": {
		button: {
			width: 200
		}
	}
};
const { classes } = jss.createStyleSheet(styles).attach(); */

/* const sheet = jss.createStyleSheet({ myButton: { background: "gold" } });
// Using name.
const rule = sheet.getRule("myButton");

function ss2() {
	return 23;
}

 */
/* 
const sheet = jss.createStyleSheet({ myButton: {} });
// Using name.
const rule = sheet.getRule("myButton"); */
//const subtitle = "subtitle obj";

const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco .";

const allTexts = [lorem];
class Test {
    constructor(data) {
        //		this.data = this.data.bind(this);
        //	this.data = this.data.bind(this);
    }

    // or `async data() {`
    // or `get data() {`
    data() {
        return {
            name: "Ted",
            /* eleventyComputed: {
				title: this.blog1Data.title
			}, */
            subtitle: "blog1Data.subtitle",
            date: "2019-06-01",
            tags: ["post"],
            title: "Blog title 1",
            ex: "ex this is ",

            //layout: "blog-layout.njk"
            layout: "blogJavaScript.11ty.js",

            // … other front matter keys
        };
    }

    render(data) {
        const texts = allTexts
            .map((v) => `<p class="blog-paragraph">${v} </p> `)
            .join("");
        return ` 
      		${texts}
    `;
    }
}

module.exports = Test;
