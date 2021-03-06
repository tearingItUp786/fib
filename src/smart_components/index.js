import React, { useReducer } from "react";
import styled from "styled-components";
import InputContainer from "./InputContainer";
import ResultsContainer from "./ResultContainer";
import { fibOutputArray } from "../utils/fib";
import media from "styled-media-query";

const initialState = {
	number: 0,
	sequence: [],
	hasError: false,
	errorInfo: "",
};

// unlike redux the default case here should be to throw an error
// we update the state entirely if we get the update action type
// if we want to add new action types if state changes for new requirments
// we can easily do this.
function reducer(state, { type, number }) {
	switch (type) {
		case "update": {
			try {
				const sequence = fibOutputArray(number);
				return {
					...state,
					number,
					sequence,
					hasError: false,
				};
			} catch (error) {
				return {
					...state,
					hasError: true,
					errorInfo: error,
				};
			}
		}
		default: {
			throw new Error(`Unsupported type: ${type}`);
		}
	}
}

const SmartContainer = styled.div`
	width: 768px;
	max-width: 90vw;
	position: relative;
	padding-top: 4rem;
	max-height: 60vh;
	overflow-y: scroll;

	${media.greaterThan("medium")`
    padding-top: 2rem;
  `}
`;

function SmartComponents() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const updateFibNumber = number =>
		dispatch({ type: "update", number: Number(number) });
	return (
		<SmartContainer>
			<InputContainer
				onButtonPress={updateFibNumber}
				num={state.number}
				hasError={state.hasError}
				errorInfo={state.errorInfo}
			/>
			<ResultsContainer numberWanted={state.number} sequence={state.sequence} />
		</SmartContainer>
	);
}

export default SmartComponents;
