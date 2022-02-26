import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const FlexContainer = styled.header`
	width: 100%;
	display: flex;
	flex-diretion: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 15rem;
	margin-bottom: 7rem;
`;

function Header({ darkMode, setDarkMode }) {
	return (
		<FlexContainer>
			<Logo />
			<ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
		</FlexContainer>
	);
}

export default Header;
