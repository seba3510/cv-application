import {
	StrictMode
} from "react";

//==================================================================

import {
	createRoot
} from "react-dom/client";

//==================================================================

import "./styles/reset.css";

//==================================================================

import {
	App
} from "./App.jsx";

//==================================================================

const root =
	document.querySelector(
		"#root"
	);

//==================================================================

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>,
);