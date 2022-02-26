import React, { useState, useRef } from "react";
import styled from "styled-components";

import Modal from "./Modal/Modal";
import Followers from "./Followers/Followers";
import Repos from "./Repos/Repos";

const FlexContainer = styled.div`
	dispaly: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	align-self: flex-start;
`;

const Button = styled.button`
	color: var(--color-primary);
	background-color: transparent;
	padding: 0.8rem 1.5rem;
	border: 2px solid var(--color-primary);
	border-radius: 1rem;
	font-size: 1.5rem;
	transition: all 0.1s ease-in;

	&:hover {
		color: #fff;
		background-color: var(--color-primary);
	}

	&:not(:last-child) {
		margin-right: 2rem;
	}
`;

function ButtonsModal({ user }) {
	const [isOpen, setIsOpen] = useState(false);
	const [modalId, setModalId] = useState("repos");

	// Reference to the modal's child containig the
	// list with all the followers/repos
	const modalRef = useRef();

	const handleClick = (e) => {
		setIsOpen((prevState) => !prevState);
		setModalId(e.target.id);
		// Scroll followers/repos list to top every time the modal opens
		modalRef.current.scrollTo(0, 0);
	};

	return (
		<>
			<FlexContainer>
				<Button id="repos" onClick={handleClick}>
					Repos
				</Button>
				<Button id="followers" onClick={handleClick}>
					Followers
				</Button>
				<Button id="following" onClick={handleClick}>
					Following
				</Button>
			</FlexContainer>
			<Modal
				modalRef={modalRef}
				title={modalId}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			>
				{modalId === "repos" ? (
					<Repos user={user} />
				) : (
					<Followers modalRef={modalRef} user={user} resource={modalId} />
				)}
			</Modal>
		</>
	);
}

export default ButtonsModal;
