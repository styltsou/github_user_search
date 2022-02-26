import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	width: 15rem;
	height: 15rem;
	grid-row: span 2;
	border-radius: 100%;
	border: 5px solid var(--color-primary);
`;

const Image = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
	border-radius: 100%;
`;

function Avatar({ avatar }) {
	return (
		<Wrapper>
			<Image src={avatar} alt="avatar" />
		</Wrapper>
	);
}

export default Avatar;
