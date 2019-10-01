import React from "react";
import ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "configs/theme";
import { Container } from "components/container";
import { GlobalStyle } from "components/global_style";
import SmartComponents from "smart_components";

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Container>
				<Normalize />
				<GlobalStyle />
				<SmartComponents />
			</Container>
		</ThemeProvider>
	);
}

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
