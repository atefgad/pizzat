import React, { useState, useEffect } from "react";

import {
	Container,
	Wrapper,
	ProductLeft,
	ProductRight,
	ProImg,
	ProTitle,
	ProContent,
	Lable,
	ProSize,
	SizeContainer,
	SizeBtn,
	ProPrice,
	AddButtons,
	ProDesc,
	SQContainer,
	ShareIconsBtn,
	ShareIcons,
	AddToCartBtn,
	AddToFavBtn,
	QntContent,
	QntPlus,
	QntContentNum,
	QntMinus,
} from "./productStyle";
import {
	FaCartPlus,
	FaRegHeart,
	FaShareAlt,
	FaFacebookF,
	FaTwitter,
	FaGoogle,
	FaPlus,
	FaMinus,
} from "react-icons/fa";
import { ADD_TO_CART, PRODUCT } from "../../../redux/actions/actionTypes";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import RelatedProducts from "../../relatedProducts";

const Product = ({ proDetail }) => {
	const { id, image, name, desc, price, category, quantity } = proDetail;
	const [qnt, setqnt] = useState(1);
	const dispatch = useDispatch();

	const { proID } = useParams();
	// const { product } = useSelector((state) => state.ProductsReducer);

	useEffect(() => {
		dispatch({ type: PRODUCT, proID });
		console.log("proID", proID);
	}, [proID]);

	const handleQnt = () => {
		if (qnt <= 1) {
			return setqnt(1);
		}
		setqnt(qnt - 1);
	};

	const handleAddToCart = (product) => {
		// add item product data in (cart shopping) CartReducer
		dispatch({
			type: ADD_TO_CART,
			payload: { product, qnt },
		});
		console.log("add", product);
		console.log("qnt", qnt);
		// inCart(id);
		let x = JSON.stringify(product);
		localStorage.setItem("cartItems", x);
	};
	console.log("proDetail", proDetail);
	return (
		<div>
			<Container>
				<Wrapper>
					<ProductLeft>
						<ProImg src={image} alt={name} />
					</ProductLeft>
					<ProductRight>
						<ProContent>
							<ProTitle>{name}</ProTitle>
							<ProPrice>{price} $</ProPrice>
						</ProContent>

						<ProDesc>
							<p>{desc}</p>
						</ProDesc>
						<SQContainer>
							<ProSize>
								<Lable>Select Size</Lable>
								<SizeContainer>
									<SizeBtn isActive>S</SizeBtn>
									<SizeBtn>M</SizeBtn>
									<SizeBtn>L</SizeBtn>
								</SizeContainer>
							</ProSize>
							<ProSize>
								<Lable>quantity</Lable>
								<SizeContainer>
									<QntContent>
										<QntMinus onClick={() => handleQnt()}>
											<FaMinus />
										</QntMinus>
										<QntContentNum>{qnt}</QntContentNum>
										<QntPlus onClick={() => setqnt(qnt + 1)}>
											<FaPlus />
										</QntPlus>
									</QntContent>
								</SizeContainer>
							</ProSize>
						</SQContainer>
						<AddButtons>
							<AddToCartBtn
								title="add to cart"
								onClick={() =>
									handleAddToCart({
										id,
										image,
										name,
										desc,
										price,
										category,
										quantity,
									})
								}
							>
								<FaCartPlus />
							</AddToCartBtn>
							<AddToFavBtn title="add to favarite">
								<FaRegHeart />
							</AddToFavBtn>
							<ShareIconsBtn>
								<FaShareAlt /> share
								<ShareIcons>
									<li>
										<a href="#!">
											<FaFacebookF />
										</a>
									</li>
									<li>
										<a href="#!">
											<FaTwitter />
										</a>
									</li>
									<li>
										<a href="#!">
											<FaGoogle />
										</a>
									</li>
								</ShareIcons>
							</ShareIconsBtn>
						</AddButtons>
					</ProductRight>
				</Wrapper>
			</Container>
			<RelatedProducts caty={category} />
		</div>
	);
};

export default Product;
