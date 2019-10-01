import React, { useState } from "react";
import PropTypes from "prop-types";
import { Label, Input, Button } from "components/base_components";
import { ErrorParagraph } from "../components/error_paragraph";
import { noop } from "rxjs";

const onEnter = cb => evt => {
	if (evt.key === "Enter") {
		cb(evt);
	}
};

function InputContainer(props) {
	const [val, setVal] = useState("");
	const [error, setError] = useState(false);
	const { onButtonPress } = props;

	const updateFun = () => {
		if (val == "" || val === "0") {
			return;
		}
		onButtonPress(val);
	};
	const inputEnterPress = onEnter(updateFun);

	const errorPara = error ? (
		<ErrorParagraph>
			*Please limit yourself to valid characters (positive whole numbers
			only)... 0 is not allowed
		</ErrorParagraph>
	) : null;

	return (
		<>
			{errorPara}
			<Label htmlFor="n">What number do you want from the fib sequence?</Label>
			<Input
				type="text"
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
};

export default InputContainer;
