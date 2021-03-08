import React from "react";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import {
	FormContent,
	FormHeading,
	Form,
	FormGroup,
	FormInput,
	FormBtnGroup,
	FormBtn,
	FormForgetPass,
	PassLink,
	FormOtherLinks,
	OtherLinksText,
	OtherLinksSocial,
	SocialUl,
	SocialLi,
	SocialLink,
} from "../../../../components/registrationForm/RegisterFormStyle";
import { SignupForm } from "../registrationStyle";

const Signup = ({ active }) => {
	return (
		<SignupForm active={active}>
			<FormContent>
				<FormHeading>Create a new account</FormHeading>
				<Form>
					<FormGroup col>
						<FormInput type="text" placeholder="First Name" />
						<FormInput type="text" placeholder="Last Name" />
					</FormGroup>
					<FormGroup>
						<FormInput type="text" placeholder="E-mail Address" />
					</FormGroup>
					<FormGroup>
						<FormInput type="password" placeholder="Password" />
					</FormGroup>
					<FormBtnGroup>
						<FormBtn type="submit" width="100%">
							signup
						</FormBtn>
					</FormBtnGroup>
					<FormOtherLinks>
						<OtherLinksText>OR</OtherLinksText>
						<OtherLinksSocial>
							<SocialUl>
								<SocialLi>
									<SocialLink to="/">
										<FaFacebookF />
									</SocialLink>
									<SocialLink to="/">
										<FaTwitter />
									</SocialLink>
									<SocialLink to="/">
										<FaGoogle />
									</SocialLink>
								</SocialLi>
							</SocialUl>
						</OtherLinksSocial>
					</FormOtherLinks>
				</Form>
			</FormContent>
		</SignupForm>
	);
};

export default Signup;
