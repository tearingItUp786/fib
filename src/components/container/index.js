import styled from "styled-components";

export const Container = styled.div`
	background: ${props => props.theme.colors.body};
	height: 100vh;
	width: 100vw;
	align-items: center;
	justify-content: center;
	outline: none;
	display: flex;
	flex-wrap: wrap;
	position: relative;
`;
