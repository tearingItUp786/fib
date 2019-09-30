import React from "react";
import ReactDOM from "react-dom";

import { add } from "utils/add";

function App() {
	return <div>Hello World {add(2, 3)}</div>;
}

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
