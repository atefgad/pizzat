import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import { RelatedProds, RelatedHeading } from "./relatedProductsStyle";
import RelatedProCard from "./relatedProCard";
import { useSelector } from "react-redux";

const RelatedProducts = ({ caty }) => {
	const { products } = useSelector((state) => state.ProductsReducer);
	const RelatedProductsList = products.filter(
		(product) => product.category === caty
	);

	return (
		<RelatedProds>
			<RelatedHeading>You may also like…</RelatedHeading>

			<Swiper
				spaceBetween={50}
				slidesPerView={5}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{RelatedProductsList.map((product, idx) => {
					return (
						<SwiperSlide key={idx}>
							<RelatedProCard RelatedProducts={product} />
						</SwiperSlide>
					);
				})}

				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
				<SwiperSlide>Slide 6</SwiperSlide>
				<SwiperSlide>Slide 7</SwiperSlide>
				<SwiperSlide>Slide 8</SwiperSlide>
			</Swiper>
		</RelatedProds>
	);
};

export default RelatedProducts;
