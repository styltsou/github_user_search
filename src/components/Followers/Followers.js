import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Loader from "./../Loader";
import Follower from "./Follower";

const FlexContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	overflow-y: scroll;
`;

const Paragraph = styled.p`
	color: var(--color-text);
	font-size: 2rem;
	padding: 1rem 0;
`;

function Followers({ modalRef, user, resource }) {
	const [data, setData] = useState({ loading: true, followers: [] });

	useEffect(() => {
		setData((prevState) => ({
			...prevState,
			loading: true,
		}));

		const getFollowers = async () => {
			const results = await fetch(
				`https://api.github.com/users/${user}/${resource}`
			);

			const data = await results.json();

			setData((prevState) => ({
				loading: !prevState.loading,
				followers: data,
			}));
		};

		getFollowers();
	}, [user, resource]);

	return (
		<FlexContainer ref={modalRef}>
			{data.loading ? (
				<Loader />
			) : data.followers.length ? (
				data.followers.map((follower, idx) => (
					<Follower key={idx} data={follower} />
				))
			) : (
				<Paragraph>
					{resource === "followers"
						? "This user doesn't have any followers."
						: "This user doesn't follow any github accounts."}
				</Paragraph>
			)}
		</FlexContainer>
	);
}

export default Followers;
