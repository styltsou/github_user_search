import React from "react";
import styled, { css } from "styled-components";

import { IoSunnySharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	cursor: pointer;
`;

const ThemeTypeWrapper = styled.div`
	text-transform: uppercase;
	color: var(--color-text);
	font-size: 1.4em;
	letter-spacing: 0.2rem;
	margin-right: 1.2rem;
`;

const iconStyles = css`
	color: var(--color-text);
	font-size: 2rem;
`;

const SunIcon = styled(IoSunnySharp)`
	${iconStyles}
`;

const MoonIcon = styled(FaMoon)`
	${iconStyles}
`;

function ThemeToggle({ darkMode, setDarkMode }) {
	const toggleTheme = () => {
		setDarkMode((darkMode) => !darkMode);
	};

	return (
		<Wrapper onClick={toggleTheme}>
			<ThemeTypeWrapper>{darkMode ? "dark" : "light"}</ThemeTypeWrapper>
			{darkMode ? <SunIcon /> : <MoonIcon />}
		</Wrapper>
	);
}

export default ThemeToggle;
