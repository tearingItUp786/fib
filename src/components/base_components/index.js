import styled from "styled-components";
import { arrToFontString } from "utils/helpers";
import media from "styled-media-query";

export const Button = styled.button`
	padding: 1rem 2rem;
	transition: background-color 300ms ease-in-out;
	background-color: ${props =>
		!props.canPress ? props.theme.colors.textLighter : props.theme.colors.text};
	border-radius: 5px;
	cursor: pointer;
	pointer-events: ${props => (!props.canPress ? "none" : "")};
	outline: none;
	border: none;
	margin-top: 1rem;
	color: ${props => props.theme.colors.body};
	font-family: ${props =>
		props.theme.fontFamily.display.reduce(arrToFontString)};

	&:hover {
		background-color: ${props => props.theme.colors.accent};
	}
`;

export const Label = styled.label`
	font-size: 1.5rem;
	transition: color 300ms ease;
	color: ${props =>
		props.error ? props.theme.colors.textLighter : props.theme.colors.text};
	${media.greaterThan("medium")`
    font-size: 2rem;
  `};
`;

export const Input = styled.input`
	font-size: 1rem;
	width: 100%;
	border: solid 1px ${props => props.theme.colors.textLighter};
	padding: 1rem;
	border-radius: 5px;
	margin-top: 1rem;
`;
