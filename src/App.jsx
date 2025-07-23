import "./styles/App.css";

//================================================================

import {
	useState
} from "react";

//================================================================

import {
	Form
} from "./components/organisms/Form.jsx";

//================================================================

import {
	Container
} from "./components/molecules/Container.jsx";

//================================================================

import {
	Input
} from "./components/atoms/Input.jsx";

//================================================================

import {
	Label
} from "./components/atoms/Label.jsx";

//================================================================

import {
	FormControl
} from "./components/organisms/FormControl.jsx";

//================================================================

function App() {

	const [
		form,
		setForm
	] = useState(
		{
			id: crypto.randomUUID(),
			fullName: "",
			email: "",
			phoneNumber: "",
			school: "",
			major: "",
			date: "",
			company: "",
			position: "",
			responsibilities: "",
			startDate: "",
			endDate: ""
		});

	//================================================================

	function handleInputChange(event) {

		const formControl =
			event.target.name;

		const inputValue =
			event.target
				.value;

		console.log(
			inputValue
		);

		setForm({
			...form,
			[formControl]: inputValue
		});


	} // handleInputChange()

	//================================================================

	function submitForm(event) {

		return;

	} // submitForm()

	//==================================================================

	return (

		<>
			<aside>
				<Form onSubmit={submitForm}>
					<FormControl
						type={"text"}
						id={"fullName"}
						name={"fullName"}
						labelText={"Full Name"}
						value={form.fullName}
						onChange={handleInputChange}
					/>

					<FormControl
						type={"email"}
						id={"email"}
						name={"email"}
						labelText={"Email"}
						value={form.email}
						onChange={handleInputChange}
					/>

					<FormControl
						type={"tel"}
						id={"phoneNumber"}
						name={"phoneNumber"}
						labelText={"phoneNumber"}
						value={form.phoneNumber}
						onChange={handleInputChange}
					/>


				</Form>
			</aside>
		</>

	);

} // App()

//==================================================================

export { App };