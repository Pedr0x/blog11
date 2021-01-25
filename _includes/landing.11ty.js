const navbar = require("../components/navbar");
const footer = require("../components/footer");
const htmlHead = require("../constants/htmlHead");
const scripts = require("../constants/scripts");

class Test {
	constructor() {}
	render(data) {
		return ` 
		<!DOCTYPE html>
		<html lang="en">
			<head>
				${htmlHead}
				<link rel="stylesheet" href="../../css/landing.css" />
				<link rel="stylesheet" href="../../css/landing-mobile.css" />

				
				
					 <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>   
			
				<title>${data.title}</title>
			</head>
			<body>
				<div class="super-container">
					<div class="landing-super-container">
						
					</div>
						<div class="landing-main-container">
							${navbar}
							
							<div class="landing-side-content-super"> 
								<div class="landing-side-content depth2"> 
									<h4 class="landing-side-content-title">
										Lorem ipsum
									</h4>
									<p> 
										${data.landingData.sideContent}
									</p>
								</div>
							</div>

							<main class="articles-container">
								<div class="articles-inner">${data.content}</div>
							</main>
							<div class="landing-img-container grid-center">
						<img class="landing-img depth1" src="../../uploads/mountains.jpg">
						</div>
						</div>
						<div class="landing-banner-text-super">
							<div class="landing-banner-text depth3">
								${data.landingData.mainBannerText}
							</div>
						</div>
						${footer}

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
${scripts}
			</html>
				`;
	}
}

module.exports = Test;
