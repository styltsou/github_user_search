import React from "react";
import styled from "styled-components";

const FlexContainer = styled.a`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
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
const RepoName = styled.h6`
	color: var(--color-text-alt);
	font-size: 1.8rem;
	margin-bottom: 1rem;
`;

const Description = styled.p`
	color: var(--color-text);
	font-size: 1.5rem;
`;

function RepoCard({ data }) {
	return (
		<FlexContainer href={data.html_url} target="_blank">
			<RepoName>{data.name}</RepoName>
			<Description>
				{data.description || "No description available"}
			</Description>
		</FlexContainer>
	);
}

export default RepoCard;
