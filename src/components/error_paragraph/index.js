import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
 from {
   opacity: 0;
 }

 to {
   opacity: 1;
 }
`;

export const ErrorParagraph = styled.p`
	position: absolute;
	top: 0;
	opacity: 0;
	left: 0;
	margin: 0;
	color: ${props => props.theme.colors.accent};
	animation: ${fadeIn} 300ms ease-in forwards;
`;
