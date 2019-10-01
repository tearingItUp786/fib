import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import media from "styled-media-query";

const StyledParaList = styled.p`
	font-size: 1rem;
	margin-top: 1rem;

	${media.greaterThan("medium")`
    font-size: 1.4rem;
  `}
`;

function ResultsContainer(props) {
	const { sequence, numberWanted } = props;
	if (sequence.length === 0 || numberWanted === 0) {
		return null;
	}
	return <StyledParaList>{sequence.join(" ")}</StyledParaList>;
}

ResultsContainer.propTypes = {
	sequence: PropTypes.array.isRequired,
	numberWanted: PropTypes.number.isRequired,
};

export default ResultsContainer;
