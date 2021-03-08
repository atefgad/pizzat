import styled from "styled-components";

export const CardItem = styled.div`
	padding: 20px 30px;
	height: 170px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row-reverse;
	border-bottom: 1px solid #e1e8ee;
	&:last-child {
		border-bottom: none;
	}
	/* Responsive */
	@media (max-width: 768px) {
		height: auto;
		justify-content: center;
	}
`;

/* Buttons -  Delete and Like */
export const CardButtons = styled.div`
	text-align: center;
	width: 15%;
	/* Responsive */
	@media (max-width: 768px) {
		margin-left: 20px;
	}
`;
export const DeleteBtn = styled.span`
	display: inline-block;
	cursor: pointer;
	margin-right: 20px;
	font-size: 18px;
	line-height: 18px;
	color: #8c959c;
	transition: 0.3s;
	&:hover {
		color: #e31837;
	}
	/* Responsive */
	@media (max-width: 768px) {
		margin-right: 5px;
	}
`;

/* card image */
export const CardImg = styled.div`
	width: 20%;
	height: 100%;
	/* Responsive */
	@media (max-width: 800px) {
		width: 100px;
		text-align: center;
	}
	img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		border: 5px solid #e1e8ee;
	}
`;

/* card descraption */
export const CardDescription = styled.div`
	text-align: center;
	width: 20%;
	a span {
		display: block;
		font-size: 16px;
		color: #000 !important;
		font-weight: 400 !important;
	}
	span:last-child {
		margin-left: 5px;
		font-weight: 300;
		margin-top: 8px;
		color: #86939e;
	}
	/* Responsive */
	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const Price = { ...CardDescription };
