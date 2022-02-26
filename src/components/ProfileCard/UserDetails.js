import React from "react";
import styled, { css } from "styled-components";

import { MdLocationOn } from "react-icons/md";
import { FiLink } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-row: auto auto;
	grid-gap: 3rem;
	align-items: normal;
`;

const DetailWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	color: var(--color-text);
	opacity: ${(props) => (props.available ? 1 : 0.5)};
`;

const iconStyle = css`
	font-size: 2rem;
	margin-right: 1rem;
`;

const LocationIcon = styled(MdLocationOn)`
	${iconStyle}
`;

const LinkIcon = styled(FiLink)`
	${iconStyle}
`;

const TwitterIcon = styled(FaTwitter)`
	${iconStyle}
`;

const BuildingIcon = styled(BsBuilding)`
	${iconStyle}
`;

const DetailText = styled.p`
	font-size: 1.6rem;
	color: inherit;
`;

function UserDetails({ location, twitter, blogUrl, company }) {
	return (
		<GridContainer>
			<DetailWrapper available={location}>
				<LocationIcon />
				<DetailText>{location || "Not Available"}</DetailText>
			</DetailWrapper>
			<DetailWrapper available={twitter}>
				<TwitterIcon />
				<DetailText>{twitter || "Not Available"}</DetailText>
			</DetailWrapper>
			<DetailWrapper available={blogUrl}>
				<LinkIcon />
				<DetailText>{blogUrl || "Not Available"}</DetailText>
			</DetailWrapper>
			<DetailWrapper available={company}>
				<BuildingIcon />
				<DetailText>{company || "Not Available"}</DetailText>
			</DetailWrapper>
		</GridContainer>
	);
}

export default UserDetails;
