import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import {
	SidebarContainer,
	SidebarIcon,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRout,
	CloseIcon,
} from "./sidebarStyle";
import SocialIconsList from "../footer/SocialIcons";

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<SidebarIcon onClick={toggle}>
				<CloseIcon />
			</SidebarIcon>
			<SidebarMenu>
				<SidebarLink to="/">pizza</SidebarLink>
				<SidebarLink to="/">desserts</SidebarLink>
				<SidebarLink to="/shop">Full Menu</SidebarLink>
				<SidebarLink to="/">snacks</SidebarLink>
			</SidebarMenu>
			<SideBtnWrap>
				<SidebarRout to="/shop">
					<FaPaperPlane /> order now
				</SidebarRout>
			</SideBtnWrap>

			<SocialIconsList />
		</SidebarContainer>
	);
};

export default Sidebar;
