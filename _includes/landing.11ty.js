const header = require("../posts-2019/components/header.11ty");

class Test {
	constructor() {}
	render(data) {
		return ` 
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="../../css/main.css" />
                <link rel="stylesheet" href="../../css/reset.css" />
                <link rel="stylesheet" href="../../css/normalize.css" />

                <link rel="stylesheet" href="../../css/landing.css" />
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

                <title>${data.title}</title>
            </head>
            <body>
                ${header()}
                <div class="super-container landing-super-container">
             
                <main class="articles-container">
                <div class="articles-inner">
                    ${data.content} 
                    </div>
                </main>
                </div>
                <footer>Site Footer</footer>
            </body>
            <script src="../../dist/blog1.js"></script>
            <script src="../../dist/stylos.4c86ac89.js"></script>
            <script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>
        </html>
        
        `;
	}
}

module.exports = Test;
