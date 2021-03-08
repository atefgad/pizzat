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
import { SignInForm } from "../registrationStyle";

const Signin = ({ active }) => {
	return (
		<SignInForm active={active}>
			<FormContent>
				<FormHeading>Log in your account</FormHeading>
				<Form>
					<FormGroup>
						<FormInput type="text" placeholder="E-mail Address" />
					</FormGroup>
					<FormGroup>
						<FormInput type="password" placeholder="Password" />
					</FormGroup>
					<FormBtnGroup>
						<FormBtn type="submit">log in</FormBtn>
						<FormForgetPass>
							Forget password?{" "}
							<PassLink to="/forgetPassword"> click here</PassLink>
						</FormForgetPass>
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
		</SignInForm>
	);
};

export default Signin;
