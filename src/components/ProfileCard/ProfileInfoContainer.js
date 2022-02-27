import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
	display: grid;

	@media only screen and (max-width: 980px) {
		grid-gap: 2.4rem;
	}
`;

const Name = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 3rem;
	font-weight: 600;
	line-height: 100%;
	color: var(--color-text-alt);
	opacity: ${(props) => (props.available ? "1" : "0.5")};
`;

const Handle = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 1.8rem;
	color: var(--color-primary);
`;

const JoinedAt = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	grid-column-start: 2;
	grid-column-end: 3;
	font-size: 1.7rem;
	color: var(--color-text);

	@media only screen and (max-width: 980px) {
		grid-column-start: 1;
		justify-content: flex-start;
	}
`;

function ProfileInfoContainer({ name, handle, joinedAt }) {
	return (
		<GridContainer>
			<Name available={name}>{name || "Name Unavailable"}</Name>
			{joinedAt ? (
				<JoinedAt>Joined {new Date(joinedAt).toDateString().slice(4)}</JoinedAt>
			) : (
				<>{joinedAt}</>
			)}
			<Handle>@{handle}</Handle>
		</GridContainer>
	);
}

export default ProfileInfoContainer;
