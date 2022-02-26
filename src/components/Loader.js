import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
	width: 8rem;
	height: 8rem;
	position: relative;
`;

const bigCircleAnimation = keyframes`
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
`;

const smallCircleAnimation = keyframes`
  0% {transform: rotate(0deg)}
  100% {transform: rotate(-360deg)}
`;

const BigCircle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position:absolute;
	width: 100%;
	height: 100%;
  border 5px solid var(--color-primary);
	border-radius: 50%;
	border-color: var(--color-primary) transparent var(--color-primary)
		var(--color-primary);
  animation: ${bigCircleAnimation} 1.2s linear infinite;
`;

const SmallCircle = styled.div`
	position: absolute;
	width: 4rem;
	height: 4rem;
	top: 25%;
	left: 25%;
	border: 5px solid var(--color-primary);
	border-radius: 50%;
	border-color: var(--color-primary) var(--color-primary) transparent
		var(--color-primary);
	animation: ${smallCircleAnimation} 1.2s linear infinite;
`;

function Loader() {
	return (
		<Wrapper>
			<BigCircle></BigCircle>
			<SmallCircle></SmallCircle>
		</Wrapper>
	);
}

export default Loader;
