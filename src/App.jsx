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
	FormControl
} from "./components/organisms/FormControl.jsx";

//================================================================

import {
	Section
} from "./components/organisms/Section.jsx";

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

	function displayGeneralInfo() {

		return (
			<Section className={"generalInfo"}>

				<h1>General Info</h1>

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
					labelText={"Phone Number"}
					value={form.phoneNumber}
					onChange={handleInputChange}
				/>
			</Section>

		);

	} // displayGeneralInfo()

	//==================================================================


	return (

		<aside>
			<Form onSubmit={submitForm}>

				{displayGeneralInfo()}

			</Form>
		</aside>

	);

} // App()

//==================================================================

export { App };