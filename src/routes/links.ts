export default function(app: { get: (arg0: string, arg1: (c: any) => Promise<Response>) => void; }) {
// ...
app.get('/links', (c) => {
 
    let playlistData:any;

	/*// Step 1: Get access token
	try {
		const authOptions = {
			method: 'POST',
			headers: {//'Authorization': 'Basic ' + btoa(`${env.cID}:${env.cSECRET}`),
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: `grant_type=client_credentials&client_id=${c.env.cID}&client_secret=${c.env.cSECRET}`
		};

		const authResponse = await fetch('https://accounts.spotify.com/api/token', authOptions);
		const authData: any = await authResponse.json();
		const accessToken = authData.access_token;

		// Step 2: Get playlist information
		const playlistOptions = {
			method: 'GET',
			headers: {'Authorization': `Bearer ${accessToken}`}
		};

		const playlistResponse = await fetch(`https://api.spotify.com/v1/playlists/${c.env.playID}`, playlistOptions);
		playlistData = await playlistResponse.json(); // Assign playlistData here
		console.log('Playlist data:', playlistData);
	} catch (e) {console.error('Error fetching Spotify playlist information:', e);return null;
	} finally {*/

		let additionalButton = '';
		// Get the referer from the request headers
		let referer = c.req.header('Referer')

		// Check if the referer is the base domain
		if (referer && referer.includes('dry.nl.eu.org')) 
			{additionalButton = '<a href="https://dry.nl.eu.org/add" target="_blank" id="btn6">Link Shortener</a>';}
		else {additionalButton = '<a href="https://dry.nl.eu.org/add" target="_blank" id="btn6">Back</a>'}
		return c.html(`
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<link rel="shortcut icon" href="https://i.imgur.com/BqWAAZk.png">
			<title>Link Tree</title>
			<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
			<link href="https://fonts.googleapis.com/css?family=IBM%20Plex%20Sans:600|IBM%20Plex%20Sans:400" rel="stylesheet">
			<link href="https://fonts.googleapis.com/css?family=Manrope:700|Manrope:400" rel="stylesheet">
			<style>
			* {
				box-sizing: border-box;
			}
				:root {
					--color1: #b071ff;
					--color2: #b071ff;
					--primary: hsl(155, 100%, 65%);
					--primaryBg: hsla(155, 100%, 65%, 1%);
					--primaryHi: hsla(155, 100%, 75%, 25%);
					--primaryFg: hsl(155, 100%, 85%);
					--secondary: hsl(156, 51%, 14%);
					--secondaryFg: hsl(156, 51%, 75%);
					--secondaryBg: hsla(156, 51%, 14%, 5%);
					--secondaryHi: hsla(156, 51%, 30%, 50%);

					--text: #fae0e5;
					--background: #0e0205;
					--primaryRT: #eb8098;
					--secondaryRT: #712f3d;
					--accent: #6ea094;
				}
				body {
					font-family: 'IBM Plex Sans', monospace;
                    font-weight: 400;
					display: flex;
					justify-content: center;
					align-items: center;
					height: 100vh;
					margin: 0;
					background-color: var(--background);
					color: var(--text);
				}
				.container {
					display: flex;
					align-items: center;
				}
				h1 {
					text-align: left;
				}
				.playlist-info {
					margin-top: 20px;
					text-align: center;
				}
				@media (min-width: 768px) {
					.container {
					flex-direction: row;
					justify-content: space-between;
					max-width: 800px; /* Adjust as needed */
					}
				}
				.playlist-info > p:nth-child(3) {margin-top: 14;}
				@keyframes ldio-mkz3fiu9tmp {
					0% { opacity: 1 }
					100% { opacity: 0 }
				}
				.ldio-mkz3fiu9tmp div {left: 97px; top: 37px; position: absolute; animation: ldio-mkz3fiu9tmp linear 1.4492753623188404s infinite; background: #ffffff; width: 6px; height: 42px; border-radius: 3px / 3.36px; transform-origin: 3px 63px;} .ldio-mkz3fiu9tmp div:nth-child(1) {transform: rotate(0deg); animation-delay: -1.3526570048309177s; background: #ffffff;} .ldio-mkz3fiu9tmp div:nth-child(2) {transform: rotate(24deg); animation-delay: -1.256038647342995s; background: #ffffff;} .ldio-mkz3fiu9tmp div:nth-child(3) {transform: rotate(48deg); animation-delay: -1.1594202898550723s; background: #ffffff;} .ldio-mkz3fiu9tmp div:nth-child(4) {transform: rotate(72deg); animation-delay: -1.0628019323671496s; background: #ffffff;} .ldio-mkz3fiu9tmp div:nth-child(5) {transform: rotate(96deg); animation-delay: -0.9661835748792269s; background: #ffffff;} .ldio-mkz3fiu9tmp div:nth-child(6) {transform: rotate(120deg); animation-delay: -0.8695652173913042s; background: #ffffff;} .ldio-mkz3fiu9tmp div:nth-child(7) {transform: rotate(144deg); animation-delay: -0.7729468599033815s; background: #ffffff;} .ldio-mkz3fiu9tmp div:nth-child(8) {transform: rotate(168deg); animation-delay: -0.6763285024154588s; background: #ffffff;} .ldio-mkz3fiu9tmp div:nth-child(9) {transform: rotate(192deg); animation-delay: -0.5797101449275361s; background: #ffffff;} .ldio-mkz3fiu9tmp div:nth-child(10) {transform: rotate(216deg); animation-delay: -0.48309178743961345s; background: #ffffff;} .ldio-mkz3fiu9tmp div:nth-child(11) {transform: rotate(240deg); animation-delay: -0.38647342995169076s; background: #ffffff;} .ldio-mkz3fiu9tmp div:nth-child(12) {transform: rotate(264deg); animation-delay: -0.28985507246376807s; background: #ffffff;} .ldio-mkz3fiu9tmp div:nth-child(13) {transform: rotate(288deg); animation-delay: -0.19323671497584538s; background: #ffffff;} .ldio-mkz3fiu9tmp div:nth-child(14) {transform: rotate(312deg); animation-delay: -0.09661835748792269s; background: #ffffff;} .ldio-mkz3fiu9tmp div:nth-child(15) {transform: rotate(336deg); animation-delay: 0s; background: #ffffff;} .ec749m4jmk {width: 200px; height: 200px; display: inline-block; overflow: hidden; background: rgba(NaN, NaN, NaN, 0);} .ldio-mkz3fiu9tmp {width: 100%; height: 100%; position: relative; transform: translateZ(0) scale(1); backface-visibility: hidden; transform-origin: 0 0;} .ldio-mkz3fiu9tmp div { box-sizing: content-box; }
				.loadiv {
					position: fixed;
					z-index: 9999;
					top: 0;
					left: 0;
					height: 100%;
					width: 100%;
					background: #1C1B22;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				@media (max-width: 768px) {
					body {font-size: 16px;}
					.container {
						flex-direction: column; /* Stack elements vertically */
						padding: 0 20px; /* Add some horizontal padding */
					}
					.playlist-info {width: 100%; /* Make playlist info full width */}
				}
				svg {
					position: absolute;
					top: 0;
					left: 0;
					bottom: 0;
					right: 0;
					margin: auto;
					width: 50%; /* Adjust as needed */
					height: 50%; /* Adjust as needed */
					z-index: -1;
					filter: blur(100px);
				}
				.card {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					height: fit-content;
					width: 20rem;
					position: relative;
					margin: 5px;
				}
				a {
					color: inherit;
                    text-decoration: none;
                    padding: 0.8rem 1rem;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 0.6rem;
                    cursor: pointer;
                    transition: all ease 0.3s;
                }
				.card > div {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;
                    padding: 2rem;
                    width: 100%;
					background-color: rgba(60, 60, 60, 0.35);
                }
                .card::before {
                    content: '';

                    background-color: rgba(255,255,255,0.01);
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    backdrop-filter: blur(50px);
                    clip-path: polygon(evenodd,
                        0 0,
                        100% 0,
                        100% 100%,
                        0 100%,
                        0 0, 0.3rem 0.3rem, calc(100% - 0.3rem) 0.3rem, calc(100% - 0.3rem) calc(100% - 0.3rem), 0.3rem calc(100% - 0.3rem), 0.3rem 0.3rem)
                }
                #btn1 {background-color: #a09590; color: var(--background);}
                #btn2 {background-color: #C13584;}
                #btn3 {background-color: rgba(30,215,96,.1);}
                #btn4 {background-color: #1DA1F2;}
                #btn5 {background-color: #2b3137;}
				#btn1:hover, #btn2:hover, #btn3:hover, #btn4:hover, #btn5:hover, #btn6:hover {
					background-color: #5e9184;
					color: white;
				}
				.button {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					text-decoration: none;
					color: inherit;
					cursor: pointer;
					height: 100px;
					width: 160px;
					z-index: 9999;
				}
				button {
					height: 100px;
					width: 115px;
					border: none;
					border-radius: 25px;
					background-color: var(--background);
					box-shadow: 0px -3px 15px 0px var(--primaryRT) inset;
					color: var(--primaryRT);
					font-family: "Manrope";
					font-size: 1rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					transform: translateY(0px);
					transition: all 0.2s ease;
				}
				.button:hover > span {
					opacity: 60%;
				}
				.button:hover > button {
					transform: translateY(5px);
				}
				.button.third > button {
					background-color: var(--secondaryBg);
					box-shadow: 0px -3px 15px 0px var(--secondary) inset;
					color: var(--secondaryFg);
				}
				.button.third > span {
					background-color: var(--secondaryHi);
				}
			</style>
		</head>
		<body>
			<!-- <svg width="585" height="475" viewBox="0 0 585 475" fill="none" xmlns="http://www.w3.org/2000/svg">
				<style>
					/* @keyframes colorChange1 {
						0%, 100% { fill: var(--color1); }
						50% { fill: var(--color2); }
					}
					path {
						animation: colorChange1 8s infinite linear;
					}*/
					path {
						fill: var(--color1);
					}
				</style>
			<path d="M59.6878 70.4072C2.64247 112.7 -16.8108 220.14 15.7866 303.15C34.714 338.439 85.6079 417.473 137.764 451.308C202.958 493.601 346.492 482.305 380.666 392.728C414.841 303.151 608.848 251.138 582.56 142.122C556.271 33.1053 429.562 31.2664 323.621 6.83623C217.68 -17.5939 116.733 28.1141 59.6878 70.4072Z" fill="#B071FF"/>
			</svg> -->
			<div class="loadiv">
				<div class="ec749m4jmk"><div class="ldio-mkz3fiu9tmp">
				<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
				</div></div>
			</div>
			<div class="container">
				<div>
					<h1>Just<br>a<br><span>link</span><span style="color: var(--primaryRT)">tree  </span></h1>
				</div>
				<div class="card"><div>
					<a href="https://driedpampas.ro.eu.org" target="_blank" id="btn1">Personal Website</a>
					<!-- <a href="https://instagram.com/friedpampas" target="_blank" id="btn2">Instagram</a> -->
					<a href="https://stats.fm/delusion" target="_blank" id="btn3">stats.fm</a>
					<a href="https://twitter.com/driedpampas" target="_blank" id="btn4">Twitter</a>
					<a href="https://github.com/driedpampas" target="_blank" id="btn5">Github</a>
					${additionalButton}
				<!-- </div></div>
				<button id="load-playlist-button">Load<br>Spotify<br>Playlist</button> -->
			</div>
			<script>
			window.onload = function() {
				setTimeout(function() {
					document.querySelector('.ec749m4jmk').style.display = 'none';
					document.querySelector('.ldio-mkz3fiu9tmp').style.display = 'none';
					document.querySelector('.loadiv').style.display = 'none';
				}, 100);
			}
			</script>
		</body>
		</html>
		`)
	//}
})}