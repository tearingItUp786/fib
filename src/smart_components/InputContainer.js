import React, { useState } from "react";
import PropTypes from "prop-types";
import { Label, Input, Button } from "components/base_components";
import { ErrorParagraph } from "../components/error_paragraph";
import { noop } from "utils/helpers";

const onEnter = cb => evt => {
	if (evt.key === "Enter") {
		cb(evt);
	}
};

function InputContainer(props) {
	const [val, setVal] = useState("");
	const [error, setError] = useState(false);
	const { onButtonPress, hasError, errorInfo, num } = props;

	const updateFun = () => {
		if (val == "" || val === "0") {
			return;
		}
		onButtonPress(val);
	};
	const inputEnterPress = onEnter(updateFun);
	const errorExists = error || hasError;
	let resMess =
		num > 0 && !errorExists ? (
			<ErrorParagraph key={num}>{`Showing results for ${num}`}</ErrorParagraph>
		) : null;

	let errorMess = null;
	if (errorExists) {
		const message = hasError
			? `Looks like something went wrong... ${errorInfo}`
			: `*Please limit yourself to valid characters (positive whole numbers
      only)... 0 is not allowed`;
		errorMess = <ErrorParagraph>{message}</ErrorParagraph>;
	}

	return (
		<>
			{resMess}
			{errorMess}
			<Label htmlFor="n">
				What sequence of numbers do you want to see from the fibonnaci sequence?
			</Label>
			<Input
				type="search"
				pattern="[0-9]*"
				name="n"
				placeholder="1"
				onKeyUp={inputEnterPress}
				onChange={evt => {
					const { value, validity } = evt.target;
					// early return if the value is invalid
					if (!validity.valid || (value === "0" && val == "")) {
						setError(true);
						return;
					}
					setError(false);
					setVal(value);
				}}
				value={val}
			/>
			<Button canPress={Boolean(val)} onClick={error ? noop : updateFun}>
				Generate Sequence!
			</Button>
		</>
	);
}

InputContainer.propTypes = {
	onButtonPress: PropTypes.func.isRequired,
	num: PropTypes.number,
	hasError: PropTypes.bool,
	errorInfo: PropTypes.any,
};

export default InputContainer;
