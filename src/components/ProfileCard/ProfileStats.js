import React from "react";
import styled from "styled-components";

const FlexContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	border-radius: 1rem;
	margin-bottom: 4.5rem;
	padding: 2.8rem 0rem;
	background-color: var(--color-background);
`;

const StatWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

const StatName = styled.div`
	color: var(--color-text);
	margin-bottom: 1.5rem;
	font-size: 1.5rem;
`;

const StatValue = styled.div`
	color: var(--color-text-alt);
	font-size: 2.5rem;
	font-weight: 600;
	line-height: 100%;
`;

function ProfileStats({ repos, followers, following }) {
	return (
		<FlexContainer>
			<StatWrapper>
				<StatName>Repos</StatName>
				<StatValue>{repos || "0"}</StatValue>
			</StatWrapper>
			<StatWrapper>
				<StatName>Followers</StatName>
				<StatValue>{followers || "0"}</StatValue>
			</StatWrapper>
			<StatWrapper>
				<StatName>Following</StatName>
				<StatValue>{following || "0"}</StatValue>
			</StatWrapper>
		</FlexContainer>
	);
}

export default ProfileStats;
