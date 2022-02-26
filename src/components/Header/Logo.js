import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
	color: var(--color-text);
	font-size: 3rem;
	font-weight: 600;
	letter-spacing: 0.4rem;
`;

function Logo() {
	return <LogoWrapper>devfinder</LogoWrapper>;
}

export default Logo;
