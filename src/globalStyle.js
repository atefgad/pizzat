import { createGlobalStyle } from "styled-components";

import TopBg from "./assets/images/top-bg.png";
// import Tiza_ttf from "./assets/fonts/Tiza.ttf";
// import Tiza_woff from "./assets/fonts/Tiza.woff";
// import Tiza_woff2 from "./assets/fonts/Tiza.woff2";

export const GlobalStyle = createGlobalStyle`

// @font-face {
//     font-family: 'Tiza';
//     src: url(Tiza_woff2) format('woff2'),
//         url(Tiza_woff) format('woff'),
//         url(Tiza_ttf) format('truetype');
//     font-weight: normal;
//     font-style: normal;
//     font-display: swap;
// }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }

    h1,h2,h3,h4,h5{
        font-family: 'Potta One', cursive;
        font-wight: 400;
    }

    a{transition: .3s;text-decoration: none;}
    a[title]{position: relative}
    a[title]::after {
		content: attr(title);
		visibility: hidden;
		position: absolute;
		top: 60%;
		left: 0;
		margin-top: 10px;
		padding: 0.3rem 0.7rem;
		font-size: 1rem;
		font-weight: 400;
		white-space: nowrap;
		color: #666666;
		border-radius: 50px;
		background-color: #fff;
		box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1),
			0 5px 15px rgba(0, 0, 0, 0.07);
		pointer-events: none;
		user-select: none;
		opacity: 0;
		z-index: 9999;
		transition: all 0.2s ease-in-out;
	}
	a[title]:hover::after {
		top: 80%;
		opacity: 0.9;
		visibility: visible;
	}

    button {
        border: none;
        outline: none;
    }

    input, select, textarea {
        border: none;
        vertical-align: baseline;
        font-size: 100%;
        transition: all 0.25s ease;
    }

    input[type="text"]:focus, input[type="email"]:focus, input[type="url"]:focus, input[type="password"]:focus, input[type="search"]:focus {
        outline: none;
    }

    .top-shape {
        padding-top: 5rem;
        position: relative;
        &::before {
            content: "";
            background-image: url(${TopBg});
            position: absolute;
            left: 0;
            transform: rotate(-180deg);
            top: -5px;
            height: 150px;
            width: 100%;
            z-index: 1;
        }
    }
    .bottom-shape {
        position: relative;
        padding-bottom: 5rem;
        &::after {
            content: "";
            background-image: url(${TopBg});
            position: absolute;
            left: 0;
            bottom: -5px;
            height: 150px;
            width: 100%;
            z-index: 1;
        }
    }
    .fullPageContent{
        min-height: 500px;
        padding: 5rem 0;
    }

`;
