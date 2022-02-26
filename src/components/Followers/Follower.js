import React from "react";
import styled from "styled-components";

const FlexContainer = styled.a`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	max-width: 40rem;
	background-color: var(--color-card-background);
	padding: 2rem 2.5rem;
	border-radius: 1rem;
	margin-bottom: 4rem;
	box-shadow: var(--shadow);
	transition: all 0.1s ease-in;

	:hover {
		transform: translateY(-0.3rem);
	}
`;

const Avatar = styled.img`
	height: 7rem;
	width: 7rem;
	object-fit: cover;
	border-radius: 100%;
	margin-right: 2.5rem;
	border: 2px solid var(--color-primary);
	border-radius: 100%;
`;

const Handle = styled.h6`
	color: var(--color-primary);
	font-size: 1.6rem;
`;

function Follower({ data }) {
	return (
		<FlexContainer href={data.html_url} target="_blank">
			<Avatar src={data.avatar_url} alt={data.login} />
			<Handle>@{data.login}</Handle>
		</FlexContainer>
	);
}

export default Follower;
