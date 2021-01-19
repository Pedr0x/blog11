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
				<navbar> 
				<a href="/pagination"> Pagination </a>
				</navbar>
					<div class="super-container">
					<div class="landing-super-container">
				<a href="/about">About </a>
				
            <div class="landing-main-container">
                <main class="articles-container">
                <div class="articles-inner">
                    ${data.content} 
                    </div> 
                </div> 
				</main>
				<div class="landing-banner-text-super"> 
					<div class="landing-banner-text"> 
						${data.landingData.mainBannerText}
						</div>
					</div>

                </div>
                </div>
                </body>
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
