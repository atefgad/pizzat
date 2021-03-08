import React, { useState } from "react";
import {
	RegisterContainer,
	RegisterRow,
	SwitcherWrapper,
	SwitcherBtn,
	SwitcherSpan,
} from "./registrationStyle";
import Signin from "./signin";
import Signup from "./signup";

// const variants = {
// 	hidden: { opacity: 0, y: "-100vw" },
// 	visible: { opacity: 1, transition: { duration: 3 } },
// };

const Registration = () => {
	const [active, setActive] = useState(1);

	const toggle = (index) => {
		if (active === index) {
			return setActive(index);
		}
		setActive(index);
	};

	return (
		<RegisterContainer
			animate={{ y: 0, scale: 1, opacity: 1 }}
			initial={{ scale: 0, opacity: 0.2 }}
			transition={{ delay: 0.5, duration: 0.3, type: "spring", stiffness: 200 }}
		>
			<SwitcherWrapper>
				<SwitcherBtn
					onClick={() => toggle(1)}
					active={active === 1 ? true : false}
				>
					Log In
				</SwitcherBtn>
				<SwitcherSpan>or</SwitcherSpan>
				<SwitcherBtn
					onClick={() => toggle(2)}
					active={active === 2 ? true : false}
				>
					Sign Up
				</SwitcherBtn>
			</SwitcherWrapper>
			<RegisterRow>
				<Signin active={active === 1 ? true : false} />
				<Signup active={active === 2 ? true : false} />
			</RegisterRow>
		</RegisterContainer>
	);
};
export default Registration;
