import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Loader from "./../Loader";
import RepoCard from "./RepoCard";

const FlexContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	overflow-y: scroll;
	padding-top: 1rem;
`;

const Paragraph = styled.p`
	color: var(--color-text);
	font-size: 2rem;
	padding: 1rem 0;
`;

function Repos({ modalRef, user }) {
	const [data, setData] = useState({ loading: true, repos: [] });

	useEffect(() => {
		setData((prevState) => ({
			...prevState,
			loading: true,
		}));

		const getRepos = async () => {
			const results = await fetch(`https://api.github.com/users/${user}/repos`);

			const data = await results.json();

			setData((prevState) => ({
				loading: !prevState.loading,
				repos: data,
			}));
		};

		getRepos();
	}, [user]);

	return (
		<FlexContainer ref={modalRef}>
			{data.loading ? (
				<Loader />
			) : data.repos.length ? (
				data.repos.map((repo, idx) => <RepoCard key={idx} data={repo} />)
			) : (
				<Paragraph>This user doesn't have any public repos.</Paragraph>
			)}
		</FlexContainer>
	);
}

export default Repos;
