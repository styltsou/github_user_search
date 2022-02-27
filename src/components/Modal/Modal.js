import React, { cloneElement } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

const Backdrop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) =>
		props.isOpen ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0)"};
	z-index: 100;
	visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
	transition: all 0.1s ease-out;
	overflow: hidden;
`;

const ModalBox = styled.div`
	transform: ${(props) => (props.isOpen ? "translateY(0)" : "translateY(15%)")};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding: 1rem;
	background-color: var(--color-background);
	border-radius: 1rem;
	width: 85rem;
	height: 85rem;
	border-radius: 1rem;
	z-index: 120;
	opaity: ${(props) => (props.isOpen ? "1" : "0")};
	visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
	transition: all 0.1s ease-out;
`;

const CloseIcon = styled(IoClose)`
	position: fixed;
	align-self: flex-end;
	padding: 0.5rem;
	font-size: 4.5rem;
	color: var(--color-text-alt);
	line-height: 100%;
`;

const Title = styled.h1`
	color: var(--color-text-alt);
	font-size: 3.2rem;
	padding: 4rem 0 4rem 0;
	background-color: var(--color-card-bakground);
	text-transform: uppercase;
	letter-spacing: 0.2rem;
`;

function Modal({ modalRef, title, isOpen, setIsOpen, children }) {
	const closeModal = () => {
		setIsOpen((prevState) => !prevState);
	};

	/* onClick event on modal box prevents modal form from closing
		due to event bubbling when clicking on it */
	return (
		<Backdrop isOpen={isOpen} onClick={closeModal}>
			<ModalBox isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
				<CloseIcon onClick={closeModal} />
				<Title>{title}</Title>
				{cloneElement(children, { modalRef: modalRef })}
			</ModalBox>
		</Backdrop>
	);
}

export default Modal;
