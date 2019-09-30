import React from "react";
import ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";

import { add } from "utils/add";
import { defaultTheme } from "configs/theme";
import { Container } from "components/container";
import { GlobalStyle } from "components/global_style";

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Container>
				<Normalize />
				<GlobalStyle />
				<div>Hello world {add(1, 1)}</div>
			</Container>
		</ThemeProvider>
	);
}

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
