import React, { useState } from "react";
import { MdRestaurantMenu } from "react-icons/md";
import Navbar from "../navbar";
import {
	IntroContainer,
	IntroContent,
	IntroItems,
	IntroHeading,
	IntroP,
	IntroBtn,
} from "../intro/IntroStyle";
import Sidebar from "../sidebar";

const IntroSection = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div>
			<IntroContainer className="bottom-shape">
				<Navbar toggle={toggle} />
				<Sidebar isOpen={isOpen} toggle={toggle} />
				<IntroContent>
					<IntroItems>
						{/*<IntroHeading>greatest pizza ever</IntroHeading>*/}
						<IntroHeading>PIZZA</IntroHeading>
						{/*<IntroP>ready in 60 seconds</IntroP>*/}
						<IntroP>
							With a more contemporary style, our gourmet pizzas are where the
							creativity of our pizza chefs shines.
						</IntroP>
						<IntroBtn>
							Pleace Order <MdRestaurantMenu size="1.5rem" />
						</IntroBtn>
					</IntroItems>
				</IntroContent>
			</IntroContainer>
		</div>
	);
};

export default IntroSection;
