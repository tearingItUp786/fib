import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
	background: ${props => props.theme.colors.body};
	height: 100vh;
	width: 100vw;
	outline: none;
	display: flex;
	flex-wrap: wrap;
	position: relative;
	justify-content: center;

	${media.greaterThan("medium")`
    align-items: center;
  `}
`;
