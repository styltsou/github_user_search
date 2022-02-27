import React from "react";
import styled from "styled-components";

import Avatar from "./Avatar";
import ProfileInfoContainer from "./ProfileInfoContainer";
import ProfileStats from "./ProfileStats";
import UserDetails from "./UserDetails";

const GridContainer = styled.div`
	width: 100%;
	display: grid;
	background-color: var(--color-card-background);
	border-radius: 1rem;
	padding: 4rem;
	margin-bottom: 2.5rem;
	box-shadow: var(--shadow);
`;

const Bio = styled.p`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	grid-column-start: 2;
	grid-column-end: 3;
	font-size: 1.6rem;
	color: var(--color-text);

	@media only screen and (max-width: 980px) {
		grid-column-start: 1;
		margin: 6rem 0rem 3rem 0rem;
	}
`;

const Wrapper = styled.div`
	grid-column-start: 2;
	grid-column-end: 3;

	@media only screen and (max-width: 980px) {
		grid-column-start: 1;
	}
`;

function ProfileCard({ data }) {
	return (
		<GridContainer>
			<Avatar avatar={data.avatar_url} />
			<ProfileInfoContainer
				avatar={data.avatar_url}
				name={data.name}
				handle={data.login}
				joinedAt={data.created_at}
			/>
			<Bio>{data.bio || "This user has no bio"}</Bio>
			<Wrapper>
				<ProfileStats
					repos={data.public_repos}
					followers={data.followers}
					following={data.following}
				/>
				<UserDetails
					location={data.location}
					twitter={data.twitter_username}
					blogUrl={data.blog}
					company={data.company}
				/>
			</Wrapper>
		</GridContainer>
	);
}

export default ProfileCard;
