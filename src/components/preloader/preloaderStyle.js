import styled from "styled-components";
import PerloaderImg from "../../assets/images/loader.gif";

export const PerloaderContent = styled.div`
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	z-index: 9999;
	background: url(${PerloaderImg}) center no-repeat #fff;
`;

export const PerloaderLabel = styled.label`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	margin-top: 50px;
	font-size: 16px;
	color: #1d1d1d;
	letter-spacing: 1px;
`;
