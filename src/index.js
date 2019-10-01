import React from "react";
import ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "configs/theme";
import { Container } from "components/container";
import { GlobalStyle } from "components/global_style";
import { Logo, LogoContainer } from "components/base_components";
import lion from "assets/logo.svg";
import SmartComponents from "smart_components";
import { AppContainer } from "./components/base_components";

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Container>
				<Normalize />
				<GlobalStyle />
				<AppContainer>
					<LogoContainer>
						<Logo src={lion} alt="Taran 'tearing it up' Logo" />
					</LogoContainer>
					<SmartComponents />
				</AppContainer>
			</Container>
		</ThemeProvider>
	);
}

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
